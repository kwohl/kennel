import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom"
import './NavBar.css'

class NavBar extends Component {

  render() {

    return (
      <header>
        <h1 className="site-title">Student Kennels<br />
          <small>Loving care when you're not there.</small>
        </h1>
        <nav>
          <ul className="container">
            <li><NavLink className="nav-link" to="/ " activeStyle={{
              color: "lime"
            }}>Home</NavLink></li>
            <li><NavLink className="nav-link" to="/animals" activeStyle={{
              color: "lime"
            }}>Animals</NavLink></li>
            <li><NavLink className="nav-link" to="/locations" activeStyle={{
              color: "lime"
            }}>Locations</NavLink></li>
            <li><NavLink className="nav-link" to="/employees" activeStyle={{
              color: "lime"
            }}>Employees</NavLink></li>
            <li><NavLink className="nav-link" to="/owners" activeStyle={{
              color: "lime"
            }}>Owners</NavLink></li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;