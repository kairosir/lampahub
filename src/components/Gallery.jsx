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
  "/lampahub/src/components/images/photo1.jpeg",
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
