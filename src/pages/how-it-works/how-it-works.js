import "./how-it-works.css";

const HowItWorks = () => {
  return (
    <div>
      {/* How We Automate Container */}
      <div className="container">
        <div className="mt-5 row">
          <div className="col-12 col-md-6 col-xl-5 pt-3 offset-xl-1">
            <h1>How We Automate Your Meal Planning</h1>
            <h4>(And put you in control of your diet!)</h4>
            <p>
              EatHealty.com helps you with the two most important things to make
              your healthy diet a success
            </p>
            <ol className="font-weight-bold">
              <li>
                Turn meal planning into an effortless and magical experience ✨
              </li>
              <li>
                Provide an endless supply of delicious recipes specific to your
                needs 🍲
              </li>
            </ol>
            <p>Let's see how EatHealthy makes it happen!</p>
            {/* <p>Start Free Now</p> */}
            <a className="custom_home_btn" href={"/"}>Start Free Now</a>
          </div>
          <div className="col-12 col-md-6 col-xl-5 pt-3 text-center">
            <img src={require("../../assets/friendly-plane.png")}></img>
          </div>
        </div>
      </div>
      {/* People Love It Container */}
      <div className="container-fluid text-white people_love_it top_margin">
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h2>People Love EatHealthy This Much</h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-4">
              <div>
                <img src={require("../../assets/smilingOrangeSmall.png")}></img>
              </div>
              <h5>Happy Planners</h5>
              <h2>4 Milion+</h2>
            </div>
            <div className="col-4">
              <div>
                <img src={require("../../assets/sandwichSmall.png")}></img>
              </div>
              <h5>Meals Generated</h5>
              <h2>210 Milion+</h2>
            </div>
            <div className="col-4">
              <div>
                <img src={require("../../assets/checkboxSmall.png")}></img>
              </div>
              <h5>Calories Tracked</h5>
              <h2>42 Bilion+</h2>
            </div>
          </div>
        </div>
      </div>
      {/* Get Started Container */}
      <div className="container get_started_container">
        <div className="row mt-4 pt-4">
          <div className="col-12 text-center">
            <h2>Get Started In 4 Easy Steps</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <div className="row mt-3">
              <div className="col-12">
                <h2>1.Create</h2>
              </div>
              <div className="col-3">
                <img
                  src={require("../../assets/orangePaintingSmall.png")}
                ></img>
              </div>
              <div className="col-9">
                <p className="text-large">
                  Tell us about yourself, your diet preferences, and your goals.
                  We'll create meal plans specific to your needs in seconds! You
                  always have the option to tweak your settings later.
                </p>
                <img
                  className="down_arrow"
                  src={require("../../assets/drawn_down_arrow.png")}
                ></img>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <h2>2.Go Shopping</h2>
              </div>
              <div className="col-9">
                <p className="text-large">
                  Review your plan to make sure everything looks good, swapping
                  out anything you don't like.Then go shopping to your favorite
                  store
                </p>
                <img
                  className="down_arrow"
                  src={require("../../assets/drawn_down_arrow.png")}
                ></img>
              </div>
              <div className="col-3">
                <img
                  src={require("../../assets/broccoliShoppingSmall.png")}
                ></img>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <h2>3.Cook</h2>
              </div>
              <div className="col-3">
                <img src={require("../../assets/pearCookingSmall.png")}></img>
              </div>
              <div className="col-9">
                <p className="text-large">
                  Enjoy making and eating delicious meals without the stress of
                  planning. Not only will you know you're eating better, you'll
                  have more time and energy for other things.
                </p>
                <img
                  className="down_arrow"
                  src={require("../../assets/drawn_down_arrow.png")}
                ></img>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <h2>4.Conquer!</h2>
              </div>
              <div className="col-9">
                <p className="text-large">
                  Make adjustments to your preferences, discover new meals, or
                  put your favorites on repeat. Review nutrition stats, track
                  weight progress, and achieve your goals!
                </p>
              </div>
              <div className="col-3">
                <img
                  src={require("../../assets/orangeClimbingSmall.png")}
                ></img>
              </div>
            </div>
            <div className="row pt-3 mt-3">
              <div className="col-12 text-center">
                <a className="custom_home_btn" href={"/"}>Start Free Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
