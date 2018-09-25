import React, {Component} from 'react';
import './WeatherCard.css';
class WeatherCard extends Component {

    render(){
        const { weather } = this.props;
        /**
         * Returns a list of elements that display
         * each day's weather
         */
        const weatherList = weather.map( w => {
            return(
            <div className="wcard col-lg-1"  key={w.id}>
                <div className="wcontainer">
                    <img src={w.image}/>
                    <h4><b>{w.day}</b></h4>
                    <p><b>{w.weather}</b></p> 
                </div>
            </div>
            );
        });

        /**
         * Renders the list
         */
        return(
            <div className="container-fluid">
                <div className="row  text-center weather-list">
                    {weatherList}
                </div>
            </div>
        );
    }
}

export default WeatherCard