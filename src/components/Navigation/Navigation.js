import React from 'react';
import './Navigation.css';
import SearchCity from '../SearchCity/SearchCity';
const Navigation = (props) =>{
    return(
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a id="title" className="navbar-brand" href="#"><b>Weather App</b></a>
                    </div>
                    <ul className="nav navbar-nav">
                        <SearchCity update={props.update}/>
                    </ul>
                </div>
                </nav>
                <br/>
            </div>
    );
    
}

export default Navigation;