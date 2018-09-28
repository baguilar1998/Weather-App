import React, {Component} from 'react';
import './SearchCity.css';
class SearchCity extends Component {

    constructor(){
        super();
        this.state = {
            city: ''
        }
    }

    sendCity = (e) =>{
        e.preventDefault();
        this.props.update(this.state.city);
    }

    setCity = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    render(){
        return(
            <div>
                <form className="form-inline" onSubmit={this.sendCity}> 
                    <div className="form-group mb-2">
                        <input id="city" className="form-control" type="text" placeholder="Enter in your zip code" onChange={this.setCity} />
                        <button id="enterButton" type="button submit" className="btn btn-dark">Enter</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchCity;