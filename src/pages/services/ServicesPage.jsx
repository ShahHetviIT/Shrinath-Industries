import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import CTA from '../../components/common/CTA';
import Layout from '../../components/layout/Layout';
import config from '../../config/config';
import '../../styles/pages/ServicesPage.css';

const ServicesPage = () => {
  const { companyName, mainServices } = config;
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const serviceFromUrl = searchParams.get('service');
  
  const [selectedService, setSelectedService] = useState(serviceFromUrl || mainServices[0]?.id);

  // Update selected service when URL parameter changes
  useEffect(() => {
    if (serviceFromUrl) {
      setSelectedService(serviceFromUrl);
      // If coming from home page, scroll to content
      if (location.state?.fromHome) {
        const servicesContent = document.querySelector('.services-content');
        if (servicesContent) {
          servicesContent.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [serviceFromUrl, location.state]);

  // Helper to get icon component
  const getIconComponent = (iconName) => {
    const IconComponent = iconName && FaIcons[iconName] ? FaIcons[iconName] : FaIcons.FaTools;
    return <IconComponent />;
  };

  const currentService = mainServices.find(service => service.id === selectedService);

  return (
    <Layout>
      <div className="services-page">
        <section className="services-hero">
          <div className="container">
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle">
              {companyName} offers comprehensive electrical panel manufacturing and facility services.
              Our expertise ensures high-quality results for your industrial electrical requirements.
            </p>
          </div>
        </section>

        <section className="services-content section">
          <div className="container">
            <div className="services-layout">
              {/* Sidebar Navigation */}
              <div className="services-sidebar">
                <h2 className="sidebar-title">Our Services</h2>
                <div className="service-list">
                  {mainServices.map((service) => (
                    <div
                      key={service.id}
                      className={`service-item ${selectedService === service.id ? 'active' : ''}`}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <div className="service-item-icon">
                        {getIconComponent(service.icon)}
                      </div>
                      <span className="service-item-title">{service.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="services-main">
                {currentService && (
                  <div className="service-detail">
                    <div className="service-detail-header">
                      <div className="service-detail-icon">
                        {getIconComponent(currentService.icon)}
                      </div>
                      <h2 className="service-detail-title">{currentService.title}</h2>
                    </div>

                    <div className="service-detail-image">
                      <img src={currentService.image} alt={currentService.title} />
                    </div>

                    <p className="service-detail-description">
                      {currentService.description}
                    </p>

                    {currentService.subServices ? (
                      <div className="sub-services-section">
                        <h3 className="section-title">Our {currentService.title} Services</h3>
                        <div className="sub-services-grid">
                          {currentService.subServices.map((subService) => (
                            <div key={subService.id} className="sub-service-card">
                              <div className="sub-service-image">
                                <img src={subService.image} alt={subService.title} />
                              </div>
                              <div className="sub-service-content">
                                <div className="sub-service-icon">
                                  {getIconComponent(subService.icon)}
                                </div>
                                <h4 className="sub-service-title">{subService.title}</h4>
                                <p className="sub-service-description">
                                  {subService.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : currentService.equipment ? (
                      <div className="equipment-section">
                        <h3 className="section-title">Equipment & Machinery</h3>
                        <ul className="equipment-list">
                          {currentService.equipment.map((item, index) => (
                            <li key={index} className="equipment-item">
                              <FaIcons.FaCheckCircle className="check-icon" /> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <CTA 
          title="Need Custom Solutions?" 
          description="Contact our team to discuss your specific electrical panel requirements and get a personalized quote." 
          buttonText="Contact Us" 
          buttonLink="/contact" 
        />
      </div>
    </Layout>
  );
};

export default ServicesPage; 