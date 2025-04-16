import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import config from '../../config/config';
import '../../styles/components/ServiceHighlights.css';

const ServiceHighlights = () => {
  const { mainServices } = config;
  
  // Get only the first service (Electrical Panels)
  const firstService = mainServices.length > 0 ? mainServices[0] : null;
  
  // Helper function to get icon component
  const getIconComponent = (iconName) => {
    const IconComponent = iconName && FaIcons[iconName] ? FaIcons[iconName] : FaIcons.FaLightbulb;
    return <IconComponent className="service-icon" />;
  };
  
  // Create the highlighted service array with only the first service
  const highlightedServices = firstService ? [
    {
      id: firstService.id,
      icon: getIconComponent(firstService.icon),
      title: firstService.title,
      description: firstService.description.length > 100 
        ? firstService.description.substring(0, 100) + '...' 
        : firstService.description,
      link: `/services?service=${firstService.id}`
    }
  ] : [];

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
        <p className="section-subtitle">Quality electrical panel manufacturing for industrial needs</p>
        
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