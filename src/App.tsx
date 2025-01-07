import React from "react";
import FlowerClassifier from "./components/FlowerClassifier";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import Achievements from "./components/Achievements";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1 py-5">
          <Routes>
            <Route path="/classifier" element={<FlowerClassifier />} />
            <Route
              path="/achievements"
              element={
                <PrivateRoute>
                  <Achievements />
                </PrivateRoute>
              }
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
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


