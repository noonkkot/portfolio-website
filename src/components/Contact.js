// components/Contact.js
import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3001/send-email', formData);
      alert('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <article id="article">
      <div className="contact">
        <div>
          {/* 이미지를 넣을 부분 */}
          <img src={process.env.PUBLIC_URL + 'images/contact.jpg'} alt="index 이미지" className="indexImage" />
        </div>
        <div className="contact-form">
          <h2>CONTACT</h2>
          <form onSubmit={handleSubmit}>
            <p>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required onChange={handleChange} />
            </p>
            <p>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required onChange={handleChange} />
            </p>
            <p>
              <label htmlFor="message">Message</label>
              <input type="text" id="message" name="message" required onChange={handleChange} />
            </p>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </article>
  );
}

export default Contact;