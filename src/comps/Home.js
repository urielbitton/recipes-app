import React, { useContext } from 'react'
import Card from './Card'
import { StoreContext } from './StoreContext'

function Home() {

  const {recipes} = useContext(StoreContext)
  const recommended = recipes.map(rec => {
    if(rec.recommend)
      return <Card rec={rec}/>
  })

  return (
    <div className="homepage apppage">
       <div className="appsection">
        <h4>Recommended</h4>
          {recommended}
       </div>
    </div>
  )
}

export default Home