import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

const VKIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M3 3h18v18H3z" fill="none"/>
    <path d="M13 16.5h-2c-4.5 0-7-2.5-7-7v-2c0-4.5 2.5-7 7-7h2c4.5 0 7 2.5 7 7v2c0 4.5-2.5 7-7 7zm-2-14c-3.3 0-5 1.7-5 5v2c0 3.3 1.7 5 5 5h2c3.3 0 5-1.7 5-5v-2c0-3.3-1.7-5-5-5h-2z"/>
    <path d="M15.5 9c-.2-.6-.9-1.3-1.8-1.3h-1.4c-.5 0-.9.4-.9.9v4.8c0 .5.4.9.9.9h1.4c.9 0 1.6-.7 1.8-1.3"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">ЛАМПА</h3>
            <p>Творческое пространство и центр коммуникаций</p>
            <p className="mt-2">ул. Ленина, д.3, Батайск</p>
          </div>
          
          <div className="flex gap-6">
            <motion.a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-white p-3 rounded-full text-primary hover:bg-secondary transition-colors duration-300"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://wa.me/79614160767"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-white p-3 rounded-full text-primary hover:bg-secondary transition-colors duration-300"
            >
              <Phone className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://vk.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-white p-3 rounded-full text-primary hover:bg-secondary transition-colors duration-300"
            >
              <VKIcon />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;