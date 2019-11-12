import React from "react";
import Pokemon from "../Pokemon";

const Detalhes = (props) => {
    let pokemon;
    fetch(`http://pokeapi.co/api/v2/pokemon/${props.num}/`);
        
    console.log(pokemon.name);
    return (
        <div className="container">
            <div className="row">
                <h1>Nome: {} </h1>
            </div>
        </div>
    );
}

export default Detalhes;