import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

// SVG иконка Telegram
// SVG иконка Telegram
const TelegramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.627-5.373-12-12-12zm7.702 8.074l-6.294 2.444-2.444 6.294c-.149.377-.519.603-.919.603-.105 0-.21-.016-.314-.048-.404-.181-.648-.561-.648-.992V13.85L7.052 7.96c-.172-.313-.116-.687.134-.888.25-.2.576-.256.854-.148l10.508 4.01c.379.142.528.58.386.956-.086.25-.276.438-.5.53zm-4.064 1.094l2.096-5.436 2.157 2.515-5.415 2.103-2.542 5.423-1.967-5.525 5.482-2.198z"/>
  </svg>
);

// SVG иконка ВКонтакте
const VKIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M12 0C5.372 0 0 5.373 0 12c0 6.627 5.372 12 12 12s12-5.373 12-12c0-6.627-5.372-12-12-12zm5.937 17h-1.75c-1.375 0-1.688-.938-2.938-1.938-.875-.688-1.25-.688-1.5-.688-.188 0-.313.063-.313.438v1.438c0 .313-.125.625-.563.625-1.313 0-3.25-1.188-4.563-3.375-1.125-1.938-1.375-3.25-1.375-3.688 0-.188.125-.438.438-.438h1.75c.313 0 .438.188.5.438.375 1.375 1 2.563 1.125 2.75.188.313.375.438.563.438.188 0 .313-.125.313-.438v-1.25c-.063-.938-.688-.938-.688-1.375 0-.313.188-.5.563-.5h2.625c.25 0 .438.125.438.438 0 .25-.313.438-.313.75v.625c0 .375.188.5.375.5.188 0 .438-.125.625-.375.625-.813 1.125-2.063 1.125-2.063.125-.313.313-.5.625-.5h1.75c.313 0 .438.188.438.438 0 .438-.563 1.5-1.313 2.563-.813 1.063-.875 1.188-.313 1.875.313.375.688.813.813 1.063.188.313.188.438-.125.438z"/>
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
            {/* Иконка Telegram */}
            <motion.a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-white p-3 rounded-full text-primary hover:bg-secondary transition-colors duration-300"
            >
              <TelegramIcon />
            </motion.a>
            
            {/* Иконка WhatsApp */}
            <motion.a
              href="https://wa.me/79614160767"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="bg-white p-3 rounded-full text-primary hover:bg-secondary transition-colors duration-300"
            >
              <Phone className="w-6 h-6" />
            </motion.a>
            
            {/* Иконка ВКонтакте */}
            <motion.a
              href="https://vk.com/lampacenterbtsk"
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
