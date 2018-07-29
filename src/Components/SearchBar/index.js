import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
        <div className="Searchbar">
          <form>
              <input type="text" className="search-input" placeholder={this.props.placeholder}/>
          </form>
        </div>  
        
    );
  }
}

export default SearchBar;