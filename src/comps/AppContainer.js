import React from 'react'
import Sidebar from './Sidebar'
import Homecont from './Homecont'
import Navbar from './Navbar'

function AppContainer() {
  return (
    <div className="appcontainer">
       <Sidebar />
       <Homecont />
       <Navbar />
    </div>
  )
}

export default AppContainer