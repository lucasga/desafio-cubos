import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
        <header className="Navbar">
          <p className="Navbar-title">{this.props.title} </p> 
        </header>
    );
  }
}

export default NavBar;