import React, { useState } from 'react'
import {Inputs} from './Inputs'
import firebase from 'firebase'

function SettingsAccount() {

  let user = firebase.auth().currentUser
  const [proflink, setProfLink] = useState(user.photoURL?user.photoURL:"'https://i.imgur.com/w9mmIm3.png'")
  const [fname, setFname] = useState(user.displayName.split(' ')[0])
  const [lname, setLname] = useState(user.displayName.split(' ')[1])
  const [email, setEmail] = useState(user.email)
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [password, setPassword] = useState('')

  function saveSettings() {
    user.updateProfile({
      displayName: fname+" "+lname,
      photoURL: proflink
    }) 
  }

  return (
    <div className="settingsaccount">
      <h5>Account Settings</h5>
      <div className="settingsgrid">
        <div className="settingsheadrow">
          <div className="settingprofpic" style={{backgroundImage: "url("+proflink+")"}}></div>
          <div className="settingsinfotxt">
            <h4>{fname} {lname}</h4>
            <span style={{display: city?"block":"none"}}><i class="fad fa-map-marker-alt"></i>{city}, {country}</span>
            <span style={{display: email?"block":"none"}}><i class="fad fa-envelope"></i>{email}</span>
          </div>
        </div>
        <Inputs title="First Name" value={fname} onchange={(val) => setFname(val)}/>
        <Inputs title="Last Name" value={lname} onchange={(val) => setLname(val)}/>
        <Inputs title="Email" onchange={(val) => setEmail(val)}/>
        <Inputs title="City" onchange={(val) => setCity(val)}/>
        <Inputs title="Country" onchange={(val) => setCountry(val)}/>
        <Inputs title="Profile Picture Link" onchange={(val) => setProfLink(val)}/>
        <Inputs title="Password" type="password" value={password} onchange={(val) => setPassword(val)}/>

      </div>
      <button onClick={() => saveSettings()} className="savesettingbtn">Save</button>
    </div> 
  )
}

export default SettingsAccount