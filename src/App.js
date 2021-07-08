// import './App.css';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';

export default class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  filterInputId = uuidv4();

  addContact = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name,
      number,
    }

    if (this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]
    }));
    }
  };

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value})
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };


  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>

        <h1>Phonebook</h1>

        <ContactForm
          onSubmit={this.addContact}
        />
        
        <h2>Contacts</h2>

        <Filter
          id={this.filterInputId}
          value={filter}
          onChange={ this.changeFilter}
        />

        <ContactsList
          contacts = {filteredContacts}
          onDeleteContact = {this.deleteContact}
        />
        
      </div>
    )
  }
}



