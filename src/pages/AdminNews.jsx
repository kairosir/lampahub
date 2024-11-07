import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import NewsForm from '../components/admin/NewsForm';
import NewsList from '../components/admin/NewsList';

const AdminNews = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: "Новый курс по рисованию",
      date: "15/03/2024",
      description: "Открыт набор на новый курс по рисованию для начинающих"
    },
    {
      id: 2,
      title: "Мастер-класс по керамике",
      date: "20/03/2024",
      description: "Приглашаем на увлекательный мастер-класс по керамике"
    },
    {
      id: 3,
      title: "Творческий вечер",
      date: "25/03/2024",
      description: "Музыкальный вечер с живым выступлением"
    }
  ]);

  const [isAddingNews, setIsAddingNews] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    title: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingNews) {
      setNews(prev => prev.map(item => 
        item.id === editingNews.id 
          ? { ...formData, id: item.id }
          : item
      ));
      toast.success('Новость успешно обновлена!');
    } else {
      setNews(prev => [...prev, { ...formData, id: Date.now() }].slice(-5));
      toast.success('Новость успешно добавлена!');
    }
    
    setFormData({ date: '', title: '', description: '' });
    setIsAddingNews(false);
    setEditingNews(null);
  };

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem);
    setFormData(newsItem);
    setIsAddingNews(true);
  };

  const handleDelete = (id) => {
    setNews(prev => prev.filter(item => item.id !== id));
    setShowDeleteConfirm(null);
    toast.success('Новость успешно удалена!');
  };

  if (isAddingNews) {
    return (
      <NewsForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        isEditing={!!editingNews}
        onCancel={() => {
          setIsAddingNews(false);
          setEditingNews(null);
          setFormData({ date: '', title: '', description: '' });
        }}
      />
    );
  }

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Управление новостями</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsAddingNews(true)}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
        >
          <Plus className="w-5 h-5" />
          Добавить
        </motion.button>
      </div>

      <NewsList
        news={news}
        onEdit={handleEdit}
        onDelete={handleDelete}
        setShowDeleteConfirm={setShowDeleteConfirm}
      />

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 rounded-xl max-w-md w-full mx-4"
          >
            <h3 className="text-xl font-semibold mb-4">Подтверждение удаления</h3>
            <p className="mb-6">Вы уверены, что хотите удалить эту новость?</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleDelete(showDeleteConfirm)}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              >
                Удалить
              </button>
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="flex-1 bg-gray-200 py-2 rounded-lg hover:bg-gray-300"
              >
                Отмена
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminNews;