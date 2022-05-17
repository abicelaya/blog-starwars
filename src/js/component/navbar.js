import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoImagen from "../../img/logo.png"
import rickAndMorty from "../../img/rickAndMorty.png"
import { Context } from "../store/appContext";

export const Navbar = () => {
	
	const {store, actions} = useContext(Context)
	return (
		<div className="container-fluid">
		<nav className="navbar navbar-light bg-black mb-3  logo">
			<Link to="/">
				<img src={logoImagen} style={{width: "7rem"}}/>
			</Link>
			
			<img id="imagenRam" src={rickAndMorty} style={{width: "25rem"}}/>
			
			<div className="dropdown">
			<button className="btn btn-link dropdown-toggle favorites" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
				Favorites
			</button>
			<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{store.favChar.map( (favName, idx)=> {
					return <li className="dropdown-item" key={idx}>{favName} 
					
					<button id="delete"
						onClick={() => {
							const result = store.favChar.filter( (val, id) => id != idx)
							actions.updateFav(result);
						}}>
						X
					</button></li>
				})}
			</ul>
			</div>
		</nav>
		</div>
	);
};
