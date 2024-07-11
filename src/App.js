import "./App.css";
import { Header } from "./components/Header/header";
import { Home } from "./components/Home/home";
import { Login } from "./components/Login/login";
import { User } from "./components/User/user";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from "./components/Register/register";


const About = () => <div>About Page</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Header></Header> */}
    </Router>

  );
};

export default App;