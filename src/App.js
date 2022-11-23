import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import MealPlan from "./pages/meal-page/meal-page";
import HowItWorks from "./pages/how-it-works/how-it-works";
import Header from "./components/header/header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/meal" element={<MealPlan />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
