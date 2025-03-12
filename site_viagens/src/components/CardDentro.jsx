import "./CardDentro.css";
import Estrelas from "../components/Estrelas";
import Favoritar from "./Favoritar.jsx";
import Reservado from "./Reserve.jsx";


function CardDentro(props) {
    return (
        <>
            <article className="article">
                <div className="BlocoMaior">
                    <img src={props.nome} alt="" />
                    <div className="BlocoDescriAvali">
                        <div className="Descricao">
                            <p>{props.descricao}</p>
                        </div>
                        <div className="column">
                        <div className="Avaliacao">
                            <Estrelas />
                        </div>
                        <div className="Favorite">
                            <Favoritar />
                            <p>Favorite a viajem</p>
                        </div>

                        </div>
                   
                    </div>

                    <div className="BlocoDataFavorit">

                      
                    </div>
                    <Reservado/>
                </div>
            </article>

           
        </>
    );
}

export default CardDentro;