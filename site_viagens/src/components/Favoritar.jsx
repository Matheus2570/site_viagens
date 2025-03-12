import React, { useState } from 'react';
import './Favoritar.css'; 

const coracao = () => {
  const [efavorito, seteFavorito] = useState(false);

  const favorito = () => {
    seteFavorito(!efavorito);
  };

  return (
    <button className="heart-button" onClick={favorito}>
      <i className={`bx bxs-heart ${efavorito ? 'red-heart' : ''}`}></i>
    </button>
  );
};

export default coracao;
