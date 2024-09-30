import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./../styles/App.css";

import About from './About'
import Home from './Home'
const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
