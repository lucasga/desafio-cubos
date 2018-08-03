import React, { Component } from 'react';
import './DetailsBox.css';
import ImageMovie from '../ImageMovie';
import MovieTag from '../MovieTag';
import YouTube from 'react-youtube';

class DetailsBox extends Component {
  render() {
    const opts = {
        height: '720',
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };
    return (
        <div className="details-box">
            <div className="details-title">
                <div className="title">
                    {this.props.title}
                </div>
                <div className="date">
                    {this.props.date}
                </div>
            </div>
            <div className="details-content">
                <div className="details-text">
                    <div className="topic">
                        Sinopse
                        <div className="blue-line"></div>
                    </div>
                    <div className="sinopse-text">
                        {this.props.sinopse}
                    </div>
                    <div className="topic">
                        Informações
                        <div className="blue-line"></div>
                    </div>
                    <div className="more-informations">
                        <div className="information-title">
                            Situação
                            <div className="information">
                                {this.props.status}
                            </div>
                        </div>
                        <div className="information-title">
                            Idioma
                            <div className="information">
                                {this.props.language}
                            </div>
                        </div>
                        <div className="information-title">
                            Duração
                            <div className="information">
                                {this.props.duration}
                            </div>
                        </div>
                        <div className="information-title">
                            Orçamento
                            <div className="information">
                                {this.props.budget}
                            </div>
                        </div>
                        <div className="information-title">
                            Receita
                            <div className="information">
                                {this.props.receipts}
                            </div>
                        </div>
                        <div className="information-title">
                            Lucro
                            <div className="information">
                                {this.props.profit}
                            </div>
                        </div>
                    </div>
                    <div className="movie-tags">
                        <MovieTag tag="Ação" />
                    </div>
                    <div className="font-rating-details">
                        <div className="inner-div-details">
                            <div className="rating-details">
                                {this.props.rating}
                            </div>
                        </div>
                    </div>     
                </div>
                <div className="details-image">
                    <ImageMovie source={this.props.img} />
                </div>
            </div>
            <div className="details-trailer">
                <YouTube videoId={this.props.video} opts={opts}/>
            </div>
        </div>
    );
  }
}

export default DetailsBox;