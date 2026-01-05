import React from 'react';
import '../styles/components/hero.css';
import heroImage from '../assets/hero.jpg';
import impact from '../assets/impact-home.webp';
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
    <section className="hero">
       <div className="hero-content">
    <h1>Making a Difference Together</h1>
    <p>Join us in transforming lives across India.</p>

    <div className="hero-actions">
      <Link to="/donate" className="primary-btn">Donate Now</Link>
      <Link to="/about" className="secondary-btn">Learn More</Link>
    </div>
  </div>
      <img src={heroImage} alt="Hero" />
      </section>

      <section className="impact-content">
      <div className="impact-home">
        <img src={impact} alt="Hero" />
      </div>
      </section>
    </>
  );
};

export default Hero;
