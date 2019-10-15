import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'


class Navbar extends Component {
    logout(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }

    render() {
        const loginRegLink = (
            <ul className = "navbar-nav">
            <li className ="nav-item">
            <Link to="/login" className="nav-link">
            Login
            </Link>
            </li>

            <li className ="nav-item">
            <Link to="/register" className="nav-link">
            Register
            </Link>
            </li>
            </ul>
        )

        const userLink = (
            <ul className = "navbar-nav">
            <li className ="nav-item">
            <Link to="/profile" className="nav-link">
            Login
            </Link>
            </li>

            <li className ="nav-item">
            <a href="" onClick={this.logout.bind(this)} className="nav-link">
            Logout
            </a>
            </li>
            </ul>
        )

        return(
            <nav>
                <button className = "navbar-toggler"
                type = "button"
                data-toggle= "collapse"
                data-target="#navbar1"
                aria-controlss="navbar1"
                aria-expanded="false"
                aria-label= "Toggle navigation">
                    <span className="navbar-toggle-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center"
                id="navbar1">
                    <ul className="navbar-nav">
                        <li>
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)