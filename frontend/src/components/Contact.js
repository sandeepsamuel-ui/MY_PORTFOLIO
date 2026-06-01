import { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", form);

    setSuccessMessage("✅ Thanks for contacting us!");

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
    } catch (error) {
      alert("Unable to send message.");
    }
  };

  return (
    <section id="contact">
      <div className="contact-header">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-info">
        <div className="info-card">
          <FaEnvelope className="info-icon" />
          <h3>Email</h3>
          <p>kummarasettisandeepsamuel@gmail.com</p>
        </div>

        <div className="info-card">
          <FaPhoneAlt className="info-icon" />
          <h3>Phone</h3>
          <p>+91 9676275499</p>
        </div>

        <div className="info-card">
          <FaMapMarkerAlt className="info-icon" />
          <h3>Location</h3>
          <p>Andhra Pradesh, India</p>
        </div>
      </div>

      <div className="contact-form-wrapper">
        <h3 className="form-title">Send Me a Message</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            <FaPaperPlane />
            <span> Send Message</span>
          </button>
        </form>

        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
      </div>
    </section>
  );
}

export default Contact;
