import React from 'react'
import {Component} from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import axios from 'axios'
import {login} from './userFunctions'
import Profile from './profile'

class SignInForm extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            id : '',
            email: '',
            password: '',
           
            
        };

        this.onChange = this.onChange.bind(this);
        
        this.onsubmit = this.onsubmit.bind(this);
    }
    onsubmit(e) {
        e.preventDefault()
   const user = {
       email: this.state.email,
       password: this.state.password
   }
    login(user).then(res => {
     if(res) {
         this.props.history.push('/profile')
     } 
     
    }); }
    catch(e){
                alert(e.message);
            }
    
    klikGet(e){
        try{
        
        e.preventDefault();
      
        var url = 'http://localhost:3210/data/';
        
        axios.get(url)
        .then((Data) => {
          console.log(Data.data);
          
          
        if(  this.setState({
            id: this.state.id,
            email: this.state.email,
            password: this.state.password
          }) )
          return (
            this.props.history.push('/home')
              
          )
          
        })
        .then(function(myJson) {
            console.log(myJson.data);
          });
        
    }
        catch(e){
            alert(e.message);
        }
      };

    handleLogin(e){
        e.preventDefault();
            this.props.history.push('/home');
        
        
    }

    // handleChange(e) {
    //     let target = e.target;
    //     let value = target.type === 'checkbox' ? target.checked : target.value;
    //     let name = target.name;

    //     this.setState({
    //       [name]: value
    //     });
    // }
   onChange(e) {
       this.setState({ [e.target.name]: e.target.value})
   }
    
    
    render() {
        
        return (
            <Router>   
                <div className="FormCenter">
                    <form noValidate onSubmit={this.onsubmit} className="FormFields" >

                        <div className="FormTitle"><h2>Sign In</h2></div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" key ={this.state.id} className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.onChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" key ={this.state.id} className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.onChange} />
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20" type="submit" >Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
                    </div>
                    </form>
                </div>
            </Router>
        );
    }
}

export default withRouter(SignInForm);