import "./CardDentro.css";
import Estrelas from "../components/Estrelas";
import Favoritar from "./Favoritar.jsx";


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
                        <div className="Avaliacao">
                            <Estrelas />
                        </div>
                    </div>

                    <div className="BlocoDataFavorit">
                        <div className="DataEDisponibilidade">
                            <p>{props.dataedisponibilidade}</p>
                        </div>
                        <div className="Favorite">
                            <Favoritar />
                            <p>Favorite a viajem</p>
                        </div>
                    </div>
                </div>
            </article>

           
        </>
    );
}

export default CardDentro;