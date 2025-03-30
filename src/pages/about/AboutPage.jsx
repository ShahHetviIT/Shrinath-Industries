import { FaUsers, FaCog, FaAward, FaHandshake } from 'react-icons/fa';
import CTA from '../../components/common/CTA';
import Layout from '../../components/layout/Layout';
import '../../styles/pages/AboutPage.css';

const AboutPage = () => {
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
                  Established in 2010, Shreenath Industries has grown to become a trusted name in powder coating, 
                  fabrication, and electrical panel manufacturing. What started as a small workshop has evolved 
                  into a comprehensive industrial facility equipped with state-of-the-art technology and a team 
                  of skilled professionals.
                </p>
                <p className="about-paragraph">
                  Our journey has been defined by a constant pursuit of excellence, innovation, and customer satisfaction. 
                  Over the years, we have expanded our capabilities, refined our processes, and built strong relationships 
                  with clients across various industries.
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
                  <li>Over a decade of industry experience</li>
                  <li>Comprehensive solutions under one roof</li>
                  <li>Focus on quality control and assurance</li>
                  <li>Timely delivery and competitive pricing</li>
                  <li>Dedicated customer support</li>
                  <li>Commitment to sustainability and ethical practices</li>
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
          description="Partner with us for your industrial manufacturing needs and experience the difference." 
          buttonText="Contact Us" 
          buttonLink="/contact" 
        />
      </div>
    </Layout>
  );
};

export default AboutPage; 