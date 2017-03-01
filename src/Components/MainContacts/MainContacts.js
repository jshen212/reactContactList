import React from 'react';
import { TableHeader } from './TableHeader/TableHeader';
import { TableBody } from './TableBody/TableBody';
import './MainContacts.css';

export class MainContacts extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      contacts: []
    };

    this.addContact = this.addContact.bind(this);
  }

  addContact(contact) {
    // create a new copy of the array and add new contact info
    let contacts = this.state.contacts.slice();
    let newContacts = [...contacts, contact];
    this.setState({contacts: newContacts});
  }

  render() {
    return(
      <table className="table contactsTable">
        <TableHeader />
        <TableBody contacts={this.state.contacts} addContact={this.addContact} />
      </table>
    );
  }
}
