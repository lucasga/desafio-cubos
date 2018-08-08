import React, { Component } from 'react';
import './App.css';
import { Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import DetailsBox from './Components/DetailsBox/index.js'
import Layout from './Routes/Layout';
import Home from './Routes/Home';
import history from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Layout history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/details/:id" exact strict component={DetailsBox} />
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
