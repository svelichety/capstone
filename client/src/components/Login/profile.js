import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: ''
   
    }
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      name: decoded.name,
      email: decoded.email
    })
  }

  render() {
    return (
      <div >
        <div>
          <div >
            <h1>PROFILE</h1>
          </div>
          <table >
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.state.name}</td>
              </tr>
              
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile