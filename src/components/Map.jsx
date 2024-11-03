import React from 'react';

const Map = () => {
  return (
    <section id="contacts" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Как нас найти
        </h2>
        
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.5677389757544!2d39.7503!3d47.1384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b9b31c471913%3A0x4d5f7c5c6c731f68!2z0YPQuy4g0JvQtdC90LjQvdCwLCAzLCDQkdCw0YLQsNC50YHQuiwg0KDQvtGB0YLQvtCy0YHQutCw0Y8g0L7QsdC7Liwg0KDQvtGB0YHQuNGPLCAzNDY4ODA!5e0!3m2!1sru!2s!4v1647887291254!5m2!1sru!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;