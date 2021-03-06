import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import Home from './Home'
import Recipes from './Recipes'
import Browse from './Browse'
import Favorites from './Favorites'
import Settings from './Settings'
import OneRecipe from './OneRecipe'
import { StoreContext } from './StoreContext'
import AddRecipe from './AddRecipe'
import Notifs from './Notifs'
import firebase from 'firebase'

function Homecont(props) {  

  const {account, setNotifs} = useContext(StoreContext)

  const [darkmode, setDarkMode] = useState(false)
  const [keyword, setKeyword] = useState('') 
  const pattern = new RegExp('\\b' + keyword.replace(/[\W_]+/g,""), 'i')

  function activateNotif(time) {
    setTimeout(() => { 
      document.querySelector('.notifscont .notifs').style.cssText += 'opacity:0.9;top:5px'
      setTimeout(() => {
        document.querySelector('.notifscont .notifs').style.cssText += 'opacity:0;top:40px'
        setTimeout(() => { setNotifs([]) }, 200)
      }, time)  
    }, 100)
  }  


  return ( 
    <div className={darkmode?"homecont darkapp":"homecont"}>
      <div className="hometitles">
        <h1>Home</h1>
        <label className="maininputcont">
          <i class="far fa-search"></i>
          <input placeholder="Find a recipe..." onChange={(e) => setKeyword(e.target.value)}/>
        </label>
      </div>
      <Switch> 
        <Route exact path="/">
          <Home pattern={pattern} /> 
        </Route>
        <Route path="/recipes">
          <Recipes /> 
        </Route>
        <Route path="/browse">
          <Browse /> 
        </Route>
        <Route path="/favorites">
          <Favorites /> 
        </Route>
        <Route path="/settings">
          <Settings /> 
        </Route>
        <Route path="/recipe">
          <OneRecipe activatenotif={activateNotif} /> 
        </Route>
        <Route path="/addrecipe">
          <AddRecipe activatenotif={activateNotif} /> 
        </Route>
      </Switch>

      <Notifs />
    </div> 
  )
}

export default Homecont