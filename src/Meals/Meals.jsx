
import React from "react";
import MealSummery from "./MealSummery";
import AvailableMeals from "./AvailableMeals";
const Meals=()=>{
    return(

        <React.Fragment>
            <MealSummery/>
            <AvailableMeals/>
        </React.Fragment>
    );
}
export default Meals;