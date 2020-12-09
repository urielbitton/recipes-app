import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { StoreContext } from './StoreContext'
import firebase from 'firebase'

function Favorites() {

  const {recipes} = useContext(StoreContext)
  const [recipeslist, setRecipeslist] = useState([])
  let userid = firebase.auth().currentUser.uid

  const favoritesrow = recipeslist && recipeslist.map(rec => {
    if(rec.favorite)
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
    <div className="favoritespage apppage">
       <div className="appsection">
        <h4>Favorites</h4>
          {favoritesrow}
       </div>
    </div>
  )
}

export default Favorites