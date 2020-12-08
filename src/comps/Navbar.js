import React from 'react'

function Navbar(props) {
  return ( 
    <div className="navbar">
       <div className="topbar">
         <div>
           <i class="fad fa-user-alt"></i>
           <i className="fad fa-sign-out-alt" onClick={props.handleLogout}></i> 
          </div>
         
         <img src="https://i.imgur.com/JWVZJyP.jpg" alt=""/>
       </div>
    </div>
  )
}

export default Navbar