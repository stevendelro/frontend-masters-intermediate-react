import React, { Component } from 'react';
import { render} from 'react-dom';
import Results from './Results';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Results />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
