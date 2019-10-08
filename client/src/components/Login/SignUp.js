import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
      console.log("Componnt has mounted")
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        //alert(this.state);
        let data = {
          name: this.refs.name.value
        }

        var request = new Request('http://localhost:3000/api/Signup', {
          method: 'POST',
          body: JSON.stringify(data)
        });

        //xmlhttp request
        fetch(request)
        .then(function(response){
          response.json()
          .then(function(data){
            console.log(data)
          })
        })
        //const{email, password, name, hasAgreed} = this.state
        // this.props.history.push("/addTrip")

       // alert("User has successfully created an account. Please sign in to continue");
        
           //login state
         //  if(email ==="huddle_usergmail.com" && password ==="huddle123" && name===this.state.name && hasAgreed=== true){
            //   this.setState({
            //       loggedIn: true
            //   })
            //   return(
            //    this.props.history.push("/sign-in")
          //  );
        
              // }
    }

    render() {
        
        
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormTitle"><h2>Sign Up</h2></div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">Full Name</label>
                <input type="text" id="name" ref="name" className="FormField__Input" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}
export default SignUpForm;