import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
];

const Gallery = () => {
  const carouselRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  useEffect(() => {
    const carousel = carouselRef.current;
    
    const mouseDown = (e) => {
      isDown = true;
      carousel.classList.add('active');
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };

    const mouseLeave = () => {
      isDown = false;
      carousel.classList.remove('active');
    };

    const mouseUp = () => {
      isDown = false;
      carousel.classList.remove('active');
    };

    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2;
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel.addEventListener('mousedown', mouseDown);
    carousel.addEventListener('mouseleave', mouseLeave);
    carousel.addEventListener('mouseup', mouseUp);
    carousel.addEventListener('mousemove', mouseMove);

    return () => {
      carousel.removeEventListener('mousedown', mouseDown);
      carousel.removeEventListener('mouseleave', mouseLeave);
      carousel.removeEventListener('mouseup', mouseUp);
      carousel.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <section id="gallery" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Наша галерея
        </h2>
        
        <div 
          ref={carouselRef}
          className="gallery-carousel flex gap-4 overflow-x-auto pb-8 select-none cursor-grab active:cursor-grabbing"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="gallery-item flex-none w-72 h-48 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;