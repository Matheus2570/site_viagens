
import Header from "../components/Header.jsx";
import Slider from "../components/Slider.jsx"
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import imagem1 from "../assets/beautiful-shot-boats-parked-near-coal-harbour-vancouver.jpg";
import imagem2 from "../assets/high-angle-shot-clear-frozen-lake-surrounded-by-mountainous-scenery.jpg";
import imagem3 from "../assets/beautiful-shot-boathouses-autumn.jpg";
import CardDentro from "../components/CardDentro.jsx";
import ProximaViajem from "../components/ProximaViajem.jsx"

function Viajem4() {
  const imagens = [imagem1, imagem2, imagem3];

  return (
    <>
      <Header />
      <Nav/>
      <Slider imagens={imagens} />

      <CardDentro 
  nome={imagem1} 
  descricao= {
      <>
      País da América do Norte com uma natureza exuberante, cidades vibrantes e uma grande diversidade cultural.<br></br><br></br>
      PACOTE IMPERDIVÉL<br></br>
      Hóspedes: até 2 pessoas; <br></br> 
      Diárias: 10 (dez);<br></br>
      Incluso: Café da manhã, Almoço, Café da tarde, Janta, Área de lazer, Guia turístico por 5 horas diárias, Cancelamento gratuito;<br></br>
      Valor a vista: R$10.000,00, Ou até 12x R$834,00 sem juros!!! <br></br>
      Disponível até: 07/06/2025
      </>
  }
/>

<ProximaViajem texto="Próximo" caminho="/" />
      <Footer/>
    </>
  );
}
export default Viajem4;
