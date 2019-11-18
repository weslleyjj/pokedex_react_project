import React from "react";
import "./styles/PokeCell.css";
import sprites from "../assets/sprites.png";
/* função simples para atribuir as células em branco as sprites de cada pokemon a partir da ordem crescente do id */
const PokeCell = ({pokeClass, handleOnClick}) => {
    const {id, backgroundPosition} = pokeClass;
    const style = {backgroundImage: `url(${sprites})`, backgroundPosition};
    return (
        <button style={style} className="poke-cell" onClick={() => handleOnClick(id)}></button>
    );
}

export default PokeCell;