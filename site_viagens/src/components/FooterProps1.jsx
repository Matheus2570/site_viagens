import "./FooterProps1.css"


function Footer1(props) {
    return (
        <>
        <footer className="footer">
        <div className="container">
          <div className="footer_contact">
            <p> Email: {props.email}</p>
            <p>Telefone: {props.telefone}</p>
            <a href={props.instagram}>
            <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href={props.facebook}>
              <i className='bx bxl-facebook'></i>
            </a>
            <a href={props.twitter} >
              <i className='bx bxl-twitter'></i>
            </a>
          </div>
          
          <div className="footer_sobre"> 
            <p>Sobre:{props.sobre}</p>
          </div>
          <div className="footer_feedback"> 
            <p>Deixe aqui seu feedback: {props.feedback}</p>
          </div>
          <div className="footer_reclamacao"> 
          <a href={props.reclamacao}>RECLAME AQUI</a>
          </div>
          </div>
      </footer>

        </>
    );
  }

export default Footer1