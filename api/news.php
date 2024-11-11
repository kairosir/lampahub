<?php
require_once 'config.php';

header('Content-Type: application/json');

switch($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $stmt = $pdo->query('SELECT * FROM news ORDER BY date DESC');
        echo json_encode($stmt->fetchAll());
        break;
        
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $pdo->prepare('INSERT INTO news (date, title, description) VALUES (?, ?, ?)');
        $stmt->execute([$data['date'], $data['title'], $data['description']]);
        echo json_encode(['id' => $pdo->lastInsertId()]);
        break;
        
    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $pdo->prepare('UPDATE news SET date = ?, title = ?, description = ? WHERE id = ?');
        $stmt->execute([$data['date'], $data['title'], $data['description'], $data['id']]);
        echo json_encode(['success' => true]);
        break;
        
    case 'DELETE':
        $id = $_GET['id'];
        $stmt = $pdo->prepare('DELETE FROM news WHERE id = ?');
        $stmt->execute([$id]);
        echo json_encode(['success' => true]);
        break;
}
?>