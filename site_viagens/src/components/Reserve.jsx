import React, { useState } from 'react';
import './Reserve.css'; 

function Reservado () {
  const [isReserved, setIsReserved] = useState(false);

  const handleClick = () => {
    setIsReserved(!isReserved);
  };

  return (
    <div className="container">
      <button className={isReserved ? 'button reserved' : 'button'} onClick={handleClick}>
        {isReserved ? 'Vajem reservada 🧳' : 'Reserve a viajem ✈️'}
      </button>
    </div>
  );
};

export default Reservado;