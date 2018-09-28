import React, { Component, PureComponent } from 'react';
// you must require images for react
import './App.css';

// Imported Components
import Navigation from './components/Navigation/Navigation';
import WeatherCard from './components/WeatherCard/WeatherCard';
import TodaysWeather from './components/TodaysWeather/TodaysWeather';
import Axios from '../node_modules/axios';

class App extends PureComponent {
  
  constructor() {
    super();
    this.state = {
      weather : [],
      zipCode: '11364'
    }
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
        case 'Haze':
            return require('./assets/gifs/fog.gif');
        case 'Snow':
            return require('./assets/icons/snow.png');
        case 'Thunderstorm':
            return require('./assets/icons/thunder.png');
    }
  }

  updateCity = (city) =>{
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    Axios.get('//api.openweathermap.org/data/2.5/forecast?zip='+city+'&appid=e0fa19a50c42ce1ad0ea75182468e70b')
    .then( res => {
        let weatherArr = [];
        for(let i=3; i<res.data.list.length; i+=8){
          let weatherObj= {
           degree: Math.floor((res.data.list[i].main.temp* (9/5)) - 459.67),
           date: days[(new Date(res.data.list[i].dt_txt.substring(0,11))).getDay()] + " " +res.data.list[i].dt_txt.substring(0,11),
           weather: res.data.list[i].weather[0].main,
           image: this.matchWeather(res.data.list[i].weather[0].main)
          }
          weatherArr.push(weatherObj);
        }
        console.log(weatherArr);
        if(weatherArr != this.state.weather){
          this.setState({
            weather:weatherArr,
            zipCode: city
          });
        }
    });
  }

  componentDidMount() {
    this.updateCity(this.state.zipCode);
  }

  render() {
    return (
      <div className="App">
        <Navigation update={this.updateCity}/>
        <TodaysWeather newCity={this.state.zipCode} onChange={this.updateCity}/>
        <WeatherCard weather = {this.state.weather} onChange={this.updateCity}/>
      </div>
    );
  }
}



export default App;
