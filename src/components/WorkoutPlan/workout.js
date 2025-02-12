import React, { useState } from "react";
import "../WorkoutPlan/workout.css";
import legPressImage from "../../images/leg-press.png";
import legCurl from "../../images/leg-curl.png";
import legLunge from "../../images/leg-lunge.png";
import bulgarianSplit from "../../images/bulgarian-split.png";
import barbellDL from "../../images/barbell-deadlift.png";
import armDumbbell from "../../images/single-arm-dumbbell-row.png";
import lateralRaise from "../../images/lateral-raise.png";
import cablelatPulldown from "../../images/cable-lat-pulldown.png";
import brenchPress from "../../images/brench-press.png";
import bandChestPress from "../../images/band-chest-press.png";

export const Workout = () => {
  // State to keep track of which category is selected ("lower" or "upper")
  const [selectedCategory, setSelectedCategory] = useState("lower");

  return (
    <div className="workout-container">
      <h1>Let's Start Workout!</h1>
      
      {/* Dropdown menu buttons */}
      <div className="dropdown-menu">
        <button
          className={selectedCategory === "lower" ? "active" : ""}
          onClick={() => setSelectedCategory("lower")}
        >
          Lower Body Exercises
        </button>
        <button
          className={selectedCategory === "upper" ? "active" : ""}
          onClick={() => setSelectedCategory("upper")}
        >
          Upper Body Exercises
        </button>
      </div>

      {/* Conditionally render Lower Body Exercises */}
      {selectedCategory === "lower" && (
        <div className="exercise-section">
          <p>LOWER BODY EXERCISE:</p>
          <a href="https://www.youtube.com/watch?v=p5dCqF7wWUw">
            <img src={legPressImage} alt="Leg Press" className="image" />
          </a>
          <a href="https://www.youtube.com/watch?v=QjNFk4F5dAs">
            <img src={legCurl} alt="Leg Curl" className="image" />
          </a>
          <a href="https://www.youtube.com/watch?v=MxfTNXSFiYI">
            <img src={legLunge} alt="Leg Lunge" className="image" />
          </a>
          <a href="https://www.youtube.com/watch?v=vgn7bSXkgkA">
            <img src={bulgarianSplit} alt="Bulgarian Split" className="image" />
          </a>
          <a href="https://www.youtube.com/watch?v=3UwO0fKukRw">
            <img src={barbellDL} alt="Barbell Deadlift" className="image" />
          </a>
        </div>
      )}

      {/* Conditionally render Upper Body Exercises */}
      {selectedCategory === "upper" && (
        <div className="exercise-section">
          <p>UPPER BODY EXERCISE:</p>
          <a href="https://www.youtube.com/watch?v=ZRSGpBUVcNw">
            <img src={armDumbbell} alt="Arm Dumbbell Row" className="image" />
          </a>
          <a href="https://www.youtube.com/watch?v=XPPfnSEATJA">
            <img src={lateralRaise} alt="Lateral Raise" className="image" />
          </a>
          <a href="https://www.youtube.com/watch?v=JGeRYIZdojU">
            <img src={cablelatPulldown} alt="Cable Lat Pulldown" className="image" />
          </a>
          <a href="https://www.youtube.com/watch?v=X3YrlBmjWrY">
            <img src={brenchPress} alt="Bench Press" className="image" />
          </a>
          <a href="https://www.youtube.com/watch?v=EbfYPZCWkB0">
            <img src={bandChestPress} alt="Band Chest Press" className="image" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Workout;
