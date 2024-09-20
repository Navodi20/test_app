import React from 'react';
import styles from './page.module.css';

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <p>We're all ears and ready to serve you! Got a question, a dash of feedback, or simply want to say hello? Don't be shy—let’s connect and keep the conversation cooking.</p>

      <h2>Get in Touch</h2>
      <form className={styles.contactForm}>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea id="message" name="message" required> </textarea>
        </div>
        {/* Use the class from CSS module for button styling */}
        <button type="submit" className={styles.button}>Send Message</button>
      </form>

      <h2>Contact Information</h2>
      <p>Email: info@myrestaurant.com</p>
      <p>Phone: (011) 2406629</p>
      <p>Address: 126/A Alhena road, Maharagama</p>
    </div>
  );
};

export default ContactUs;
