import React from 'react';
import './InputComponent.css';

export class InputComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      number: ""
    }

    this.enterName = this.enterName.bind(this);
    this.enterEmail = this.enterEmail.bind(this);
    this.enterNumber = this.enterNumber.bind(this);
    this.addContact = this.addContact.bind(this);
    this.clearFields = this.clearFields.bind(this);
  }

  enterName(e) {
    this.setState({name: e.target.value});
  }

  enterEmail(e) {
    this.setState({email: e.target.value});
  }

  enterNumber(e) {
    this.setState({number: e.target.value});
  }

  addContact() {
    this.props.addContact(this.state);
    this.setState({
      name: "",
      email: "",
      number: ""
    });
  }

  clearFields() {
    this.setState({
      name: "",
      email: "",
      number: ""
    });
  }

  render() {
    return(
      <tr>
        <td><input type="text" className='form-control' value={this.state.name} onChange={(e) => this.enterName(e)} /></td>
        <td><input type="text" className="form-control" value={this.state.email} onChange={(e) => this.enterEmail(e)}/></td>
        <td><input type="text" className="form-control" value={this.state.number} onChange={(e) => this.enterNumber(e)}/></td>
        <td><button className="btn btn-primary" onClick={() => this.addContact()}>Add Contact</button></td>
        <td><button className='btn btn-info'>Update</button>&nbsp;&nbsp;<button className="btn btn-info" onClick={() => this.clearFields()}>Clear</button></td>
      </tr>
    );
  }
}

InputComponent.PropTypes = {
  name: React.PropTypes.string,
  email: React.PropTypes.string,
  number: React.PropTypes.string
};
