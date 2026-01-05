import React from "react";
import "../styles/pages/education.css";
import bannerImg from "../assets/education-banner.jpg";
import contentImg from "../assets/education-content.webp";
import educationImg from "../assets/education-next.webp";
import educationMatter from "../assets/education-matter.webp";
import educationReach from "../assets/education-reach.webp";

const Education = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="education-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="education-hero-overlay">
          <h1>Education</h1>
          <p>
            Ensuring access to quality education for children across India.
          </p>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className="education-content">
        <div className="education-image">
          <img src={contentImg} alt="Education Program" />
        </div>
      </section>
       <section className="education-content">
        <div className="education-image">
          <img src={educationMatter} alt="Education Program" />
        </div>
      </section>
      <section className="education-content">
        <div className="education-image">
          <img src={educationImg} alt="Education Program" />
        </div>
      </section>
      <section className="education-content">
        <div className="education-image">
          <img src={educationReach} alt="Education Program" />
        </div>
      </section>
    </>
  );
};

export default Education;
