import { useState } from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('https://formspree.io/f/xlgvnjek', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject || 'New Inquiry from PMT Orbit Website',
        message: formData.message
      })
    });

    if (response.ok) {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus(''), 5000);
    } else {
      setStatus('Failed to send. Please try again.');
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p style={{ color: '#f0e6d3' }}>We'd love to hear from you. Get in touch!</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <input type="text" name="name" placeholder="Your Name *" required value={formData.name} onChange={handleChange} />
                  <input type="email" name="email" placeholder="Email Address *" required value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-row">
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                  <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
                </div>
                <textarea name="message" placeholder="Your Message *" rows="5" required value={formData.message} onChange={handleChange}></textarea>
                <button type="submit" className="contact-submit">{status === 'Sending...' ? 'Sending...' : 'Send via Email'}</button>
                {status && status !== 'Sending...' && <p style={{ marginTop: '10px', color: status.includes('success') ? '#25D366' : '#ff4444', fontWeight: 600 }}>{status}</p>}
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Get in Touch</h2>
              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <FaMapMarkerAlt />
                  <div>
                    <h4>Office Address</h4>
                    <p>6006, Arya Samaj Rd, Block 3B, Dev Nagar, Karol Bagh, Delhi, 110005, India</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <FaPhone />
                  <div>
                    <h4>Phone</h4>
                    <p>+91 9415331058</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <FaEnvelope />
                  <div>
                    <h4>Email</h4>
                    <p>info@pmtorbit.com</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <FaClock />
                  <div>
                    <h4>Business Hours</h4>
                    <p>Tue - Sun: 10:00 AM - 7:00 PM</p>
                    <p>Monday: Closed</p>
                  </div>
                </div>
              </div>
              <a href="https://wa.me/919415331058" className="contact-whatsapp-btn" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5!2d77.19!3d28.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM5JzAwLjAiTiA3N8KwMTEnMjQuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              title="PMT Orbit Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
