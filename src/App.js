import React from 'react';
import { render } from 'react-dom';
import pf from 'petfinder-client';
import Pet from './Pet';

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({ output: 'full', location: 'Tillamook, OR' })
      .then(data => {
        let pets;
        // The data is being translated from XML to JSON, thus this logic is needed
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            // If the data coming back is an array, great. Set it to: pets.
            pets = data.petfinder.pets.pet;
          } else {
            // If the data coming back isn't in an array, let's put it in one.
            pets = [data.petfinder.pets.pet];
          }
        } else {
          // Otherwise, return "pets" set to an empty array.
          pets = [];
        }
        this.setState({ pets });
      });
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <div>
          {this.state.pets.map(pet => {
            let breed;
            if (Array.isArray(pet.breeds.breed)) {
              breed = pet.breeds.breed.join(', ');
            } else {
              breed = pet.breeds.breed;
            }
            return (
              <Pet
                key={pet.id}
                animal={pet.animal}
                name={pet.name}
                breed={breed}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));
