import "./Home.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import BotaoCurtir from "../components/BotaoCurtir";
import Cards from "../components/Cards";
import Footer from "../components/Footer"
import Grecia from "../assets/cityscape-polignano-mare-surrounded-by-sea-sunlight-cloudy-sky-italy.jpg"
import Florenca from "../assets/beautiful-aerial-shot-florence-italy-architecture-evening.jpg"
import Maldivas from "../assets/landscape-tropical-vacation-palm-summer.jpg"
import Canada from "../assets/beautiful-shot-boats-parked-near-coal-harbour-vancouver.jpg"
import imagem1 from "../assets/brown-wooden-dock.jpg";
import imagem2 from "../assets/cascade-boat-clean-china-natural-rural.jpg";
import imagem3 from "../assets/seoraksan-mountains-is-covered-by-morning-fog-sunrise-seoul-korea.jpg";

function Home() {
  const imagens = [imagem1, imagem2, imagem3];

  return (
    <>
      <Header />
      <Nav />
  <Slider imagens={imagens} />
      <BotaoCurtir />
      <main className="main">
        <div className="conteiner">
          <Cards
            img={Grecia}
            alt="Imagem"
            titulo="GRÉCIA"
            nota={5.8}
            descricao="Grécia te fazer viajar na história. Viaje com a gente!"
            valor="5 diárias, 5x R$550,00 SEM JUROS!!"
             link="/viajem1"
          />
          <Cards
            img={Florenca}
            alt="Imagem"
            titulo="ITÁLIA"
            nota={9.7}
            descricao="Viaje para Itália e acalme sua mentes em suas férias."
            valor="8 diárias, 5x R$1.559,00 SEM JUROS!!"
            link="/viajem2"
          />
          <Cards
            img={Maldivas}
            alt="Imagem"
            titulo="MALDIVAS"
            nota={8.3}
            descricao="Viajar é bom, e para maldivas melhor ainda!"
            valor="5 diárias, 5x R$240,00 SEM JUROS!!"
            link="/viajem3"

          />
          <Cards
            img={Canada}
            alt="Imagem"
            titulo="CANADÁ"
            nota={8.2}
            descricao="Viagem para canadá pode acabar com seus problemas facilmente! "
            valor="10 diárias, 5x R$550,00 SEM JUROS!!"
            link="/viajem4"
          />
        </div>
      </main>

      <Footer/>
    </>
  );
}

export default Home;
