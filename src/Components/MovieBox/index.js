import React, { Component } from 'react';
import CardMovie from './../CardMovie/index.js';
import './MovieBox.css';

class MovieBox extends Component {
  render() {
    return (
        <div className="movie-box">
            <CardMovie
                img="https://is5-ssl.mzstatic.com/image/thumb/Video118/v4/e6/bd/74/e6bd7401-8f27-e30b-e384-230b33944465/source/1200x630bb.jpg"  
            />
        </div>
    );
  }
}

export default MovieBox;