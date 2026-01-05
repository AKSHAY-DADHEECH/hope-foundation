import React from 'react';
import ProgrammeCard from './ProgrammeCard';
import '../styles/components/programmes.css';

import educationImg from '../assets/education.jpg';
import healthcareImg from '../assets/healthcare.jpg';
import womenImg from '../assets/women.jpg';
import livelihoodImg from '../assets/livelihood.jpg'; // Add these 3 images to assets
import disasterImg from '../assets/disaster.jpg';
import donateImg from '../assets/donate.jpg';

const programmesData = [
  {
    title: 'Education',
    description: 'Empowering children with knowledge.',
    image: educationImg,
    link: '/education'
  },
  {
    title: 'Healthcare',
    description: 'Providing medical aid to the needy.',
    image: healthcareImg,
    link: '/healthcare'
  },
  {
    title: 'Women Empowerment',
    description: 'Supporting women in every field.',
    image: womenImg,
    link: '/women-empowerment'
  },
  {
    title: 'Livelihood',
    description: 'Helping people earn a sustainable living.',
    image: livelihoodImg,
    link: '/livelihood'
  },
  {
    title: 'Disaster Response',
    description: 'Providing relief during natural calamities.',
    image: disasterImg,
    link: '/disaster-response'
  },
  {
    title: 'Donate',
    description: 'Contribute and support our initiatives.',
    image: donateImg,
    link: '/donate'
  }
];

const Programmes = () => {
  return (
    <section className="programmes">
      <h2>Our Programmes</h2>

      <div className="programme-list">
        {programmesData.map((prog, index) => (
          <ProgrammeCard
            key={index}
            title={prog.title}
            description={prog.description}
            image={prog.image}
            link={prog.link}   // 🔹 Pass the link
          />
        ))}
      </div>
    </section>
  );
};

export default Programmes;
