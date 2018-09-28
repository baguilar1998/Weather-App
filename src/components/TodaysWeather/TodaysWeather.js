import React, {PureComponent} from 'react';
import './TodaysWeather.css';
import Axios from '../../../node_modules/axios';

class TodaysWeather extends PureComponent {

    constructor () {
        super();
        this.state = {
            location: '',
            degree: '',
            weather: '',
            humidity: '',
            wind:'',
            imgSrc : '',
            isSet:false,
            newCity: ''
        }
    }

    /**
     * Sets the state data in an Async way
     *  The component must be a pure component
     *  in order for this to load in an async way
     */
    componentDidMount() {
        if(this.state.newCity !== ''){
            console.log('test');
        } else {
            Axios.get('//api.openweathermap.org/data/2.5/weather?zip=11364&appid=e0fa19a50c42ce1ad0ea75182468e70b')
            .then( res => {
                console.log(res);
                this.setState({
                    location: res.data.name,
                    degree: Math.floor((res.data.main.temp * (9/5)) - 459.67),
                    weather: res.data.weather[0].main,
                    humidity: res.data.main.humidity,
                    wind: res.data.wind.speed,
                    imgSrc: this.matchWeather(res.data.weather[0].main),
                    isSet: true
                });
            });
        }
    }


    render(){
        if(this.state.isSet == false){
            return(
            <div className = "container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <img src ={require('../../assets/gifs/sun.gif')}/>
                        <h2> <b> Loading ... </b></h2>
                    </div>
                </div>
            </div>
            )
        } else {
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
                                    <h4><b>Wind: {this.state.wind} mph</b></h4>
                                    <h4><b>Humidity: {this.state.humidity} Rh</b></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    matchWeather = (e) =>{
        switch(e){
            case 'Clear':
                return require('../../assets/gifs/sun.gif');
            case 'Clouds':
                return require('../../assets/gifs/cloudy.gif');
            case'Rain':
                return require('../../assets/gifs/rain.gif');
            case'Drizzle':
                return require('../../assets/gifs/rain.gif');
            case 'Fog':
                return require('../../assets/gifs/fog.gif');            
            case 'Mist':
                return require('../../assets/gifs/fog.gif');
            case 'Snow':
                return require('../../assets/gifs/snow.gif');
            case 'Thunderstorm':
                return require('../../assets/gifs/thunder.gif');
        }
    }
}

export default TodaysWeather;