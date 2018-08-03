import React, { Component } from 'react';
import NavBar from './Components/NavBar/index.js'
import SearchBar from './Components/SearchBar/index.js'
import MovieBox from './Components/MovieBox/index.js'
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import DetailsBox from './Components/DetailsBox/index.js'
import NavFooter from './Components/NavFooter/index.js'

const Search = () => {
  return (
    <div>
      <NavBar title="Movies" />
      <SearchBar placeholder="Busque um filme por nome, ano ou gênero..." />
      <MovieBox />
      <NavFooter current="3"/>
    </div>);
} 

const Details = () => {
  return (
    <div>
      <NavBar title="Movies" />
      <DetailsBox 
        title="Thor: Ragnarok" 
        date="25/10/2017" 
        img="https://is5-ssl.mzstatic.com/image/thumb/Video118/v4/e6/bd/74/e6bd7401-8f27-e30b-e384-230b33944465/source/1200x630bb.jpg"  
        sinopse="Thor está aprisionado do outro lado do universo e se encontra numa corrida contra o tempo para retornar a Asgard e impedir a sua destruição – o Ragnarok – pelas mãos de Hela. Enquanto isso, ele precisa enfrentar seu antigo companheiro, Hulk, numa batalha mortal de gladiadores."
        status="Lançado"
        language="Inglês"
        duration="2h 10min"
        budget="$180.000.000,00"
        receipts="$853.977.00,00"
        profit="$673.977.000,00"
        rating="75%"
        video="xIesLNpbBA4"
      />
    </div>);
} 

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact strict component={Search} />
          <Route path="/details" exact strict component={Details} />  
        </div>
      </Router>
    );
  }
}

export default App;
