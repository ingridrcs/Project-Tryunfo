import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: 'false',
      hasTrunfo: '',
      isSaveButtonDisabled: 'true',
    };
    this.onInputChangeFunction = this.onInputChangeFunction.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  // Source: https://pt-br.reactjs.org/docs/forms.html.
  // Operador Spread:https://www.youtube.com/watch?v=XeJ6Y50y8bE

  onInputChangeFunction(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value });
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChangeFunction }
          onSaveButtonClick={ this.onSubmit }
          { ...this.state }
        />
        <Card onInputChange={ this.onInputChangeFunction } { ...this.state } />
      </div>
    );
  }
}

export default App;
