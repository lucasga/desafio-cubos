import React, { Component } from 'react';
import './MovieTag.css';

class MovieTag extends Component {
  render() {
    return (
        <div className="movie-tag">
            {this.props.tag}
        </div>
    );
  }
}

export default MovieTag;