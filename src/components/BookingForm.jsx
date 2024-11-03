import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { sendTelegramNotification } from '../utils/telegram';

const BookingForm = () => {
  const [step, setStep] = useState('choice');
  
  const handleAgeGroupSelect = (ageGroup) => {
    window.location.href = `https://forms.gle/yXyYNJCnuGks6cSQA?entry.ageGroup=${ageGroup}`;
    sendTelegramNotification(`Новая заявка на запись: ${ageGroup}`);
    toast.success('Перенаправляем на форму записи...');
  };

  return (
    <section id="booking" className="section bg-accent">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Запись на занятие
        </h2>
        
        <div className="card">
          <div className="text-center space-y-6">
            <motion.button
              className="btn btn-primary w-full"
              whileHover={{ scale: 1.02 }}
              onClick={() => handleAgeGroupSelect('adults')}
            >
              Для взрослых
            </motion.button>
            
            <motion.button
              className="btn bg-secondary text-white w-full"
              whileHover={{ scale: 1.02 }}
              onClick={() => handleAgeGroupSelect('children')}
            >
              Для детей
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;