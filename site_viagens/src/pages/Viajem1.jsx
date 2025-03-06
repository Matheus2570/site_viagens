import React from "react";
import Header from "../components/Header.jsx";
import Slider from "../components/SliderHome.jsx"
import Nav from "../components/Nav.jsx"
import imagem1 from "../assets/grecia1.png";
import imagem2 from "../assets/grecia2.png";
import imagem3 from "../assets/grecia3.png";

function Viajem1() {
    const imagens = [imagem1, imagem2, imagem3];

  return (
    <>
      <Header />
      <Nav/>
      <Slider imagens={imagens} />
    </>
  );
}

export default Viajem1;
