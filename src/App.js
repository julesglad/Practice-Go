import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom";
import Navbar from './UI/Navbar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';

function App() {
  return (
    <div>
     <Router>
       <Navbar />
       <Routes>
       <Route path="/" element={HomePage} />
       <Route path="/about" element={AboutPage} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
