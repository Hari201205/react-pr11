// src/App.js
import React from "react";
import ContactForm from "./ContactForm";
import ViewContacts from "./ViewContacts";
import "./index.css";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Contact Management</h1>
                <div className="main-content">
                    <ContactForm />
                    <ViewContacts />
                </div>
            </header>
        </div>
    );
};

export default App;
