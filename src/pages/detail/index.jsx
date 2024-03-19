import React from "react";
import { useParams } from 'react-router-dom';
import classes from "./MeaDetails.module.css";
const MealsDetail = () => {
  const params = useParams();
  const itemId = params.id;

  return (
    <div className={classes.details}>
    <h2>{itemId}</h2>
    </div>
  );
};
export default MealsDetail;