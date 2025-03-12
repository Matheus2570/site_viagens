import "./Footer.css";
import Grupo5 from "../assets/Integrantes-gupo-5.jpeg";

function Footer() {
  return (
    <>
      <footer className="Footer">
        <div className="Bloco1">
          <div className="Bloco1-1">
            <p>
              Sobre: Site desenvolvido por todos os integrantes do grupo 5,
              formado no ano de 2024 com objetivo de colocar seis estudantes
              para trabalhar e desenvolver sites e aplicativos dinâmicos juntos
              gerando experiência social e profissional.
            </p>
          </div>
          <div className="Bloco1-2">
            <p className="consertando">
              Direitos reservador de Grupo 5 SESI SENAI Vinhedo Estado de SP
              @Institutodaeducação - Aprovação de direitos de imagem Nacional
              Brasileiro Mundial
            </p>
          </div>
          <div className="Bloco1-3">
            <p>
              Nossas parceiras aereas: <br></br>Voe Azul<br></br>
              Voe Gol <br></br>
              Voe Latam <br></br>
              American Airlines
            </p>
          </div>
          <div className="Bloco1-4">
            <p>
              Viagens disponíveis:<br></br>
              Grécia <br></br>
              Florença <br></br>
              Maldivas <br></br>
              Canadá
            </p>
          </div>
        </div>
        <div className="Bloco2img">
          <img src={Grupo5} alt="" />
        </div>
        <div className="Bloco3">
          <div className="BlocoSobreNos">
            <p>
              <div class="footer_social">
                <a href="https://www.instagram.com" target="_blank">
                  <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <i className="bx bxl-twitter"></i>
                </a>
              </div>
            </p>
            <p>Nós somos o grupo 5</p>
          </div>
          <div className="BlocoReclamacoes">
            <p>Numero para reclamações: 
            (19) 9891-24968/ 0800-9875 
            </p>
            <p>Numero para feedbacks e dúvidas:
            (19) 9891-24968/ 0800-9875 

            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
