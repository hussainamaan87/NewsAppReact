import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import News from './Components/News';
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
            <Routes>
              <Route exact path='/home'>Home</Route>
              <Route exact path='/about'>About</Route>
            </Routes>
            <News/>
        </Router>
      </div>
    )
  }
}
