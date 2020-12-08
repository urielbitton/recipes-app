import React, {createContext, useState} from 'react'

export const StoreContext = createContext()

const StoreContextProvider = (props) => { 

  const [recipes, setRecipes] = useState([
   {
     id: 0,
     name: "Avocado Toast",
     img: "https://images.unsplash.com/photo-1603046891726-36bfd957e0bf",
     ktype: "parve",
     category: "vegetable",
     preptime: "5 min",
     servings: 1,
     ratings: 5,
     calories: 107,
     notes: "This is my favorite avocado recipe with eggs. I have it for breakfast every morning!",
     ingredients: [{id:0,name:'Avocados',amount:"2 fruits"},{id:1,name:"Bread",amount:'1 slice'},{id:2,name:'Lemon Juice',amount:'10ml'},{id:3,name:"Eggs",amount:"1 fried"},{id:4,name:"Toast",amount:'2 slices'},{id:5,name:"Garlic",amount:'1 clover'},{id:6,name:"Salt",amount:"1 pinch"},{id:7,name:"Onions",amount:"1 slice"},{id:8,name:"Tomatoes",amount:"3 cherry"}],
     recipe: [{id:0,name:"Toast your slice of bread until golden and firm."},{id:1,name:"Remove the pit from your avocado. Use a big spoon to scoop out the flesh. Put it in a bowl and mash it up with a fork until it’s as smooth as you like it."},{id:2,name:"Mix in a pinch of salt (about ⅛ teaspoon) and add more to taste, if desired."},{id:3,name:"Spread avocado on top of your toast. Enjoy as-is or top with  a light sprinkle of flaky sea salt"}],
     favorite: true,
     recommend: true, 
     level: 'easy',
     video: "WDRujOJVykE",
   }, 
   { 
    id: 1,
    name: "Sesame Chicken",
    img: "https://www.dinneratthezoo.com/wp-content/uploads/2015/04/sesame-chicken-1.jpg",
    ktype: "meat",
    category: "chicken",
    preptime: "40 min",
    servings: 6,
    ratings: 5,
    calories: 392,
    notes: "This sesame chicken is crispy chicken pieces tossed in a sweet and savory honey sesame sauce.",
    ingredients: [{name:'Chicken',amount:"whole breast"},{name:'Eggs',amount:"3 eggs"},{name:'Flour',amount:"200g"},{name:'Cornstarch',amount:"30ml"},{name:'Oil',amount:"20ml"},{name:'Salt',amount:"1 tbsp"},{name:'Onion',amount:"2 pieces"},{name:'Tomato',amount:"1 piece"}],
    recipe: [{name:"Place the eggs, salt and pepper in a bowl. Stir to combine"},{name:"Place the flour and 1/2 cup of cornstarch in a shallow bowl or on a plate. Stir to combine."},{name:"Dip each piece of chicken into the egg mixture, then into the flour. Repeat the process with all of the chicken."},{name:"Heat 3 inches of oil in a deep pan to 350 degrees F"},{name:"Add 7-8 pieces of chicken to the pan. Cook for 5 minutes or until crispy and golden brown. Repeat the process with the remaining chicken"}],
    favorite: false,
    recommend: true,
    level: 'hard',
    video: "C2CVlvSSFO4",
  },
  {
    id: 2,
    name: "Stir Fried Rice",
    img: "https://images.unsplash.com/photo-1603093323131-15046c09e307",
    ktype: "dairy",
    category: "rice",
    preptime: "15 min",
    servings: 5,
    ratings: 3,
    calories: 267,
    notes: "This Chinese restaurant-style fried rice recipe is the absolute BEST.  It’s quick and easy to make, customizable with any of your favorite mix-ins, and so irresistibly delicious.",
    ingredients: [{name:'Rice',amount:"2 cups"},{name:'Eggs',amount:"2 eggs"},{name:'Carrots',amount:"1 stick"}, {name:'Onion',amount:"1 peice"},{name:'Garlic',amount:"1 clover"},{name:'Soy Sauce',amount:"50ml"},{name:'Sesame Oil',amount:"20 ml"},{name:'Butter',amount:"50mg"}],
    recipe: [{name:"Heat 1/2 tablespoon of butter in a large sauté pan* over medium-high heat until melted."},{name:"Add egg, and cook until scrambled, stirring occasionally. Remove egg, and transfer to a separate plate."},{name:"Add an additional 1 tablespoon butter to the pan and heat until melted."},{name:"Sauté for about 5 minutes or until the onion and carrots are soft. Increase heat to high, add in the remaining 1 1/2 tablespoons of butter, and stir until melted."},{name:"Immediately add the rice, green onions, soy sauce"}],
    favorite: false,
    recommend: true,
    level: 'medium',
    video: "7AxydboW8v8",
  }
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