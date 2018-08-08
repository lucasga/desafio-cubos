import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
        <header  className="navbar">
          <a onClick={()=> this.props.history.replace("/")}>{this.props.title}</a>
        </header>
    );
  }
}

export default NavBar;
