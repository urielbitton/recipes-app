import React, {useContext, useState} from 'react'
import { StoreContext } from './StoreContext'

function OneRecipe() {

  const {temprecipe, recipes} = useContext(StoreContext)
  const [update, setUpdate] = useState(0)

  const ingreds = temprecipe.ingredients.map(el => {
    return <div className="ingreditem">
      <div><i className="fas fa-seedling"></i></div>
      <div>
        <h6>{el.name}</h6>
        <small>{el.amount}</small>
      </div>
    </div>
  })
  const recipesteps = temprecipe.recipe.map(el => {
    return <p><span>-</span>{el}</p>
  })

  function toggleFavorite() {
    temprecipe.favorite = !temprecipe.favorite
    recipes.map(el => {
      if(el.id === temprecipe.id)
        el.favorite = temprecipe.favorite
    })
    setUpdate(prev => prev+1)
  } 
  
  return (
    <div className="onerecipepage apppage" data-update={update}>
      <div className="onerecipehead">
        <button className="playbtn"><i className="fas fa-play"></i>Play Recipe</button>
        <button className="favbtn" onClick={() => toggleFavorite()}><i className={temprecipe.favorite?"fas fa-heart":"far fa-heart"}></i>{temprecipe.favorite?"Favorited":"Add Favorite"}</button>
        <div className="covercont" style={{backgroundImage: `url(${temprecipe.img})`}}></div>
        <img className="centerimg" src={temprecipe.img} alt="" />
        <h2>{temprecipe.name}</h2>
        <div className="oneratings">
          {Array(temprecipe.ratings).fill().map((_) => <i className="fas fa-star"></i>)}
        </div>
        <p>{temprecipe.notes}</p>
        <div className="oneprepdiv">
          <small><i className="far fa-clock"></i>{temprecipe.preptime}</small>
          <small><i className="far fa-weight"></i>{temprecipe.calories}cal</small>
        </div>
      </div>
      <div className="spacerl"></div>
      <div className="ingredientscont">
        <h5><div><i className="fad fa-utensils-alt"></i>Ingredients</div> <span>{temprecipe.ingredients.length} items</span></h5>
        <div className="ingredientsdiv">
          {ingreds} 
        </div>
        <div className="spacer"></div>
        <div className="recipestepscont">
          <h5><div><i className="fad fa-hat-chef"></i>Recipe</div> <span>{temprecipe.recipe.length} steps</span></h5>
          {recipesteps}
        </div>
      </div>
      <div className="spacer"></div>
      <div className="extrascont">
        <div className="moredetailscont">
          <h5><i class="fad fa-list"></i>Recipe Details</h5>
          <h6><div><i class="fad fa-apple-alt"></i>Category:</div> <span>{temprecipe.category}</span></h6>
          <h6><div><i class="fad fa-meat"></i>Type:</div> <span>{temprecipe.ktype}</span></h6>
          <h6><div><i class="fad fa-pizza"></i>Servings:</div> <span>{temprecipe.servings}</span></h6>
          <h6><div><i class="fad fa-clock"></i>Preparation Time:</div> <span>{temprecipe.preptime}</span></h6>
          <h6><div><i className="far fa-weight"></i>Calories:</div> <span>{temprecipe.calories}</span></h6>
          <h6><div><i class="fad fa-level-up-alt"></i>Difficulty:</div> <span>{temprecipe.level}</span></h6>
        </div>
        <div className="nutritioncont">
          <h5><i class="fad fa-apple-alt"></i>Nutrition Facts</h5>
        </div>
        <div className="videocont">
          <h5><i class="fad fa-play"></i>Videos</h5>
          <iframe src={`https://www.youtube.com/embed/${temprecipe.video}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        </div>
      </div>
      

    </div>
  )
}

export default OneRecipe