import React from "react";
import DonateHero from "../components/DonateHero";
import DonateAmount from "../components/DonateAmount";
import DonateForm from "../components/DonorForm";
import DonateInfo from "../components/DonateInfo";
import donateImg from "../assets/donate-next.webp";
import "../styles/pages/donate.css";


const Donate = () => {
  return (
    <div className="donate-page">
      <DonateHero />
      <DonateAmount />
      <section className="donate-content">
        <DonateInfo />
        <DonateForm />
      </section>
      <section className="donate-program">
     <div className="donate-image">
      <img src={donateImg} alt="donate Program" />
     </div>
      </section>
    </div>
    
  );
};

export default Donate;
