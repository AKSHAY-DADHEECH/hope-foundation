import React from "react";
import "../styles/pages/healthcare.css";

import heroImg from "../assets/health-hero.jpg";
import campImg from "../assets/health-camp.webp";
import healthImg from "../assets/health-matter.webp";
import healthNext from "../assets/health-next.webp";
import healthReach from "../assets/health-reach.webp";

const Healthcare = () => {
  return (
    <div className="healthcare-page">

      {/* HERO SECTION */}
      <section
        className="health-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="health-hero-overlay">
          <h1>Healthcare</h1>
          <p>
            Ensuring access to quality healthcare services for underserved
            communities across India.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="health-content">
        <div className="health-image">
          <img src={campImg} alt="Healthcare Camp" />
        </div>
      </section>
       <section className="health-content">
        <div className="health-image">
          <img src={healthImg} alt="Healthcare Camp" />
        </div>
      </section>
       <section className="health-content">
        <div className="health-image">
          <img src={healthNext} alt="Healthcare Camp" />
        </div>
      </section>
       <section className="health-content">
        <div className="health-image">
          <img src={healthReach} alt="Healthcare Camp" />
        </div>
      </section>

    </div>
  );
};

export default Healthcare;
