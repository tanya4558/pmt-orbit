import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Services.css';
import { FaPlane, FaHotel, FaUmbrellaBeach, FaPassport, FaWhatsapp, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
  const location = useLocation();

  const services = [
    {
      id: 'flights',
      icon: <FaPlane />,
      title: 'Flight Booking',
      desc: 'Get the best deals on domestic and international flights. We compare prices across airlines to ensure you get the lowest fares with maximum comfort.',
      features: ['Domestic & International', 'Best Price Guarantee', 'Flexible Booking', '24/7 Support', 'Group Bookings', 'Corporate Travel']
    },
    {
      id: 'hotels',
      icon: <FaHotel />,
      title: 'Hotel Booking',
      desc: 'From budget stays to luxury resorts, we handpick the best accommodations worldwide. Enjoy exclusive rates and verified reviews.',
      features: ['Budget to Luxury', 'Verified Properties', 'Free Cancellation', 'Best Rate Guarantee', 'Family Friendly', 'Honeymoon Specials']
    },
    {
      id: 'tours',
      icon: <FaUmbrellaBeach />,
      title: 'Holiday Packages',
      desc: 'Customized holiday packages tailored to your preferences and budget. All-inclusive trips with flights, hotels, transfers, and activities.',
      features: ['Customized Itineraries', 'All-Inclusive', 'Guided Tours', 'Adventure & Leisure', 'Family Packages', 'Honeymoon Packages']
    },
    {
      id: 'visa',
      icon: <FaPassport />,
      title: 'Visa Assistance',
      desc: 'Complete visa processing support for all major countries. Our experts handle documentation, application, and follow-up.',
      features: ['All Major Countries', 'Document Guidance', 'Fast Processing', 'High Success Rate', 'Application Tracking', 'Free Consultation']
    },
  ];

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-overlay"></div>
        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p style={{ color: '#f0e6d3' }}>Complete travel solutions under one roof</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} id={service.id} className={"service-block" + (index % 2 !== 0 ? " reverse" : "")}>
              <div className="service-icon-area">
                <div className="service-icon-circle">{service.icon}</div>
              </div>
              <div className="service-details">
                <h2>{service.title}</h2>
                <p className="service-desc">{service.desc}</p>
                <div className="service-features">
                  {service.features.map((f, i) => (
                    <span key={i} className="service-feature"><FaCheckCircle /> {f}</span>
                  ))}
                </div>
                <a href={"https://wa.me/919415331058?text=Hi! I'm interested in " + service.title + " services."} className="service-enquire" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp /> Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
