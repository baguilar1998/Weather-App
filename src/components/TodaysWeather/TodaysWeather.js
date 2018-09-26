import React, {Component} from 'react';
import './TodaysWeather.css';
import Axios from '../../../node_modules/axios';

class TodaysWeather extends Component {

    constructor (){
        super();
        //API Key: e0fa19a50c42ce1ad0ea75182468e70b
        Axios.get('//api.openweathermap.org/data/2.5/weather?zip=11364&appid=e0fa19a50c42ce1ad0ea75182468e70b')
        .then( res => {
            let weatherInformation = {
                location: res.data.name,
                degree: Math.floor((res.data.main.temp * (9/5)) - 459.67),
                weather: res.data.weather[0].main,
                imgSrc: this.changeWeather(res.data.weather[0].main)
            }
            // console.log(res);
            console.log(weatherInformation);
        });
    }

    state = {
        location: 'New York, New York',
        degree: 65,
        weather: 'Rain',
        imgSrc : require('../../assets/gifs/rain.gif')
    }
    render(){
        return(
            <div className = "container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={this.state.imgSrc}/>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1><b>Today's Weather</b></h1>
                                <h2><b>{this.state.location}</b></h2>
                                <h3><b>{this.state.degree}{'\u00b0'}</b></h3>
                                <h1><b>{this.state.weather}</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // A function to change the weather
    changeWeather = (e) =>{
        //Code yet to be implemented
        switch(e){
            case 'Sunny':
                return require('../../assets/gifs/sun.gif');
            case 'Cloudy':
                return require('../../assets/gifs/cloudy.gif');
            case'Rain':
                return require('../../assets/gifs/rain.gif');
            case 'Fog':
                return require('../../assets/gifs/fog.gif');
            case 'Snow':
                return require('../../assets/gifs/snow.gif');
            case 'Thunderstorm':
                return require('../../assets/gifs/thunder.gif');
        }
    }
}

export default TodaysWeather;