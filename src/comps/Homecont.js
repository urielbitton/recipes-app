import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link,useHistory, Redirect } from "react-router-dom"
import Home from './Home'
import Recipes from './Recipes'
import Browse from './Browse'
import Favorites from './Favorites'
import Settings from './Settings'

function Homecont() { 
  return (
    <div className="homecont">
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
      </Switch>
    </div> 
  )
}

export default Homecont