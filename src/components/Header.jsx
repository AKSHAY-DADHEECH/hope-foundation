import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/layout/header.css";
import logo from "../assets/logo.webp";
import { FaCaretDown, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [campaignOpen, setCampaignOpen] = useState(false);
  const [programmesOpen, setProgrammesOpen] = useState(false);

  return (
    <header className="header">

      {/* ===== TOP BAR (DESKTOP + MOBILE) ===== */}
      <div className="header-top">

        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Hope Foundation Logo" />
          </Link>
        </div>

        {/* ===== DESKTOP NAV ===== */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>

            <li
              onMouseEnter={() => setProgrammesOpen(true)}
              onMouseLeave={() => setProgrammesOpen(false)}
            >
              <span>Our Programmes <FaCaretDown /></span>
              {programmesOpen && (
                <ul className="dropdown">
                  <li><Link to="/education">Education</Link></li>
                  <li><Link to="/healthcare">Healthcare</Link></li>
                  <li><Link to="/women-empowerment">Women Empowerment</Link></li>
                  <li><Link to="/livelihood">Livelihood</Link></li>
                  <li><Link to="/disaster-response">Disaster Response</Link></li>
                </ul>
              )}
            </li>

            <li
              onMouseEnter={() => setCampaignOpen(true)}
              onMouseLeave={() => setCampaignOpen(false)}
            >
              <span>Campaigns <FaCaretDown /></span>
              {campaignOpen && (
                <ul className="dropdown">
                  <li><Link to="/campaigns/shiksha-na-ruke">Shiksha Na Ruke</Link></li>
                  <li><Link to="/campaigns/health-cannot-wait">Health Cannot Wait</Link></li>
                  <li><Link to="/campaigns/she-can-fly">She Can Fly</Link></li>
                  <li><Link to="/campaigns/swabhiman">Swabhiman</Link></li>
                  <li><Link to="/campaigns/tayyari-kal-ki">Tayyari Kal Ki</Link></li>
                </ul>
              )}
            </li>

            <li
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <span>About <FaCaretDown /></span>
              {aboutOpen && (
                <ul className="dropdown">
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/impact">Impact</Link></li>
                  <li><Link to="/reach">Reach</Link></li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/donate" className="donate-btn">Donate</Link>
            </li>

            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* ===== MOBILE BUTTONS ===== */}
        <Link to="/donate" className="mobile-donate">Donate</Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* ===== MOBILE MENU ===== */}
      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>

          <li onClick={() => setProgrammesOpen(!programmesOpen)}>
            Our Programmes <FaCaretDown />
            {programmesOpen && (
              <ul className="mobile-submenu">
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/healthcare">Healthcare</Link></li>
                <li><Link to="/women-empowerment">Women Empowerment</Link></li>
                <li><Link to="/livelihood">Livelihood</Link></li>
                <li><Link to="/disaster-response">Disaster Response</Link></li>
              </ul>
            )}
          </li>

          <li onClick={() => setCampaignOpen(!campaignOpen)}>
            Campaigns <FaCaretDown />
            {campaignOpen && (
              <ul className="mobile-submenu">
                <li><Link to="/campaigns/shiksha-na-ruke">Shiksha Na Ruke</Link></li>
                <li><Link to="/campaigns/health-cannot-wait">Health Cannot Wait</Link></li>
                <li><Link to="/campaigns/she-can-fly">She Can Fly</Link></li>
                <li><Link to="/campaigns/swabhiman">Swabhiman</Link></li>
                <li><Link to="/campaigns/tayyari-kal-ki">Tayyari Kal Ki</Link></li>
              </ul>
            )}
          </li>

          <li onClick={() => setAboutOpen(!aboutOpen)}>
            About <FaCaretDown />
            {aboutOpen && (
              <ul className="mobile-submenu">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/impact">Impact</Link></li>
                <li><Link to="/reach">Reach</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

    </header>
  );
};

export default Header;
