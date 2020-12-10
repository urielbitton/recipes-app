import React from 'react'
import {Switchs} from './Inputs'

function SettingsTheme() {
  return (
    <div className="settingstheme">
      <h5>Theme Settings</h5>
        <div className="settingsgrid">
          <select>
            <option>Classic Theme</option>
            <option>Purple Haze</option>
            <option>Fire Red</option>
            <option>Apple Green</option>
          </select>
          <Switchs title="" checked="true"/>
        </div>
        <button className="savesettingbtn">Save</button>
    </div>
  )
}

export default SettingsTheme