import classes from "./MealSummery.module.css";
import React from "react";
const MealSummery = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.layer} />
      <div className={classes.summery}>
        <h2> Discover Unic Experience</h2>
        <p>
          The key to our success is simple: providing quality consistent food
          that taste great every single time.
        </p>
        <p>
          We pride ourselves on serving our customers delicious genuine dishes
          like: Coffee, Breakfast, Donuts, Bakey, Pastry. Eat delicious food.
          Grab a drink. But most of all, relax! We thank you from the bottom of
          our hearts for your continued support.
        </p>
      </div>
    </div>
  );
};
export default MealSummery;
