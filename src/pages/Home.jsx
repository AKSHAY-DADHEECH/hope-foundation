import React from 'react';
import Hero from '../components/Hero';
import Programmes from '../components/Programmes';
import Stories from '../components/Stories';
import '../styles/pages/home.css';
import HeroSlider from "../components/HeroSlider";


const Home = () => (
  <div className="home-page">
    <HeroSlider />
    <Hero />
    <Programmes />
    <Stories />
  </div>
);

export default Home;
