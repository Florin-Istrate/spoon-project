import { useState, useEfect } from "react";
import { getMealInformation } from "../../services/api";
import { useEffectOnce } from "../../customHooks/customHooks";
import "./meal.css";
const Meal = ({ meal, handleShowDetails }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [data, setData] = useState();



  return (
    <div className="meal">
      <h4 className="text-center overflow-hidden">{meal.title}</h4>
      {/* <img src={meal.image} alt={meal.title}></img> */}
      <ul>
        {/* <li>Meal id: {meal.id}</li> */}
        <li>Preparation time: {meal.readyInMinutes}</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>
      <div className="d-flex justify-content-between align-items-center">
        <a href={meal.sourceUrl} target="_blank" className="custom-button">
          go to recipe
        </a>
        <button
          className="custom-button"
          onClick={() => handleShowDetails(meal.id)}
        >
          Read more
        </button>
      </div>
    </div>
  );
};

export default Meal;
