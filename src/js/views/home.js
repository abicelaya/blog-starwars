import React from "react";
import "../../styles/home.css";
import {Cards} from "../component/cards";


export const Home = () => (
	<div className="container-fluid">
		<div className="row" id="personajes">	
		<h1>Personajes</h1>
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
	
		</div>

		<div className="row" id="planetas">
		<h1>Planetas</h1>
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		</div>

		<div className="row" id="naves">
		<h1>Naves</h1>
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		<Cards />
		</div>


		


		
		
	</div>
);
