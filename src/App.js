import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Highlights from "./Highlights";
import Schedule from "./Schedule";
import Register from "./Register";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>VIT Tech Expo 2026</h1>

        <nav>
          <Link to="/">Home</Link> |
          <Link to="/highlights">Highlights</Link> |
          <Link to="/schedule">Schedule</Link> |
          <Link to="/register">Register</Link> |
          <Link to="/contact">Contact</Link>
        </nav>

        <hr />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <hr />

      <footer>
        <p>2025 Campus Tech Expo | All Rights Reserved</p>
      </footer>
    </BrowserRouter>
  );
}

export default App;
