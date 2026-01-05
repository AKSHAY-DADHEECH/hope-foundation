import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/campaign-layout.css";

const CampaignLayout = ({
  title,
  description,
  heroImage,
  seoTitle,
  seoDesc,
}) => {

  useEffect(() => {
    document.title = seoTitle;

    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute("content", seoDesc);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = seoDesc;
      document.head.appendChild(meta);
    }
  }, [seoTitle, seoDesc]);

  return (
    <>
      {/* HERO */}
      <section
        className="campaign-hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="campaign-hero-overlay">
          <h1>{title}</h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="campaign-content">
        <p>{description}</p>
      </section>

      {/* DONATE CTA */}
      <section className="campaign-donate">
        <h2>Your support can change lives</h2>
        <p>
          Join us in creating long-term impact for underprivileged communities.
        </p>
        <Link to="/donate" className="donate-btn">
          Donate Now
        </Link>
      </section>
    </>
  );
};

export default CampaignLayout;
