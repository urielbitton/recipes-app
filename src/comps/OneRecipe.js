import React, {useContext, useState} from 'react'
import { StoreContext } from './StoreContext'
import {Inputs} from './Inputs'

function OneRecipe() {

  const {temprecipe, setTemprecipe, recipes} = useContext(StoreContext)
  const [update, setUpdate] = useState(0)
  const [id, setId] = useState(temprecipe.id)
  const [name, setName] = useState(temprecipe.name)
  const [img, setImg] = useState(temprecipe.img)
  const [ktype, setKtype] = useState(temprecipe.ktype)
  const [category, setCategory] = useState(temprecipe.category)
  const [preptime, setPreptime] = useState(temprecipe.preptime)
  const [servings, setServings] = useState(temprecipe.servings)
  const [calories, setCalories] = useState(temprecipe.calories)
  const [level, setLevel] = useState(temprecipe.level)
  const [video, setVideo] = useState(temprecipe.video)
  const [notes, setNotes] = useState(temprecipe.notes)
  const [favorite, setFavorite] = useState(temprecipe.favorite)
  const [ratings, setRatings] = useState(temprecipe.ratings)
  const [ingredients, setIngredients] = useState(temprecipe.ingredients)
  const [recipe, setRecipe] = useState(temprecipe.recipe)
  const [openeditor, setOpeneditor] = useState(false)

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
    return <p><span>-</span>{el.name}</p>
  })

  function toggleFavorite() {
    temprecipe.favorite = !temprecipe.favorite
    recipes.map(el => {
      if(el.id === temprecipe.id)
        el.favorite = temprecipe.favorite
    })
    setUpdate(prev => prev+1)
  }  
  function saveRecipe() {
    const currentrecipe = {id:id,name:name, img:img, ktype:ktype, category:category, preptime:preptime, servings:servings, calories:calories, level:level, ingredients:ingredients, recipe:recipe, ratings:ratings, video:video, notes:notes, favorite:favorite}
    recipes.map(rec => {
      if(rec.id === id) { 
        rec.id=id;rec.name=name; rec.img=img; rec.ktype=ktype; rec.category=category; rec.preptime=preptime; rec.servings=servings; rec.calories=calories; rec.level=level; rec.ingredients=ingredients; rec.recipe=recipe; rec.ratings=ratings; rec.video=video; rec.notes=notes; rec.favorite=favorite
      }
    })
    setTemprecipe(currentrecipe)
    document.querySelector('.apppage').scrollTo(0,0) 
    setOpeneditor(false)
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
          <h5><i className="fad fa-list"></i>Recipe Details</h5>
          <h6><div><i className="fad fa-apple-alt"></i>Category:</div> <span>{temprecipe.category}</span></h6>
          <h6><div><i className="fad fa-meat"></i>Type:</div> <span>{temprecipe.ktype}</span></h6>
          <h6><div><i className="fad fa-pizza"></i>Servings:</div> <span>{temprecipe.servings}</span></h6>
          <h6><div><i className="fad fa-clock"></i>Preparation Time:</div> <span>{temprecipe.preptime}</span></h6>
          <h6><div><i className="far fa-weight"></i>Calories:</div> <span>{temprecipe.calories}</span></h6>
          <h6><div><i className="fad fa-level-up-alt"></i>Difficulty:</div> <span>{temprecipe.level}</span></h6>
        </div>
        <div className="nutritioncont">
          <h5><i className="fad fa-apple-alt"></i>Nutrition Facts</h5>
        </div>
        <div className="videocont">
          <h5><i className="fad fa-play"></i>Videos</h5>
          <iframe title={temprecipe.id} src={`https://www.youtube.com/embed/${temprecipe.video}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        </div>
      </div>
      <div className="spacerl"></div>
      <div className="oneactionscont">
        <button onClick={() => setOpeneditor(true)}><i className="fad fa-edit"></i>Edit Recipe</button>
        <button><i className="fad fa-trash"></i>Delete Recipe</button>
      </div> 

      <div className="recipeeditcover" style={{display: openeditor?"block":"none"}} onClick={() => setOpeneditor(false)}></div> 
      <div className="recipeeditcont" style={{right: openeditor?"0":"-650px"}}>
        <i className="fal fa-times" onClick={() => setOpeneditor(false)}></i>
        <h2>Edit Recipe</h2>
        <div className="innereditorcont">
          <Inputs title="Recipe name" value={name} onchange={(val) => setName(val)} />
          <Inputs title="Image link" value={img} onchange={(val) => setImg(val)} />
          <Inputs title="Recipe Type" value={ktype} onchange={(val) => setKtype(val)} />
          <Inputs title="Category" value={category} onchange={(val) => setCategory(val)} />
          <Inputs title="Prep time" value={preptime} onchange={(val) => setPreptime(val)} />
          <Inputs title="Servings" value={servings} onchange={(val) => setServings(val)} />
          <Inputs title="Calories" value={calories} onchange={(val) => setCalories(val)} />
          <Inputs title="Difficulty Level" value={level} onchange={(val) => setLevel(val)} />
          <Inputs title="Video link" value={video} onchange={(val) => setVideo(val)} />
          <div></div>
        </div>
        <div className="editoractions">
          <button onClick={() => saveRecipe()}>Save Changes</button>
          <button>Reset</button>
        </div>
      </div>

    </div>
  )
}

export default OneRecipe