import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class MyTrips extends Component{
    handleOnClick = () => {
        this.props.history.push('/addTrip');
    }
    render(){
        return(
            <Router>
                <div className='tc'>
                    <h1>My Trips</h1>
                    <button onClick={this.handleOnClick}>+</button>
                </div>
            </Router> 
        );
    }
}

export default withRouter(MyTrips);