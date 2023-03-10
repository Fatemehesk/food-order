import classes from "./AvailableMeals.module.css";
import MealLists from "./MealLists";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map(
          (item => (
            <MealLists
            key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              description={item.description}
            />
          ))
        )}
      </ul>
    </section>
  );
};
export default AvailableMeals;
// {MealList.map((meal)=>{return(<li key={meal.id}>{meal.name}</li>);})}
