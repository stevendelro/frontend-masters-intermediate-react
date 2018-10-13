import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';
import NavBar from './NavBar';
import store from './store';

const LoadableDetails = Loadable({
  loader: () => import('./Details'),
  loading() {
    return <h1>Loading Split Code..</h1>;
  }
});
const LoadableResults = Loadable({
  loader: () => import('./Results'),
  loading() {
    return <h1>Loading Split Code..</h1>;
  }
});
const LoadableSearchParams = Loadable({
  loader: () => import('./SearchParams'),
  loading() {
    return <h1>Loading Split Code..</h1>;
  }
});

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <LoadableResults path="/" />
            <LoadableDetails path="/details/:id" />
            <LoadableSearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
