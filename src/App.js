import React, { Component } from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
// import Loadable from 'react-loadable';
import NavBar from './NavBar';
import store from './store';
import Details from './Details';
import Results from './Results';
import SearchParams from './SearchParams';

// const LoadableDetails = Loadable({
//   loader: () => import('./Details'),
//   loading() {
//     return <h1>Loading Split Code..</h1>;
//   }
// });
// const LoadableResults = Loadable({
//   loader: () => import('./Results'),
//   loading() {
//     return <h1>Loading Split Code..</h1>;
//   }
// });
// const LoadableSearchParams = Loadable({
//   loader: () => import('./SearchParams'),
//   loading() {
//     return <h1>Loading Split Code..</h1>;
//   }
// });

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Provider store={store}>
          <Router>
            <Results path="/" />
            <Details path="/details/:id" />
            <SearchParams path="/search-params" />
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App
