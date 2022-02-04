import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      list: [],
    };
    this.onInputChangeFunction = this.onInputChangeFunction.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.verificationButton = this.verificationButton.bind(this);
  }
  // Source: https://pt-br.reactjs.org/docs/forms.html.
  // Operador Spread:https://www.youtube.com/watch?v=XeJ6Y50y8bE

  onInputChangeFunction(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState(() => ({
      [name]: value,
    }), () => {
      this.verificationButton();
    });
  }

  // Source: Ajuda da Allana na explicação do passo a passo do requisito 6.
  onSubmit(event) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    const newObj = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };
    this.setState((item) => (
      {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        list: [...item.list, newObj],
      }), () => this.checkSuperTrunfo());
  }

  checkSuperTrunfo = () => {
    const { list } = this.state;
    const checkTrunfo = list.every((item) => item.cardTrunfo !== false);
    if (checkTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  };

  // Source: Ajuda do Laecio que me explicou o passo a passo do requisito 5.
  // https://pt.stackoverflow.com/questions/268673/converter-string-em-number

  verificationButton() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr3,
      cardAttr1,
      cardAttr2 } = this.state;
    const allString = [cardName, cardDescription, cardImage];
    const allAtrr = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
    const verifyAllString = allString.every((item) => item !== '');
    const maxNumber = 210;
    const maxAtr = 90;
    const soma = (
      (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= maxNumber);
    const verifyAllAtrr = allAtrr.every((item) => item <= maxAtr && item >= 0);
    const verifyAll = (verifyAllString && soma && verifyAllAtrr);
    this.setState(({ isSaveButtonDisabled: !verifyAll }));
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChangeFunction }
          onSaveButtonClick={ this.onSubmit }
        />
        <Card onInputChange={ this.onInputChangeFunction } { ...this.state } />
        <div>
          {
            list.map((item) => (
              <div key={ item.cardName }>
                <Card
                  key={ item.cardName }
                  cardName={ item.cardName }
                  cardDescription={ item.cardDescription }
                  cardAttr1={ item.cardAttr1 }
                  cardAttr2={ item.cardAttr2 }
                  cardAttr3={ item.cardAttr3 }
                  cardImage={ item.cardImage }
                  cardRare={ item.cardRare }
                  cardTrunfo={ item.cardTrunfo }
                />
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
