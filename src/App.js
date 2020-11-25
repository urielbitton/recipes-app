import React from "react"
import { BrowserRouter as Router,Switch,Route,Link,useHistory, Redirect } from "react-router-dom"
import AppContainer from "./comps/AppContainer"
import "./styles.css"

export default function App() {
  return (
    <div className="App">
      <Router>
        <AppContainer />
      </Router>
    </div>
  );
}