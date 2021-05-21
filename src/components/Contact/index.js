import React, { useState } from 'react';
import Card from '../UI/Card';
import './style.css';

function Contact() {
    const Contact =({name, lastname, email, text}) => {}
    
    const [contacts, setContacs] = useState([]);
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");


    const sendEmail = (contact) => {
        setContacs([contact, ...contacts]);
      };
    const onAddButtonClick = () => {
        const contact = {name, lastname, email, text };
        sendEmail(contact);
    };
   
    return(
        <div>
        {contacts.map((contact) => (
        <Contact name={contact.name} lastname={contact.lastname} email={contact.email} text={contact.text} />
          ))}
          <div className="contactContainer">
          <Card>
            <form className="contact">
                <label>Name:</label>
				<input type="text" placeholder="Your name"value={name} onChange={(e) => setName(e.target.value)} />
				<label>Lastname:</label>
				<input type="text" placeholder="Your lastname" value={lastname} onChange={(e) => setLastName(e.target.value)}  />
				<label>Email:</label>
				<input type="text" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
				<label>Message:</label>
				<textarea cols="145" rows="10" placeholder="Your message" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                <div className="btn">
                <button onClick={onAddButtonClick}>Send</button>
                </div>
            </form>
            </Card>
            </div>
        </div>
    )
    }

export default Contact
