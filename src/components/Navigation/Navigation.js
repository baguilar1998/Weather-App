import React, {Component} from 'react';
import './Navigation.css';
class Navigation extends Component{

    render(){
        return(
            <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Weather App</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="#">Home</a></li>
                    </ul>
                </div>
                </nav>
            </div>
        );
    }
}

export default Navigation;