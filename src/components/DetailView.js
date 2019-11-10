import React from "react";
import ReactDOM from "react-dom";
import "./styles/DetailView.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Detalhes from "./Detalhes";
import Pokemon from "../Pokemon";

const DetailView = ({pokemon}) => {
    const {id, name, sprite, type} = pokemon;    
    
    return (
        <section className="detail-view">
            <img src={sprite} className="sprite-image" alt="sprite" />
            <div className="data-wrapper">
                <h3 className="data-name">ID: {id} {name} </h3>
                <p className="data-char"> Type: {type} </p>
            </div>            
            <button type="button" className="btn btn-success detalhes" data-toggle="collapse" data-target="#detalhes" 
            onClick={ () => {
                ReactDOM.render(<Detalhes num={id} />, document.getElementById("detalhes"));
            } }  >Mais Detalhes </button>
        </section>
    );
}

export default DetailView;