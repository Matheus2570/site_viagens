
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
  descricao={
    <>
   Florença, capital da região Toscana, na Itália, abriga muitas obras de arte e arquitetura renascentistas. São 11 h 50 min para chegar.<br></br><br></br>
   PACOTE IMPERDÍVEL<br></br> 
   Até 6 pessoas  <br></br>
   8 diárias <br></br>
   Incluso: Café da manhã, Almoço, Café da tarde, Janta, Área de lazer, Guia turístico por 5 horas diárias, Cancelamento gratuito. <br></br>
   Valor a vista: R$7798,00, ou até 5 x R$1.559,00 sem juros!!! <br></br>
   Disponível até: 07/06/2025
    </>
  } 
/> 
<ProximaViajem texto="Próximo" caminho="/viajem3" />
      <Footer/>
    </>
  );
}
export default Viajem2;
