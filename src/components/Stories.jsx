import React from 'react';
import StoryCard from './StoryCard';
import '../styles/components/stories.css';

import childEdu from '../assets/child-education.jpg';
import medicalAid from '../assets/medical-aid.jpg';
import womenEmpowerment from '../assets/women-empowerment.jpg';

const storiesData = [
  {
    title: 'Child Education',
    content: 'A story of hope and learning.',
    image: childEdu
  },
  {
    title: 'Medical Aid',
    content: 'Providing health for all.',
    image: medicalAid
  },
  {
    title: 'Women Empowerment',
    content: 'Empowering women to build a better future.',
    image: womenEmpowerment
  }
];

const Stories = () => (
  <section className="stories">
    <h2>Success Stories</h2>

    <div className="story-list">
      {storiesData.map((story, index) => (
        <StoryCard key={index} {...story} />
      ))}
    </div>
  </section>
);

export default Stories;
