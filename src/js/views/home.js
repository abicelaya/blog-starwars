import React, {useContext} from "react";
import "../../styles/home.css";
import {Cards} from "../component/cards";
import { Context } from "../store/appContext";


export const Home = () => {

	const {store, action} = useContext(Context);

	

return (
	<div className="container">
		<h1>Personajes</h1>
		<div className="carousel" id="personajes">	
		{
			store.character?.map((obj, i)=>{
				return <Cards key={i} id={obj.id} title={obj.name} text={obj.species} image={obj.image} status={obj.status}/>
			})
		},
		
	
		</div>

		<h1>Episodios</h1>
		<div className="carousel" id="episodios">
		{
			store.episode?.map((obj, i)=>{
		

				return <Cards key={i} id={obj.id} title={obj.name} text={obj.episode} date={obj.air_date} type="episode"/>
			})
		},

		</div>
		
	</div>
)};
