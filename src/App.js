import React, { Component, PureComponent } from 'react';
// you must require images for react
import './App.css';

// Imported Components
import Navigation from './components/Navigation/Navigation';
import WeatherCard from './components/WeatherCard/WeatherCard';
import TodaysWeather from './components/TodaysWeather/TodaysWeather';
import Axios from '../node_modules/axios';

class App extends PureComponent {
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

  matchWeather = (e) =>{
    switch(e){
        case 'Clear':
            return require('./assets/icons/sun.png');
        case 'Clouds':
            return require('./assets/icons/cloudy.png');
        case'Rain':
            return require('./assets/icons/rain.png');
        case'Drizzle':
            return require('./assets/icons/rain.png');
        case 'Fog':
            return require('./assets/icons/fog.png');            
        case 'Mist':
            return require('./assets/icons/fog.png');
        case 'Snow':
            return require('./assets/icons/snow.png');
        case 'Thunderstorm':
            return require('./assets/icons/thunder.png');
    }
  }

  componentDidMount() {
    Axios.get('//api.openweathermap.org/data/2.5/forecast?zip=11364&appid=e0fa19a50c42ce1ad0ea75182468e70b')
    .then( res => {
        console.log(res);
        let weatherArr = [];
        for(let i=0; i<res.data.list.length; i+=8){
          let weatherObj= {
           degree: Math.floor((res.data.list[i].main.temp* (9/5)) - 459.67),
           date: res.data.list[i].dt_txt,
           weather: res.data.list[i].weather[0].main,
           image: this.matchWeather(res.data.list[i].weather[0].main)
          }
          weatherArr.push(weatherObj);
        }
        console.log(weatherArr);
        this.setState({
          weather:weatherArr
        });
    });
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
