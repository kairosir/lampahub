import React from 'react';
import Header from '../components/Header';
import Description from '../components/Description';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import News from '../components/News';
import Map from '../components/Map';
import Footer from '../components/Footer';

const Index = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <div className="flex justify-center">
            <button 
              onClick={scrollToBooking}
              className="btn btn-primary"
            >
              Записаться на занятие
            </button>
          </div>
        </section>

        <Description />
        <Services />
        <BookingForm />
        <News />
        <Gallery />
        <Map />
      </main>

      <Footer />
    </div>
  );
};

export default Index;