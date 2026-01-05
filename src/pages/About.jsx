import React from "react";
import "../styles/pages/about.css";
import bannerImg from "../assets/about-hero.jpg";
import contentImg from "../assets/about-mission.webp";
import aboutNext from "../assets/about-next.webp";
import aboutReach from "../assets/about-reach.webp";
import aboutMiddle from "../assets/about-middle.webp";
import aboutFirst from "../assets/about-first.webp";

const About = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="about-hero-overlay">
          <h1>About Us</h1>
          <p>
            Committed to transforming lives through education, healthcare, and community development.
          </p>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className="about-content">
        <div className="about-image">
          <img src={contentImg} alt="Our Mission" />
        </div>
      </section>
       <section className="about-content">
        <div className="about-image">
          <img src={aboutFirst} alt="Our Mission" />
        </div>
      </section>
      <section className="about-content">
        <div className="about-image">
          <img src={aboutMiddle} alt="Our Mission" />
        </div>
      </section>
      <section className="about-content">
        <div className="about-image">
          <img src={aboutNext} alt="Our Mission" />
        </div>
      </section>
      <section className="about-content">
        <div className="about-image">
          <img src={aboutReach} alt="Our Mission" />
        </div>
      </section>
    </>
  );
};

export default About;
