import { Link } from 'react-router-dom';
import './Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFileInvoice
} from 'react-icons/fa';
import pmtLogo from '../../assets/PMTLogo.png';
import logoTitle from '../../assets/Logo_Tittle.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <h3 className="footer-logo">
                <img src={pmtLogo} alt="PMT Orbit Logo" className="footer-logo-image" />
                <div className="footer-logo-text">
                  <img src={logoTitle} alt="PMT ORBIT" className="footer-title-img" />
                  <div className="footer-tagline-row">
                    <span className="line"></span>
                    <span className="footer-tagline">BEYOND BOUNDARIES</span>
                    <span className="line"></span>
                  </div>
                </div>
              </h3>
              <p className="footer-description">
                Your trusted partner for premium travel experiences.
                We specialize in flights, hotels, holiday packages, and visa assistance.
              </p>
              <div className="social-links">
                <a href="https://www.facebook.com/share/18fBTMXY4D/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/pmtorbit?utm_source=qr&igsh=MTZ0MGR2OWc4aXVrNQ==" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://youtube.com/@pmtorbit?si=6nOmEVSp6lPXEDH2" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="https://wa.me/919415331058" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
                {/* <a href="#" className="social-link" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a> */}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/packages">Packages</Link></li>
                {/* <li><Link to="/offers">Offers</Link></li> */}
                <li><Link to="/visa">Visa Assistance</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4>Our Services</h4>
              <ul className="footer-links">
                <li><Link to="/services">Flight Booking</Link></li>
                <li><Link to="/services">Hotel Reservation</Link></li>
                <li><Link to="/services">Holiday Packages</Link></li>
                <li><Link to="/visa">Visa Assistance</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact Us</h4>
              <ul className="contact-info">
                <li>
                  <FaMapMarkerAlt />
                  <span>6006, Arya Samaj Rd, Block 3B, Dev Nagar, Karol Bagh, Delhi, 110005, India</span>
                </li>
                <li>
                  <FaPhone />
                  <span>+91 9415331058</span>
                </li>
                <li>
                  <FaEnvelope />
                  <span>info@pmtorbit.com</span>
                </li>
                <li>
                  <FaClock />
                  <div>
                    <div>Tue - Sun: 10:00 AM - 7:00 PM</div>
                    <div>Monday: Closed</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <p>&copy; {currentYear} PMT Orbit. All rights reserved.</p>
              <p className="gst-info">
                <FaFileInvoice /> GST: 09CLHPT5393K1Z7
              </p>
            </div>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <span>•</span>
              <a href="#">Terms of Service</a>
              <span>•</span>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
