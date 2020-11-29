import React, { useContext } from 'react'
import Card from './Card'
import CatCard from './CatCard'
import { StoreContext } from './StoreContext'

function Home(props) {

  const {recipes} = useContext(StoreContext)
  const newest = recipes.slice(0,5).map(rec => {
      if(props.pattern.test(rec.name.toLowerCase()) || props.pattern === '')
        return <Card rec={rec}/>
  })
  const vegrow = recipes.slice(0,5).map(rec => {
    if((rec.category === "vegetable") && (props.pattern.test(rec.name.toLowerCase()) || props.pattern === ''))
      return <CatCard rec={rec}/>
  })
  const chickenrow = recipes.slice(0,5).map(rec => {
    if((rec.category === "chicken") && (props.pattern.test(rec.name.toLowerCase()) || props.pattern === ''))
      return <CatCard rec={rec}/>
  })
  const ricerow = recipes.slice(0,5).map(rec => {
    if((rec.category === "rice") && (props.pattern.test(rec.name.toLowerCase()) || props.pattern === ''))
      return <CatCard rec={rec}/>
  })

  return (
    <div className="homepage apppage">
       <div className="appsection">
        <h4>Newest Recipes</h4>
          {newest}
        <h4>Vegetable Based</h4>
          {vegrow}
        <h4>Chicken Based</h4>
          {chickenrow}
        <h4>Rice Based</h4>
          {ricerow}
       </div>
       
    </div>
  )
}

export default Home