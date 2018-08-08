import React, { Component } from 'react';
import './MovieTitle.css';

class MovieTitle extends Component {
  render() {
    return (
        <div className="movie-title">
            <div className="title-padding">
                <div className="font-rating">
                    <div className="inner-div">
                        <div className="rating-text">
                            <div>
                                {this.props.rating}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="font-title">
                    {this.props.title}
                </div>
            </div>
        </div>
    );
  }
}

export default MovieTitle;