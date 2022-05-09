import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

 export const Cards = (props) => {
   const {store, actions} = useContext(Context)
  return (
    <div className="card item" style={{width: "18rem"}}>
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    
    <p className="card-text">{props.text}</p>
    <p className="card-text">{props.status}</p>
    <p className="card-text">{props.date}</p>
    <Link to={"/details/"+props.id}>
      <button className="btn btn-info learnMore">Learn more</button>
    </Link>
    <button type="button" className="btn btn-info" onClick={
      ()=>{
        if (!store.favChar.includes(props.title)) {
        actions.addFav([...store.favChar, props.title])

        }


        }}> <i className="far fa-heart"></i></button>
    
		
  </div>
</div>
  )
}

