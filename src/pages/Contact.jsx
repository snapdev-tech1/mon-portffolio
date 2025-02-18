import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p className="contact-intro">Une opportunité, une question ? Contactez-moi !</p>
      <ContactForm />
    </div>
  );
};

export default Contact;