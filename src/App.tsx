import React from "react";
import FlowerClassifier from "./components/FlowerClassifier";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Placeholder from './components/Placeholder';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="mt-5 pt-4">
          <Routes>
            <Route
              path="/classifier"
              element={
                <FlowerClassifier />  
              }
            />
            <Route path="/archive" element={<Placeholder title="Archive" />} />
            <Route path="/account" element={<Placeholder title="Account" />} />
            <Route path="/" element={<Placeholder title="Home" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

