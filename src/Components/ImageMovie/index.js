import React, { Component } from 'react';
import './ImageMovie.css';

class ImageMovie extends Component {
  render() {
    return (
        <div className="image-movie">
            <img className="image-dim" alt="img" src={this.props.source} />
        </div>
    );
  }
}

export default ImageMovie;
