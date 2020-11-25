import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link,useHistory } from "react-router-dom"
 

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logocont">
        <i class="fas fa-egg-fried"></i>
        <h3>Recipify</h3>
      </div>
       <div className="menu">
          <Link to="/"><i class="fad fa-home-heart"></i>Home</Link>
          <Link to="/recipes"><i class="fad fa-hat-chef"></i>Recipes</Link>
          <Link to="/browse"><i class="fad fa-utensils"></i>Browse</Link>
          <Link to="/favorites"><i class="fad fa-heart"></i>Favorites</Link>
          <Link to="/settings"><i class="fad fa-cog"></i>Settings</Link>
       </div>
    </div>
  )
}

export default Sidebar