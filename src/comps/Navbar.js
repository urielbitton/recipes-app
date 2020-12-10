import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import firebase from 'firebase'

function Navbar(props) {

  let user = firebase.auth().currentUser
  
  return ( 
    <div className="navbar">
       <div className="topbar">
         <div className="toptools">
           <Link to="/settings/"><i class="fad fa-user-alt"></i></Link>
           <i className="fad fa-sign-out-alt" onClick={props.handleLogout}></i> 
          </div>
         
         <img src={user.photoURL?user.photoURL:"https://i.imgur.com/JWVZJyP.jpg"} alt=""/>
       </div>
    </div>
  )
}

export default Navbar