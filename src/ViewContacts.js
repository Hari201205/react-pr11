// src/ViewContacts.js
import React, { useState, useEffect } from "react";
import { database } from "./firebaseConfig";
import { ref, onValue, remove } from "firebase/database";

const ViewContacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const contactRef = ref(database, "contacts");
        onValue(contactRef, (snapshot) => {
            const contacts = snapshot.val();
            const contactList = [];
            for (let id in contacts) {
                contactList.push({ id, ...contacts[id] });
            }
            setContacts(contactList);
        });
    }, []);

    const handleDelete = (id) => {
        const contactRef = ref(database, `contacts/${id}`);
        remove(contactRef).then(() => {
            setContacts(contacts.filter((contact) => contact.id !== id));
        });
    };

    return (
        <div className="view-contacts">
            <h2>Submitted Contacts</h2>
            {contacts.length === 0 ? (
                <p>No contacts found</p>
            ) : (
                <ul>
                    {contacts.map((contact) => (
                        <li key={contact.id}>
                            <span><strong>Name:</strong> {contact.name}</span> <br />
                            <span><strong>Email:</strong> {contact.email}</span> <br />
                            <span><strong>Company Name:</strong> {contact.company}</span> <br />
                            <span><strong>Phone Number:</strong> {contact.phone}</span> <br />
                            <span><strong>Message:</strong> {contact.message}</span>
                            <button
                                onClick={() => handleDelete(contact.id)}
                                style={{ marginTop: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ViewContacts;
