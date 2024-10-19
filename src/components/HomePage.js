import React, { useState } from 'react';
import './HomePage.css';

const serviceDetails = {
  'Social Media Campagnes': 'Wij creëren boeiende en effectieve social media campagnes die uw merk versterken en uw doelgroep betrekken. Onze strategieën zijn op maat gemaakt om uw online aanwezigheid te vergroten en meetbare resultaten te leveren.',
  'Fotoshoots': 'Onze professionele fotoshoots brengen uw merk tot leven. We zorgen voor hoogwaardige, op maat gemaakte beelden die uw producten of diensten in de schijnwerpers zetten en een blijvende indruk maken op uw doelgroep.',
  'Marketing': 'Onze uitgebreide marketingdiensten zijn ontworpen om uw bedrijf te laten groeien. Van contentmarketing tot e-mailcampagnes, we ontwikkelen geïntegreerde strategieën die uw merk versterken en uw omzet verhogen.'
};

function HomePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@morristheagency.be?subject=New message from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="homepage">
      <header>
        <h1>Morris The Agency</h1>
        <nav>
          <ul>
            <li><a href="#services">Diensten</a></li>
            <li><a href="#about">Over ons</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="accent-bg">
          <h2>Innovative Digital Solutions</h2>
          <p>Tailored strategies to drive your business growth</p>
        </section>

        {/* <section id="services">
          <h2>Diensten</h2>
          <ul>
            <li>Social Media Campagnes</li>
            <li>Fotoshoots</li>
            <li>Marketing</li>
          </ul>
        </section> */}

        <section id="services">
          <h2>Onze Diensten</h2>
          <div className="services-grid">
            {Object.keys(serviceDetails).map((service) => (
              <button 
                key={service}
                className="service-button" 
                onClick={() => handleServiceClick(service)}
              >
                {service}
              </button>
            ))}
          </div>
          {selectedService && (
            <div className="service-details">
              <h3>{selectedService}</h3>
              <p>{serviceDetails[selectedService]}</p>
            </div>
          )}
        </section>

        <section id="about">
          <h2>Over Ons</h2>
          <p>Wij zijn een team van gepassioneerde professionals, toegewijd aan het leveren van geavanceerde digitale oplossingen voor bedrijven van alle groottes.</p>
        </section>

        <section id="contact" className="accent-bg">
          <h2>Contacteer Ons</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Je naam"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Je email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Je bericht"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button type="submit">Verstuur</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Morris The Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
