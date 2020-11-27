import React, { useContext } from 'react'
import Card from './Card'
import { StoreContext } from './StoreContext'

function Favorites() {

  const {recipes} = useContext(StoreContext)
  const favoritesrow = recipes.map(rec => {
    if(rec.favorite)
      return <Card rec={rec}/>
  })

  return (
    <div className="favoritespage apppage">
       <div className="appsection">
        <h4>Favorites</h4>
          {favoritesrow}
       </div>
    </div>
  )
}

export default Favorites