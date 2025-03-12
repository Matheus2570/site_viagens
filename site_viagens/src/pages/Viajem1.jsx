
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
  descricao= {
    <>
    País do sudeste da Europa com milhares de ilhas espalhadas pelos mares.
    Sua capital conserva monumentos do século V a.c onde fica o templo Partenon. <br></br><br></br>
    PACOTE IMPERDIVÉL<br></br>
    Hóspedes: até 3 pessoas; <br></br> 
    Diárias: 5 (cinco);<br></br>
    Incluso: Café da manhã, Almoço, Café da tarde, Janta, Área de lazer, Guia turístico por 5 horas diárias, Cancelamento gratuito;<br></br>
    Valor avista: R$2550,00, Ou até 5 x R$550,00 sem juros!!! <br></br>
    Disponível até: 07/06/2025
    </>
  } 
/>

<ProximaViajem texto="Próximo" caminho="/viajem2" />
      <Footer/>
    </>
  );
}

export default Viajem1;
