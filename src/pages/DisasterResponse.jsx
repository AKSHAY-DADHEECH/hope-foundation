import React from "react";
import "../styles/pages/disaster-response.css";
import bannerImg from "../assets/disaster-response-hero.jpg";
import contentImg from "../assets/disaster-response-relief.webp";
import disasterNext from "../assets/disaster-next.webp";

const DisasterResponse = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="disaster-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="disaster-hero-overlay">
          <h1>Disaster Response</h1>
          <p>
            Providing immediate relief and long-term rehabilitation during disasters.
          </p>
        </div>
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className="disaster-content">
        <div className="disaster-image">
          <img src={contentImg} alt="Disaster Relief Work" />
        </div>
      </section>
       <section className="disaster-content">
        <div className="disaster-image">
          <img src={disasterNext} alt="Disaster Relief Work" />
        </div>
      </section>
    </>
  );
};

export default DisasterResponse;
