import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import { StoreContext } from './StoreContext'

function CatCard(props) {

  const {temprecipe} = useContext(StoreContext)

  function createTempRecipe() {
    temprecipe.id = props.rec.id
    temprecipe.img = props.rec.img
    temprecipe.name = props.rec.name
    temprecipe.ktype = props.rec.ktype
    temprecipe.ratings = props.rec.ratings
    temprecipe.preptime = props.rec.preptime
    temprecipe.calories = props.rec.calories
    temprecipe.notes = props.rec.notes
    temprecipe.ingredients = props.rec.ingredients
    temprecipe.recipe = props.rec.recipe
    temprecipe.favorite = props.rec.favorite
    temprecipe.servings = props.rec.servings
    temprecipe.category = props.rec.category
    temprecipe.level = props.rec.level
    temprecipe.video = props.rec.video
  }
  
  return (
    <Link to={`/recipe/${props.rec.id}`} onClick={() => createTempRecipe()}>
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