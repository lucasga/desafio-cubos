import React, { Component } from 'react';
import MovieTag from './../MovieTag/index.js'
import './MovieDescription.css';
import getGenre from '../utils'


class MovieDescription extends Component {

  render() {

    return (
        <div className="movie-description">
          <div className="desciption-padding">
            <div className="font-date">
              {this.props.date}
            </div>
            <div className="font-description">
              {this.props.description}
            </div>
            <div className="tag-position">
              {
                this.props.tags.map((tag,index) => (
                  <MovieTag key={index} tag={getGenre(tag)} />
                ))
              }
            </div>
          </div>
        </div>
    );
  }
}

export default MovieDescription;
