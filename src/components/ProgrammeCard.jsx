import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/programme-card.css';

const ProgrammeCard = ({ title, description, image, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);  // Navigate to the page on click
    }
  };

  return (
    <div className="programme-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      
      <div className="programme-image">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

    </div>
  );
};

export default ProgrammeCard;
