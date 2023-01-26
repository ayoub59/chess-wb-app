import { Chessboard } from "react-chessboard";
import "./App.css";
import About from "./components/About";
import Arcive from "./components/Arcive";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Log from "./components/Log";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from "./components/Home";
import BoardConatiner from "./components/BoardConatiner";

function App() {
  return (
    <Router>
      <Header />
      {/* making the routes for every route */}
      <Routes>
        <Route exact path="/log" element={<Log />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/play" element={<BoardConatiner />} />
        {/* <Chessboard position={"start"} /> */}
        {/* <Log /> */}
      </Routes>

    </Router>
  );
}

export default App;
