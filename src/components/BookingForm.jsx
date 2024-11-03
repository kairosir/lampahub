import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Users, UserRound } from 'lucide-react';
import { sendTelegramNotification } from '../utils/telegram';

const BookingForm = () => {
  const handleAgeGroupSelect = (ageGroup) => {
    window.location.href = `https://forms.gle/yXyYNJCnuGks6cSQA?entry.ageGroup=${ageGroup}`;
    sendTelegramNotification(`Новая заявка на запись: ${ageGroup}`);
    toast.success('Перенаправляем на форму записи...');
  };

  return (
    <section id="booking" className="section bg-gradient-to-br from-accent to-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Запись на занятие
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            className="card hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="text-center space-y-6">
              <Users className="w-16 h-16 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Для взрослых</h3>
              <motion.button
                className="btn bg-primary text-white w-full hover:bg-tertiary"
                whileHover={{ scale: 1.02 }}
                onClick={() => handleAgeGroupSelect('adults')}
              >
                Записаться
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            className="card hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="text-center space-y-6">
              <UserRound className="w-16 h-16 mx-auto text-secondary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Для детей</h3>
              <motion.button
                className="btn bg-secondary text-white w-full hover:bg-primary"
                whileHover={{ scale: 1.02 }}
                onClick={() => handleAgeGroupSelect('children')}
              >
                Записаться
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;