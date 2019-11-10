import React from "react";
import Pokemon from "../Pokemon";

const Detalhes = (props) => {
    let pokemon;
    const response = fetch(`http://pokeapi.co/api/v2/pokemon/${props.num}/`);
    console.log(response);
    response.json().then(data => {
        pokemon = new Pokemon(data);
    });    
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