import React, {useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"

function Login(props) {

  const {name, setName, email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError, googleLogin } = props
  
  return ( 
    <div className="loginpage"> 
      <div className="logincont">
        <i className="fas fa-user-alt mainlogicon"></i>
        <h3>{hasAccount?"Login":"Register"}</h3>
        <div className="spacers"></div>
        <form onSubmit={(e) => e.preventDefault()}> 
          <label><input placeholder="Full Name" autoFocus required value={name} onChange={(e) => setName(e.target.value)} /></label>
          <label><input placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          <p className="errormsg">{emailError}</p>
          <label><input placeholder="Password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/></label>
          <p className="errormsg">{passwordError}</p>
        </form>
        {hasAccount?
        <><button onClick={handleLogin}>Log in</button><small>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Create Account</span></small></>
        :<><button onClick={handleSignup}>Register</button><small>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></small></>}
      </div>
    </div>
  )
}

export default Login 