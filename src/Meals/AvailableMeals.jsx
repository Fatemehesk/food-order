import React, { useContext } from "react";
import classes from "./AvailableMeals.module.css";
import CartContext from "../store/cart-context";
import MealLists from "./MealLists";
// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];
const AvailableMeals = () => {
  const {mealsLists}=useContext(CartContext);
  console.log(mealsLists);
  return (
    <section >
      <div className={classes.meals} >
        {mealsLists && mealsLists.length !== 0 && mealsLists.map((item) => (
          <MealLists
            key={item.recipe_id}
            id={item.recipe_id}
            name={item.title}
            price={Math.floor(item.social_rank / (Math.random()*30))}
            imgUrl={item.image_url}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};
export default AvailableMeals;
// {MealList.map((meal)=>{return(<li key={meal.id}>{meal.name}</li>);})}
