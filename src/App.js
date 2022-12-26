import "./App.css";
import Arcive from "./components/Arcive";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Log from "./components/Log";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Log />
      <Arcive />
    </div>
  );
}

export default App;
