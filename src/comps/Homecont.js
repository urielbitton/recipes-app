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

function Homecont() {  

  const {account, setNotifs} = useContext(StoreContext)
  const [daytime, setDaytime] = useState('')

  function activateNotif(time) {
    setTimeout(() => { 
      document.querySelector('.notifscont .notifs').style.cssText += 'opacity:0.9;top:5px'
      setTimeout(() => {
        document.querySelector('.notifscont .notifs').style.cssText += 'opacity:0;top:40px'
        setTimeout(() => { setNotifs([]) }, 200)
      }, time)  
    }, 100)
  }  

  useEffect(() => {
    let time = new Date().getHours()
    if(time >= 0 && time < 12) 
      setDaytime('Morning') 
    else if(time >= 12 && time <=17)
      setDaytime('Afternoon')
    else  
      setDaytime('Evening')
  },[])

  return (
    <div className="homecont">
      <div className="hometitles">
        <h2><span>Good {daytime}</span>{account.fname+" "+account.lname}</h2>
        <label className="maininputcont">
          <i class="far fa-search"></i>
          <input placeholder="Find a recipe..."/>
        </label>
      </div>
      <Switch> 
        <Route exact path="/">
          <Home /> 
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