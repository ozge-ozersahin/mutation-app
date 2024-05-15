import { urlAlphabet } from "nanoid";
import "./App.css";
import { Header } from "./components/Header/header";
import { Home } from "./components/Home/home";


const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
};

export default App;
