import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import config from '../../config/config';
import jatilImage from '../../assets/jatil-1.jpg';
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
    <div className="about-section">
      <div className="about-content-home">
        <div className="about-text">
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
        <h2 className="section-title text-left">About {companyName}</h2>
          <div className="about-image about-image-home">
            <img src={jatilImage} alt="Jatil P. Shah - SHRINATH INDUSTRIES" />
            <div className="image-caption">
              <h3>Quality & Reliability</h3>
              <p>Our Commitment to Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection; 