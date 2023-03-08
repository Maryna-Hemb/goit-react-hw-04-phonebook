import PropTypes from 'prop-types';
import { ContactListItem } from 'components/contactListItem/ContactListItem';
import { List, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact, namefilter }) => {
  const filtredPhonebook = contacts.filter(contact =>
    contact.name.toLowerCase().includes(namefilter.toLowerCase())
  );
  return (
    <div>
      <List>
        {filtredPhonebook.map(({ id, name, number }) => (
          <ListItem key={id}>
            <ContactListItem
              id={id}
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape(PropTypes.string.isRequired))
    .isRequired,
  namefilter: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
