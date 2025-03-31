import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import config from '../../config/config';
import '../../styles/components/ServiceHighlights.css';

const ServiceHighlights = () => {
  const { mainServices } = config;
  
  // Using our main service categories for highlights
  const highlightedServices = mainServices.map(service => {
    // Get the icon component dynamically
    const IconComponent = service.icon && FaIcons[service.icon] ? FaIcons[service.icon] : FaIcons.FaLightbulb;
    
    return {
      id: service.id,
      icon: <IconComponent className="service-icon" />,
      title: service.title,
      description: service.description.length > 100 
        ? service.description.substring(0, 100) + '...' 
        : service.description,
      link: `/services?service=${service.id}`
    };
  });

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="service-highlights section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Quality electrical panel manufacturing and facility services for industrial needs</p>
        
        <div className="services-grid">
          {highlightedServices.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link 
                to={service.link} 
                className="service-link" 
                onClick={handleLinkClick}
                state={{ fromHome: true }}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
        
        <div className="service-cta">
          <Link to="/services" className="btn" onClick={handleLinkClick}>
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights; 