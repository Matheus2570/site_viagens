import React from 'react';
import { Link } from 'react-router-dom';
import './ProximaViajem.css'; 

function ProximaViajem(props) {
    return (
        <div className="ProximaViajem">
            <Link to={props.caminho} className="ProximoLink">{props.texto}</Link>
        </div>
    );
};

export default ProximaViajem;