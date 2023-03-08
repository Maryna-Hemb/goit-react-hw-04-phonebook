import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout.styled';

import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { TitleH1, TitleH2 } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      this.setState({ contacts: JSON.parse(savedContacts) });
      return;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContactValues => {
    //   let prevCont = this.state.contacts.map(el => el.name);
    //   if (prevCont.includes(newContactValues.name)) {
    //     alert(`${newContactValues.name} is already in contacts`);
    //     return;
    //   } else {
    //     this.setState(prevState => ({
    //       contacts: [...prevState.contacts, newContactValues],
    //     }));
    //   }
    // };

    let nameRepeat = false;
    this.state.contacts.forEach(name => {
      if (name.name.toLowerCase() === newContactValues.name.toLowerCase()) {
        nameRepeat = true;
        return alert(`${newContactValues.name} is already in contacts`);
      }
    });

    if (nameRepeat) {
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContactValues],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value.trim() });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Layout>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm onAddNewContact={this.addContact} />

        <TitleH2>Contacts</TitleH2>
        <Filter filter={filter} onFilterChange={this.changeFilter} />
        <ContactList
          contacts={contacts}
          namefilter={filter}
          onDeleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
