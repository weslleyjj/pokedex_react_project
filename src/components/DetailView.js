import React from "react";
import ReactDOM from "react-dom";
import "./styles/DetailView.css";
import Detalhes from "./Detalhes";


const DetailView = ({ pokemon }) => {
	const { id, name, sprite, type, weight } = pokemon;

	return (
		<section id="detailview" className="Detail-view">
			<img src={sprite} className="sprite-image" alt="sprite" />
			<div className="data-wrapper">
				<h4 className="data-name">
					ID: {id} {name}{" "}
				</h4>
				<p className="data-char"> Tipo: {type} </p>
				<p className="data-char">
					Peso: {parseFloat((weight / 2.2046).toFixed(2))} kg
				</p>
			</div>
			<button
				type="button"
				className="btn btn-success detalhesbtn"
				onClick={() => {
					document.getElementById("detalhes").style.display = "flex";
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
