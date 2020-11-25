import React, {useContext} from 'react'
import Card from './Card'
import { StoreContext } from './StoreContext'

function Recipes() {

  const {recipes} = useContext(StoreContext)

  const allrecipes = recipes.map(rec => {
    if(rec.recommend)
      return <Card rec={rec}/>
  })

  return (
    <div className="recipespage apppage">
       <div className="appsection">
         <h4>All Recipes</h4>
          {allrecipes}
       </div>
    </div>
  )
}

export default Recipes