import React, { useState } from 'react';
import { motion } from 'framer-motion';
import InputMask from 'react-input-mask';
import { toast } from 'sonner';
import { sendTelegramNotification } from '../utils/telegram';

const BookingDetailsForm = ({ activity, isEvent = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    selectedActivity: activity || '',
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const message = `
Новая заявка${isEvent ? ' на мероприятие' : ' на занятие'}: ${formData.selectedActivity}
ФИО: ${formData.name}
Телефон: ${formData.phone}
Комментарий: ${formData.comment}
    `;

    try {
      await sendTelegramNotification(message);
      toast.success('Заявка успешно отправлена!');
      setFormData({
        name: '',
        phone: '',
        selectedActivity: activity || '',
        comment: ''
      });
    } catch (error) {
      toast.error('Ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        {isEvent ? 'Запись на мероприятие' : `Запись на занятие: ${activity}`}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">ФИО</label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            pattern="[А-Яа-яЁё\s]{1,40}"
            maxLength={40}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
            placeholder="Введите ФИО"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Номер телефона</label>
          <InputMask
            mask="+7 (999) 999-99-99"
            value={formData.phone}
            onChange={handleInputChange}
            name="phone"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
            placeholder="+7 (___) ___-__-__"
          >
            {(inputProps) => <motion.input {...inputProps} whileFocus={{ scale: 1.01 }} />}
          </InputMask>
        </div>

        {isEvent && (
          <div className="space-y-2">
            <label className="block text-sm font-medium">Выберите мероприятие</label>
            <select
              name="selectedActivity"
              value={formData.selectedActivity}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            >
              <option value="">Выберите мероприятие</option>
              {[
                "Арт-вечера",
                "Дни рождения",
                "Тематические вечера/квартирники",
                "Тренинги",
                "Литературный клуб (детский\\взрослый)",
                "Корпоративные встречи"
              ].map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </div>
        )}

        <div className="space-y-2">
          <label className="block text-sm font-medium">Комментарий</label>
          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            maxLength={500}
            rows={4}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Дополнительная информация"
          />
          <div className="text-right text-sm text-gray-500">
            {formData.comment.length}/500
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
        >
          Отправить
        </motion.button>
      </form>
    </motion.div>
  );
};

export default BookingDetailsForm;