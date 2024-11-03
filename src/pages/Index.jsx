import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import Map from '../components/Map';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-lightblue">
      <Header />
      
      <main>
        <section className="section container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-float">
            ЛАМПА
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Творческое пространство и центр коммуникаций! Для всех возрастов
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#booking" className="btn btn-primary">
              Записаться на занятие
            </a>
            <a href="#services" className="btn bg-secondary text-white hover:bg-opacity-90 hover:scale-105">
              Узнать больше
            </a>
          </div>
        </section>

        <Services />
        <Gallery />
        <BookingForm />
        <Map />
      </main>

      <Footer />
    </div>
  );
};

export default Index;