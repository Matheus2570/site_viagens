import { Link } from 'react-router-dom';
import "./Cards.css";

function Cards(props) {
  return (
    <Link className='link' to={props.link}>
      <div className="bloco">
        <img src={props.img} alt={props.alt} />
        <div className="bloco2">
        <h1>{props.titulo}</h1>
        <p>Nota: {props.nota}</p>
        <p>{props.descricao}</p>
        <p>{props.valor}</p>
        </div>
      </div>
    </Link>
  );
}

export default Cards;