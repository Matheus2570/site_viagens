import React, { useState } from 'react';
import './Reserve.css'; 

function Reservado () {
  const [isReserved, setIsReserved] = useState(false);

  const click = () => {
    setIsReserved(!isReserved);
  };

  return (
    <div className="container">
      <button className={isReserved ? 'botao reservado' : 'botao'} onClick={click}>
        {isReserved ? 'Viagem reservada 🧳' : 'Reserve a viagem ✈️'}
      </button>
    </div>
  );
};

export default Reservado;
