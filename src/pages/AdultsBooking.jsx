import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingDetailsForm from '../components/BookingDetailsForm';

const activities = [
  "Художественная студия (обучение)",
  "Школа кройки и шиться «ШиК» (курс 4 месяца)",
  "Мастер-классы по рукоделию",
  "Гитара (обучение)",
  "Танцевальные тренировки",
  "Арт-вечера (Мастер-классы)",
  "Психолог",
  "Трансформационные и настольные игры",
  "Нейрографика",
  "Эзотерика (Мастер-классы)",
  "Флорариум"
];

const AdultsBooking = () => {
  const [selectedActivity, setSelectedActivity] = React.useState(null);

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
    toast.success('Заполните форму для записи');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-lightblue">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {!selectedActivity ? (
          <>
            <h1 className="text-4xl font-bold text-center mb-12">Занятия для взрослых</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {activities.map((activity, index) => (
                <motion.button
                  key={activity}
                  className="card p-6 text-center hover:shadow-xl bg-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  onClick={() => handleActivitySelect(activity)}
                >
                  <h3 className="text-xl font-semibold text-primary">{activity}</h3>
                </motion.button>
              ))}
            </div>
          </>
        ) : (
          <BookingDetailsForm activity={selectedActivity} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AdultsBooking;