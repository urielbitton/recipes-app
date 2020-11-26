import React, { useState } from 'react'
import {Inputs} from './Inputs'

function AddRecipe() {

  const [opencreate, setOpencreate] = useState(false)
  const [stage, setStage] = useState(1)

  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [ktype, setKtype] = useState('')
  const [category, setCategory] = useState('')
  const [preptime, setPreptime] = useState('')
  const [servings, setServings] = useState('')
  const [calories, setCalories] = useState('')
  const [level, setLevel] = useState('')

  return (
    <div className="addrecipepage apppage">
      <div className="newrecipediv" onClick={() => setOpencreate(true)}>
        <i className="fad fa-hat-chef"></i>
        <h4>Create New Recipe</h4>
      </div>
 

      <div className="createrecipecont" style={{display: opencreate?"flex":"none"}}>
        <i className="far fa-times closecreate" onClick={() => setOpencreate(false)}></i>
        <div className="createrecipediv">
          <i className="fas fa-egg-fried egglogo"></i>
          <div className="stage" style={{display: stage===1?"block":"none"}}>
            <div className="innerstage">
              <h3>Add a recipe title & image</h3>
              <Inputs title="Recipe Name" placeholder="Sesame Chicken..." onchange={(val) => setName(val)} />
              <Inputs title="Recipe Image" placeholder="Provide image link" onchange={(val) => setImg(val)} />
              <hr/>
              <h4>{name}</h4>
              <div className="recipeimgplace" style={{backgroundImage: `url(${img})`}}/>
            </div>
          </div>
          <div className="stage" style={{display: stage===2?"block":"none"}}>
            <div className="innerstage">
              <h3>Add Recipe Information</h3>
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
              <h3>Add Ingredients</h3>
            </div>
          </div>
          <div className="stage" style={{display: stage===4?"block":"none"}}>
            <div className="innerstage">
              <h3>Add Recipe Steps</h3>
            </div>
          </div> 
          <div className="stage" style={{display: stage===5?"block":"none"}}>
            <div className="innerstage">
              <h3>Add Extra Details</h3>
            </div>
          </div>
          <div className="stagebtndiv">
            <button onClick={() => stage>1?setStage(prev => prev-1):""}><i class="fad fa-backward"></i>Back</button>
            <button onClick={() => stage<5?setStage(prev => prev+1):""}>{stage===5?"Done":"Next"}<i class="fad fa-forward"></i></button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AddRecipe