import React from 'react';
import { motion } from 'framer-motion';

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
          <img src="/logo.svg" alt="Лампа" className="h-10 animate-float" />
          <span className="text-2xl font-bold text-primary">ЛАМПА</span>
        </div>
        
        <nav className="hidden md:flex gap-6">
          <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
          <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
          <a href="#booking" className="hover:text-primary transition-colors">Запись</a>
          <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
        </nav>

        <a href="tel:+79614160767" className="btn btn-primary">
          +7 (961) 416-07-67
        </a>
      </div>
    </motion.header>
  );
};

export default Header;