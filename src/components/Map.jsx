import React from 'react';

const Map = () => {
  return (
    <section id="contacts" className="section">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Как нас найти
        </h2>
        
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d678.5225266252721!2d39.74471906966492!3d47.13650071048894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDfCsDA4JzExLjQiTiAzOcKwNDQnNDMuMyJF!5e0!3m2!1sru!2skz!4v1731235981294!5m2!1sru!2skz"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="text-center mt-6 text-gray-600">
          г. Батайск, ул. Ленина 3, здание ДДТ
        </div>
      </div>
    </section>
  );
};

export default Map;
