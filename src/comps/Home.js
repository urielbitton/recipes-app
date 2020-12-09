import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import CatCard from './CatCard'
import { StoreContext } from './StoreContext'
import firebase from 'firebase'

function Home(props) {

  const {recipes, account} = useContext(StoreContext)

  const [daytime, setDaytime] = useState('')
  const [bday, setBday] = useState(false)
  const [recipeslist, setRecipeslist] = useState([])
  let userid = firebase.auth().currentUser.uid
  let username = firebase.auth().currentUser.displayName

  const newest = recipeslist && recipeslist.slice(0,5).map(rec => {
      if(props.pattern.test(rec.name.toLowerCase()) || props.pattern === '')
        return <Card rec={rec}/>
  })
  const vegrow = recipeslist && recipeslist.slice(0,5).map(rec => {
    if((rec.category === "Vegetable") && (props.pattern.test(rec.name.toLowerCase()) || props.pattern === ''))
      return <CatCard rec={rec}/>
  })
  const chickenrow = recipeslist && recipeslist.slice(0,5).map(rec => {
    if((rec.category === "Chicken") && (props.pattern.test(rec.name.toLowerCase()) || props.pattern === ''))
      return <CatCard rec={rec}/>
  })
  const ricerow = recipeslist && recipeslist.slice(0,5).map(rec => {
    if((rec.category === "Rice") && (props.pattern.test(rec.name.toLowerCase()) || props.pattern === ''))
      return <CatCard rec={rec}/>
  })
  const ingredsnum = recipeslist && recipeslist.map(el => {
    return el.ingredients
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
          <div><i style={{display: bday?"inline":"none"}} class="far fa-birthday-cake"></i>{username}</div>
          {
            daytime==="Morning"?<img src="https://i.imgur.com/94gOe6w.png" alt=""/>:
            daytime==="Afternoon"?<img src="https://i.imgur.com/tpCAEAC.png" alt=""/>:
            <img src="https://i.imgur.com/BStgGnV.png" alt=""/>
          }
        </h2>
        <div className="statsboxcont">
          <div>
            <div className="statsbox">
              <h4>{recipes.length}<h6>Recipes</h6></h4>
              <i className="fal fa-hat-chef"></i>
            </div>
            <div className="statsbox">
              <h4>{ingredsnum.flat().length}<h6>Ingredients</h6></h4>
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
        <h4>Categories</h4>
        <div className="categcont">
          <div className="categdiv">
            <img src="https://i.imgur.com/9w3Ejct.jpg" alt=""/>
            <h5>Dairy</h5>
            <small>Discover delicious dairy recipes</small>
            <button>View All</button>
          </div>
          <div className="categdiv">
            <img src="https://i.imgur.com/IM0SPOa.jpg" alt=""/>
            <h5>Meat</h5>
            <small>View various meath recipes</small>
            <button>View All</button>
          </div>
          <div className="categdiv">
            <img src="https://i.imgur.com/xFhdjtQ.jpg" alt=""/>
            <h5>Parve</h5>
            <small>Find your parve recipes in one place</small>
            <button>View All</button>
          </div>
        </div>
       </div>
       
    </div>
  )
}

export default Home