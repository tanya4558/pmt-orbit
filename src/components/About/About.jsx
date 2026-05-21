import './About.css';
import { FaGlobeAmericas, FaUsers, FaAward, FaHeart } from 'react-icons/fa';
import PragatiImg from '../../assets/Team/Pragati_Mukesh_Tiwari.png';
import MukeshImg from '../../assets/Team/Mukesh_Tiwari.png';
import AlokTeamImg from '../../assets/Team/Alok_Kumar_Singh.png';

const About = () => {
  const stats = [
    // { number: '10+', label: 'Years Experience' },
    { number: '50K+', label: 'Happy Travelers' },
    { number: '150+', label: 'Destinations' },
    { number: '95%', label: 'Satisfaction Rate' }
  ];

  const values = [
    {
      icon: <FaGlobeAmericas />,
      title: 'Global Reach',
      description: 'We connect you to destinations across all continents with our extensive network.'
    },
    {
      icon: <FaUsers />,
      title: 'Expert Team',
      description: 'Our travel experts have years of experience in creating memorable journeys.'
    },
    {
      icon: <FaAward />,
      title: 'Award Winning',
      description: 'Recognized for excellence in travel services and customer satisfaction.'
    },
    {
      icon: <FaHeart />,
      title: 'Customer First',
      description: 'Your dreams and satisfaction are at the heart of everything we do.'
    }
  ];

  const team = [
    {
      name: 'Pragati Mukesh Tiwari',
      role: 'CEO & Founder',
      image: PragatiImg
    },
    {
      name: 'Mukesh Tiwari',
      role: 'Director & Business Head',
      image: MukeshImg
    },
    {
      name: 'Alok Kumar Singh',
      role: 'Finance Head',
      image: AlokTeamImg
    }
  ];

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About PMT Orbit</h1>
          <p style={{ color: '#f0e6d3' }}>Your trusted partner in creating unforgettable travel experiences</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h2>{stat.number}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2026, PMT Orbit was born from a simple idea: everyone deserves 
                to explore the world without hassle. What started as a small travel agency has 
                grown into a trusted global travel partner serving thousands of satisfied customers.
              </p>
              <p>
                Our journey began when our founder, Pragati Mukesh Tiwari, returned from a life-changing 
                trip and realized that travel planning shouldn't be complicated. With a vision to 
                make travel accessible and enjoyable for everyone, PMT Orbit was created.
              </p>
              <p>
                Today, we pride ourselves on offering personalized travel experiences, exceptional 
                customer service, and competitive prices. Our team of travel experts works tirelessly 
                to ensure that every journey you take with us is smooth, memorable, and exceeds 
                your expectations.
              </p>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600" 
                alt="Our Story" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission">
              <h2>Our Mission</h2>
              <p>
                To provide exceptional travel experiences that inspire, educate, and connect 
                people from all walks of life. We strive to make every journey affordable, 
                accessible, and unforgettable through personalized service and attention to detail.
              </p>
            </div>
            <div className="mv-card vision">
              <h2>Our Vision</h2>
              <p>
                To become the world's most trusted travel company, recognized for our commitment 
                to excellence, innovation, and sustainable tourism. We envision a world where 
                everyone can explore new cultures and create lasting memories without barriers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Passionate travel experts dedicated to making your dreams come true
          </p>
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
