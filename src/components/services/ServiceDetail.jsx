import PropTypes from 'prop-types';
import * as FaIcons from 'react-icons/fa';
import '../../styles/components/ServiceDetail.css';

const ServiceDetail = ({ service }) => {
  // Dynamically get the icon component from the string name
  const IconComponent = service.icon && FaIcons[service.icon] ? FaIcons[service.icon] : FaIcons.FaTools;

  return (
    <div className="service-detail" id={service.id}>
      <div className="service-detail-header">
        <div className="service-detail-icon"><IconComponent /></div>
        <h2 className="service-detail-title">{service.title}</h2>
      </div>
      
      <div className="service-detail-content">
        <div className="service-image-placeholder">
          <div className="placeholder-text">
            {service.title} Service
          </div>
        </div>
        
        <div className="service-description">
            <p>{service.description}</p>
          
          <h3 className="service-features-title">Key Features</h3>
          <ul className="service-features-list">
            {service.features.map((feature, index) => (
              <li key={index} className="service-feature-item">
                {feature}
              </li>
            ))}
          </ul>
          
          <h3 className="service-benefits-title">Benefits</h3>
          <ul className="service-benefits-list">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="service-benefit-item">
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

ServiceDetail.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string, // Now it's a string, not a node
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default ServiceDetail; 