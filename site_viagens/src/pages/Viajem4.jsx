import "./Viajem.css"
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
  descricao="Descrição detalhada do lugar" 
  dataedisponibilidade="Disponível até 31/12/2025" 
/>

<ProximaViajem texto="Próximo" caminho="/viajem2" />
      <Footer/>
    </>
  );
}
export default Viajem4;
