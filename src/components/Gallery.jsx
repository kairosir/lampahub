import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
    "https://i.ibb.co.com/xzcDyNv/photo-2024-11-07-11-33-33-PM.jpg",
    "https://i.ibb.co.com/HFdRQFJ/photo-2024-11-07-11-33-35-PM.jpg",
    "https://i.ibb.co.com/KNRP0g0/photo-2024-11-07-11-33-36-PM.jpg",
    "https://i.ibb.co.com/qW16WKF/photo-2024-11-07-11-33-37-PM-1.jpg",
    "https://i.ibb.co.com/VSRpjVP/photo-2024-11-07-11-33-37-PM.jpg",
    "https://i.ibb.co.com/BL9SVVs/photo-2024-11-07-11-33-38-PM.jpg",
    "https://i.ibb.co.com/yBx8xnd/photo-2024-11-07-11-33-39-PM.jpg",
    "https://i.ibb.co.com/DGpgLtZ/photo-2024-11-07-11-33-40-PM-1.jpg",
    "https://i.ibb.co.com/vVxKnqt/photo-2024-11-07-11-33-40-PM.jpg",
    "https://i.ibb.co.com/t40kMJn/photo-2024-11-07-11-33-42-PM.jpg",
    "https://i.ibb.co.com/gV4YrjL/photo-2024-11-07-11-33-43-PM-1.jpg",
    "https://i.ibb.co.com/W2Zp9CW/photo-2024-11-07-11-33-43-PM.jpg",
    "https://i.ibb.co.com/nCxYcnM/photo-2024-11-07-11-33-44-PM.jpg",
    "https://i.ibb.co.com/d6vLLbX/photo-2024-11-07-11-33-45-PM-1.jpg",
    "https://i.ibb.co.com/WpsTc03/photo-2024-11-07-11-33-45-PM.jpg",
    "https://i.ibb.co.com/Vt8LCPr/photo-2024-11-07-11-33-46-PM.jpg",
    "https://i.ibb.co.com/NThqhR2/photo-2024-11-07-11-33-47-PM-1.jpg",
    "https://i.ibb.co.com/njcHFKB/photo-2024-11-07-11-33-47-PM.jpg",
    "https://i.ibb.co.com/HTP3N5n/photo-2024-11-07-11-33-48-PM.jpg",
    "https://i.ibb.co.com/3zc9sNL/photo-2024-11-07-11-33-49-PM-1.jpg",
    "https://i.ibb.co.com/R2BbdW1/photo-2024-11-07-11-33-49-PM.jpg",
    "https://i.ibb.co.com/kGnGC0K/photo-2024-11-07-11-33-50-PM.jpg",
    "https://i.ibb.co.com/MVzDqT0/photo-2024-11-07-11-33-51-PM-1.jpg",
    "https://i.ibb.co.com/dbTctgZ/photo-2024-11-07-11-33-51-PM.jpg",
    "https://i.ibb.co.com/zGvgF81/photo-2024-11-07-11-33-52-PM.jpg",
    "https://i.ibb.co.com/177JZ1B/photo-2024-11-07-11-33-53-PM-1.jpg",
    "https://i.ibb.co.com/tmQPKB6/photo-2024-11-07-11-33-53-PM.jpg",
    "https://i.ibb.co.com/RpD6gbM/photo-2024-11-07-11-33-54-PM.jpg",
    "https://i.ibb.co.com/3khMH5v/photo-2024-11-07-11-33-55-PM.jpg",
    "https://i.ibb.co.com/2KY91Tw/photo-2024-11-07-11-33-56-PM.jpg",
    "https://i.ibb.co.com/GCxNzmv/photo-2024-11-07-11-33-57-PM-1.jpg",
    "https://i.ibb.co.com/Dg4v9bM/photo-2024-11-07-11-33-57-PM.jpg",
    "https://i.ibb.co.com/zxZBLDs/photo-2024-11-07-11-33-58-PM.jpg",
    "https://i.ibb.co.com/NN9xHYK/photo-2024-11-07-11-33-59-PM.jpg",
    "https://i.ibb.co.com/5TQT43c/photo-2024-11-07-11-34-00-PM-1.jpg",
    "https://i.ibb.co.com/KsTm4dq/photo-2024-11-07-11-34-00-PM.jpg",
    "https://i.ibb.co.com/YZhbSMZ/photo-2024-11-07-11-34-01-PM.jpg",
    "https://i.ibb.co.com/kyRQm6r/photo-2024-11-07-11-34-02-PM.jpg",
    "https://i.ibb.co.com/TmdsR4S/photo-2024-11-07-11-34-04-PM-1.jpg",
    "https://i.ibb.co.com/DRTH5WS/photo-2024-11-07-11-34-04-PM.jpg",
    "https://i.ibb.co.com/7YyVCB0/photo-2024-11-07-11-34-05-PM.jpg",
    "https://i.ibb.co.com/mNT5TX8/photo-2024-11-07-11-34-06-PM.jpg",
    "https://i.ibb.co.com/r3st5Lz/photo-2024-11-07-11-34-07-PM-1.jpg",
    "https://i.ibb.co.com/tMJ4Vfb/photo-2024-11-07-11-34-07-PM.jpg",
    "https://i.ibb.co.com/x7nC32F/photo-2024-11-07-11-34-08-PM.jpg",
    "https://i.ibb.co.com/64FS1ms/photo-2024-11-07-11-34-09-PM.jpg",
    "https://i.ibb.co.com/M8LWP4c/photo-2024-11-07-11-34-10-PM.jpg",
    "https://i.ibb.co.com/SmhCwRk/photo-2024-11-07-11-34-11-PM.jpg",
    "https://i.ibb.co.com/YBw7ZF1/photo-2024-11-07-11-34-12-PM.jpg",
];

const Gallery = () => {
  return (
    <section id="gallery" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Наша галерея
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((src, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  className="aspect-square overflow-hidden rounded-xl border-2 border-gray-200 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-white border-primary text-primary hover:bg-primary hover:text-white" />
          <CarouselNext className="hidden md:flex -right-4 bg-white border-primary text-primary hover:bg-primary hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;
