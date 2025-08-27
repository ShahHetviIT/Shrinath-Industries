import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import config from '../../config/config';
import '../../styles/components/ServiceHighlights.css';

const ServiceHighlights = () => {
  const { mainServices } = config;
  
  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="service-highlights">
      <div className="services-box">
        <div className="services-header">
          <h2>Our Services</h2>
        </div>
        
        <div className="services-list">
          {mainServices.map((service, index) => (
            <div key={service.id} className="service-item">
              <Link 
                to={`/services?service=${service.id}`} 
                className="service-link"
                onClick={handleLinkClick}
                state={{ fromHome: true }}
              >
                <FaChevronRight className="service-arrow" />
                <span className="service-name">{service.title}</span>
              </Link>
              {index < mainServices.length - 1 && <div className="service-divider" />}
            </div>
          ))}
        </div>
        
        <div className="services-footer">
          <Link to="/services" className="read-more-btn" onClick={handleLinkClick}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceHighlights; 