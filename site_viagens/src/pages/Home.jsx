import "./Home.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Slider from "../components/SliderHome";
import BotaoCurtir from "../components/BotaoCurtir";
import Cards from "../components/Cards";
import Grecia from "../assets/grecia1.png";
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
            img={Grecia}
            alt="Imagem"
            titulo="Título do card"
            nota={4}
            descricao="Descrição do card"
            valor="R$ 1500 passagem ida e volta"
            link="/viajem2"
          />
          <Cards
            img={Grecia}
            alt="Imagem"
            titulo="Título do card"
            nota={4}
            descricao="Descrição do card"
            valor="R$ 1500 passagem ida e volta"
            link="/viajem3"

          />
          <Cards
            img={Grecia}
            alt="Imagem"
            titulo="Título do card"
            nota={4}
            descricao="Descrição do card"
            valor="R$ 1500 passagem ida e volta"
            link="/viajem4"

          />
        </div>
      </main>
    </>
  );
}

export default Home;
