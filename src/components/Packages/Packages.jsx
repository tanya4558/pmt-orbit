import React from 'react';
import { Link } from 'react-router-dom';
import './Packages.css';
import { FaWhatsapp, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Packages = () => {
  const packages = [
    { id: 1, name: 'Dubai', days: '5N/6D', price: '₹45,999', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600', highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall', 'Palm Jumeirah'], tag: 'Bestseller' },
    { id: 2, name: 'Thailand', days: '4N/5D', price: '₹32,999', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=600', highlights: ['Phuket Beaches', 'Bangkok Temples', 'Night Markets', 'Island Hopping'], tag: 'Popular' },
    { id: 3, name: 'Bali', days: '5N/6D', price: '₹38,999', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600', highlights: ['Ubud Rice Terraces', 'Temples', 'Beach Clubs', 'Waterfalls'], tag: 'Trending' },
    { id: 4, name: 'Singapore', days: '4N/5D', price: '₹42,999', image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600', highlights: ['Marina Bay Sands', 'Sentosa', 'Universal Studios', 'Gardens by Bay'], tag: 'Hot Deal' },
    { id: 5, name: 'Goa', days: '3N/4D', price: '₹12,999', image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600', highlights: ['Beach Parties', 'Water Sports', 'Old Goa Churches', 'Nightlife'], tag: 'Budget Friendly' },
    { id: 6, name: 'Kashmir', days: '5N/6D', price: '₹22,999', image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=500', highlights: ['Dal Lake', 'Gulmarg', 'Pahalgam', 'Mughal Gardens'], tag: 'Scenic' },
    { id: 7, name: 'Kerala', days: '4N/5D', price: '₹18,999', image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600', highlights: ['Backwaters', 'Munnar Tea Gardens', 'Alleppey', 'Kovalam Beach'], tag: 'Nature' },
    { id: 8, name: 'London', days: '6N/7D', price: '₹89,999', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600', highlights: ['Big Ben', 'Tower Bridge', 'Buckingham Palace', 'London Eye'], tag: 'Premium' },
  ];

  return (
    <div className="packages-page">
      <section className="packages-hero">
        <div className="packages-hero-overlay"></div>
        <div className="packages-hero-content">
          <h1>Holiday Packages</h1>
          <p style={{ color: '#f0e6d3' }}>Explore our curated travel packages for every budget</p>
        </div>
      </section>

      <section className="packages-list">
        <div className="container">
          <div className="packages-page-grid">
            {packages.map((pkg) => (
              <div key={pkg.id} className="pkg-card">
                <div className="pkg-image">
                  <img src={pkg.image} alt={pkg.name} />
                  <span className="pkg-tag">{pkg.tag}</span>
                </div>
                <div className="pkg-details">
                  <h3>{pkg.name}</h3>
                  <div className="pkg-meta">
                    <span><FaCalendarAlt /> {pkg.days}</span>
                    <span><FaMapMarkerAlt /> {pkg.name}</span>
                  </div>
                  <ul className="pkg-highlights">
                    {pkg.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                  <div className="pkg-bottom">
                    <div className="pkg-price">
                      <small>Starting from</small>
                      <strong>{pkg.price}</strong>
                      <span>per person</span>
                    </div>
                    <div className="pkg-actions">
                      <a href={"https://wa.me/919415331058?text=Hi! I'm interested in the " + pkg.name + " package."} className="pkg-whatsapp" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp /> Enquire
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;
