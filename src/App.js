import "./App.css";
import { Header } from "./components/Header/header";
import { Home } from "./components/Home/home";
import { Login } from "./components/Login/login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const About = () => <div>About Page</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <Header></Header> */}
    </Router>

  );
};

export default App;