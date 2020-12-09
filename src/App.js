import React, { useContext, useState, useEffect } from "react"
import { BrowserRouter as Router,Switch,Route,Link,useHistory, Redirect } from "react-router-dom"
import AppContainer from "./comps/AppContainer"
import "./styles.css"
import StoreContextProvider from "./comps/StoreContext"
import { StoreContext } from './comps/StoreContext'
import fire from './comps/fire'
import firebase from 'firebase'
import Login from './comps/Login'

export default function App() {

  const [user, setUser] = useState('')
  const [name, setName] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [hasAccount, setHasAccount] = useState(false)
  
  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }
  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }
  const handleLogin = () => {
    clearErrors()
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code) {
        case "auth/invalid-email":
        case "auth/user/disabled":
        case "auth/user-not-found":
          setEmailError(err.message)
        break
        case "auth/wrong-password":
          setPasswordError(err.message)
        break
        default:
      }
    })
  }
  const handleSignup = () => {
    clearErrors()
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(err => {
      switch(err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message)
        break
        case "auth/weak-password":
          setPasswordError(err.message)
        break
        default:
      }
    })
    fire.auth().onAuthStateChanged(user => {
      if(user) {
        user.updateProfile({
          displayName: name
        })
      }
      else {
        setUser('')
      }
    }) 
  }
  const handleLogout = () => {
    firebase.auth().signOut()
  }
  const authListener = () => {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        clearInputs()
        setUser(user)
      }
      else {
        setUser('')
      }
    })
  }

  useEffect(() => {
    authListener()
  },[]) 

  return (
    <div className="app">
      <StoreContextProvider>
        <Router>
        { 
          user?<AppContainer handleLogout={handleLogout} name={name}/>:
          <Login 
          email={email} 
          name={name}
          setName={setName}
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
          handleLogin={handleLogin} 
          handleSignup={handleSignup} 
          hasAccount={hasAccount} 
          setHasAccount={setHasAccount} 
          emailError={emailError}
          passwordError={passwordError}
        />
        }
        </Router>
      </StoreContextProvider>
    </div>
  );
}