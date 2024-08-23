import React, { useState } from "react";
import "./calculator.css";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Alert,
    AlertIcon,
    Box,
  } from "@chakra-ui/react";

const CalorieCalculator = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [calories, setCalories] = useState(null);
  const [error, setError] = useState("");

  const calculateCalories = () => {
    // Reset error message
    setError("");

    // Validate inputs
    if (!age || !weight || !height || !gender || !activityLevel) {
      setError("Please fill out all fields.");
      return;
    }

    let bmr;

    // Calculate BMR based on gender
    if (gender === "male") {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender === "female") {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    // Adjust BMR based on activity level
    switch (activityLevel) {
      case "sedentary":
        bmr *= 1.2;
        break;
      case "lightly active":
        bmr *= 1.375;
        break;
      case "moderately active":
        bmr *= 1.55;
        break;
      case "very active":
        bmr *= 1.725;
        break;
      case "extra active":
        bmr *= 1.9;
        break;
      default:
        break;
    }

    setCalories(Math.round(bmr));
  };

  return (
    <div className="calorie-calculator">
      <Card className="card">
        <CardHeader className="cardHeader">
          <h1>Calorie Calculator</h1>
        </CardHeader>
        <CardBody>
          {error && (
            <Alert status="error" borderRadius="md" mb={4}>
              <AlertIcon />
              <p>{error}</p>
            </Alert>
          )}
          <Box mb={3}>
            <input
              type="number"
              name="age"
              className="age"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Box>
          <Box mb={3}>
            <select
              name="gender"
              className="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </Box>
          <Box mb={3}>
            <input
              type="number"
              name="weight"
              className="weight"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Box>
          <Box mb={3}>
            <input
              type="number"
              name="height"
              className="height"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </Box>
          <Box mb={3}>
            <select
              name="activityLevel"
              className="activityLevel"
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value="">Select Activity Level</option>
              <option value="sedentary">Sedentary (little or no exercise)</option>
              <option value="light">Light (exercise 1-3 days/week)</option>
              <option value="moderate">Moderate (exercise 4-5 days/week)</option>
              <option value="active">Active (daily exercise or intense exercise 3-4 days/week)</option>
              <option value="very active">Very Active (intense exercise 6-7 days/week)</option>
            </select>
          </Box>
        </CardBody>
        <CardFooter>
          <Button
            colorScheme="teal"
            onClick={calculateCalories}
            className="submitButton"
          >
            Calculate
          </Button>
          {calories && (
            <Box mt={4}>
              <h3>Your estimated daily caloric needs: {calories} calories</h3>
            </Box>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default CalorieCalculator;
