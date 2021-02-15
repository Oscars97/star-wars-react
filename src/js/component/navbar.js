import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img src="https://img.icons8.com/ios-filled/50/000000/star-wars.png" />
				</span>
			</Link>

			<div className="dropdown dropstart">
				<a
					className="btn btn-danger dropdown-toggle"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					Dropdown link
				</a>

				<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
					{store.planetas.map(item => {
						return <li key={item.uid}>{item.name}</li>;
					})}
				</ul>
			</div>
		</nav>
	);
};
