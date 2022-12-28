import "./App.css";
import About from "./components/About";
import Arcive from "./components/Arcive";
import Footer from "./components/Footer";
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
      <About />
      <Footer />
    </div>
  );
}

export default App;
