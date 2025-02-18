import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // Utilisation de process.env pour accéder aux variables d'environnement dans create-react-app
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const confirmationTemplateId = process.env.REACT_APP_EMAILJS_CONFIRMATION_TEMPLATE_ID;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, publicKey)
      .then(() => {
        emailjs.send(serviceId, confirmationTemplateId, {
          to_email: formData.email,
          user_name: formData.name
        }, publicKey);
        setShowModal(true);
      })
      .catch(error => console.error('Erreur:', error));

    setFormData({ name: '', email: '', message: '' });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Nom:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Message:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />

        <button type="submit">Envoyer</button>
      </form>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Message bien reçu ! Nous vous répondrons bientôt.</p>
            <button onClick={closeModal}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;