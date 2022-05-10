import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



export const DetailsEpisodes= (props) => { 
	const parametro = useParams()
	const { store, actions} = useContext(Context);
	const episode= store.episode[parametro.id-1]
	

	return (
		<div className="container justify-content-center">
		<div className="card detailsCards text-center">
			<div className="card-header">
				Details
			</div>
			<div className="card-body">
			<img id="imagenDetails" src="https://images-na.ssl-images-amazon.com/images/I/91ht9KbsprL.jpg" style={{width: "25rem"}}/>
				<br/>
				<br/>
				<h5 className="card-title">{episode?.name}</h5>
				<p className="card-text">{episode?.episode}</p>
				<p className="card-text">{episode?.created}</p>
				<a href={episode?.url} className="card-text">{episode?.url}</a>
		 		
		 		

			</div>
			<div className="card-footer text-center">
				<Link to={"/"}>
      			<button className="btn btn-link back">Back</button>
    			</Link>
			</div>
		</div>
		</div>


	)
}
