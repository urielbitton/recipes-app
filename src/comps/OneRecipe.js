import React, {useContext} from 'react'
import { StoreContext } from './StoreContext'

function OneRecipe(props) {

  const {temprecipe, setTemprecipe} = useContext(StoreContext)

  const ingreds = temprecipe.ingredients.map(el => {
    return <div className="ingreditem">
      <div><i class="fas fa-seedling"></i></div>
      <h6>{el}</h6>
    </div>
  })
 
  return (
    <div className="onerecipepage apppage">
      <div className="onerecipehead">
        <button><i class="fas fa-play"></i>Play Recipe</button>
        <div className="covercont" style={{backgroundImage: `url(${temprecipe.img})`}}></div>
        <img className="centerimg" src={temprecipe.img} alt="" />
        <h2>{temprecipe.name}</h2>
        <div className="oneratings">
          {Array(temprecipe.ratings).fill().map((_) => <i className="fas fa-star"></i>)}
        </div>
        <p>{temprecipe.notes}</p>
        <div className="oneprepdiv">
          <small><i class="far fa-clock"></i>{temprecipe.preptime}</small>
          <small><i class="far fa-weight"></i>{temprecipe.calories}</small>
        </div>
      </div>
      <div className="spacerl"></div>
      <div className="ingredientscont">
        <h5>Ingredients <span>{temprecipe.ingredients.length} items</span></h5>
        <div className="ingredientsdiv">
          {ingreds}
        </div>
      </div>

    </div>
  )
}

export default OneRecipe