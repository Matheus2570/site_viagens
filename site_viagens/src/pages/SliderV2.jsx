import { useState } from "react";
import imagem1 from "../assets/brown-wooden-dock.jpg";
import imagem2 from "../assets/cascade-boat-clean-china-natural-rural.jpg";
import imagem3 from "../assets/seoraksan-mountains-is-covered-by-morning-fog-sunrise-seoul-korea.jpg";
import "../pages/Sliders.css"

function SliderHome() {
  const imagens = [imagem1, imagem2, imagem3];

  const [imagemAtual, setImagemAtual] = useState(0);

  const Proximo = () => {
    setImagemAtual((imagemAtual + 1) % imagens.length);
  };

  const Anterior = () => {
    setImagemAtual((imagemAtual - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="meio">
      <div id="slider">
        {imagens.map((imagem, index) => (
          <img
            key={index}
            className="img"
            src={imagem}
            alt={`Imagem ${index + 1}`}
            style={{ display: index === imagemAtual ? "block" : "none" }}
          />
        ))}
        <button id="prevBtn" className="sliderBtn" onClick={Anterior}>
          &lt;
        </button>
        <button id="nextBtn" className="sliderBtn" onClick={Proximo}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default SliderHome;
