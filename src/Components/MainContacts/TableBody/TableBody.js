import React from 'react';
import { InputComponent } from './InputComponent/InputComponent';
import './TableBody.css';

export class TableBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: this.props.contacts
    };
  }

  // lifecycle method to detect updated contacts list
  componentWillReceiveProps(newProps) {
    this.setState({contacts: newProps.contacts});
  }

  render() {
    const contacts = this.state.contacts.map((contact, i) => {
      return (
        <tr key={i}>
          <td>{contact.name}</td>
          <td>{contact.email}</td>
          <td>{contact.number}</td>
          <td><button className="btn btn-danger">Remove</button></td>
          <td><button className="btn btn-warning">Edit</button></td>
        </tr>
      );
    });

    return (
      <tbody>
        <InputComponent addContact={this.props.addContact}/>
        {contacts}
      </tbody>
    );
  }
}
