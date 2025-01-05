import React from "react";
import FlowerClassifier from "./components/FlowerClassifier";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Placeholder from './components/Placeholder';
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import Achievements from "./components/Achievements";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="mt-5 pt-4">
          <Routes>
            <Route path="/classifier" element={<FlowerClassifier />} />
            <Route path="/achievements" element={                 <PrivateRoute>
                  <Achievements />
                </PrivateRoute>} 
                />
            <Route
              path="/account"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home  />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

