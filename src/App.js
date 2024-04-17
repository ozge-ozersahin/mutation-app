import "./App.css";
import { Header } from "./components/Header/header";

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <h1>Welcome to the Mutation Academy!</h1>
        <a
          className="App-link"
          href="https://mutasyonacademy.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start from here
        </a>
      </header>
    </div>
  );
};

export default App;
