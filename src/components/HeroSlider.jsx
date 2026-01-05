import React, { useEffect, useState } from "react";
import "../styles/components/hero-slider.css";

import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";

const slides = [
  {
    image: slide1,
  },
  {
    image: slide2,
  },
  {
    image: slide3,
    
  },
  {
    image: slide4,
   
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="hero-slider">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div className="slide" key={i}>
  <img
    src={slide.image}
    alt="hero"
    className="slide-img"
    loading="eager"
  />

  <div className="overlay-bg"></div>

  <div className="overlay">
    <h1>{slide.title}</h1>
    <h2>{slide.subtitle}</h2>
  </div>
</div>

         
        ))}
      </div>
    </section>
    <div className="read-me">
      <p>
        Established in 2002, Hope Foundation is an Indian development organization,
        impacting the lives of over 20 lakh children and their families every year.
        We have more than 400 projects on education, healthcare, livelihood, and women
        empowerment in over 2,000 remote villages and urban slums across 27 states of India.
        <br /><br />
        Hope Foundation works as a catalyst in the cycle of change, complementing and
        supplementing government efforts to achieve the Sustainable
        Development Goals. We sensitize and partner with like-minded institutions and
        individuals to implement high-impact programmes that enable access, enhance
        quality and help bring long term behavioural change at the grassroots.
      </p>
    </div>
    </>
  );
};

export default HeroSlider;
