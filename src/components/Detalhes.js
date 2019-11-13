import React from "react";

class Detalhes extends React.Component {
	constructor() {
		super();
		this.state = {
			id: 0,
			isLoading: true,
			isLoaded: false,
			pokemon: []
		};
	}
	carregarPokemon() {
		fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
			.then(response => response.json())
			.then(data =>
				this.setState({
					id: this.props.id,
					isLoading: false,
					isLoaded: true,
					pokemon: data
				})
			);
	}

	componentDidMount() {
		this.carregarPokemon();
	}
	render() {
		if (this.props.id != this.state.id) {
			this.componentDidMount();
		}

		return (
			<div>
				<h1>Hello, {this.state.pokemon.name}</h1>
			</div>
		);
	}
}

export default Detalhes;
