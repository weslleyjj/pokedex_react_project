import React from "react";
import ReactDOM from "react-dom";
import "./styles/DetailView.css";
import Detalhes from "./Detalhes";


const DetailView = ({ pokemon }) => {
	const { id, name, sprite, type, weight } = pokemon; /*uma constante com os valores que serão utilizados para mostrar os detalhes básicos na tela*/

	return (
		<section id="detailview" className="Detail-view">
			<img src={sprite} className="sprite-image" alt="sprite" />
			<div className="data-wrapper">
				<h4 className="data-name">
					ID: {id} {name}{" "}
				</h4>
				<p className="data-char"> Tipo: {type} </p>
				<p className="data-char">
					Peso: {parseFloat((weight / 2.2046).toFixed(2))} kg {/* função parsefloat e toFixed para mostrar na tela o resultado do calculo necessário para apresentar os quilos do pokemon  */}
				</p>
			</div>
			<button
				type="button"
				className="btn btn-success detalhesbtn"
				onClick={() => {
					document.getElementById("detalhes").style.display = "flex"; {/* ao contratio no App ao clicar aqui irá exibir a tela de detalhes do pokemon */}
					ReactDOM.render(
						<Detalhes id={id} />,
						document.getElementById("detalhes")
					);
				}}
			>
				Mais Detalhes
			</button>
		</section>
	);
};

export default DetailView;
