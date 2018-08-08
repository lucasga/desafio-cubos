import React, { Component } from 'react';
import './DetailsBox.css';
import ImageMovie from '../ImageMovie';
import MovieTag from '../MovieTag';
import YouTube from 'react-youtube';
import api from  '../../axios';
import ReactLoading from 'react-loading';


class DetailsBox extends Component {
  constructor(){
      super();
      this.state = {
        movie: [],
        tags: [],
        language: [],
        youtube: [],
        video: true,
        videoReady: false
      };
  }

  componentWillMount() {
      api.get(`movie/${this.props.match.params.id}?api_key=e9b2b39b3ea37b08c2a9fa546b76461b&page=1&language=pt-BR&append_to_response=videos`)
      .then(e => {
          if(e.data.videos.results.length !== 0){
            this.setState({
                movie: e.data,
                tags: e.data.genres,
                language: e.data.spoken_languages[0].name,
                youtube: e.data.videos.results[0].key,
                video: true
            })
          } else {
            this.setState({
                movie: e.data,
                tags: e.data.genres,
                language: e.data.spoken_languages[0].name,
                video:false
            })
          }

      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  onReady = (event) => {
    this.setState({
        videoReady: true,
    })
  };

  render() {
      const {movie, video} = this.state;
      if(movie.length === 0) return null;


      let hours = Math.floor(movie.runtime / 60);
      let minutes = movie.runtime % 60;
      let time = hours+'h '+minutes+'min';
      let movieDate = movie.release_date.split("-");
      const opts = {
          height: '720',
          width: '100%',
          playerVars: {
            autoplay: 0
          }
      };
      return (
            <div className="details-box">
                <div className="details-title">
                  <div className="title">
                      {movie.title}
                  </div>
                  <div className="date">
                      {`${movieDate[2]}/${movieDate[1]}/${movieDate[0]}`}
                  </div>
              </div>
              <div className="details-content">
                  <div className="details-text">
                      <div className="topic">
                          Sinopse
                          <div className="blue-line"></div>
                      </div>
                      <div className="sinopse-text">
                          {movie.overview}
                      </div>
                      <div className="topic">
                          Informações
                          <div className="blue-line"></div>
                      </div>
                      <div className="more-informations">
                          <div className="information-title">
                              Situação
                              <div className="information">
                                  {movie.status}
                              </div>
                          </div>
                          <div className="information-title">
                              Idioma
                              <div className="information">
                                  {this.state.language}
                              </div>
                          </div>
                          <div className="information-title">
                              Duração
                              <div className="information">
                                  {time}
                              </div>
                          </div>
                          <div className="information-title">
                              Orçamento
                              <div className="information">
                                  {"$"+movie.budget.toLocaleString('pt-BR')+',00'}
                              </div>
                          </div>
                          <div className="information-title">
                              Receita
                              <div className="information">
                                  {'$'+movie.revenue.toLocaleString('pt-BR')+',00'}
                              </div>
                          </div>
                          <div className="information-title">
                              Lucro
                              <div className="information">
                                  {'$'+(movie.revenue - movie.budget).toLocaleString('pt-BR')+',00'}
                              </div>
                          </div>
                      </div>
                      <div className="movie-tags">
                        {
                          this.state.tags.map((tag,index) => (
                            <MovieTag key={index} tag={tag.name} />
                          ))
                        }
                      </div>
                      <div className="font-rating-details">
                          <div className="inner-div-details">
                              <div className="rating-details">
                                  {`${movie.vote_average * 10}%`}
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="details-image">
                      <div className="background-image">
                          <ImageMovie source={`http://image.tmdb.org/t/p/original${movie.poster_path}`} />
                      </div>
                  </div>
              </div>
              <div className="details-trailer">
                {
                    this.state.videoReady === false && this.state.video === true ? 
                            <ReactLoading type={"spin"} color={"#4E7AAB"} height={'20%'} width={'100%'} />
                    :
                        null
                }
                {  
                    video ?
                        <YouTube videoId={this.state.youtube} onReady={this.onReady} opts={opts}/>
                    :
                        <h3 className="youtube-message">"Não existe trailer disponível!"</h3>
                }

              </div>
              <a className="back" onClick={()=> this.props.history.replace("/")}>VOLTAR</a>
          </div>
      );
  }
}

export default DetailsBox;
