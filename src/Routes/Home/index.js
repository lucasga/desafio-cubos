import React, { Component } from 'react';
import MovieBox from '../../Components/MovieBox';
import api from  '../../axios';
import "./Home.css";

export default class extends Component {

  constructor(){
    super();
    this.state = {
      movies: [],
      filter: "",
    };
    this.getMovies();
  }

  getMovies() {
    api.get("movie/upcoming?api_key=e9b2b39b3ea37b08c2a9fa546b76461b&page=1&language=pt-BR").then(e => {
      this.setState({
        movies: e.data.results
      })
    })
    .catch(e => console.log(e));
  }

  handleChange(e){
    this.setState({
      filter: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.filterMovies(this.state.filter);

  }

  filterMovies(filter) {
    api.get(`search/movie?api_key=e9b2b39b3ea37b08c2a9fa546b76461b&query=${filter}&language=pt-BR&region=pt-BR&page=1&include_adult=false`)
      .then(e => {
        this.setState({ movies: e.data.results});
      })
      .catch(err => console.log(err));
  }

  render() {

    return(
      <div>
        <div className="searchbar">
          <form onSubmit={(event) => {this.handleSubmit(event)}}>
            <input type="text" className="search-input" value={this.state.filter} onChange={(e)=> {this.handleChange(e)}} placeholder="Busque um filme por nome, ano ou gênero..."/>
          </form>
        </div>
        <MovieBox {...this.state} {...this.props} />
      </div>
    );
  }
}
