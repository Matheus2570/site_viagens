import { useState } from "react";
import "./Slider.css";

function SliderHome(props) {
  const { imagens } = props;
  const [imagemAtual, setImagemAtual] = useState(0);

  const Proximo = () => {
    setImagemAtual((imagemAtual + 1) % imagens.length);
  };

  const Anterior = () => {
    setImagemAtual((imagemAtual - 1 + imagens.length) % imagens.length);
  };

  const iniciarSlide = () => {
    setTimeout(() => {
      Proximo()
    }, 5000)
  };

  iniciarSlide()

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