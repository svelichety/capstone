import React, {Component} from 'react';
import icon from '../../assets/huddle_icon.png'
import './Navigation.css'
import {BrowserRouter as Router} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Navigation extends Component {
    handleIconClick = () =>{
        this.props.history.push('/myTrips')
    }
    render(){
        return(
            <Router>
                <header>
                    <nav >
                        <img class='huddle_icon' alt='icon' src={icon} onClick={this.handleIconClick}/>
                    </nav>
                </header>
            </Router>
        );
    }
}

export default withRouter(Navigation);