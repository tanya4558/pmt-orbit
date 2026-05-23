import { Link } from 'react-router-dom';
import './Home.css';
import {
  FaPlane, 
  FaWhatsapp,
 FaStar, FaQuoteLeft, FaHeadset, FaTag, FaGlobeAmericas,FaSuitcaseRolling,
  FaPhone, FaEnvelope
} from 'react-icons/fa';

import AhtaishamImg from '../../assets/Customers/Ahtaisham_Hussain.png';
import TanyaImg from '../../assets/Customers/Tanya_Singh.png';
import NehaImg from '../../assets/Customers/Neha_Pandey.png';
import PrabhakarImg from '../../assets/Customers/Prabhakar_Kumar_kashyap.png';
import VivekImg from '../../assets/Customers/Vivek_Kumar.png';

const Home = () => {

  const packages = [
    { id: 1, name: 'Dubai', days: '5N/6D', price: '₹45,999', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500', tag: 'Bestseller' },
    { id: 2, name: 'Thailand', days: '4N/5D', price: '₹32,999', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=500', tag: 'Popular' },
    { id: 3, name: 'Bali', days: '5N/6D', price: '₹38,999', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500', tag: 'Trending' },
    { id: 4, name: 'Singapore', days: '4N/5D', price: '₹42,999', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500', tag: 'Hot Deal' },
    { id: 5, name: 'Goa', days: '3N/4D', price: '₹12,999', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=500', tag: 'Budget' },
    { id: 6, name: 'Kashmir', days: '5N/6D', price: '₹22,999', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500', tag: 'Scenic' },
    { id: 7, name: 'Kerala', days: '4N/5D', price: '₹18,999', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=500', tag: 'Nature' },
    { id: 8, name: 'London', days: '6N/7D', price: '₹89,999', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500', tag: 'Premium' },
  ];

  const testimonials = [
    { id: 1, name: 'Ahtaisham Hussain', location: 'Kolkata', text: 'PMT Orbit planned our entire Dubai trip flawlessly. From visa to hotel, everything was taken care of. Truly beyond boundaries!', rating: 5, image: AhtaishamImg },
    { id: 2, name: 'Tanya Singh', location: 'Patna', text: 'Had an amazing experience booking through PMT Orbit. The team handled everything professionally and our family trip to Singapore was absolutely perfect!', rating: 5, image: TanyaImg },
    { id: 3, name: 'Neha Pandey', location: 'Mumbai', text: 'Excellent service! Got the best flight deals and the visa process was completely hassle-free. Highly recommended for families.', rating: 5, image: NehaImg },
    { id: 4, name: 'Prabhakar Kumar Kashyap', location: 'Patna', text: 'Professional team with great communication. Our Kashmir trip was perfectly organized. Will definitely book again!', rating: 5, image: PrabhakarImg },
    { id: 5, name: 'Vivek Kumar', location: 'Noida', text: 'Amazing deals on Bali package! The itinerary was well-planned and support was instant on WhatsApp. Five stars!', rating: 5, image: VivekImg },
  ];

const whyChoose = [
  {
    icon: <FaTag />,
    title: 'Best Price Guarantee',
    desc: 'Competitive rates with no hidden charges',
  },
  {
    icon: <FaHeadset />,
    title: '24/7 Customer Support',
    desc: 'Dedicated assistance whenever you need help',
  },
  {
    icon: <FaGlobeAmericas />,
    title: 'Domestic & International Tours',
    desc: 'Explore popular destinations with customized packages',
  },
  {
    icon: <FaSuitcaseRolling />,
    title: 'Customized Travel Plans',
    desc: 'Personalized itineraries designed for every traveler',
  },
];
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Discover Your Next Adventure</h1>
          <p className="hero-subtitle">
            Explore the world with our expertly curated travel experiences
          </p>
          <div className="hero-buttons">
            <Link to="/packages" className="btn btn-primary">
              Explore Packages
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Engine Coming Soon */}
      <section className="flight-search">
        <div className="container">
          <div className="search-box coming-soon-box">
            <div className="coming-soon-header">
              <FaPlane className="coming-soon-icon" />
              <h2>Booking Engine Coming Soon</h2>
            </div>
            <p className="coming-soon-desc">
              Our online flight booking system is currently under development and will be launching soon.
              For flight bookings, fare enquiries, and support, please connect with us directly:
            </p>
            <div className="coming-soon-contacts">
              <div className="coming-soon-item">
                <FaWhatsapp className="cs-icon whatsapp" />
                <div>
                  <strong>WhatsApp</strong>
                  <span>+91 9415331058</span>
                </div>
              </div>
              <div className="coming-soon-item">
                <FaEnvelope className="cs-icon email" />
                <div>
                  <strong>Email</strong>
                  <span>info@pmtorbit.com</span>
                </div>
              </div>
              {/* <div className="coming-soon-item">
                <FaGlobeAmericas className="cs-icon web" />
                <div>
                  <strong>Website</strong>
                  <span>pmtorbit.com</span>
                </div>
              </div> */}
            </div>
            <div className="coming-soon-actions">
              <a href="https://wa.me/919415331058?text=Hi PMT Orbit! I need help with flight booking." className="cs-btn cs-whatsapp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /> Chat on WhatsApp
              </a>
              <Link to="/contact" className="cs-btn cs-enquiry">
                <FaEnvelope /> Enquiry Form
              </Link>
              <a href="tel:+919415331058" className="cs-btn cs-call">
                <FaPhone /> Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Top Offers Section */}
      {/* <section className="offers-section">
        <div className="container">
          <h2 className="section-title">Top Flight Offers</h2>
          <p className="section-subtitle">Grab exclusive deals before they expire</p>
          <div className="offers-grid">
            {offers.map((offer) => (
              <div key={offer.id} className="offer-card" style={{ background: offer.bg }}>
                <h3>{offer.title}</h3>
                <p className="offer-code">Use Code: <strong>{offer.code}</strong></p>
                <p className="offer-validity">{offer.validity}</p>
                <Link to="/offers" className="offer-link">View All Offers <FaArrowRight /></Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Popular Packages Section */}
      <section className="packages-section">
        <div className="container">
          <h2 className="section-title">Popular Holiday Packages</h2>
          <p className="section-subtitle">Handpicked destinations for unforgettable experiences</p>
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card">
                <div className="package-image">
                  <img src={pkg.image} alt={pkg.name} />
                  <span className="package-tag">{pkg.tag}</span>
                </div>
                <div className="package-content">
                  <h3>{pkg.name}</h3>
                  <p className="package-duration">{pkg.days}</p>
                  <div className="package-footer">
                    <span className="package-price">Starting {pkg.price}</span>
                    <Link to="/packages" className="package-btn">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose PMT Orbit */}
      <section className="why-choose">
        <div className="container">
          <h2 className="section-title">Why Choose PMT Orbit?</h2>
          <p className="section-subtitle">Your journey, our expertise</p>
          <div className="why-grid">
            {whyChoose.map((item, index) => (
              <div key={index} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle">Real experiences from real customers</p>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-stars">
                  {[...Array(t.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
                <div className="testimonial-author">
                  <img src={t.image} alt={t.name} className="testimonial-avatar" />
                  <div>
                    <h4>{t.name}</h4>
                    <span className="testimonial-location">{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="whatsapp-cta">
        <div className="container">
          <div className="whatsapp-cta-content">
            <div className="whatsapp-cta-text">
              <h2>Plan Your Trip on WhatsApp!</h2>
              <p>Chat with our travel experts directly. Get instant quotes, custom itineraries, and 24/7 support.</p>
            </div>
            <a href="https://wa.me/919415331058?text=Hi%20PMT%20Orbit!%20I%20want%20to%20plan%20a%20trip." className="whatsapp-cta-btn" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay Updated with Best Deals</h2>
            <p>Subscribe to get exclusive offers and travel tips straight to your inbox</p>
            <form className="newsletter-form" onSubmit={(e) => {
              e.preventDefault();
              const email = e.target.elements[0].value;
              if (email) {
                window.open("https://wa.me/919415331058?text=" + encodeURIComponent("Hi PMT Orbit! Please add me to your deals newsletter. My email: " + email), "_blank");
                e.target.elements[0].value = '';
                //alert("Thank you! We'll add you to our newsletter.");
              }
            }}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
