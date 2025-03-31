import { FaUsers, FaCog, FaAward, FaHandshake } from 'react-icons/fa';
import CTA from '../../components/common/CTA';
import Layout from '../../components/layout/Layout';
import config from '../../config/config';
import '../../styles/pages/AboutPage.css';

const AboutPage = () => {
  const { companyName, organizationDetails } = config;

  const values = [
    {
      id: 1,
      icon: <FaUsers />,
      title: 'Team Excellence',
      description: 'Our experienced professionals work collaboratively to deliver the highest quality solutions.',
    },
    {
      id: 2,
      icon: <FaCog />,
      title: 'Technical Expertise',
      description: 'We employ advanced technologies and methodologies to ensure precision and efficiency.',
    },
    {
      id: 3,
      icon: <FaAward />,
      title: 'Quality Commitment',
      description: 'We maintain rigorous quality control standards throughout our manufacturing processes.',
    },
    {
      id: 4,
      icon: <FaHandshake />,
      title: 'Customer Focus',
      description: 'We build lasting relationships by understanding and exceeding client expectations.',
    }
  ];

  return (
    <Layout>
      <div className="about-page">
        <section className="about-hero">
          <div className="container">
            <h1 className="page-title">About Us</h1>
            <p className="page-subtitle">
              Learn about our journey, values, and commitment to excellence in the industry.
            </p>
          </div>
        </section>

        <section className="about-company section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2 className="section-title text-left">Our Story</h2>
                <p className="about-paragraph">
                  {organizationDetails.introduction}
                </p>
                <p className="about-paragraph">
                  Established on {organizationDetails.established}, {companyName} has grown to become a trusted name in 
                  electrical panel manufacturing and electrical contracting. Under the leadership of {organizationDetails.contactPerson}, 
                  we have built a reputation for quality and reliability in the industry.
                </p>
                <p className="about-paragraph">
                  Today, we continue to uphold our founding principles of quality, reliability, and integrity in 
                  everything we do. Our commitment to delivering superior products and services remains unwavering 
                  as we look forward to new challenges and opportunities.
                </p>
              </div>
              
              <div className="about-image-container">
                <div className="about-image-placeholder">
                  <div className="placeholder-content">
                    <h3>Our Facility</h3>
                    <p>State-of-the-art manufacturing unit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="company-values section">
          <div className="container">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide our work and relationships</p>
            
            <div className="values-grid">
              {values.map(value => (
                <div key={value.id} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="why-choose-us section">
          <div className="container">
            <div className="why-choose-content">
              <div className="why-choose-text">
                <h2 className="section-title text-left">Why Choose Us</h2>
                <ul className="why-choose-list">
                  <li>Established in 2006 with extensive industry experience</li>
                  <li>In-house fabrication and powder coating facility</li>
                  <li>Specialized in various types of electrical panels</li>
                  <li>Government approved electrical contractor</li>
                  <li>Dedicated customer support and after-sales service</li>
                  <li>Commitment to quality, safety, and reliability</li>
                </ul>
              </div>
              
              <div className="why-choose-image">
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <h3>Excellence in Manufacturing</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA 
          title="Ready to Collaborate?" 
          description="Partner with us for your electrical panel manufacturing needs and experience the difference." 
          buttonText="Contact Us" 
          buttonLink="/contact" 
        />
      </div>
    </Layout>
  );
};

export default AboutPage; 