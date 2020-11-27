import React, { useContext } from 'react'
import Card from './Card'
import { StoreContext } from './StoreContext'

function Home() {

  const {recipes} = useContext(StoreContext)
  const newest = recipes.slice(0,5).map(rec => {
      return <Card rec={rec}/>
  })

  return (
    <div className="homepage apppage">
       <div className="appsection">
        <h4>Newest Recipes</h4>
          {newest}
       </div>
    </div>
  )
}

export default Home