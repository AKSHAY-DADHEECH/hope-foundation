import React from "react";
import "../styles/pages/impact.css";
import bannerImg from "../assets/impact-hero.jpg";
import contentImg from "../assets/impact-stats.webp";

const Impact = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="impact-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* No overlay text as requested */}
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className="impact-content">
        <div className="impact-image">
          <img src={contentImg} alt="Our Impact" />
        </div>
      </section>
    </>
  );
};

export default Impact;
