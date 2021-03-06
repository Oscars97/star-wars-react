import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import PlanetsCard from "../component/PlanetsCard.jsx";
import "../../styles/cards.scss";
import shortid from "shortid";
import Favs from "../component/Favs.jsx";
const PlanetsList = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="card-container planets">
				<h1 className="title-characters">Planets</h1>
				{store.planetas.map(item => {
					return <PlanetsCard name={item.name} key={item.id} id={item.id} />;
				})}
			</div>
			<Favs />
		</div>
	);
};

export default PlanetsList;
