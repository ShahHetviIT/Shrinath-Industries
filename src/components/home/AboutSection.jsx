import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import '../../styles/components/AboutSection.css';

const AboutSection = () => {
  const highlights = [
    'Over 10 years of industry experience',
    'State-of-the-art manufacturing facility',
    'Highly skilled technical team',
    'Focus on quality and customer satisfaction'
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
            <h2 className="section-title text-left">About Shreenath Industries</h2>
            <p className="about-description">
              Shreenath Industries is a leading manufacturer specializing in powder coating, fabrication, and electrical panels. 
              With state-of-the-art facilities and a team of experienced professionals, we deliver high-quality industrial solutions 
              tailored to meet the unique needs of our clients.
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