import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const api = axios.create({
  baseURL: "https://api.spoonacular.com",
  headers: { Accept: "application/json" },
});

const getMealPlan = (timeFrame, targetCalories, diet, exclude) => {
  return api.get(
    `/mealplanner/generate?apiKey=${apiKey}&timeFrame=${timeFrame}&targetCalories=${targetCalories}&diet=${diet}&exclude=${exclude}`
  );
};

const getMealInformation = (id) => {
  return api.get(
    `/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`
  );
};

export { getMealPlan, getMealInformation };
