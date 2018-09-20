import React from 'react';
import { render } from 'react-dom'
import Pet from './Pet';

class App extends React.Component {
  handleTitleClick() {
    alert('You clicked the title.');
  }
  render() {
    return React.createElement('div', {}, [
      React.createElement(
        'h1',
        { onClick: this.handleTitleClick },
        'Adopt Me!'
      ),
      React.createElement(Pet, {
        name: 'Kygo',
        animal: 'dog',
        breed: 'Labrador'
      }),
      React.createElement(Pet, {
        name: 'Rio',
        animal: 'dog',
        breed: 'Australian Shepherd'
      }),
      React.createElement(Pet, {
        name: 'George',
        animal: 'tortoise',
        breed: 'Pinta Island'
      })
    ]);
  }
}

render(React.createElement(App), document.getElementById('root'));
