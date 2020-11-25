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
     ingredients: ['Avocados','Lemon Juice',"Eggs","Toast","Garlic","Salt","Onions","Tomatoes"],
     recipe: ["Toast your slice of bread until golden and firm.","Remove the pit from your avocado. Use a big spoon to scoop out the flesh. Put it in a bowl and mash it up with a fork until it’s as smooth as you like it.","Mix in a pinch of salt (about ⅛ teaspoon) and add more to taste, if desired.","Spread avocado on top of your toast. Enjoy as-is or top with  a light sprinkle of flaky sea salt"],
     favorite: true,
     recommend: true,
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
    ingredients: ['1 1/2 lbs boneless skinless chicken breasts cut into 1 inch pieces','2 eggs beaten',"1/2 cup all purpose flour","1/2 cup cornstarch","oil for frying","Salt","Onions","Tomatoes"],
    recipe: ["Place the eggs, salt and pepper in a bowl. Stir to combine","Place the flour and 1/2 cup of cornstarch in a shallow bowl or on a plate. Stir to combine.","Dip each piece of chicken into the egg mixture, then into the flour. Repeat the process with all of the chicken.","Heat 3 inches of oil in a deep pan to 350 degrees F","Add 7-8 pieces of chicken to the pan. Cook for 5 minutes or until crispy and golden brown. Repeat the process with the remaining chicken"],
    favorite: true,
    recommend: true,
  },
  {
    id: 2,
    name: "Stir Friend Rice",
    img: "https://images.unsplash.com/photo-1603093323131-15046c09e307",
    ktype: "dairy",
    category: "rice",
    preptime: "15 min",
    servings: 5,
    ratings: 3,
    calories: 267,
    notes: "This Chinese restaurant-style fried rice recipe is the absolute BEST.  It’s quick and easy to make, customizable with any of your favorite mix-ins, and so irresistibly delicious.",
    ingredients: ["Cooked, chilled rice","Eggs","Carrots, onions, green onions and peas","Garlic","Soy sauce","Toasted sesame oil","Butter"],
    recipe: ["Heat 1/2 tablespoon of butter in a large sauté pan* over medium-high heat until melted.","Add egg, and cook until scrambled, stirring occasionally. Remove egg, and transfer to a separate plate.","Add an additional 1 tablespoon butter to the pan and heat until melted.","Sauté for about 5 minutes or until the onion and carrots are soft. Increase heat to high, add in the remaining 1 1/2 tablespoons of butter, and stir until melted.","Immediately add the rice, green onions, soy sauce"],
    favorite: false,
    recommend: true,
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
  })
  const [favorites, setFavorites] = useState([

  ])
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
    fname: "Cindy",
    lname: "Bitton",
    email: "",
    city: "",
    provstate: "",
    country: "",
    settings: {

    }
  }) 
 


  return (
    <StoreContext.Provider value={{recipes, setRecipes, pinned, setPinned, favorites, setFavorites, trash, setTrash, account, setAccount, notifs, setNotifs, temprecipe, setTemprecipe}}>
      {props.children}
    </StoreContext.Provider>
  )

}

export default StoreContextProvider