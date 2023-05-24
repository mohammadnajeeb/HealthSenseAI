import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navigation';
import Footer from './Footer';

import Home from './components/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

import './animation.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="page-transition">
                <Home />
              </div>
            }
          />
          <Route
            path="/About"
            element={
              <div className="page-transition">
                <About />
              </div>
            }
          />
          <Route
            path="/Contact"
            element={
              <div className="page-transition">
                <Contact />
              </div>
            }
          />
          <Route
            path="/Signup"
            element={
              <div className="page-transition">
                <Signup />
              </div>
            }
          />
          <Route
            path="/Signin"
            element={
              <div className="page-transition">
                <Signin />
              </div>
            }
          />
          <Route
            path="/dashboard"
            element={
              <div className="page-transition">
                <h1>Dashboard Page</h1>
              </div>
            }
          />

          <Route
            path="/Privacy"
            element={
              <div className="page-transition">
                <Privacy />
              </div>
            }
          />
          <Route
            path="/Terms"
            element={
              <div className="page-transition">
                <Terms />
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
