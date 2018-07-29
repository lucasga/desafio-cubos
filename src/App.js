import React, { Component } from 'react';
import NavBar from './Components/NavBar/index.js'
import SearchBar from './Components/SearchBar/index.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar title="Movies" />
        <SearchBar placeholder="Busque um filme por nome, ano ou gênero..." />
      </div>
    );
  }
}

export default App;
