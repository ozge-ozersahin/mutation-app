import "./App.css";
import { Home } from "./components/Home/home";
import { Login } from "./components/Login/login";
import { User } from "./components/User/user";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from "./components/Register/register";
import { Workout } from "./components/WorkoutPlan/workout";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<Register />} />
        <Route path="/workoutPlan" element={<Workout />} />
      </Routes>
    </Router>

  );
};

export default App;