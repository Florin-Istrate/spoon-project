import { useState } from "react";
import Form from "react-bootstrap/Form";
import { intolerance } from "../../services/constants";
import { diets } from "../../services/constants";
import { mealTime } from "../../services/constants";
import { useNavigate } from "react-router-dom";
import "./mealFormular.css";

const MealFormular = () => {
  const [timeFrame, setTimeFrame] = useState();
  const [calories, setCalories] = useState(2000);
  const [diet, setDiet] = useState();
  const [exclude, setExclude] = useState([]);

  const navigate = useNavigate();

  function handleCalories(e) {
    setCalories(e.target.value);
    console.log(`Calories: ${calories}`);
  }

  function handleTimeFrame(e) {
    setTimeFrame(e.target.value);
  }

  function handleDiet(e) {
    setDiet(e.target.value);
  }

  function handleExclude(e) {
    if (exclude.includes(e.target.value)) {
      setExclude((state) => {
        const temp = state.filter((str) => str !== e.target.value);
        return temp;
      });
      return;
    }
    setExclude((state) => {
      const temp = [...state];
      temp.push(e.target.value);
      return temp;
    });
  }

  const handleRedirect = (e) => {
    e.preventDefault();
    navigate(
      `/meal?timeFrame=${timeFrame}&calories=${calories}&diet=${diet}&exclude=${exclude}`
    );
    localStorage.clear()
  };

  console.log(exclude);

  return (
    <>
      {/* Begining form */}
      <Form
        onSubmit={handleRedirect}
        className=" d-flex flex-column justify-content-center mx-auto custom-shadow-box p-3 meal-form-container "
      >
        {/* Time frame selection */}
        <Form.Label className="d-flex justify-content-center">
        <span className="font-weight-bold"> Plan my meal for</span>
        </Form.Label>
        <Form.Group className="d-flex gap-5 justify-content-center">
          <div className="time-frame-container">
            {mealTime.map((val) => (
              <div
                className={`option ${val === timeFrame ? "selected" : ""}`}
                key={`time-${val}`}
              >
                <Form.Check
                  style={{ display: "none" }}
                  inline
                  type="radio"
                  id={val}
                  value={val}
                  name="timeFrame"
                  onClick={handleTimeFrame}
                />
                <label className="checkbox" htmlFor={val}>
                  <img
                    className="custom-diet-img custom-padding cursor-pointer"
                    src={require(`../../assets/day.png`)}
                    alt={val}
                  ></img>
                  <p className="text-center">{val}</p>
                </label>
              </div>
            ))}
          </div>
        </Form.Group>
        {/* intolerance select */}
        <Form.Group>
          <Form.Label className="d-flex justify-content-center">
           <span className="font-weight-bold"> Intolerance</span>
          </Form.Label>
          <div className="intolerance-container d-flex justify-content-between custom-padding">
            {intolerance.map((val) => (
              <div
                key={`intolerance-${val}`}
                className={`option custom-padding-big ${
                  exclude.includes(val) ? "selected" : ""
                }`}
              >
                <Form.Check
                  value={val}
                  className="checkbox"
                  hidden
                  id={val}
                  type="checkbox"
                  onClick={handleExclude}
                />
                <label htmlFor={val}>
                  <img
                    className="custom-diet-img cursor-pointer"
                    src={require(`../../assets/${val}.png`)}
                    alt={val}
                  ></img>
                  <p className="text-center">{val}</p>
                </label>
              </div>
            ))}
          </div>
        </Form.Group>
        {/* Calories input */}
        <Form.Group
          className="mb-3 d-flex justify-content-center gap-2 align-items-center"
          controlId="calories-input"
        >
          <Form.Label><span className="font-weight-bold"> Number of</span></Form.Label>
          <Form.Control
            type="number"
            key="calories"
            className="w-25 text-center"
            placeholder="2000"
            // defaultValue={2000}
            step={100}
            min={0}
            max={20000}
            onChange={handleCalories}
          />
          <Form.Label><span className="font-weight-bold"> calories</span></Form.Label>
        </Form.Group>
        {/* Diet selection */}
        <Form.Group>
          <Form.Label className="d-flex justify-content-center">
          <span className="font-weight-bold"> Diet</span>
          </Form.Label>
          <div className="diet-container d-flex justify-content-between">
            {diets.map((val) => (
              <div
                className={`custom-diet-container option custom-padding-big ${
                  diet === val ? "selected" : ""
                }`}
                key={`diet-${val}`}
              >
                <Form.Check
                  hidden
                  className="checkbox"
                  id={val}
                  name="diet"
                  type="radio"
                  value={val}
                  onClick={handleDiet}
                />
                <label htmlFor={val}>
                  <img
                    className="custom-diet-img cursor-pointer"
                    src={require(`../../assets/${val}.png`)}
                    alt={val}
                  ></img>
                  <p className="text-center">{val}</p>
                </label>
              </div>
            ))}
          </div>
        </Form.Group>
        {/* Submit Button */}
        {/* <Button variant="primary" className="custom-button" type="submit">
          Submit
        </Button> */}
        <button className="custom-button font-weight-bold">Submit</button>
      </Form>
      {/* END Form */}

      {/*Meal Planer */}

      {/* {recipes && <MealDay mealDay = {recipes}/>} */}
      {/* {recipes && recipes.map((recipes) =><MealDay mealDay={recipes} />)} */}
    </>
  );
};

export default MealFormular;
