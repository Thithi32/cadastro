import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormItem from './core/FormItem';

class Form extends Component {
  static isValidFirstName(firstName) {
    return (
      firstName.length <= 20 &&
      firstName.replace(/[^a-zA-Z]+/g, '').length === firstName.length
    );
  }

  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInterestKeyPress = this.handleInterestKeyPress.bind(this);
    this.removeInterest = this.removeInterest.bind(this);
    this.save = this.save.bind(this);
  }

  getPerson() {
    const defaultValues = this.props.person || {};
    const modifiedValues = this.state;
    const person = Object.assign({}, defaultValues, modifiedValues);
    return person;
  }

  handleFileChange(field, event) {
    this.setState({ [field]: event.target.files[0] });
  }

  handleInputChange(field, event) {
    this.setState({ [field]: event.target.value });
  }

  handleFieldChange(field, value) {
    this.setState({ [field]: value });
  }

  handleInterestKeyPress(event) {
    if (event.key === 'Enter') {
      const person = this.getPerson();
      const interests = person.interests || [];
      interests.push(event.target.value);
      this.setState({ interests, interestsInput: '' });
    }
    return false;
  }

  removeInterest(idx) {
    const person = this.getPerson();
    const interests = person.interests || [];
    interests.splice(idx, 1);
    this.setState({ interests });
  }

  save() {
    const person = this.getPerson();
    this.props.save(person);
  }

  render() {
    const person = this.getPerson();

    console.log('::::::', person);

    const ageOptions = ['13-19', '20-29', '30-44', '45 e acima'];

    return (
      <div className="Form">
        <aside>
          { person.avatar &&
            <img src={URL.createObjectURL(person.avatar)} style={{ width: 100, height: 100 }} alt="Avatar" />
          }
          <input type="file" onChange={e => this.handleFileChange('avatar', e)} />
        </aside>
        <section>
          <form onSubmit={e => e.preventDefault()}>
            <FormItem label="Nome">
              <div>
                <input
                  type="text"
                  placeholder="Primeiro nome"
                  value={person.firstName || ''}
                  onChange={e => this.handleInputChange('firstName', e)}
                />
                <input
                  type="text"
                  id="lastName"
                  placeholder="Sobrenome"
                  value={person.lastName || ''}
                  onChange={e => this.handleInputChange('lastName', e)}
                />
                { !Form.isValidFirstName(person.firstName || '') &&
                  <div style={{ color: 'red' }}>
                    <small>
                      O primeiro nome deve ter somente caracteres alfabéticos e&nbsp;
                      o comprimento não deve exceder 20 caracteres.
                    </small>
                  </div>
                }
              </div>
            </FormItem>
            <FormItem label="Idade" htmlFor="age">
              <div>
                { ageOptions.map(age => (
                  <div className="radio" key={age}>
                    <label>
                      <input
                        type="radio"
                        value={age}
                        checked={person.age === age}
                        onChange={e => this.handleInputChange('age', e)}
                      />
                      {age}
                    </label>
                  </div>
                ))}
              </div>
            </FormItem>
            <FormItem label="Email" htmlFor="email">
              <input
                type="text"
                id="email"
                value={person.email || ''}
                onChange={e => this.handleInputChange('email', e)}
              />
            </FormItem>
            <FormItem label="Telefone" htmlFor="phone">
              <input
                type="text"
                id="phone"
                value={person.phone || ''}
                onChange={e => this.handleInputChange('phone', e)}
                placeholder="(XX) XXXXX-XXXX"
              />
            </FormItem>
            <FormItem label="Estado" htmlFor="state">
              <input
                type="text"
                id="state"
                value={person.state || ''}
                onChange={e => this.handleInputChange('state', e)}
              />
            </FormItem>
            <FormItem label="Pais" htmlFor="country">
              <input
                type="text"
                id="country"
                value={person.country || ''}
                onChange={e => this.handleInputChange('country', e)}
              />
            </FormItem>
            <FormItem label="Endereço" htmlFor="addressType">
              <div>
                <select
                  id="addressType"
                  onChange={e => this.handleInputChange('addressType', e)}
                  value={person.value}
                >
                  <option>Selecione</option>
                  <option value="home">Casa</option>
                  <option value="firm">Empresa</option>
                </select>
                { person.addressType === 'home' &&
                  <input
                    type="text"
                    id="home"
                    value={person.home || ''}
                    onChange={e => this.handleInputChange('home', e)}
                  />
                }
                { person.addressType === 'firm' &&
                  <input
                    type="text"
                    id="firm"
                    value={person.firm || ''}
                    onChange={e => this.handleInputChange('firm', e)}
                  />
                }
              </div>
            </FormItem>
            <FormItem label="Interesse" htmlFor="interests">
              <div>
                <input
                  type="text"
                  id="interests"
                  value={this.state.interestsInput}
                  onChange={e => this.setState({ interestsInput: e.target.value })}
                  onKeyPress={this.handleInterestKeyPress}
                />
                <div>
                  { person.interests && person.interests.map((interest, idx) => (
                    <div key={`${interest}_${idx}`}>
                      {interest}&nbsp;
                      <button onClick={() => this.removeInterest(idx)} type="button">X</button>
                    </div>
                  ))}
                </div>
              </div>
            </FormItem>
            <div>
              <input
                type="checkbox"
                value="Desejo receber novidade por email"
                checked={person.subscription || 0}
                onChange={() => this.handleFieldChange('subscription', !person.subscription)}
              />
              Desejo receber novidade por email
            </div>
            <button onClick={this.save} type="button">
              Salvar
            </button>
          </form>
        </section>
      </div>
    );
  }
}

Form.propTypes = {
  save: PropTypes.func.isRequired,
  person: PropTypes.shape({}),
};

Form.defaultProps = {
  person: {},
};

export default Form;
