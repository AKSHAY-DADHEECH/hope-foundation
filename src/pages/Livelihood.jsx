import React from "react";
import "../styles/pages/livelihood.css";
import bannerImg from "../assets/livelihood-hero.jpg";
import contentImg from "../assets/livelihood-training.webp";
import livelihoodImg from "../assets/livelihood-img.webp";
import livelihoodNext from "../assets/livelihood-next.webp";
import livelihoodReach from "../assets/livelihood-reach.webp";

const Livelihood = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="livelihood-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="livelihood-hero-overlay">
          <h1>Livelihood</h1>
          <p>
            Empowering communities through skill development and sustainable livelihoods.
          </p>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className="livelihood-content">
        <div className="livelihood-image">
          <img src={contentImg} alt="Livelihood Training" />
        </div>
      </section>
      <section className="livelihood-content">
        <div className="livelihood-image">
          <img src={livelihoodImg} alt="Livelihood Training" />
        </div>
      </section>
      <section className="livelihood-content">
        <div className="livelihood-image">
          <img src={livelihoodNext} alt="Livelihood Training" />
        </div>
      </section>
      <section className="livelihood-content">
        <div className="livelihood-image">
          <img src={livelihoodReach} alt="Livelihood Training" />
        </div>
      </section>
    </>
  );
};

export default Livelihood;
