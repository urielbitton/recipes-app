import React from 'react'
import Sidebar from './Sidebar'
import Homecont from './Homecont'
import Navbar from './Navbar'

function AppContainer(props) {
  return (
    <div className="appcontainer">
       <Sidebar />
       <Homecont />
       <Navbar handleLogout={props.handleLogout}/>
    </div>
  )
}

export default AppContainer