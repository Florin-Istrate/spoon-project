
import MealFormular from "../../components/meal-formular/mealFormular";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="heading">
        <h1 className="col-12 text-center">Put your diet on autopilot</h1>
        <p className="col-md-8 offset-md-2 text-center heading-text">
          Eat This Much creates personalized meal plans based on your food
          preferences, budget, and schedule. Reach your diet and nutritional
          goals with our calorie calculator, weekly meal plans, grocery lists
          and more.
        </p>
      </div>
      <div className="col-12 text-center margin_bottom">
        <div>Ready to give it a shot? Let us know your diet.</div>
      </div>
      <MealFormular />
      
    </div>
  );
};

export default Home;
