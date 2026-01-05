import React from "react";
import "../styles/components/donate-hero.css";
import donateHero from "../assets/donate-hero.jpg";

const DonateHero = () => {
  return (
    <section
            className="donate-hero"
            style={{ backgroundImage: `url(${donateHero})` }}
          >
            <div className="donate-hero-overlay">
              <h1>Donate for a Cause</h1>
              <p>
                Your contribution can change lives.
              </p>
            </div>
          </section>
  );
};

export default DonateHero;
