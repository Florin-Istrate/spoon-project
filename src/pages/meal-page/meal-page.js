import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useEffectOnce } from "../../customHooks/customHooks";
import { getMealInformation, getMealPlan } from "../../services/api";
import MealDayContainer from "../../components/meal-day/mealDay";
import Modal from "../../components/modal/modal";
import "./meal-page.css";

const MealPlan = () => {
  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [mealInfo, setMealInfo] = useState();

  const [searchParams] = useSearchParams();

  const timeFrame = searchParams.get("timeFrame");
  const calories = parseInt(searchParams.get("calories"));
  const diet = searchParams.get("diet");
  const exclude = searchParams.get("exclude");

  useEffectOnce(() => {

    if(localStorage.getItem("meal") ===  null) {
      if (timeFrame) {
        async function fetchData() {
          try {
            const mealData = await getMealPlan(
              timeFrame,
              calories,
              diet,
              exclude
            );
            if (mealData.data.hasOwnProperty("week")) {
              const data = mealData.data.week;
              const mealList = Object.keys(data).map((weekDay) => {
                const temp = { ...data[weekDay] };
                temp.weekDay = weekDay;
                return temp;
              });
              setRecipes(mealList);
            } else {
              setRecipes([mealData.data]);
            }
          } catch (error) {
            console.log(error);
          }
        }
        
        fetchData();
      } else {
        return;
      }
    } else {
      const res = localStorage.getItem("meal");
      const data = JSON.parse(res)
      setRecipes(data)
    }

    
  }, []);

  const handleShowDetails = async (id) => {
    try {
      const res = await getMealInformation(id);     
      setMealInfo(res.data);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setMealInfo(undefined);
  };

  const handleSaveMeal = () => {
    localStorage.setItem("meal", JSON.stringify(recipes))
    alert("Meals saved")
  } 

  return (
    <>
      <div>
        {recipes.length > 0 && <button className="custom-buton" onClick={handleSaveMeal}>Save Recipes</button>}      
        {recipes?.map((recipe) => (
          <MealDayContainer
          mealDay={recipe}
          handleShowDetails={handleShowDetails}
          />
        ))}

        {recipes.length === 0  && (<h1 className="text-center">Please provide us with anitional information</h1>)}
      </div>
      <Modal showModal={showModal} handleCloseBtn={handleCloseModal}>
        {mealInfo && (
          <div>
            <div className="d-flex mt-3">
              <div>
                <img src={mealInfo?.image} alt="meal" className="info-image" />
                <p>
                  <span className="font-weight-bold margin-0-1">Serving portion:</span>
                  {mealInfo?.nutrition?.weightPerServing?.amount} g
                  <img
                    src={require("../../assets/meal.png")}
                    alt="portion"
                    className="custom-small-img"
                  ></img>
                </p>
              </div>
              <div>
                <h1 className="text-center">{mealInfo?.title}</h1>
                <div className="d-flex justify-content-around">
                  <p className="font-weight-bold">
                    Likes: {mealInfo.aggregateLikes}
                    <img
                      src={require("../../assets/like.png")}
                      alt="like"
                      className="custom-small-img rotated"
                    ></img>
                  </p>
                  <p className="font-weight-bold">
                    Health score: {mealInfo.healthScore}
                    <img
                      src={require("../../assets/health.png")}
                      className="custom-small-img rotated"
                      alt="heart"
                    ></img>
                  </p>
                  <p className="font-weight-bold">
                    Preparation time: {mealInfo.readyInMinutes}minutes
                    <img
                      src={require("../../assets/time.png")}
                      alt="clock"
                      className="custom-small-img rotated"
                    ></img>
                  </p>
                </div>
                <ol>
                  {mealInfo?.analyzedInstructions[0] &&
                    mealInfo.analyzedInstructions[0].steps.map((obj) => (
                      <li>{obj.step}</li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="m-2">
              <ul className="d-flex justify-content-around">
                <li>
                  <span className="font-weight-bold">Calories: </span>
                  {mealInfo?.nutrition?.nutrients[0]?.amount} kcal
                  <img
                    src={require("../../assets/calories.png")}
                    alt="calories"
                    className="custom-small-img"
                  ></img>
                </li>
                <li>
                  <span className="font-weight-bold">Carbohydrates: </span>
                  {mealInfo?.nutrition?.nutrients[3]?.amount}g
                  <img
                    src={require("../../assets/carbohydrates.png")}
                    alt="carbs"
                    className="custom-small-img"
                  ></img>
                </li>
                <li>
                  <span className="font-weight-bold">Fat: </span>
                  {mealInfo?.nutrition?.nutrients[1]?.amount}g
                  <img
                    src={require("../../assets/fat.png")}
                    alt="fat"
                    className="custom-small-img"
                  ></img>
                </li>
                <li>
                  <span className="font-weight-bold">Protein:</span>
                  {mealInfo?.nutrition?.nutrients[8]?.amount}g
                  <img
                    src={require("../../assets/protein.png")}
                    alt="protein"
                    className="custom-small-img"
                  ></img>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default MealPlan;
