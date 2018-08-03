import React, { Component } from 'react';
import ImageMovie from './../ImageMovie/index.js';
import './CardMovie.css';
import MovieDescription from '../MovieDescription/index.js';
import MovieTitle from '../MovieTitle/index.js';
import { Redirect } from 'react-router';


class CardMovie extends Component {
  state = {
    redirect: false   
  }
  handleOnClick = () => {
    this.setState({redirect: true});
  } 
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/details" />;
    }
    return (
        <div className="card-movie" onClick={this.handleOnClick}>
            <div className="movie-img">
                <ImageMovie source={this.props.img} />
             </div>
             <div className="movie-content">
                <MovieTitle title="Thor: Ragnarok" rating="75%" />
                <MovieDescription date="25/10/2017" description=" Thor está aprisionado do outro lado do universo e se encontra numa corrida contra o tempo para retornar a Asgard e impedir a sua destruição – o Ragnarok – pelas mãos de Hela. Enquanto isso, ele precisa enfrentar seu antigo companheiro, Hulk, numa batalha mortal de gladiadores." />
             </div>       
        </div>
    );
  }
}

export default CardMovie;