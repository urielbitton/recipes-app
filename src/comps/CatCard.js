import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"

function CatCard(props) {
  return (
    <Link to={`/recipe/${props.rec.id}`}>
    <div className="catcardcont">
      <img src={props.rec.img} alt=""/>
      <div className="catcard">
        <div className="ratingsdiv">
          {Array(props.rec.ratings).fill().map((_) => <i className="fas fa-star"></i>)}
        </div>
        <h6>{props.rec.name}</h6>
        <div><small><i class="fal fa-clock"></i>{props.rec.preptime}</small>&emsp;
        <small><i class="fal fa-weight"></i>{props.rec.calories}</small></div>
      </div>
    </div>
    </Link> 
  )
}

export default CatCard