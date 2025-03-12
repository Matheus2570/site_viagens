import "./Viajem.css"
import Header from "../components/Header.jsx";
import Slider from "../components/Slider.jsx"
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import imagem1 from "../assets/beautiful-aerial-shot-florence-italy-architecture-evening.jpg";
import imagem2 from "../assets/beautiful-shot-ponte-vecchio-florence-italy-with-cloudy-gray-sky-background.jpg";
import imagem3 from "../assets/old-street-european-town.jpg";
import CardDentro from "../components/CardDentro.jsx";
import ProximaViajem from "../components/ProximaViajem.jsx"

function Viajem2() {
  const imagens = [imagem1, imagem2, imagem3];

  return (
    <>
      <Header />
      <Nav/>
      <Slider imagens={imagens} />

      <CardDentro 
  nome={imagem1} 
  descricao="Descrição detalhada do lugar" 
/>

<ProximaViajem texto="Próximo" caminho="/viajem3" />
      <Footer/>
    </>
  );
}
export default Viajem2;
