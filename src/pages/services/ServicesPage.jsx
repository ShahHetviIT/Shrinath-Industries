import { useState, useEffect, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import CTA from '../../components/common/CTA';
import Layout from '../../components/layout/Layout';
import config from '../../config/config';
import '../../styles/pages/ServicesPage.css';
import React from 'react';

const ImageCarousel = ({ images, serviceId }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const carouselRef = useRef(null);

  // Reset carousel to first image when service changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [serviceId]);

  // Add escape key handler for fullscreen
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape' && fullscreen) {
        setFullscreen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [fullscreen]);

  const goToNext = () => {
    if (animating) return;
    setAnimating(true);
    
    if (carouselRef.current) {
      // Apply animation class
      carouselRef.current.classList.add('slide-left');
      
      // After animation completes, change the image and reset
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        carouselRef.current.classList.remove('slide-left');
        setAnimating(false);
      }, 500); // Match this with CSS transition duration
    }
  };

  const goToPrev = () => {
    if (animating) return;
    setAnimating(true);
    
    if (carouselRef.current) {
      // Apply animation class
      carouselRef.current.classList.add('slide-right');
      
      // After animation completes, change the image and reset
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        carouselRef.current.classList.remove('slide-right');
        setAnimating(false);
      }, 500); // Match this with CSS transition duration
    }
  };
  
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <div className="image-carousel">
      <div className={`carousel-container ${fullscreen ? 'fullscreen' : ''}`} ref={carouselRef}>
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`} 
          className="carousel-image"
        />
        
        <button className="carousel-control prev" onClick={goToPrev}>
          <FaIcons.FaChevronLeft />
        </button>
        <button className="carousel-control next" onClick={goToNext}>
          <FaIcons.FaChevronRight />
        </button>
        
        <button className="carousel-control fullscreen" onClick={toggleFullscreen}>
          {fullscreen ? <FaIcons.FaCompress /> : <FaIcons.FaExpand />}
        </button>
        
        {!fullscreen && (
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  if (animating) return;
                  if (index > currentIndex) {
                    goToNext();
                  } else if (index < currentIndex) {
                    goToPrev();
                  }
                }}
              />
            ))}
          </div>
        )}
      </div>
      
      {fullscreen && (
        <div className="fullscreen-overlay" onClick={toggleFullscreen}>
          <div className="fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="fullscreen-image" />
            <button className="fullscreen-close" onClick={toggleFullscreen}>
              <FaIcons.FaTimes />
            </button>
            <button className="fullscreen-nav prev" onClick={goToPrev}>
              <FaIcons.FaChevronLeft />
            </button>
            <button className="fullscreen-nav next" onClick={goToNext}>
              <FaIcons.FaChevronRight />
            </button>
            <div className="fullscreen-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ServicesPage = () => {
  const { companyName, mainServices } = config;
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const serviceFromUrl = searchParams.get('service');
  const serviceTitleRef = useRef(null);
  const [isMobileView, setIsMobileView] = useState(false);

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

  // Check if the current view is mobile
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    
    // Initial check
    checkMobileView();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobileView);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  // Helper to get icon component
  const getIconComponent = (iconName) => {
    const IconComponent = iconName && FaIcons[iconName] ? FaIcons[iconName] : FaIcons.FaTools;
    return <IconComponent />;
  };

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
    
    // Scroll to service title in mobile view after a short delay
    // to allow for state update and rendering
    if (isMobileView && serviceTitleRef.current) {
      setTimeout(() => {
        serviceTitleRef.current.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  const currentService = mainServices.find(service => service.id === selectedService);

  // Function to format description with proper bullet points
  const formatDescription = (description) => {
    // Replace HTML entities with proper bullet points and formatting
    const formattedDesc = description
      .replace(/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• (.*?)<br \/>/g, '<div class="bullet-point">$1</div>')
      .replace(/&nbsp;/g, ' ');
    
    return formattedDesc;
  };

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
                      onClick={() => handleServiceClick(service.id)}
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
                      <h2 ref={serviceTitleRef} serviceId={currentService.id} className="service-detail-title">{currentService.title}</h2>
                    </div>

                    <div>
                    {currentService.galleryImages ? (
                      <div className="service-gallery">
                        <ImageCarousel
                          images={currentService.galleryImages}
                        />
                      </div>
                    ) : (
                      <div className="service-detail-image">
                        <img src={currentService.image} alt={currentService.title} />
                      </div>
                    )}

                    <div>
                      <p className="service-detail-description" 
                        dangerouslySetInnerHTML={{ 
                          __html: formatDescription(currentService.description)
                        }} 
                      />
                    </div>
                    </div>

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