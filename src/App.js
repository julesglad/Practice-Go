import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./UI/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import PracticeLogPage from "./Pages/PracticeLogPage";

const DUMMY_LOGS = [
  {
    id: "e1",
    info: "Etude 4",
    time: "30 minutes",
    date: new Date(2021, 7, 14),
  },
];

function App() {
  return (
    <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={HomePage} />
            <Route path="/about" element={AboutPage} />
            <Route path="/log" element={PracticeLogPage()} />
          </Routes>
        </Router>
    </div>
  );
};

export default App;
