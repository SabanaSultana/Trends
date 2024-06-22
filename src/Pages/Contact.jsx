import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-us">
      <div className="container">
        <h1>Contact Us</h1>
        <p>If you want a particular design, you can fill the form below.</p>
        <div className="form-container">
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Design Description:</label>
              <textarea id="description" name="description" rows="4" required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="images">Design Images:</label>
              <input type="file" id="images" name="images" accept="image/*" multiple />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
