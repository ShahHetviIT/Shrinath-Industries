import { FaSprayCan, FaTools, FaLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../styles/components/ServiceHighlights.css';

const ServiceHighlights = () => {
  const services = [
    {
      id: 1,
      icon: <FaSprayCan className="service-icon" />,
      title: 'Powder Coating',
      description: 'High-quality powder coating services with superior finish and durability.',
      link: '/services#powder-coating'
    },
    {
      id: 2,
      icon: <FaTools className="service-icon" />,
      title: 'Fabrication',
      description: 'Custom metal fabrication services tailored to your specific requirements.',
      link: '/services#fabrication'
    },
    {
      id: 3,
      icon: <FaLightbulb className="service-icon" />,
      title: 'Electrical Panels',
      description: 'Reliable and efficient electrical panel solutions for industrial applications.',
      link: '/services#electrical-panels'
    }
  ];

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
        <p className="section-subtitle">Quality solutions for all your industrial needs</p>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <Link to={service.link} className="service-link" onClick={handleLinkClick}>
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