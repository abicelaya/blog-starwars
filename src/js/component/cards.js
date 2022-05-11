import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

 export const Cards = (props) => {
   const {store, actions} = useContext(Context)
  return (
    <div className="card item" >
  <img src={props.image ?? "https://images-na.ssl-images-amazon.com/images/I/91ht9KbsprL.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    
    <p className="card-text">{props.text}</p>
    <p className="card-text">{props.status}</p>
    <p className="card-text">{props.date}</p>
    <Link to={(props.type == "episode" ? "/details-episode/" : "/details/" )+props.id}>
      <button className="btn btn-link learnMore">Learn more</button>
    </Link>
    <button type="button" className="btn btn-link" onClick={
      ()=>{
        if (!store.favChar.includes(props.title)) {
        actions.updateFav([...store.favChar, props.title])

        }


        }}> <i className="far fa-heart"></i></button>
    
		
  </div>
</div>
  )
}

