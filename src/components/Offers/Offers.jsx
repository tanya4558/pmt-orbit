import React from 'react';
import { Link } from 'react-router-dom';
import './Offers.css';
import { FaPlane, FaTag, FaCopy } from 'react-icons/fa';

const Offers = () => {
  const flightOffers = [
    { id: 1, title: 'Flat ₹2000 Off on Domestic Flights', code: 'PMTFLY2K', validity: 'Valid till 30 Jun 2026', desc: 'Get flat ₹2000 off on all domestic flights. Minimum booking ₹5000.', bg: 'linear-gradient(135deg, #0b2a56, #1e5fa8)' },
    { id: 2, title: 'International Flights Starting ₹14,999', code: 'PMTINTL', validity: 'Limited Period Offer', desc: 'Fly international at unbelievable prices. Bangkok, Dubai, Singapore and more.', bg: 'linear-gradient(135deg, #ff6b35, #ffa500)' },
    { id: 3, title: '25% Off on Holiday Packages', code: 'PMTHOLIDAY25', validity: 'Book by this weekend', desc: 'Get 25% off on all holiday packages. Maximum discount ₹10,000.', bg: 'linear-gradient(135deg, #1e5fa8, #25D366)' },
    { id: 4, title: 'First Trip Bonus - ₹1500 Off', code: 'PMTFIRST', validity: 'For new customers', desc: 'Book your first trip with PMT Orbit and get ₹1500 instant discount.', bg: 'linear-gradient(135deg, #8b5cf6, #ec4899)' },
    { id: 5, title: 'Couple Special - 15% Off', code: 'PMTCOUPLE', validity: 'Valid on couple packages', desc: 'Special discount for honeymoon and couple travel packages.', bg: 'linear-gradient(135deg, #ef4444, #f97316)' },
    { id: 6, title: 'Group Booking - Up to 30% Off', code: 'PMTGROUP30', validity: 'Min 4 travelers', desc: 'Traveling with friends or family? Get up to 30% off on group bookings.', bg: 'linear-gradient(135deg, #0b2a56, #ffa500)' },
  ];

  return (
    <div className="offers-page">
      <section className="offers-hero">
        <div className="offers-hero-overlay"></div>
        <div className="offers-hero-content">
          <h1>Exclusive Offers</h1>
          <p style={{ color: '#f0e6d3' }}>Grab the best deals on flights and holiday packages</p>
        </div>
      </section>

      <section className="offers-list">
        <div className="container">
          <div className="offers-page-grid">
            {flightOffers.map((offer) => (
              <div key={offer.id} className="offer-page-card" style={{ background: offer.bg }}>
                <div className="offer-page-icon"><FaTag /></div>
                <h3>{offer.title}</h3>
                <p className="offer-page-desc">{offer.desc}</p>
                <div className="offer-page-code">
                  <span>Code: <strong>{offer.code}</strong></span>
                </div>
                <p className="offer-page-validity">{offer.validity}</p>
                <a href={"https://wa.me/919415331058?text=Hi! I want to use offer code " + offer.code} className="offer-page-btn" target="_blank" rel="noopener noreferrer">
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;
