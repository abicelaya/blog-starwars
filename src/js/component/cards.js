import React from 'react'
import { Link } from "react-router-dom";

 export const Cards = (props) => {
  return (
    <div className="card item" style={{width: "18rem"}}>
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    
    <p className="card-text">{props.text}</p>
    <p className="card-text">{props.status}</p>
    <p className="card-text">{props.date}</p>
    <Link to={"/details/"+props.id}>
      <button className="btn btn-primary">Learn more</button>
    </Link>
					
		
  </div>
</div>
  )
}

