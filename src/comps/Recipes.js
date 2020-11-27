import React, {useContext} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import Card from './Card'
import { StoreContext } from './StoreContext'

function Recipes() {

  const {recipes} = useContext(StoreContext)

  const allrecipes = recipes.map(rec => {
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