import React, { Component } from 'react';
// you must require images for react
import './App.css';

// Imported Components
import Navigation from './components/Navigation/Navigation';
import WeatherCard from './components/WeatherCard/WeatherCard';
import TodaysWeather from './components/TodaysWeather/TodaysWeather';

class App extends Component {
  // Temp placeholders for weather cards
  state = {
    weather : [
      {
        id:1,
        day: 'Monday',
        weather: 'Cloudy',
        degree: 67,
        image: require('./assets/icons/cloudy.png')
      },
      {
        id:2,
        day: 'Tuesday',
        weather: 'Sunny',
        degree: 71,
        image: require('./assets/icons/sun.png')
      },
      {
        id:3,
        day: 'Wednesday',
        weather: 'Cloudy',
        degree: 70,
        image: require('./assets/icons/cloudy.png')
      },
      {
        id:4,
        day: 'Thursday',
        weather: 'Thunderstorm',
        degree: 64,
        image: require('./assets/icons/thunder.png')
      },
      {
        id:5,
        day: 'Friday',
        weather: 'Rain',
        degree:64,
        image: require('./assets/icons/rain.png')
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <Navigation/>
        <TodaysWeather/>
        <WeatherCard weather = {this.state.weather} />
      </div>
    );
  }
}

export default App;
