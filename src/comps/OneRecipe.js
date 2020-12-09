import React, {useContext, useState, useRef, useEffect} from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory } from "react-router-dom"
import { StoreContext } from './StoreContext'
import {Inputs} from './Inputs'
import firebase from 'firebase'


function OneRecipe(props) {

  const {temprecipe, setTemprecipe, recipes, setNotifs} = useContext(StoreContext)
  const [update, setUpdate] = useState(0)
  const [editupdate, setEditupdate] = useState(0)
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
  const [ingredname, setIngredname] = useState('')
  const [ingredamount, setIngredamount] = useState('')
  const [recipename, setRecipename] = useState('')
  const [openeditor, setOpeneditor] = useState(false)
  const [displaynotif, setDisplaynotif] = useState(false)
  const [listview, setListview] = useState(false)
  const [currrecipe, setCurrRecipe] = useState([])
  const history = useHistory()
  const formRef = useRef()
  const formRef2 = useRef()

  const ingreds = temprecipe.ingredients.map(el => {
    return <div className="ingreditem">
      <div><i className="fad fa-seedling"></i></div>
      <div> 
        <h6>{el.name}</h6>
        <small>{el.amount}</small>
      </div>
    </div>
  })
  const recipesteps = temprecipe.recipe.map(el => {
    return <p><span>-</span>{el.name}</p>
  })
  //edits
  const editingreds = temprecipe.ingredients.map(el => {
    return <div>
      <Inputs value={el.name} onchange={(val) => {el.name = val;setEditupdate(prev => prev+1)}} />
      <Inputs value={el.amount} onchange={(val) => {el.amount = val;setEditupdate(prev => prev+1)}} />
      <i class="fad fa-trash" onClick={() => deleteIngredient(el.id)}></i>
    </div>
  }) 
  const editrecipesteps = temprecipe.recipe.map(el => {
    return <div>
      <h6>{recipe.indexOf(el)<10?0+(recipe.indexOf(el)+1):recipe.indexOf(el)+1}</h6>
      <Inputs value={el.name} onchange={(val) => {el.name = val;setEditupdate(prev => prev+1)}} />
      <i class="fad fa-trash" onClick={() => deleteRecipeStep(el.id)}></i>
    </div>
  }) 

  function toggleFavorite() {
    temprecipe.favorite = !temprecipe.favorite
    recipes.map(el => {
      if(el.id === temprecipe.id)
        el.favorite = temprecipe.favorite
    })
    setUpdate(prev => prev+1)
  }  
  console.log(id)
  function saveRecipe() {
    const cardRef = firebase.database().ref('Recipes').child(id)
    cardRef.update({
      name,
      img,
      ktype,
      category,
      preptime,
      servings,
      calories,
      level,
      ingredients,
      recipe,
      video, 
      notes,
      favorite,
      ratings,  
    }) 
    const currentrecipe = {id:id,name:name, img:img, ktype:ktype, category:category, preptime:preptime, servings:servings, calories:calories, level:level, ingredients:ingredients, recipe:recipe, ratings:ratings, video:video, notes:notes, favorite:favorite}
    setNotifs(prevNotif => [...prevNotif, {icon:"fad fa-check-circle",text:`Recipe "${name}" has been successfully saved.`}])
    props.activatenotif(4000)   
    setTemprecipe(currentrecipe)
    document.querySelector('.apppage').scrollTo(0,0) 
    setOpeneditor(false)
  }
  function deleteRecipe() {
    const cardRef = firebase.database().ref('Recipes').child(id)
    cardRef.remove() 
    history.push('/recipes')
  }
  function addIngredient() {
    if(ingredname.length && ingredamount.length) {
      ingredients.push({id:(Math.floor(Math.random()* 9999)+1), name:ingredname, amount:ingredamount})
      formRef.current.reset()
      setIngredname('')
      setIngredamount('')
      setEditupdate(prev => prev+1)
    }
    const cardRef = firebase.database().ref('Recipes').child(id)
    cardRef.update({ingredients})
  }
  function addRecipeSteps() {
    if(recipename.length) {
      recipe.push({id:(Math.floor(Math.random()* 9999)+1), name:recipename})
      formRef2.current.reset() 
      setRecipename('')
      setEditupdate(prev => prev+1)
    }
    const cardRef = firebase.database().ref('Recipes').child(id)
    cardRef.update({recipe})
  }
  function deleteIngredient(ingid) {
    temprecipe.ingredients.map(el => {
      if(el.id === ingid) {
        let itemindex = temprecipe.ingredients.indexOf(el)
        temprecipe.ingredients.splice(itemindex,1)
        setEditupdate(prev => prev+1)
      }
    })
    const cardRef = firebase.database().ref('Recipes').child(id)
    cardRef.update({ingredients})
  }
  function deleteRecipeStep(recid) {
    temprecipe.recipe.map(el => {
      if(el.id === recid) {
        let itemindex = temprecipe.recipe.indexOf(el)
        temprecipe.recipe.splice(itemindex,1)
        setEditupdate(prev => prev+1)
      }
    })
    const cardRef = firebase.database().ref('Recipes').child(id)
    cardRef.update({recipe})
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
          <big>{temprecipe.preptime.split(' ')[0]}<small>{temprecipe.preptime.split(' ')[1]}</small></big>
          <hr/>
          <big>{temprecipe.calories}<small>Calories</small></big>
          <hr/>
          <big>{temprecipe.ingredients.length}<small>Ingredients</small></big>
        </div>
      </div>
      <div className="spacerl"></div>
      <div className="ingredientscont">
        <h5><div><i className="fad fa-utensils-alt"></i>Ingredients</div><span><i class={listview?"fas fa-th listview":"fad fa-list listview"} onClick={() => setListview(prev => !prev)}></i></span></h5>
        <div className={listview?"ingredientsdiv listviewcont":"ingredientsdiv"}>
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
        <button onClick={() => setDisplaynotif(true)}><i className="fad fa-trash"></i>Delete Recipe</button>
      </div> 

      <div className="onenotifcont" style={{display: displaynotif?"flex":"none"}}>
        <div className="notifs">
          <i class="fad fa-exclamation-circle"></i>
          <p>Are you sure you want to delete recipe "{name}" ?</p>
          <button onClick={() => deleteRecipe()}>Delete</button>
          <i className="fal fa-times" onClick={() => setDisplaynotif(false)}></i>
        </div>
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
          <div className="editarrcont" data-update={editupdate}>
            <h6>Ingredients</h6>
            <div><span>Name</span><span>Amount</span></div>
            {editingreds}
            <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
              <Inputs placeholder="E.g. Garlic" onchange={(val) => setIngredname(val)} />  
              <Inputs placeholder="E.g. 20mg" onchange={(val) => setIngredamount(val)} />
              <button onClick={() => addIngredient()}><i className="far fa-plus"></i></button>
            </form>
          </div>
          <div className="editarrcont editarrcont2" data-update={editupdate}>
            <h6>Recipe Steps</h6>
            {editrecipesteps}
            <form ref={formRef2} onSubmit={(e) => e.preventDefault()}>
              <Inputs placeholder="E.g. Add a cup of sugar and 2 pinches of salt..." onchange={(val) => setRecipename(val)} />  
              <button onClick={() => addRecipeSteps()}><i className="far fa-plus"></i></button>
            </form>
          </div>
          <Inputs title="Prep time" value={preptime} onchange={(val) => setPreptime(val)} />
          <Inputs title="Servings" value={servings} onchange={(val) => setServings(val)} />
          <Inputs title="Calories" value={calories} onchange={(val) => setCalories(val)} />
          <Inputs title="Difficulty Level" value={level} onchange={(val) => setLevel(val)} />
          <Inputs title="Video link" value={video} onchange={(val) => setVideo(val)} />
          <label><h6>Notes</h6><textarea value={notes} onChange={(e) => setNotes(e.target.value)}/></label>
          <label><h6>Favorite</h6><button onClick={() => setFavorite(prev => !prev)}>{favorite?"Remove From Favorites":"Add To Favorites"}</button></label>
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