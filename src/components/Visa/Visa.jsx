import './Visa.css';
import { FaPassport, FaWhatsapp, FaGlobeAmericas } from 'react-icons/fa';

const Visa = () => {
  const countries = [
    { name: 'Dubai (UAE)', processing: '3-5 days', type: 'Tourist Visa' },
    { name: 'Thailand', processing: '5-7 days', type: 'Tourist Visa' },
    { name: 'Singapore', processing: '3-5 days', type: 'Tourist Visa' },
    { name: 'United Kingdom', processing: '15-20 days', type: 'Visitor Visa' },
    { name: 'USA', processing: '30-60 days', type: 'B1/B2 Visa' },
    { name: 'Australia', processing: '20-30 days', type: 'Tourist Visa' },
    { name: 'Schengen (Europe)', processing: '15-20 days', type: 'Short Stay Visa' },
    { name: 'Canada', processing: '30-45 days', type: 'Visitor Visa' },
  ];

  const steps = [
    { step: '01', title: 'Consultation', desc: 'Free consultation to understand your travel needs and visa requirements' },
    { step: '02', title: 'Documentation', desc: 'We guide you through all required documents and forms' },
    { step: '03', title: 'Application', desc: 'We submit your application and track it on your behalf' },
    { step: '04', title: 'Approval', desc: 'Get your visa delivered and start packing for your trip!' },
  ];

  return (
    <div className="visa-page">
      <section className="visa-hero">
        <div className="visa-hero-overlay"></div>
        <div className="visa-hero-content">
          <h1>Visa Assistance</h1>
          <p style={{ color: '#f0e6d3' }}>Hassle-free visa processing for all major destinations</p>
        </div>
      </section>

      <section className="visa-intro">
        <div className="container">
          <div className="visa-intro-content">
            <FaPassport className="visa-big-icon" />
            <div>
              <h2>Expert Visa Services</h2>
                <p>
                  Our dedicated visa team handles the entire process — from documentation to submission. 
                   We ensure smooth, reliable, and timely visa processing for all major countries.
               </p>    
            </div>
          </div>
        </div>
      </section>

      <section className="visa-process">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Simple 4-step visa process</p>
          <div className="visa-steps-grid">
            {steps.map((s, i) => (
              <div key={i} className="visa-step-card">
                <span className="step-number">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="visa-countries">
        <div className="container">
          <h2 className="section-title">Countries We Cover</h2>
          <p className="section-subtitle">Visa assistance for popular destinations</p>
          <div className="visa-countries-grid">
            {countries.map((c, i) => (
              <div key={i} className="visa-country-card">
                <FaGlobeAmericas className="country-icon" />
                <h3>{c.name}</h3>
                <p className="visa-type">{c.type}</p>
                <p className="visa-processing">Processing: {c.processing}</p>
                <a href={"https://wa.me/919415331058?text=Hi! I need visa assistance for " + c.name} className="visa-enquire" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp /> Enquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="visa-cta">
        <div className="container">
          <div className="visa-cta-content">
            <h2>Need Visa Help?</h2>
            <p>Talk to our visa experts on WhatsApp for free consultation</p>
            <a href="https://wa.me/919415331058?text=Hi! I need visa assistance." className="visa-cta-btn" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> Get Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visa;
