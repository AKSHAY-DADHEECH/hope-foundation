import React from "react";
import "../styles/pages/reach.css";
import bannerImg from "../assets/reach-hero.webp";
import contentImg from "../assets/reach-map.webp";

const Reach = () => {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="reach-hero"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* No overlay text as requested */}
      </section>

      {/* ===== CONTENT SECTION ===== */}
      <section className="reach-content">
        <div className="reach-image">
          <img src={contentImg} alt="Our Reach" />
        </div>
      </section>
    </>
  );
};

export default Reach;
