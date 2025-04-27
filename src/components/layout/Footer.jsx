import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import config from '../../config/config';
import '../../styles/components/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const { contactInfo, socialMedia, companyName, googleMapsUrl } = config;

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${socialMedia.whatsapp}`, '_blank');
  };

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-title">{companyName}</h3>
            <p className="footer-desc">
              {config.companyTagline}
            </p>
          </div>

          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-menu">
              <li>
                <Link to="/" className="footer-link" onClick={handleLinkClick}>Home</Link>
              </li>
              <li>
                <Link to="/about" className="footer-link" onClick={handleLinkClick}>About Us</Link>
              </li>
              <li>
                <Link to="/services" className="footer-link" onClick={handleLinkClick}>Services</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link" onClick={handleLinkClick}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
                aria-label="Open Google Maps"
              >
                <p style={{ margin: 0, cursor: 'pointer' }}>{contactInfo.address}</p>
              </a>

            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <a href={`tel:${contactInfo.phone}`} className="contact-link">{contactInfo.phone}</a>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <a href={`mailto:${contactInfo.email}`} className="contact-link">{contactInfo.email}</a>
            </div>
          </div>

          <div className="footer-social">
            <h3 className="footer-title">Connect With Us</h3>
            <div className="social-icons">
              <div onClick={handleWhatsAppClick} className="social-icon whatsapp">
                <FaWhatsapp />
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {year} {companyName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 