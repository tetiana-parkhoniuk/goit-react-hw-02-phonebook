import PropTypes from 'prop-types';
import ContactsListItem from 'components/ContactsListItem/';

export default function ContactsList({ contacts, onDeleteContact }) {
    return (
        <ul>
            {contacts.map(contact => (
                <ContactsListItem
                    key={contact.id}
                    id={contact.id}
                    name={contact.name}
                    number={contact.number}
                    onDeleteContact={onDeleteContact}
                />
            ))}
        </ul>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}


