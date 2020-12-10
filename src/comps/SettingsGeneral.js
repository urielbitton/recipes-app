import React from 'react'
import {Switchs} from './Inputs'

function SettingsGeneral() {
  return (
    <div className="settingsgeneral">
        <h5>General Settings</h5>
        <div className="settingsgrid">
          <Switchs title="Dark mode" />
          <Switchs title="Enable Notifications" checked="true"/>
          <Switchs title="Pinned Recipes" checked="true"/>
        </div>
        <h5>Recipes</h5>
        <div className="settingsgrid">
          <Switchs title="Show my recipes in browse" checked="true"/>
          <Switchs title="Show creator on recipes" checked="true"/>
        </div>
        <button className="savesettingbtn">Save</button>
    </div> 
  )
}

export default SettingsGeneral