import React from 'react';
import './styles/PokeList.css';
import PokeCell from "./PokeCell";
import {pokeClasses} from "../pokeClasses";
/*Função para gerar as 151 células em branco que serão preenchidas com as sprites dos pokemon no componente PokeCell.js */
const PokeList = ({handleOnClick}) => {
  const cells = pokeClasses.map(pokeClass => {
    return (
      <PokeCell 
      key={pokeClass.id}
      pokeClass={pokeClass} 
      handleOnClick={handleOnClick}
      />
      );
    } 
  );
  return (
    <section className="poke-list">
      {cells}
    </section>
  )
}


export default PokeList;