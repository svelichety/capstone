import React, {Component} from 'react';
import './TripPlanning.css';
import { DateRange } from 'react-date-range';
import moment from 'moment';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import InviteFriends from './InviteFriends';
//import Destination from './Destination';

class TripPlanning extends Component {
    
    constructor() {
        super();
        this.state = {
            startDate : '',
            endDate : '',
            value: 200
        }
    }

    getDateRange = (dateRange) => {
        this.setState({test: 'testValue'});
        this.setState({startDate: moment(dateRange.startDate).format("YYYY-MM-DD")});
        this.setState({endDate: moment(dateRange.endDate).format("YYYY-MM-DD")});
        console.log("startDate : " + moment(dateRange.startDate).format("YYYY-MM-DD"));
        console.log("endDate : " + moment(dateRange.endDate).format("YYYY-MM-DD"));
    }
    
    handleChangeStart = () => {
        console.log('Change event started')
    };

    handleChange = value => {
        this.setState({
            value: value
        })
    };

    handleChangeComplete = () => {
        console.log('Change event completed')
    };

    render(){
        const { value } = this.state
        return(
            <div className='tc'>
                <h1>Trip Title</h1>
                <div className="form pa4 br3 shadow-5 center">
                    <h3>Your departing airport:</h3>
                    <input type='text' placeholder='Departing Station'/>
                    <h3>Destination airport:</h3>
                    <input type='text' placeholder='Destination'/>
                </div>
                <div>
                    <h3>Choose dates</h3>
                    <div className='datePicker center'>
                        <DateRange
                            onInit={this.getDateRange}
                            onChange={this.getDateRange}
                            calendars={1}
                        />
                    </div>
                </div>
                <div>
                    <h3>Set your budget</h3>
                    <div className='slider center'>
                        <Slider
                            min={100}
                            max={10000}
                            step={100}
                            value={value}
                            onChangeStart={this.handleChangeStart}
                            onChange={this.handleChange}
                            onChangeComplete={this.handleChangeComplete}
                        />
                        <div className='value'>${value}</div>
                        <br/>
                    </div>
                           </div>
                
                
                <br/>
                <br/>
            </div>
        );
    }
}

export default TripPlanning;