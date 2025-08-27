import { useState, useEffect } from 'react';
import '../../styles/components/ClientsCarousel.css';
import godrejLogo from '../../assets/Godrej-logo.jpg';
import beilLogo from '../../assets/BEIL_LOGO.png';
import uplLogo from '../../assets/UPL_Logo.png';
import lupinLogo from '../../assets/LUPIN_LOGO.png';
import cadilaLogo from '../../assets/cadila_logo.png';
import abbottLogo from '../../assets/abbott-logo.png';
import britaniaLogo from '../../assets/britannia_logo.png';
import pepsicoLogo from '../../assets/PepsiCo_logo.svg';
import aartiLogo from '../../assets/Aarti.jpg';

const ClientsCarousel = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Client logos data
  const clients = [
    {
      id: 1,
      name: 'Godrej',
      logo: godrejLogo,
      alt: 'Godrej Logo'
    },
    {
      id: 2,
      name: 'BEIL',
      logo: beilLogo,
      alt: 'BEIL Logo'
    },
    {
      id: 3,
      name: 'UPL',
      logo: uplLogo,
      alt: 'UPL Logo'
    },
    {
      id: 4,
      name: 'Lupin',
      logo: lupinLogo,
      alt: 'Lupin Logo'
    },
    {
      id: 5,
      name: 'Cadila',
      logo: cadilaLogo,
      alt: 'Cadila Logo'
    },
    {
      id: 6,
      name: 'Abbott',
      logo: abbottLogo,
      alt: 'Abbott Logo'
    },
    {
      id: 7,
      name: 'Britania',
      logo: britaniaLogo,
      alt: 'Britania Logo'
    },
    {
      id: 8,
      name: 'PepsiCo',
      logo: pepsicoLogo,
      alt: 'PepsiCo Logo'
    },
    {
      id: 9,
      name: 'Aarti',
      logo: aartiLogo,
      alt: 'Aarti Logo'
    }
  ];

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.clients-carousel');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section className={`clients-carousel ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <h2>Our Trusted Clients</h2>
        </div>
        
        <div className="clients-container">
          <div className="clients-track">
            {/* First set of clients */}
            {clients.map((client) => (
              <div key={client.id} className="client-item">
                <div className="client-logo">
                  <img 
                    src={client.logo} 
                    alt={client.alt}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="client-name-fallback">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client) => (
              <div key={`duplicate-${client.id}`} className="client-item">
                <div className="client-logo">
                  <img 
                    src={client.logo} 
                    alt={client.alt}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="client-name-fallback">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel; 