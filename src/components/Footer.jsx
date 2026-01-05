import React from "react";
import { Link } from "react-router-dom";
import "../styles/layout/footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP FOOTER */}
      <div className="footer-top">
        <div className="footer-column">
          <h4>ABOUT US</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/impact">Impact</Link></li>
            <li><Link to="/reach">Reach & Presence</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>OUR PROGRAMMES</h4>
          <ul>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/healthcare">Healthcare</Link></li>
            <li><Link to="/livelihood">Livelihood</Link></li>
            <li><Link to="/women-empowerment">Women Empowerment</Link></li>
            <li><Link to="/disaster-response">Disaster Response</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>CAMPAIGNS</h4>
         <ul>
          <li><Link to="/campaigns/shiksha-na-ruke">Shiksha Na Ruke</Link></li>
          <li><Link to="/campaigns/health-cannot-wait">Health Cannot Wait</Link></li>
          <li><Link to="/campaigns/she-can-fly">She Can Fly</Link></li>
          <li><Link to="/campaigns/swabhiman">Swabhiman</Link></li>
          <li><Link to="/campaigns/tayyari-kal-ki">Tayyari Kal Ki</Link></li>
        </ul>
        </div>


        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/donate">Donate</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="footer-divider"></div>

      {/* BOTTOM FOOTER */}
      <div className="footer-bottom">
        <div className="footer-address">
          <h5>Hope Foundation</h5>
          <p>
            16 B/4, 5rd Floor, Batla House,<br />
            Indian Community Centre New Delhi - 110049, India
          </p>
          <p>
            Contact Us: Tel: +91-11-9999999 <br />
            E-mail: info@hopefoundationindia.org
          </p>
        </div>
        

        <div className="footer-social">
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="YouTube"><FaYoutube /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
