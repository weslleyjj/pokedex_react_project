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

		this.handleOnClick = this.handleOnClick.bind(this);
	}

	handleOnClick(id) {
		fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
			.then(res => res.json())
			.then(data => {
				const pokemon = new Pokemon(data);
				this.setState({ pokemon });
			})
			.catch(err => console.log(err));
		document.getElementById("detalhes").style.display = "none";
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
