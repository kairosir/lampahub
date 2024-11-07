import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingDetailsForm from '../components/BookingDetailsForm';

const EventsBooking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-lightblue">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <BookingDetailsForm isEvent={true} />
      </main>
      <Footer />
    </div>
  );
};

export default EventsBooking;