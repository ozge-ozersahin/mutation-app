import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./user.css"; // Create this file to style your User page

export const User = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve stored user name and calorie value from session storage
    const storedUserName = sessionStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleWorkoutPlanClick = () => {
    // Navigate to the workout plan page when the button is clicked
    navigate("/workoutplan");
  };

  return (
    <div className="user-container">
      <h1>Hello {userName || "User"}, welcome to Mutation!</h1>
      <p>
        For a healthier lifestyle, we recommend walking at least 10,000 steps per day.
      </p>
      <button className="workout-btn" onClick={handleWorkoutPlanClick}>
        Check Out Your Workout Plan
      </button>
    </div>
  );
};

export default User;
