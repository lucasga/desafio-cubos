import React, { Component } from 'react';
import MovieTag from './../MovieTag/index.js'
import './MovieDescription.css';

class MovieDescription extends Component {
  render() {
    return (
        <div className="movie-description">
            <div className="font-date">
              {this.props.date}
            </div>
            <div className="font-description">
              {this.props.description}
            </div>
            <div className="tag-position">
              <MovieTag tag="Ação" />
            </div>
        </div>
    );
  }
}

export default MovieDescription;