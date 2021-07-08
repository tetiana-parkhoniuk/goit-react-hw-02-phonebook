import PropTypes from 'prop-types';

import React from 'react'

export default function ContactsListItem({ id, name, number, onDeleteContact}) {
    return (
        <li>
            {name}: {number}
            <button
                onClick={()=> onDeleteContact(id)}
            >Delete
            </button>
        </li>
    )
}

ContactsListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}


