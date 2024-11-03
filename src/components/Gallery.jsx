import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
  "/gallery/7.jpg",
  "/gallery/8.jpg",
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

    // Auto scroll
    const autoScroll = setInterval(() => {
      if (!isDown) {
        carousel.scrollLeft += 1;
        if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
          carousel.scrollLeft = 0;
        }
      }
    }, 30);

    return () => {
      carousel.removeEventListener('mousedown', mouseDown);
      carousel.removeEventListener('mouseleave', mouseLeave);
      carousel.removeEventListener('mouseup', mouseUp);
      carousel.removeEventListener('mousemove', mouseMove);
      clearInterval(autoScroll);
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
          className="gallery-carousel flex gap-4 overflow-x-auto pb-8 select-none"
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