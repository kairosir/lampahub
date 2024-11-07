import React from 'react';
import { motion } from 'framer-motion';
import { Pencil, Trash2 } from 'lucide-react';

const NewsList = ({ news, onEdit, onDelete, setShowDeleteConfirm }) => {
  return (
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
              onClick={() => onEdit(item)}
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
        </motion.div>
      ))}
    </div>
  );
};

export default NewsList;