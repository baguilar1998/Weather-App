import React, {Component} from 'react';
import './SearchCity.css';
class SearchCity extends Component {

    constructor(){
        super();
        this.state = {
            city: ''
        }
    }

    render(){
        return(
            <div>
                <form className="form-inline"> 
                    <div className="form-group mb-2">
                        <input className="form-control" type="text" placeholder="Enter in a city" />
                        <button id="enterButton" type="button" class="btn btn-dark">Enter</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchCity;