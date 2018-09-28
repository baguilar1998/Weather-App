import React from 'react';
import './WeatherCard.css';

/**
 *  In functional components, you pass the props
 *  in as a parameter. You don't need the render function
 *  as well
 * @param {} props 
 */
const WeatherCard = ({weather}) =>{
    /**
    * Returns a list of elements that display
    * each day's weather
    */
    const weatherList = weather.map( w => {
        return(
            <div className="wcard col-md-1.5 offset-md-1"  key={w.date}>
                <div className="wcontainer">
                    <h4><b>{w.date}</b></h4>
                    <img src={w.image}/>
                    <h2><b>{w.degree}{'\u00b0'}</b></h2>
                    <h5><b>{w.weather}</b></h5> 
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

export default WeatherCard