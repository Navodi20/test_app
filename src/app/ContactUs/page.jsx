"use client";

import React, { useState } from 'react';
import styles from './page.module.css';

const ContactUs = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message sent:', message);
    alert('Thank you for reaching out! We will get back to you soon.');
    setMessage(''); // Clear the message after submission
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <p>
        We&apos;re all ears and ready to serve you! Got a question, a dash of feedback, or simply want to say hello? Don&apos;t be shy—let&apos;s connect and keep the conversation cooking.
      </p>

      <h2>Get in Touch</h2>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message: </label>
          <textarea
            id="message"
            name="message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />
        </div>
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>

      <h2>Contact Information</h2>
      <p>Email: <a href="mailto:info@myrestaurant.com">info@myrestaurant.com</a></p>
      <p>Phone: <a href="tel:+94112406629">(011) 2406629</a></p>
      <p>Address: 126/A Alhena Road, Maharagama</p>
    </div>
  );
};

export default ContactUs;
