const Pet = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed)
  ]);
};

class App extends React.Component {
  render() {
    return React.createElement('div', {}, [
      React.createElement('h1', {}, 'Adopt Me!'),
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

ReactDOM.render(React.createElement(App), document.getElementById('root'));
