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
            <div className="wcard col-md-4  col-xs-12 col-md-offset-1 col-xs-offset-1"  key={w.id}>
                <div className="wcontainer">
                    <h4><b>{w.date}</b></h4>
                    <img src={w.image}/>
                    <h2><b>{w.degree}{'\u00b0'}</b></h2>
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

export default WeatherCard