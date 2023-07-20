import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Home from './Pages/HomePage/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/checkout"
            element={<>
              <Header />
              <h1>Checkout Page</h1>
            </>}
          >
          </Route>
          <Route
            path="/login"
            element={<h1>Login Page</h1>}>
          </Route>
          <Route
            path="/"
            element={
            <>
            <Header />
            <Home/>
            </>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
