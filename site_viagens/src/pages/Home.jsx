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
            titulo="Título do card"
            nota={4}
            descricao="Descrição do card"
            valor="R$ 1500 passagem ida e volta"
             link="/viajem1"
          />
          <Cards
            img={Florenca}
            alt="Imagem"
            titulo="Título do card"
            nota={4}
            descricao="Descrição do card"
            valor="R$ 1500 passagem ida e volta"
            link="/viajem2"
          />
          <Cards
            img={Maldivas}
            alt="Imagem"
            titulo="Título do card"
            nota={4}
            descricao="Descrição do card"
            valor="R$ 1500 passagem ida e volta"
            link="/viajem3"

          />
          <Cards
            img={Canada}
            alt="Imagem"
            titulo="Título do card"
            nota={4}
            descricao="Descrição do card"
            valor="R$ 1500 passagem ida e volta"
            link="/viajem4"
          />
        </div>
      </main>

      <Footer/>
    </>
  );
}

export default Home;
