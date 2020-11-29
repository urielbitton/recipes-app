import React, {useContext, useEffect} from 'react'
import {StoreContext} from './StoreContext'

function Notifs(props) {

  const {notifs} = useContext(StoreContext)

  const recentnotifs = notifs.map(el => {
    return <div className="notifs">
      <i class={el.icon}></i>
      <p>{el.text}</p>
      <button style={{display: el.showbtn?"block":"none"}}>{el.btntxt}</button>
      <i className="fal fa-times"></i>
    </div>
  })  


  return (
    <div className="notifscont">
      {recentnotifs}
    </div>
  ) 
}

export default Notifs