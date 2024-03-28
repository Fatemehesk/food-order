import React from "react";
import classes from "./AvailableMeals.module.css";
import {useDatabaseStore} from "../store/database/database.store";
import MealLists from "./MealLists";

const AvailableMeals = () => {
  const {mealsLists}= useDatabaseStore();

  return (
    <section >
      <div className={classes.meals} >
        {mealsLists && mealsLists.length !== 0 && mealsLists.map((item) => (
          <MealLists
            key={item.recipe_id}
            id={item.recipe_id}
            name={item.title}
            price={Math.floor(item.social_rank / 10)}
            imgUrl={item.image_url}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
};
export default AvailableMeals;
