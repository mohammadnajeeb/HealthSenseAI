import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';

import Home from './components/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Profile from './pages/Profile';
import Test from './pages/Test';
import Test2 from './pages/Test2';

import './animation.css';
import './App.css';
import { Toaster } from 'react-hot-toast';
// import { use } from 'passport';
import axios from 'axios';
import { Context, server } from './index';
import { set } from 'mongoose';

function App() {
  const [loading, setLoading] = React.useState(true);
  const {setUser, setisAuthenticated } = React.useContext(Context);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/users/me`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setisAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setUser({});
        setisAuthenticated(false);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <div className="App">
      <Navigation />
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
            path="/Test"
            element={
              <div className="page-transition">
                <Test />
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
          <Route
            path="/Profile"
            element={ 
              <div className="page-transition">
                <Profile />
              </div>
            }
          />
          <Route
            path="/Test2"
            element={ 
              <div className="page-transition">
                <Test2 />
              </div>
            }
          />
        </Routes>
        <Toaster />
        <Footer />
      </div>
    </Router>
  );
}

export default App;