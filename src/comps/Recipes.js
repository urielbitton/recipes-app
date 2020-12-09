import React, {useContext, useEffect, useState} from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom"
import Card from './Card'
import { StoreContext } from './StoreContext'
import firebase from 'firebase'

function Recipes() {

  const {recipes} = useContext(StoreContext)

  const [recipeslist, setRecipeslist] = useState([])
  let userid = firebase.auth().currentUser.uid

  const allrecipes = recipeslist && recipeslist.map(rec => {
    return <Card rec={rec}/>
  }) 

  useEffect(() => {
    const recipeRef = firebase.database().ref('Recipes')
    let query = recipeRef.orderByChild('uid').equalTo(userid); 
    query.on('value', (snapshot) => {
      const recipes = snapshot.val() 
      const recipeslist = []
      for (let id in recipes) {
        recipeslist.push({id, ...recipes[id] })
      } 
      setRecipeslist(recipeslist)
    })
  },[]) 
 
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