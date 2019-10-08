import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {withRouter, Redirect} from 'react-router-dom';

class AddTrip extends Component{
    constructor(props) {
        super(props);
        let loggedIn = true
        this.state = {
            tripTitle:'',
            loggedIn
        }
    }

    handleOnChange = (event) => {
        console.log(event.target.value)
        this.setState({tripTitle: event.target.value});
    }

    doPlanning = () => {
        this.props.history.push('/planTrip');
    }

    render(){
        if(this.state.loggedIn === false){
            return <Redirect to="/" />
        }
        return (
            <Router>
                <button className="nav-btn"> Logout</button>
                <div className='tc'>
                    <h1>Yaaaay! Let's do it..</h1>
                    <h3>To start off please give a title to your trip.</h3>
                    <input type='text' placeholder='Trip Title' onChange={this.handleOnChange}/>
                    <div>
                        <br></br>
                        <button onClick={this.doPlanning}>Let's Plan</button>
                    </div>
                </div>
            </Router>
        );
    }
}

export default withRouter(AddTrip);