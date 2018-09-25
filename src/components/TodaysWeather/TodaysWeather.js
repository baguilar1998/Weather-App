import React, {Component} from 'react';
import './TodaysWeather.css';

class TodaysWeather extends Component {
    render(){
        return(
            <div className = "container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={require('../../assets/gifs/sun.gif')}/>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            <div class="col-lg-12">
                                <h1><b>Today's Weather</b></h1>
                                <h2><b>New York, New York</b></h2>
                                <h3><b>73</b></h3>
                                <h1><b>Sunny</b></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodaysWeather;