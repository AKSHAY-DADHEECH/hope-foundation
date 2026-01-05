import React from "react";
import "../styles/pages/women-empowerment.css";
import bannerImg from "../assets/women-empowerment-hero.jpg";
import contentImg from "../assets/women-empowerment-training.webp";
import womenNext from "../assets/women-next.webp";
import womenReach from "../assets/women-reach.webp";

const WomenEmpowerment = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="women-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="women-hero-overlay">
          <h1>Women Empowerment</h1>
          <p>
            Enabling women to become self-reliant through education, skills and opportunities.
          </p>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className="women-content">
        <div className="women-image">
          <img src={contentImg} alt="Women Empowerment Program" />
        </div>
      </section>
      <section className="women-content">
        <div className="women-image">
          <img src={womenNext} alt="Women Empowerment Program" />
        </div>
      </section>
      <section className="women-content">
        <div className="women-image">
          <img src={womenReach} alt="Women Empowerment Program" />
        </div>
      </section>
    </>
  );
};

export default WomenEmpowerment;
