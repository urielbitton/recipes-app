import React, { useContext, useState } from "react"
import { BrowserRouter as Router,Switch,Route,Link,useHistory, Redirect } from "react-router-dom"
import AppContainer from "./comps/AppContainer"
import "./styles.css"
import StoreContextProvider from "./comps/StoreContext"

export default function App() {
  return (
    <div className="app">
      <StoreContextProvider>
        <Router>
          <AppContainer />
        </Router>
      </StoreContextProvider>
    </div>
  );
}