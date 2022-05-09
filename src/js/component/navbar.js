import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store, actions} = useContext(Context)
	return (
		<div className="container-fluid">
		<nav className="navbar navbar-light bg-light mb-3 logo">
			<Link to="/">
				<img src="https://logos-marcas.com/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png" style={{width: "13rem"}}/>
			</Link>
	
			<div className="dropdown">
			<button className="btn btn-info dropdown-toggle favorites" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{store.favChar.map( (favName, idx)=> {
					return <li className="dropdown-item" key={idx}>{favName}</li>
				})}
			</ul>
			</div>
		</nav>
		</div>
	);
};
