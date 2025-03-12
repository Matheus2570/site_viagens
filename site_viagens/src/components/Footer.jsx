import "./Footer.css";
import Grupo5 from "../assets/Integrantes-gupo-5.jpeg"

function Footer() {

  return (
    <>
      <footer className="Footer">
        <div className="Bloco1">
          <p>Texto</p>
          <p>Texto</p>
        </div>
        <div className="Bloco2img">
          <img src={Grupo5} alt="" />
        </div>
        <div className="Bloco3">
          <div className="BlocoSobreNos">
            <p>
              <div class="footer_social">
                <a href="https://www.instagram.com" target="_blank">
                  <i className='bx bxl-instagram'></i>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <i className='bx bxl-facebook'></i>
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <i className='bx bxl-twitter'></i>
                </a>
              </div>
            </p>
            <p>Nos somos o grupo 5</p>
          </div>
          <div className="BlocoReclamacoes">
            <p>Numero para reclamações:</p>
            <p>Numero para feedbacks e dúvidas</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
