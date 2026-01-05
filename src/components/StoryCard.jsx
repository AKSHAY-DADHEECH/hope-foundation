import React from 'react';
import '../styles/components/story-card.css';

const StoryCard = ({ title, content, image }) => (
  <div className="story-card">
    
    <div className="story-image">
      <img src={image} alt={title} />
    </div>

    <div className="story-content">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>

  </div>
);

export default StoryCard;
