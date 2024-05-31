import "./App.css";
import { Header } from "./components/Header/header";
import { Home } from "./components/Home/home";
import { Login } from "./components/Login/login";



const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Login></Login>
    </div>
  );
};

export default App;