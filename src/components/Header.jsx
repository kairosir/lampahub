import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      className="bg-white shadow-md py-4 px-6 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-10 w-10 text-primary animate-float" />
          <span className="text-2xl font-bold text-primary">ЛАМПА</span>
        </div>
        
        <nav className="hidden md:flex gap-4">
          {['Услуги', 'Галерея', 'Запись', 'Контакты'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <motion.a 
          href="tel:+79614160767" 
          className="btn bg-tertiary text-white hover:bg-primary transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
        >
          +7 (961) 416-07-67
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;