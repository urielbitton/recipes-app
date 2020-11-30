import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import CatCard from './CatCard'
import { StoreContext } from './StoreContext'

function Home(props) {

  const {recipes, account} = useContext(StoreContext)

  const [daytime, setDaytime] = useState('')
  const [bday, setBday] = useState(false)

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

  useEffect(() => {
    let time = new Date().getHours()
    if(time >= 0 && time < 12) 
      setDaytime('Morning') 
    else if(time >= 12 && time <=17)
      setDaytime('Afternoon')
    else  
      setDaytime('Evening')

    let date = new Date()
    if(date.getDate() === 0 && ((date.getMonth()+1) === 0)) {
      setBday(true)   
    }
    else {
      setBday(false)
    }
  },[])

  return (
    <div className="homepage apppage">
       <div className="appsection">
       <div className="welcomecont">
        <h2>
          <span>{bday?"Happy Birthday!":`Good ${daytime}`}</span>
          <div><i style={{display: bday?"inline":"none"}} class="far fa-birthday-cake"></i>{account.fname+" "+account.lname}</div>
          <img src="https://i.imgur.com/94gOe6w.png" alt=""/>
        </h2>
        <div className="statsboxcont">
          <div>
            <div className="statsbox">
              <h4>15<h6>Recipes</h6></h4>
              <i className="fal fa-hat-chef"></i>
            </div>
            <div className="statsbox">
              <h4>200<h6>Ingredients</h6></h4>
              <i className="fal fa-utensils"></i>
            </div>
            <div className="statsbox">
              <h4>5<h6>Favorites</h6></h4>
              <i className="fal fa-heart"></i>
            </div>
          </div>
          <div className="homeupdates">
            <h5>Trending Sites</h5>
            <div>
              <h6><a href="https://www.yummly.com/" target="_blank" rel="noreferrer"><i class="fad fa-link"></i>Yummly.com</a></h6>
              <h6><a href="https://www.delish.com/"><i class="fad fa-link"></i>Delish.com</a></h6>
              <h6><a href="https://www.epicurious.com/"><i class="fad fa-link"></i>Epicurious.com</a></h6>
            </div>
          </div>
        </div>
       </div>
       
        <h4>Newly Added</h4>
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