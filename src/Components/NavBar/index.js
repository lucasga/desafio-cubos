import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
        <header className="navbar">
          {this.props.title} 
        </header>
    );
  }
}

export default NavBar;