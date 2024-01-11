import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './MyComponents/Loginpage';
import Homepage from './MyComponents/Homepage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Loginpage />
      <Routes>
        <Route path="/homepage" element={<Homepage />}/>
      </Routes>
    </Router>
  );
};

export default App;


/*
username: kminchelle
password: 0lelplR
*/ 