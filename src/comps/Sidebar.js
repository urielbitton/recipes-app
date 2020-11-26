import React from 'react'
import { BrowserRouter as Router,Switch,Route,NavLink,Link,useHistory } from "react-router-dom"
 

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logocont">
        <i className="fas fa-egg-fried"></i>
        <h3>Recipify</h3>
      </div>
       <div className="menu">
          <div className="innermenu">
            <i className="spacer"></i>
            <NavLink exact to="/" activeClassName="activelink"><i className="fad fa-home-heart"></i>Home</NavLink>
            <NavLink to="/recipes" activeClassName="activelink"><i className="fad fa-hat-chef"></i>Recipes</NavLink>
            <NavLink to="/browse" activeClassName="activelink"><i className="fad fa-utensils"></i>Browse</NavLink>
            <NavLink to="/favorites" activeClassName="activelink"><i className="fad fa-heart"></i>Favorites</NavLink>
            <NavLink to="/settings" activeClassName="activelink"><i className="fad fa-cog"></i>Settings</NavLink>
          </div>
          <div className="spacer"></div>
          <Link to="/addrecipe"><button><i className="far fa-plus"></i>Add Recipe</button></Link>
       </div>

    </div>
  )
}

export default Sidebar