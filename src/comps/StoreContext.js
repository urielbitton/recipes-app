import React, {createContext, useState} from 'react'
import firebase from 'firebase'

export const StoreContext = createContext()

const StoreContextProvider = (props) => { 

  const [recipes, setRecipes] = useState([
    
  ])
  const [temprecipe, setTemprecipe] = useState({
    id: null,
    name: "",
    img: "",
    ktype: "",
    category: "",
    preptime: "",
    servings: null,
    ratings: null,
    calories: null,
    notes: "",
    ingredients: [],
    recipe: [],
    favorite: false,
    recommend: false,
    level: '',
    video: '',
  })
  const [pinned, setPinned] = useState([

  ])
  const [notifs, setNotifs] = useState([
    
  ])
  const [trash, setTrash] = useState([
    [],[],[]
  ])
  const [account, setAccount] = useState({
    id: null,
    profimg: "",
    fname: "",
    lname: "",
    email: "",
    city: "",
    provstate: "",
    country: "",
    birthday: null,
    settings: {
 
    }
  }) 
 


  return (
    <StoreContext.Provider value={{recipes, setRecipes, pinned, setPinned, trash, setTrash, account, setAccount, notifs, setNotifs, temprecipe, setTemprecipe}}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider