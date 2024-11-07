import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Trash2, Plus } from 'lucide-react';
import InputMask from 'react-input-mask';
import { toast } from 'sonner';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
      <div className="container mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold mb-6">
            {editingNews ? 'Редактировать новость' : 'Добавить новость'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium">Дата</label>
              <InputMask
                mask="99/99/9999"
                value={formData.date}
                onChange={handleInputChange}
                name="date"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                required
                placeholder="дд/мм/гггг"
              >
                {(inputProps) => <motion.input {...inputProps} whileFocus={{ scale: 1.01 }} />}
              </InputMask>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Название</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium">Описание</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={4}
                required
              />
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:bg-opacity-90"
              >
                {editingNews ? 'Сохранить изменения' : 'Добавить новость'}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={() => {
                  setIsAddingNews(false);
                  setEditingNews(null);
                  setFormData({ date: '', title: '', description: '' });
                }}
                className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300"
              >
                Отмена
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
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

      <div className="space-y-4">
        {news.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-lg flex justify-between items-start"
          >
            <div className="flex-1">
              <div className="text-sm text-primary mb-2">{item.date}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            
            <div className="flex gap-4 ml-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleEdit(item)}
                className="text-blue-500 hover:text-blue-700"
              >
                <Pencil className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowDeleteConfirm(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="w-5 h-5" />
              </motion.button>
            </div>

            {showDeleteConfirm === item.id && (
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
                      onClick={() => handleDelete(item.id)}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AdminNews;