import React from 'react';
import './Navigation.css';
const Navigation = (props) =>{
    return(
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a id="title" className="navbar-brand" href="#"><b>Weather App</b></a>
                    </div>
                    <ul className="nav navbar-nav">
                    </ul>
                </div>
                </nav>
            </div>
    );
    
}

export default Navigation;