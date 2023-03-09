import { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout.styled';

import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { TitleH1, TitleH2 } from './App.styled';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts');
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getInitialContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContactValues => {
    let nameRepeat = false;
    contacts.forEach(name => {
      if (name.name.toLowerCase() === newContactValues.name.toLowerCase()) {
        nameRepeat = true;
        return alert(`${newContactValues.name} is already in contacts`);
      }
    });

    if (nameRepeat) {
      return;
    }

    setContacts([...contacts, newContactValues]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = event => {
    setFilter(event.target.value.trim());
  };

  return (
    <Layout>
      <TitleH1>Phonebook</TitleH1>
      <ContactForm onAddNewContact={addContact} />

      <TitleH2>Contacts</TitleH2>
      <Filter filter={filter} onFilterChange={changeFilter} />
      <ContactList
        contacts={contacts}
        namefilter={filter}
        onDeleteContact={deleteContact}
      />
      <GlobalStyle />
    </Layout>
  );
};
