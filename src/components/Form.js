import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <section>
        <h2>Adicionar nova carta</h2>
        <form>
          <label htmlFor="name-imput">
            Nome:
            <input type="text" data-testid="name-input" />
          </label>
          <label htmlFor="description-input">
            Descrição:
            <textarea data-testid="description-input" />
          </label>
          <label htmlFor="attr1-input">
            Attr1:
            <input type="number" data-testid="attr1-input" />
          </label>
          <label htmlFor="attr2-input">
            Attr2:
            <input type="number" data-testid="attr2-input" />
          </label>
          <label htmlFor="attr3-input">
            Attr3:
            <input type="number" data-testid="attr3-input" />
          </label>
          <label htmlFor="image-input">
            Imagem:
            <input type="text" data-testid="image-input" />
          </label>
          <label htmlFor="rare-input">
            Raridade:
            <select data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            <input type="checkbox" data-testid="trunfo-input" />
            Super Trunfo
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </section>
    );
  }
}
export default Form;
