import React from 'react';
import './App.css';
import Header from './Header.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={<h1>Checkout Page</h1>}>
          </Route>
          <Route
            path="/login"
            element={<h1>Login Page</h1>}>
          </Route>
          <Route
            path="/"
            element={<Header/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
