import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      toast.success('Message sent successfully!');
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Vidyanagar,Hubli-582008</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +91-9986425673</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>sarvamangala@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="map-container item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.907257351384!2d75.12178147506462!3d15.364760185189386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d735b36a91c7%3A0xb0bf47bcf5489c8b!2sVidya%20Nagar%2C%20Hubballi%2C%20Karnataka%20580021!5e0!3m2!1sen!2sin!4v1716360933769!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "none", minHeight: "400px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="contact-form item">
            <form onSubmit={handleSubmit} className="contact-form">
              <h2>CONTACT</h2>
              <div className="form-row">
                <div className="form-field">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="E-mail"
                    required
                  />
                </div>
              </div>
              
              <div className="form-field">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Message"
                  required
                />
              </div>

              <button type="submit" className="send-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;