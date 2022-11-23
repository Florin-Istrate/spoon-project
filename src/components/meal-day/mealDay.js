import React from "react";
import Meal from "../meal/meal";
import "./mealDay.css";

const MealDayContainer = ({ mealDay, handleShowDetails }) => {
  return (
    <>
      <div className="day">
        <section
          className="nutrients d-flex day-meal flex-column"
          key={mealDay.weekDay}
        >
          <h1>Macronutrients {mealDay.weekDay}</h1>
          <ul>
            <li>Calories: {mealDay.nutrients.calories.toFixed(0)}</li>
            <li>Proteins: {mealDay.nutrients.protein.toFixed(0)}</li>
            <li>Carbohydrates: {mealDay.nutrients.carbohydrates.toFixed(0)}</li>
            <li>Fats: {mealDay.nutrients.fat.toFixed(0)}</li>
          </ul>
        </section>

        <section className=" day-meal">
          {mealDay.meals.map((meal) => {
            return (
              <Meal
                key={meal.id}
                meal={meal}
                handleShowDetails={handleShowDetails}
              />
            );
          })}
          {/* // < Meal meals={day.meals}/> */}
        </section>
      </div>
    </>
  );
};

export default MealDayContainer;
