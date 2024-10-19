import React, { useState } from 'react';
import './HomePage.css';

function HomePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:hello@morristheagency.be?subject=New message from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`)}`;
    window.location.href = mailtoLink;
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

        <section id="services">
          <h2>Diensten</h2>
          <ul>
            <li>Social Media Campagnes</li>
            <li>Fotoshoots</li>
            <li>Marketing</li>
          </ul>
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
