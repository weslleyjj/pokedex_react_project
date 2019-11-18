import React, { Component } from "react";
import "./styles/App.css";
import PokeList from "./PokeList";
import DetailView from "./DetailView";
import Pokemon from "../Pokemon";

class App extends Component {
	constructor() {
		super();
		this.state = {
			pokemon: {}
		};

		this.handleOnClick = this.handleOnClick.bind(this); /*função que irá cuidar do evento de clique do usuário nas celulas dos pokemons*/
	}

	handleOnClick(id) {
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`) /*Ao clique do usuario irá determinar o id específico do pokemon para atribuir ao objeto pokemon simples*/
			.then(res => res.json())
			.then(data => {
				const pokemon = new Pokemon(data);
				this.setState({ pokemon });
			})
			.catch(err => console.log(err));
		document.getElementById("detalhes").style.display = "none"; /*função para esconder a div de detalhes caso o usuário selecione outro pokemon*/
	}

	render() {
		return (
			<div id="app" className="App">
				<PokeList handleOnClick={this.handleOnClick} />
				<DetailView pokemon={this.state.pokemon} />
			</div>
		);
	}
}

export default App;
