import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube,
  FaWhatsapp,
  FaPhone, 
  FaEnvelope, 
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import pmtLogo from '../../assets/PMTLogo.png';
import LogoTitle from '../../assets/Logo_Tittle.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [ setServicesDropdown] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
        setServicesDropdown(false);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <>
            {/* Top Bar - Social Media & Contact */}
            <div className="top-bar">
                <div className="top-bar-container">
                    <div className="top-left">
                        <span className="contact-item">
                            <FaPhone /> +91 94153 31058
                        </span>
                        <span className="contact-item">
                            <FaEnvelope /> info@pmtorbit.com
                        </span>
                    </div>

                    <div className="top-right">
                        <span className="follow-text">Follow Us:</span>
                        <a href="https://www.facebook.com/share/18fBTMXY4D/" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/pmtorbit?utm_source=qr&igsh=MTZ0MGR2OWc4aXVrNQ==" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <a href="https://youtube.com/@pmtorbit?si=6nOmEVSp6lPXEDH2" className="social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className="navbar">
                <div className="navbar-container">
                    {/* Logo Section */}
                    <Link to="/" className="navbar-logo" onClick={closeMenu}>
                        <img src={pmtLogo} alt="PMT Orbit Logo" className="logo-image" />
                        <div className="logo-text-container">
                            <img src={LogoTitle} alt="PMT ORBIT" className="logo-title-img"/>

                            <div className="logo-tagline-row">
                                <span className="line"></span>
                                <span className="logo-tagline">BEYOND BOUNDARIES</span>
                                <span className="line"></span>
                            </div>

                        </div>
                    </Link>

                    {/* Mobile Menu Icon */}
                    <div className="menu-icon" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>

                    {/* Navigation Menu */}
                    <div className={isOpen ? 'nav-wrapper open' : 'nav-wrapper'}>
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className={`nav-link ${isActive('/')}`}
                                    onClick={closeMenu}
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to="/about"
                                    className={`nav-link ${isActive('/about')}`}
                                    onClick={closeMenu}
                                >
                                    About Us
                                </Link>
                            </li>

                            <li
                                className="nav-item dropdown"
                                onMouseEnter={() => setServicesDropdown(true)}
                                onMouseLeave={() => setServicesDropdown(false)}
                            >
                                <Link
                                    to="/services"
                                    className={`nav-link ${isActive('/services')}`}
                                    onClick={closeMenu}
                                >
                                    Services 
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to="/packages"
                                    className={`nav-link ${isActive('/packages')}`}
                                    onClick={closeMenu}
                                >
                                    Packages
                                </Link>
                            </li>

                            {/* <li className="nav-item">
                                <Link
                                    to="/offers"
                                    className={`nav-link ${isActive('/offers')}`}
                                    onClick={closeMenu}
                                >
                                    Offers
                                </Link>
                            </li> */} 

                            <li className="nav-item">
                                <Link
                                    to="/visa"
                                    className={`nav-link ${isActive('/visa')}`}
                                    onClick={closeMenu}
                                >
                                    Visa Assistance
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    to="/contact"
                                    className={`nav-link ${isActive('/contact')}`}
                                    onClick={closeMenu}
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>

                        {/* Action Buttons */}
                        <div className="nav-actions">
                            <Link to="/contact" className="btn-quote" onClick={closeMenu}>
                                Get a Quote
                            </Link>
                            <a
                                href="https://wa.me/919415331058"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="whatsapp-icon"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
