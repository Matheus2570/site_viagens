import "./Viajem.css"
import Header from "../components/Header.jsx";
import Slider from "../components/Slider.jsx"
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import imagem1 from "../assets/landscape-tropical-vacation-palm-summer.jpg";
import imagem2 from "../assets/blue-villa-beautiful-sea-hotel.jpg";
import imagem3 from "../assets/tropical-beach-with-thatched-hut-clear-blue-water-palm-trees.jpg";
import CardDentro from "../components/CardDentro.jsx";
import ProximaViajem from "../components/ProximaViajem.jsx"

function Viajem3() {
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

<ProximaViajem texto="Próximo" caminho="/viajem4" />
      <Footer/>
    </>
  );
}
export default Viajem3;
