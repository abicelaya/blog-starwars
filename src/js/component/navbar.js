import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container-fluid">
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://logos-marcas.com/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" style={{width: "12rem"}}/>
			</Link>
			<div className="ml-auto">
				{ <Link to="/details">
					<button className="btn btn-primary">Favorites</button>
				</Link> }
			</div>
		</nav>
		</div>
	);
};
