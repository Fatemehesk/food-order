import React, { useEffect } from "react";
import { useSingleItemStore } from "../../store/database/getSingleItem.store";
import { useParams } from "react-router-dom";
import classes from "./MeaDetails.module.css";
const MealsDetail = () => {
  const params = useParams();
  const itemId = params.id;
  const { mealData, getMealData } = useSingleItemStore();

  useEffect(() => {
    if (itemId) {
      getMealData(itemId);
    }
  }, [itemId]);

  return (
    <div className={classes.details}>
      <div className={classes.image}>
        <img src={mealData.image_url} alt={mealData.title} />
      </div>
      <div className={classes.wrapper}>
        <div>
          <div>
            <h3>{mealData.title}</h3>
          </div>
          <div className={classes.amount}>
            <div className={classes.price}>
              ${Math.floor(mealData.social_rank / 10)}
            </div>
          </div>
        </div>

        <ul className={classes.ingredient}>
          {mealData.ingredients &&
            mealData.ingredients.length !== 0 &&
            mealData.ingredients.map((item, index) => (
              <li key={index}>
                <p>{item}</p>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default MealsDetail;
