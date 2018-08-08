import React, { Component } from 'react';
import CardMovie from './../CardMovie/index.js';
import './MovieBox.css';

export default class MovieBox extends Component {
  constructor(){
    super();
    this.state = {
      initial: 0,
      final: 5,
    };
  }

  handleOnClickBack = (pos) => {
    if(this.state.initial !== 0){
      this.setState({
        initial: this.state.initial-(5*pos),
        final: this.state.final-(5*pos),
      })
      window.scrollTo(0, 0)
    }
  }

  handleOnClickFoward = (pos) => {
    if(this.state.final !== 20){
      this.setState({
        initial: this.state.initial+(5*pos),
        final: this.state.final+(5*pos),
      })
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { movies } = this.props;
    return (
      <div className="aplication-content">
        <div className="movie-box">
          {
            movies.slice(this.state.initial, this.state.final).map(mv => (
              <CardMovie
                key={mv.id}
                movie={mv}
                {...this.props}
              />
            ))
          }
        </div>
        <footer className="nav-footer">
            {this.state.initial >= 10 ? <a className="nav-footer-padding" onClick={() => this.handleOnClickBack(2)}> {this.state.final === 15 ? "1" : "2"} </a> : null}
            {this.state.initial >= 5 ? <a className="nav-footer-padding" onClick={() => this.handleOnClickBack(1)}> {this.state.final === 10 ? "1" : (this.state.final === 15 ? "2" : "3")} </a> : null}
          <div className="font-rating-footer">
            <div className="inner-div-footer">
              <div className="rating-text-footer">
                <a>{this.state.initial === 0 ? "1" : (this.state.initial === 5 ? "2" : (this.state.initial === 10 ? "3" : 4))} </a>
              </div>
            </div>
          </div>
            {this.state.final <= 15 ? <a className="nav-footer-padding" onClick={() => this.handleOnClickFoward(1)}> {this.state.final === 5 ? "2" : (this.state.final === 10 ? "3" : "4")}  </a> : null}
            {this.state.final <= 10 ? <a className="nav-footer-padding" onClick={() => this.handleOnClickFoward(2)}> {this.state.final === 5 ? "3" : "4"} </a> : null}
        </footer>
      </div>
    );
  }
}
