import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import { collection, addDoc, deleteDoc, doc, updateDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import NewsForm from '../components/admin/NewsForm';
import NewsList from '../components/admin/NewsList';

const AdminNews = () => {
  const [news, setNews] = useState([]);
  const [isAddingNews, setIsAddingNews] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [formData, setFormData] = useState({
    date: '',
    title: '',
    description: ''
  });

  useEffect(() => {
    const q = query(collection(db, 'news'), orderBy('date', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNews(newsData);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editingNews) {
        await updateDoc(doc(db, 'news', editingNews.id), formData);
        toast.success('Новость успешно обновлена!');
      } else {
        await addDoc(collection(db, 'news'), formData);
        toast.success('Новость успешно добавлена!');
      }
      
      setFormData({ date: '', title: '', description: '' });
      setIsAddingNews(false);
      setEditingNews(null);
    } catch (error) {
      toast.error('Произошла ошибка при сохранении новости');
      console.error('Error:', error);
    }
  };

  const handleEdit = (newsItem) => {
    setEditingNews(newsItem);
    setFormData(newsItem);
    setIsAddingNews(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'news', id));
      setShowDeleteConfirm(null);
      toast.success('Новость успешно удалена!');
    } catch (error) {
      toast.error('Произошла ошибка при удалении новости');
      console.error('Error:', error);
    }
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