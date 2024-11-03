import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, MessageCircle, Phone } from 'lucide-react';

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
              href="https://vk.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-white p-3 rounded-full text-primary hover:bg-secondary transition-colors duration-300"
            >
              <Facebook className="w-6 h-6" />
            </motion.a>
            
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;