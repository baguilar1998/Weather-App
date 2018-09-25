import React, { Component } from 'react';
// you must require images for react
import './App.css';

// Imported Components
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <img src={require("./assets/sun.gif")}/>
        <h1><strong>In Progress</strong></h1>
      </div>
    );
  }
}

export default App;
