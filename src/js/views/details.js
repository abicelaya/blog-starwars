import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/details.css";
import { useParams } from "react-router-dom";
import { CardsDetails } from "../component/cardsDetails";


export const Details= (props) => {
	const parametro=useParams()
	const { store, actions} = useContext(Context);
	const character= store.character[parametro.id-1]

	return (


		<div className="container">
		<h1>{character?.name}</h1>
		<div className="card" id="personajes">	

		{character?.species}
		<br/>
		{character?.gender}
		<br/>
		{character?.location.name}
		<br/>
		{character?.origin.name}
		
		<Link to="/">
			<button className="btn btn-primary">Back home</button>
		</Link>
			
			
		
		
	
		</div>
		</div>

	)
}



