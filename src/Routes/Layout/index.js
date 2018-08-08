import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/index.js'

export default class Layout extends Component {

  render() {
    return(
      <div style={{textAlign: 'center'}}>
        <NavBar title="Movies" {...this.props} />
        { this.props.children }
      </div>
    );
  }
}
