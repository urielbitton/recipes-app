import React from 'react'
import { BrowserRouter as Router,Switch,Route,NavLink } from "react-router-dom"
import SettingsAccount from './SettingsAccount'
import SettingsGeneral from './SettingsGeneral'
import SettingsTheme from './SettingsTheme'

function Settings() {
  return (
    <div className="settingspage apppage">
       <div className="settingscont">
         <div className="headernav">
           <NavLink exact to="/settings/" activeClassName="activenavlink">General</NavLink>
           <NavLink activeClassName="activenavlink" to="/settings/account">Account</NavLink>
           <NavLink activeClassName="activenavlink" to="/settings/theme">Theme</NavLink>
         </div>
         <div className="settingscontent">
           <Route exact path="/settings">
            <SettingsGeneral />
           </Route>
           <Route path="/settings/account">
            <SettingsAccount />
           </Route>
           <Route path="/settings/theme">
            <SettingsTheme />
           </Route>
         </div>
       </div> 
    </div>
  )
}

export default Settings