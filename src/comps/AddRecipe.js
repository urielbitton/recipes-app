import React, { useState, useContext, useRef, useEffect } from 'react'
import { BrowserRouter as Router,Switch,Route,Link, useHistory } from "react-router-dom"
import {Inputs} from './Inputs'
import { StoreContext } from './StoreContext'
import firebase from 'firebase'

function AddRecipe(props) {

  const {recipes, setRecipes, setNotifs} = useContext(StoreContext)

  const [opencreate, setOpencreate] = useState(false)
  const [stage, setStage] = useState(1)
  const [id, setId] = useState((Math.floor(Math.random()* 9999)+1))
  const [name, setName] = useState('')
  const [img, setImg] = useState('https://images.unsplash.com/photo-1504712598893-24159a89200e')
  const [ktype, setKtype] = useState('Parve')
  const [category, setCategory] = useState('Vegetable')
  const [preptime, setPreptime] = useState('')
  const [servings, setServings] = useState('')
  const [calories, setCalories] = useState('')
  const [level, setLevel] = useState('')
  const [ingredname, setIngredname] = useState('')
  const [ingredamount, setIngredamount] = useState('')
  const [recipename, setRecipename] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [recipe, setRecipe] = useState([])
  const [video, setVideo] = useState('')
  const [notes, setNotes] = useState('')
  const [favorite, setFavorite] = useState(false)
  const [update, setUpdate] = useState(0)
  const [ratings, setRatings] = useState(0) 
  const formRef = useRef()
  const formRef2 = useRef()
  const history = useHistory()
  var userid = firebase.auth().currentUser
 
  const ingredientsrow = ingredients && ingredients.map(el => {
    return <h6> 
      <span><input disabled={el.edit?false:true} value={el.name} onChange={(e) => {el.name = e.target.value;setUpdate(prev => prev+1)}}/></span>
      <span><input disabled={el.edit?false:true} value={el.amount} onChange={(e) => {el.amount = e.target.value;setUpdate(prev => prev+1)}}/></span>
      <span>
        <i style={{color: el.edit?"var(--color)":""}} className={el.edit?"fad fa-check-circle":"fad fa-edit"} onClick={() => {el.edit?el.edit = false:el.edit = true;setUpdate(prev => prev+1)}}></i>
        <i className="fad fa-trash" onClick={() => deleteIngredient(el.id)}></i>
      </span>
      </h6> 
  })
  const recipesrow = recipe.map(el => {
    return <h6>
      <span>{recipe.indexOf(el)<10?"0"+(recipe.indexOf(el)+1):(recipe.indexOf(el)+1)}</span>
      <span><input disabled={el.edit?false:true} value={el.name} onChange={(e) => {el.name = e.target.value;setUpdate(prev => prev+1)}}/></span>
      <span>
        <i style={{color: el.edit?"var(--color)":""}} className={el.edit?"fad fa-check-circle":"fad fa-edit"} onClick={() => {el.edit?el.edit = false:el.edit = true;setUpdate(prev => prev+1)}}></i>
        <i className="fad fa-trash" onClick={() => deleteRecipeStep(el.id)}></i>
      </span>
      </h6>
  }) 

  function createRecipe() {
    if(name.length && ingredients.length) {
      const recipeRef = firebase.database().ref('Recipes')
      const recipes = {
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
      }  
      recipeRef.push(recipes)
      setOpencreate(false)
      setNotifs(prevNotif => [...prevNotif, {icon:"fad fa-check-circle",text:`Recipe "${name}" has been successfully created.` }]) 
      props.activatenotif(4000)
      history.push(`recipe/${id}`) 
    } 
    else {
      setNotifs(prevNotif => [...prevNotif, {icon:"fad fa-exclamation-circle",text:`Recipe information is missing. Please fill in required fields.` }]) 
      props.activatenotif(4000)
    }
  }
  function addIngredient() {
    if(ingredname.length && ingredamount.length) {
      ingredients.push({id:(Math.floor(Math.random()* 9999)+1), name:ingredname, amount:ingredamount, edit:false})
      formRef.current.reset()
      setIngredname('')
      setIngredamount('')
      setUpdate(prev => prev+1)
    }
  }
  function addRecipeSteps() {
    if(recipename.length) {
      recipe.push({id:(Math.floor(Math.random()* 9999)+1), name:recipename, edit:false})
      formRef2.current.reset() 
      setRecipename('')
      setUpdate(prev => prev+1)
    }
  }
  function deleteIngredient(ingid) {
    ingredients.map(el => {
      if(el.id === ingid) {
        let itemindex = ingredients.indexOf(el)
        ingredients.splice(itemindex,1)
        setUpdate(prev => prev+1)
      }
    })
  }
  function deleteRecipeStep(recid) {
    recipe.map(el => {
      if(el.id === recid) {
        let itemindex = recipe.indexOf(el)
        recipe.splice(itemindex,1)
        setUpdate(prev => prev+1)
      }
    })
  }
  
  useEffect(() => {
    const allstars = document.querySelectorAll('.starsdiv i')
    allstars.forEach(el => {
      el.onclick = () => {
        let starlevel = el.getAttribute('data-star')
        allstars.forEach(el2 => {
          if(starlevel < el2.getAttribute('data-star')) {
            el2.classList.remove('fas')
            el2.classList.add('fal')
          } 
          else {
            el2.classList.remove('fal')
            el2.classList.add('fas')
          } 
        })
        setRatings(parseInt(starlevel,10))
      }
    })
    
  },[])

  return (
    <div className="addrecipepage apppage">
      <div className="newrecipediv" onClick={() => setOpencreate(true)}>
        <i className="fad fa-hat-chef"></i>
        <h4>Create New Recipe</h4>
      </div>

      <div className="createrecipecont" style={{display: opencreate?"flex":"none"}}>
        <i className="far fa-times closecreate" onClick={() => {setOpencreate(false);setStage(1)}}></i>
        <div className="createrecipediv">
          <i className="fas fa-egg-fried egglogo"></i>
          <div className="stage" style={{display: stage===1?"block":"none"}}>
            <div className="innerstage">
              <h3><i className="fad fa-image"></i>Add a recipe title & image</h3>
              <Inputs title="Recipe Name" placeholder="Sesame Chicken..." onchange={(val) => setName(val)} />
              <Inputs title="Recipe Image" placeholder="Provide image link" onchange={(val) => setImg(val)} />
              <hr/>
              <h4>{name}</h4>
              <div className="recipeimgplace" style={{backgroundImage: `url(${img})`}}/>
            </div>
          </div>
          <div className="stage" style={{display: stage===2?"block":"none"}}>
            <div className="innerstage">
              <h3><i className="fad fa-info-circle"></i>Add Recipe Information</h3>
              <div>
              <label>
                <h6>Choose Recipe Type</h6>
                <select onChange={(e) => setKtype(e.target.value)}>
                  <option>Parve</option>
                  <option>Dairy</option>
                  <option>Meat</option>
                </select>
              </label>
              <label>
              <h6>Choose a Category</h6>
              <select onChange={(e) => setCategory(e.target.value)}>
                  <option>Vegetable</option>
                  <option>Chicken</option>
                  <option>Grains</option>
                  <option>Meat</option>
                  <option>Dessert</option>
                  <option>Breakfast</option>
                  <option>Beverage</option>
                </select>
              </label>
              </div>
              <div>
                <Inputs title="Prep Time" placeholder="15 min" onchange={(val) => setPreptime(val)} />
                <Inputs title="Servings" placeholder="5" type="number" onchange={(val) => setServings(val)} />
              </div>
              <div>
                <Inputs title="Calories" type="number" placeholder="380" onchange={(val) => setCalories(val)} />
                <Inputs title="Difficulty Level" placeholder="Hard" onchange={(val) => setLevel(val)} />
              </div>
            </div>
          </div>  
          <div className="stage" style={{display: stage===3?"block":"none"}}>
            <div className="innerstage">
              <h3><i className="fad fa-utensils"></i>Add Ingredients</h3>
              <form ref={formRef} onSubmit={(e) => e.preventDefault()}>
                <Inputs title="Name" placeholder="E.g. Garlic" onchange={(val) => setIngredname(val)} />  
                <Inputs title="Measurement" placeholder="E.g. 20mg" onchange={(val) => setIngredamount(val)} />
                <button className="formbtn1" onClick={() => addIngredient()}><i className="far fa-plus"></i>Add</button>
              </form> 
              <div className="ingredientsrow" data-update={update}>
                <h6 className="ingredientsrowhead">Name<span>Measurement</span><span></span></h6>
                <div>{ingredientsrow}</div>
              </div>
            </div>
          </div>
          <div className="stage" style={{display: stage===4?"block":"none"}}>
            <div className="innerstage">
              <h3><i className="fad fa-list-ol"></i>Add Recipe Steps</h3>
              <form ref={formRef2} onSubmit={(e) => e.preventDefault()}>
                <Inputs title="Recipe Step" placeholder="E.g. Add 20g of butter..." onchange={(val) => setRecipename(val)} />  
                <button className="formbtn2" onClick={() => addRecipeSteps()}><i className="far fa-plus"></i>Add</button>
              </form>
              <div className="ingredientsrow recipesrow"> 
                <div data-update={update}>{recipesrow}</div>
              </div>
            </div>
          </div> 
          <div className="stage" style={{display: stage===5?"block":"none"}}>
            <div className="innerstage">
            <h3><i className="fad fa-heart"></i>Add Extra Details</h3>
              <div className="starsdiv">
                <label><h6>Recipe Rating</h6></label>
                <i className="fal fa-star" data-star="1"></i>
                <i className="fal fa-star" data-star="2"></i>
                <i className="fal fa-star" data-star="3"></i>
                <i className="fal fa-star" data-star="4"></i>
                <i className="fal fa-star" data-star="5"></i> 
              </div>
              <textarea placeholder="Recipe notes..." onChange={(e) => setNotes(e.target.value)}/>
              <button onClick={() => setFavorite(prev => !prev)}><i className="fas fa-heart"></i>{favorite?"Favorited":"Add To Favorite"}</button>
              <Inputs title="Video link" placeholder="Provide youtube link" onchange={(val) => setVideo(val)} />
            </div>
          </div> 
          <div className="stagebtndiv">
            <button onClick={() => stage>1?setStage(prev => prev-1):""}><i className="fad fa-backward"></i>Back</button>
            <button onClick={() => stage<5?setStage(prev => prev+1):createRecipe()}>{stage===5?"Done":"Next"}<i className="fad fa-forward"></i></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddRecipe