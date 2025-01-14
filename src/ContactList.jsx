import React from 'react';

function ContactList({ contacts, deleteContact }) {
    return (
        <ul>
            {contacts.map((contact, index) => (
                <li key={index}>
                    {contact.name} ({contact.email})
                    <button onClick={() => deleteContact(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default ContactList;
