import React from 'react';

const AdoptModalContent = props => (
  <React.Fragment>
    <h1>Would you like to adopt {props.name}?</h1>
    <div className="buttons">
      <button onClick={props.toggleModal}>Yup</button>
      <button onClick={props.toggleModal}>Nope</button>
    </div>
  </React.Fragment>
);

export default AdoptModalContent;
