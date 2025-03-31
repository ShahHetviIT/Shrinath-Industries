import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import config from '../../config/config';
import '../../styles/components/AboutSection.css';

const AboutSection = () => {
  const { companyName, organizationDetails } = config;
  
  const highlights = [
    'Established in 2006 with extensive experience',
    'In-house fabrication and powder coating facility',
    'Manufacturing various types of electrical panels',
    'Govt. approved electrical contractor'
  ];

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title text-left">About {companyName}</h2>
            <p className="about-description">
              {organizationDetails.introduction}
            </p>

            <div className="about-highlights">
              {highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <FaCheckCircle className="highlight-icon" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn" onClick={handleLinkClick}>
              Learn More About Us
            </Link>
          </div>
          
          <div className="about-image-container">
            <div className="about-image-placeholder">
              <div className="placeholder-content">
                <h3>Quality & Reliability</h3>
                <p>Our Commitment to Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 