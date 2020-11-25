import React, {useContext} from 'react'
import { StoreContext } from './StoreContext'

function OneRecipe(props) {

  const {temprecipe, setTemprecipe} = useContext(StoreContext)
 
  return (
    <div className="onerecipepage">
      <div className="covercont" style={{backgroundImage: `url(${temprecipe.img})`}}></div>
    </div>
  )
}

export default OneRecipe