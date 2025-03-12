import React, { useState } from 'react';
import './Favoritar.css'; 

const HeartButton = () => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <button className="heart-button" onClick={toggleFavorite}>
      <i className={`bx bxs-heart ${isFavorited ? 'red-heart' : ''}`}></i>
    </button>
  );
};

export default HeartButton;
