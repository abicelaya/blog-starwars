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
		

				return <Cards key={i} title={obj.name} text={obj.episode} date={obj.air_date} image="https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg"/>
			})
		},

		</div>
		
	</div>
)};
