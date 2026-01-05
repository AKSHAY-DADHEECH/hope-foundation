import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/programmes.css";

const campaigns = [
  {
    title: "Shiksha Na Ruke",
    link: "/campaigns/shiksha-na-ruke",
    desc: "Ensuring uninterrupted education for underprivileged children."
  },
  {
    title: "Health Cannot Wait",
    link: "/campaigns/health-cannot-wait",
    desc: "Providing healthcare access to vulnerable communities."
  },
  {
    title: "She Can Fly",
    link: "/campaigns/she-can-fly",
    desc: "Empowering the girl child through education."
  },
  {
    title: "Swabhiman",
    link: "/campaigns/swabhiman",
    desc: "Skill development & livelihood initiatives."
  },
  {
    title: "Tayyari Kal Ki",
    link: "/campaigns/tayyari-kal-ki",
    desc: "Preparing youth for employment & future."
  }
];

const Campaigns = () => {
  return (
    <section className="programmes-section">
      <h2>Our Campaigns</h2>
      <div className="programmes-grid">
        {campaigns.map((item, index) => (
          <Link to={item.link} key={index} className="programme-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Campaigns;
