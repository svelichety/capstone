
import React, { Component } from 'react';
import axios from 'axios';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip'
import { Link } from 'react-router-dom';
import {FormErrors} from './formErrors';

class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      formErrors: {email: '', password: ''},
    emailValid: false,
    passwordValid: false,
    formValid: false
    };

    
}

handleUserInput = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value},
                () => { this.validateField(name, value) });
}

validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.emailValid;
  let passwordValid = this.state.passwordValid;

  switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    case 'password':
      passwordValid = value.length >= 6;
      fieldValidationErrors.password = passwordValid ? '': ' is too short';
      break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  emailValid: emailValid,
                  passwordValid: passwordValid
                }, this.validateForm);
}

validateForm() {
  this.setState({formValid: this.state.emailValid && this.state.passwordValid});
}

errorClass(error) {
  return(error.length === 0 ? '' : 'has-error');
}

register(e){
  e.preventDefault();
  var url = 'http://localhost:3210/data';
  axios.post(url, {
    name: this.inputname.value,
    email: this.inputemail.value,
    password: this.inputpassword.value
  })
  .then(function (response) {
    localStorage.setItem('usertoken', response.data)
    return response.data
    
  })
  .catch(function (error) {
    console.log(error);
  });
  this.inputname.value = '';
  this.inputemail.value = '';
  this.inputpassword.value = '';
  this.props.history.push('/login');
};


klikGet(e){
  this.props.history.push('/login');
  e.preventDefault();

  var url = 'http://localhost:3210/data';
  axios.get(url)
  .then((Data) => {
    console.log(Data.data);
    this.setState({
      datas: Data.data,
    }) 
  })
};

render() {
  const dataPostgre = this.state.datas.map((item, index)=>{
    var array = ['email: ',item.email,', password: ', item.password];
    return <p key={index}>{array}</p>;
  })
  return (
    <div className="FormCenter">
   <Zoom>
   
     <div className="FormTitle">  <Flip><h3>Sign Up</h3></Flip></div>
     
     <form className="FormFields">
     <div>
 <FormErrors formErrors={this.state.formErrors} />
</div>
<div className={`FormField ${this.errorClass(this.state.formErrors.email)}`}>
        
     
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" ref={ inname => this.inputname = inname } required className="FormField__Input" placeholder="Enter your full name" name="name" />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email"  onChange={this.handleUserInput}   ref={ inemail => this.inputemail = inemail } className="FormField__Input"  required placeholder="Enter your email" name="email"  />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleUserInput} ref={ inpassword => this.inputpassword = inpassword } parameters= '/(?=.*[0-9])/' className="FormField__Input" required placeholder="Enter your password" name="password"  />
              </div>
              
              
  
  <div >
  <button className="btn btn-primary" style={{width:'100px'}}
  onClick={this.register.bind(this)} disabled={!this.state.formValid} onSubmit={this.login}>SignUp</button> <br></br>
  <Link to="/login"  className="FormField__Link">I'm already member</Link>
  
  
</div>
</form>

    
    
     </Zoom>
   </div>
  );

 }

//  login = () =>{

//   alert('test')
// }
 
 }
 
export default App1;