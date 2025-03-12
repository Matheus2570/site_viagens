
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
  descricao= {
    <>
    As Maldivas são uma nação tropical no Oceano Índico composta por 26 atóis em formato de anel, 
    que são formados por mais de 1.000 ilhas de coral. 
    São 14 h 30 min para chegar (é necessário pegar barco)<br></br><br></br>
    PACOTE IMPERDÍVEL <br></br>
    Até 2 pessoas  <br></br>
    5 diárias <br></br>
    Incluso: Café da manhã, Almoço, Café da tarde, Janta, Área de lazer, Guia turístico por 5 horas diárias, Cancelamento gratuito. <br></br>
    Valor a vista:  R$8.493 <br></br>
    Ou até 3 x R$2.831 sem juros!!!<br></br>
    Disponível até: 07/06/2025
    </>
  } 
/>
 
<ProximaViajem texto="Próximo" caminho="/viajem4" />
      <Footer/>
    </>
  );
}
export default Viajem3;
