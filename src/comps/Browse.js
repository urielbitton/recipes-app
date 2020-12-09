import React, {useEffect, useState} from 'react'
import firebase from 'firebase'
import Card from './Card'

function Browse() {

  const [recipeslist, setRecipeslist] = useState([])

  const browselist = recipeslist && recipeslist.map(rec => {
      return <Card rec={rec}/>
  })

  useEffect(() => {
    const recipeRef = firebase.database().ref('Recipes')
    recipeRef.on('value', (snapshot) => {
      const recipes = snapshot.val() 
      const recipeslist = []
      for (let id in recipes) {
        recipeslist.push({id, ...recipes[id] })
      } 
      setRecipeslist(recipeslist)
    })
  },[]) 

  return (
    <div className="browsepage apppage">
       <div className="appsection">
         <h4>Browse Recipes</h4>
          {browselist}
       </div>
    </div>
  )
}

export default Browse