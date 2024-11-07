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
  "https://ibb.co.com/44D7cHy",
  "https://ibb.co.com/SsrHpsL",
  "https://ibb.co.com/mv1jDKD",
  "https://ibb.co.com/WPKCPZp",
  "https://ibb.co.com/6PzJnYf",
  "https://ibb.co.com/p2S9vvX",
  "https://ibb.co.com/R4JCJpY",
  "https://ibb.co.com/jVRZHTS",
  "https://ibb.co.com/RYpVwb5",
  "https://ibb.co.com/47b9ZVC",
  "https://ibb.co.com/sHW7gmd",
  "https://ibb.co.com/71PNchJ",
  "https://ibb.co.com/5FbS8nh",
  "https://ibb.co.com/Npqmm1f",
  "https://ibb.co.com/n8RWDB0",
  "https://ibb.co.com/NszFNHQ",
  "https://ibb.co.com/3RXbXKm",
  "https://ibb.co.com/2dtDTpS",
  "https://ibb.co.com/tp2FZV8",
  "https://ibb.co.com/q5p3nsP",
  "https://ibb.co.com/9nVgSjJ",
  "https://ibb.co.com/hg5gzHs",
  "https://ibb.co.com/G2ZvgwS",
  "https://ibb.co.com/cbBvwLq",
  "https://ibb.co.com/Tm3G1KZ",
  "https://ibb.co.com/HBBp76R",
  "https://ibb.co.com/7YjNCvD",
  "https://ibb.co.com/6RWtywp",
  "https://ibb.co.com/6Ns15c8",
  "https://ibb.co.com/3hY39nw",
  "https://ibb.co.com/9y8SQP9",
  "https://ibb.co.com/3Y1jpsF",
  "https://ibb.co.com/1QTPpjZ",
  "https://ibb.co.com/FY56j7z",
  "https://ibb.co.com/Y252QSj",
  "https://ibb.co.com/VCf3nRS",
  "https://ibb.co.com/tXD36tX",
  "https://ibb.co.com/3sDBRY8",
  "https://ibb.co.com/SRGz0t8",
  "https://ibb.co.com/HH3fn4k",
  "https://ibb.co.com/bWdLmYG",
  "https://ibb.co.com/Hh4T4xd",
  "https://ibb.co.com/jzR53xQ",
  "https://ibb.co.com/xS7DxvM",
  "https://ibb.co.com/bK4W76b",
  "https://ibb.co.com/mH4KXGz",
  "https://ibb.co.com/Q8GzYRP",
  "https://ibb.co.com/z2yvVG3",
  "https://ibb.co.com/9HS9tk1",
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
