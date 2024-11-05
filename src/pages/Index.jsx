import React from 'react';
import Header from '../components/Header';
import Description from '../components/Description';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import Map from '../components/Map';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-lightblue">
      <Header />
      
      <main className="container mx-auto px-4">
        <section className="section text-center mt-8">
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

        <Description />
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