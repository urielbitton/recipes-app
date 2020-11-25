import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import Home from './Home'
import Recipes from './Recipes'
import Browse from './Browse'
import Favorites from './Favorites'
import Settings from './Settings'
import OneRecipe from './OneRecipe'
import { StoreContext } from './StoreContext'

function Homecont() { 

  const {account} = useContext(StoreContext)
  const [daytime, setDaytime] = useState('')

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
          <OneRecipe /> 
        </Route>
      </Switch>
    </div> 
  )
}

export default Homecont