// src/ContactForm.js
import React, { useState } from "react";
import { database } from "./firebaseConfig";
import { ref, push } from "firebase/database";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const contactRef = ref(database, "contacts");
        const contact = {
            name,
            email,
            company,
            phone,
            message,
        };

        push(contactRef, contact);
        setName("");
        setEmail("");
        setCompany("");
        setPhone("");
        setMessage("");
        alert("Message sent successfully!");
    };

    return (
        <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Company Name:</label>
                    <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
