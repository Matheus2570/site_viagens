import { useState } from "react";
import "./Estrelas.css"; 

function Avaliacao() {
  const [nota, setNota] = useState(0);

  return (
    <div className="avaliacao-container">
      <div className="estrelas">
        {[1, 2, 3, 4, 5].map((num) => (
          <button key={num} onClick={() => setNota(num)} className="star-button">
            <i className={`bx bxs-star`} style={{ color: nota >= num ? "#ffa500" : "#808080" }}></i>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Avaliacao;
