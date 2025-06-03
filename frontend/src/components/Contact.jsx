import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
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
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;