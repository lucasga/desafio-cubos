import React, { Component } from 'react';
import ImageMovie from './../ImageMovie/index.js';
import './CardMovie.css';
import MovieDescription from '../MovieDescription/index.js';
import MovieTitle from '../MovieTitle/index.js';


class CardMovie extends Component {

  handleOnClick = (path) => {
    return this.props.history.push(`/details/${path}`); 
  }

  render() {

    const { movie } = this.props;
    let movieDate = movie.release_date.split("-");
    return (
        <div className="card-movie" onClick={() => this.handleOnClick(movie.id)} >
            <div className="movie-img">
              <div className="background-movie-img">
                <ImageMovie source={`http://image.tmdb.org/t/p/original${movie.poster_path}`} />
              </div>
             </div>
             <div className="movie-content">
                <MovieTitle title={movie.title} rating={`${movie.vote_average * 10}%`} />
                <MovieDescription
                    date={`${movieDate[2]}/${movieDate[1]}/${movieDate[0]}`}
                    description={movie.overview}
                    tags={movie.genre_ids}
                />
             </div>
        </div>
    );
  }
}

export default CardMovie;
