import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: "Новый курс по рисованию",
      date: "15 марта",
      description: "Открыт набор на новый курс по рисованию для начинающих"
    },
    {
      title: "Мастер-класс по керамике",
      date: "20 марта",
      description: "Приглашаем на увлекательный мастер-класс по керамике"
    },
    {
      title: "Творческий вечер",
      date: "25 марта",
      description: "Музыкальный вечер с живым выступлением"
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-lightblue to-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <Newspaper className="w-16 h-16 mx-auto text-primary animate-float" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Новости</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                className="card bg-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-sm text-primary mb-2">{item.date}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default News;