import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Users, UserRound, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { sendTelegramNotification } from '../utils/telegram';

const BookingForm = () => {
  const navigate = useNavigate();

  const handleBooking = (type) => {
    sendTelegramNotification(`Новая заявка на запись: ${type}`);
    toast.success('Переходим к выбору направления...');
    
    switch(type) {
      case 'adults':
        navigate('/adults-booking');
        break;
      case 'children':
        navigate('/children-booking');
        break;
      case 'events':
        navigate('/events-booking');
        break;
    }
  };

  return (
    <section id="booking" className="section bg-gradient-to-br from-accent to-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Запись на занятие
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            className="card hover:shadow-xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="text-center space-y-6">
              <Users className="w-16 h-16 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Для взрослых</h3>
              <motion.button
                className="btn bg-primary text-white w-full hover:bg-opacity-90"
                whileHover={{ scale: 1.02 }}
                onClick={() => handleBooking('adults')}
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
                className="btn bg-secondary text-white w-full hover:bg-opacity-90"
                whileHover={{ scale: 1.02 }}
                onClick={() => handleBooking('children')}
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
              <Calendar className="w-16 h-16 mx-auto text-accent mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Мероприятия</h3>
              <motion.button
                className="btn bg-accent text-white w-full hover:bg-opacity-90"
                style={{ backgroundColor: '#FF69B4' }}
                whileHover={{ scale: 1.02 }}
                onClick={() => handleBooking('events')}
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
