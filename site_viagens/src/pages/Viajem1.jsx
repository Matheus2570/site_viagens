import "./Viajem.css"
import Header from "../components/Header.jsx";
import Slider from "../components/Slider.jsx"
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import imagem1 from "../assets/cityscape-polignano-mare-surrounded-by-sea-sunlight-cloudy-sky-italy.jpg";
import imagem2 from "../assets/celsus-library-ephesus-ancient-city-izmir-turkey.jpg";
import imagem3 from "../assets/beautiful-wooden-chairs-table-front-beautiful-old-house-sky.jpg";
import CardDentro from "../components/CardDentro.jsx";
import ProximaViajem from "../components/ProximaViajem.jsx"









function Viajem1() {
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

export default Viajem1;
