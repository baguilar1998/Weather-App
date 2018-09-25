import React, {Component} from 'react';
import './TodaysWeather.css';

class TodaysWeather extends Component {
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
    }
}

export default TodaysWeather;