import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactUs from "../assets/contact-us.jpg";
import "../styles/pages/contact.css";

const Contact = () => {
  const [city, setCity] = useState("mumbai");

  const officeData = {
    mumbai: {
      address: "101 First Floor Tiger Hall, Mumbai - 400057",
      phone: "022-12345678",
      email: "mumbai@hopefoundationindia.org"
    },
    kolkata: {
      address: "201 Second Floor Lion Hall, Kolkata - 100123",
      phone: "033-12345678",
      email: "kolkata@hopefoundationindia.org"
    },
    bengaluru: {
      address: "501 Third Floor China Town, Bengaluru - 600235",
      phone: "080-12345678",
      email: "bengaluru@hopefoundationindia.org"
    }
  };

  return (
    <div className="contact-page">

      {/* ===== HERO ===== */}
        <section className="contact-hero"
          style={{ backgroundImage: `url(${contactUs})` }}
             >
          <div className="contact-hero-overlay">
          <h1>CONTACT US</h1>
          
        <div className="breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>&gt;</span>
          <Link to="/">Pages</Link>
          <span>&gt;</span>
          <span className="active">Contact Us</span>
        </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="contact-content">
        <div className="contact-info">
          <div className="contact-block">
            <h3>FOR CORPORATE PARTNERSHIPS</h3>
            <p>Akshay Dadheech – 9999999999</p>
            <p>cp@hopefoundationindia.org</p>
          </div>
           <div className="contact-block">
            <h3>DONATION RELATED QUERIES</h3>

            <h4>FOR NEW DONORS</h4>
            <p>Shailendra Singh – 8888888888</p>
            <p>donation@hopefoundationindia.org</p>

            <h4>FOR EXISTING DONORS</h4>
            <p>Saurabh Singh – 7777777777</p>
            <p>donorcare@hopefoundationindia.org</p>

            <h4>FOR ALL GENERAL QUERIES</h4>
            <p>info@hopefoundationindia.org</p>
          </div>
        </div>

        <div className="contact-form">
          <h3>HELPDESK</h3>
          <p>For any grievance, suggestions and queries kindly write to us.</p>

          <form>
            <input type="text" placeholder="Name *" required />
            <div className="contact-form-row">
              <input type="text" placeholder="Phone *" required />
              <input type="email" placeholder="Email *" required />
            </div>
            <textarea placeholder="Message *" rows="5"></textarea>

            <div className="recaptcha-box">
              <input type="checkbox" />
              <label>I'm not a robot</label>
            </div>

            <button>SUBMIT</button>
          </form>
        </div>
      </section>

      
      {/* ===== VISIT US SECTION ===== */}
      <section className="visit-us">
        <h3>VISIT US HERE</h3><br/>
        <h5>HEAD OFFICE</h5><br/>
        <p>16 B/4, 5rd Floor, Batla House, Indian Community Centre New Delhi – 110049<br/>
           <b>Phone:</b> +91-11-9999999 , l Fax: +91-11-9999999 <br/>
           <b>Email:</b> info@hopefoundationindia.org</p><br/>
        <h4>REGIONAL OFFICES</h4>

        <div className="city-tabs">
          <button onClick={() => setCity("mumbai")} className={city === "mumbai" ? "active" : ""}>MUMBAI</button>
          <button onClick={() => setCity("kolkata")} className={city === "kolkata" ? "active" : ""}>KOLKATA</button>
          <button onClick={() => setCity("bengaluru")} className={city === "bengaluru" ? "active" : ""}>BENGALURU</button>
        </div>

        <div className="office-cards">
          <div className="office-card">
            <FaMapMarkerAlt />
            <h5>ADDRESS</h5>
            <p>{officeData[city].address}</p>
          </div>

          <div className="office-card">
            <FaPhoneAlt />
            <h5>PHONE</h5>
            <p>{officeData[city].phone}</p>
          </div>

          <div className="office-card">
            <FaEnvelope />
            <h5>EMAIL</h5>
            <p>{officeData[city].email}</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
