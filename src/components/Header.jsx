import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <Link to="/">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <Home className="h-4 w-4" />
              Главная
            </motion.button>
          </Link>
          {isHomePage && [
            {
              title: 'Направления',
              id: 'services'
            },
            {
              title: 'Галерея',
              id: 'gallery'
            },
            {
              title: 'Контакты',
              id: 'map'
            }
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-4 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {item.title}
            </motion.button>
          ))}
        </nav>

        <motion.a 
          href="tel:+79614160767" 
          className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          whileHover={{ scale: 1.05 }}
        >
          +7 (961) 416-07-67
        </motion.a>
      </div>
    </motion.header>
  );
};

export default Header;