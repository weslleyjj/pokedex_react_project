import React from "react";
import PokemonFull from "./PokemonFull";
import "./styles/Detalhes.css";


class Detalhes extends React.Component {
	constructor() {
		super();
		this.state = {
			id: 0,
			isLoading: true,
			isLoaded: false,
			poke: PokemonFull,
			
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
					poke: new PokemonFull(data),
										
				})
				
			);
	}

	componentDidMount() {
		this.carregarPokemon();
		
	}
	/*função para passar a classe css correta para apresentar o tipo do pokemon nas cores certas */
	identificarTipo(tipo){
		return (tipo === "normal" ? "normal" : 
		tipo === "fire" ? "fire" : 
		tipo === "water" ? "water" : 
		tipo ==="electric" ? "electric" : 
		tipo === "grass" ? "grass" : 
		tipo === "ice" ? "ice" : 
		tipo === "fighting" ? "fighting" : 
		tipo === "poison" ? "poison" : 
		tipo === "ground" ? "ground" : 
		tipo === "flying" ? "flying" : 
		tipo === "psychic" ? "psychic" : 
		tipo === "bug" ? "bug" : 
		tipo === "rock" ? "rock" : 
		tipo === "ghost" ? "ghost" : 
		tipo === "dragon" ? "dragon" : 
		tipo === "dark" ? "dark" : 
		tipo === "steel" ? "steel" : 
		tipo === "fairy" ? "fairy" : "");
		/*uso do if ternário para melhor escrita do código  */

	}
	render() {
		/*condicional feito para interromper um loop infinito de renderizações */
		if (this.props.id !== this.state.id) {
			this.componentDidMount();
								
		}

		return (
			<div className="container">
				<div className="row detalhes bg-secondary text-center">
					<div className="col-md-4">
					<h1> #{this.state.poke.id} - {this.state.poke.nome} </h1>
					<br/>
					<img src={this.state.poke.spritegif} className="sprite" alt={this.state.poke.sprite}></img>
					<div className="mt-5 mb-3 d-flex text-uppercase">
						{/*O uso do concat é para unir as classes css e bootstrap para exibir os tipos do pokemon */}
						<p className={"ml-3 badge badge-pill ".concat(this.identificarTipo(this.state.poke.type1))} > {this.state.poke.type1} </p>
						<p className={"ml-1 badge badge-pill ".concat(this.identificarTipo(this.state.poke.type2))} > {this.state.poke.type2} </p>	 
					</div>
					
					</div>
					<div className="col-md-8">
						<h2>Atributos Iniciais</h2>
						<p>HP</p>
						<div className="progress">							
  							<div className="progress-bar bg-danger basemediaalta" role="progressbar" 								 
							  >{this.state.poke.hp} </div>
						</div>
						<p>Ataque</p>
						<div className="progress">							
  							<div className="progress-bar  basemediabaixa" role="progressbar" 								 
							  >{this.state.poke.atack} </div>
						</div>
						<p>Defesa</p>
						<div className="progress">							
  							<div className="progress-bar bg-warning basebaixa" role="progressbar" 								 
							  >{this.state.poke.defesa} </div>
						</div>
						<p>Velocidade</p>
						<div className="progress">							
  							<div className="progress-bar bg-success basemedia" role="progressbar" 								 
							  >{this.state.poke.speed} </div>
						</div>
						<p>Ataque Especial</p>
						<div className="progress">							
  							<div className="progress-bar bg-dark basealta" role="progressbar" 								 
							  >{this.state.poke.spatck} </div>
						</div>
						<p>Defesa Especial</p>
						<div className="progress">							
  							<div className="progress-bar bg-info basemediaalta" role="progressbar" 								 
							  >{this.state.poke.spdef} </div>
						</div>
				</div>
				
				</div>
				<div className="row bg-info detalhes">
					<div className="col-md-7 text-center ">
						<h2>Sprites in game</h2>
						<br />
						Frente comum 
						<img className="sprites-shiny" src= {this.state.poke.sprite} alt=""></img>
						Costas comum
						<img className="sprites-shiny" src= {this.state.poke.spriteback} alt="" ></img>
						Frente Shiny
						<img className="sprites-shiny" src= {this.state.poke.spriteshiny} alt=""></img>
						Costas Shiny  
						<img className="sprites-shiny" src= {this.state.poke.spritebackshiny} alt=""></img>
					</div>
					<div className="text-center col-md-5">
						<h2>Habilidades Naturais</h2>
						<h4 className="badge badge-danger text-uppercase" > {this.state.poke.hab1} </h4>
						<h4 className="badge badge-warning text-uppercase tipo" > {this.state.poke.hab2} </h4>
						
						<div className="movimentos mt-2 detalhes bg-dark">
							<h2>Movimentos</h2>
							<p>{this.state.poke.moves}</p>
						</div>

					</div>
					
				</div>
			</div>
			
			
		);
	}
	
}

export default Detalhes;
