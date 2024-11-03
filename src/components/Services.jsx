import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Users, Briefcase, Lightbulb, Heart, Users2, Brain, Sparkles } from 'lucide-react';

const services = [
  { icon: <Palette />, title: "Арт-события, выставки, творческие вечера" },
  { icon: <Users />, title: "Коворкинг зона" },
  { icon: <Lightbulb />, title: "Студия свободного творчества" },
  { icon: <Briefcase />, title: "Мастер классы и лекции" },
  { icon: <Brain />, title: "Центр профориентации" },
  { icon: <Heart />, title: "Центр психологической помощи" },
  { icon: <Users2 />, title: "Семейные проекты" },
  { icon: <Sparkles />, title: "Творческое развитие" },
];

const Services = () => {
  return (
    <section id="services" className="section bg-lightblue">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Наши направления
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="card bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-primary mb-4 text-3xl">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;