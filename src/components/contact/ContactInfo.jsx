import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram, FaClock } from 'react-icons/fa';
import config from '../../config/config';
import '../../styles/components/ContactInfo.css';

const ContactInfo = () => {
  const { contactInfo, socialMedia, googleMapsUrl } = config;

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${socialMedia.whatsapp}`, '_blank');
  };

  return (
    <div className="contact-info-container">
      <h2 className="info-title">Contact Information</h2>

      <div className="info-item">
        <div className="info-icon">
          <FaPhone />
        </div>
        <div className="info-content">
          <h3>Phone</h3>
          <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
        </div>
      </div>

      <div className="info-item">
        <div className="info-icon">
          <FaEnvelope />
        </div>
        <div className="info-content">
          <h3>Email</h3>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </div>
      </div>

      <div className="info-item">
        <div className="info-icon">
          <FaMapMarkerAlt />
        </div>
        <div className="info-content">
          <h3>Address</h3>
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
      </div>

      <div className="info-item">
        <div className="info-icon">
          <FaWhatsapp onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }} />
        </div>
        <div className="info-content">
          <h3>WhatsApp</h3>
          <p onClick={handleWhatsAppClick} className="whatsapp-link">
            {socialMedia.whatsapp}
          </p>
        </div>
      </div>

      <div className="info-item">
        <div className="info-icon">
          <FaClock />
        </div>
        <div className="info-content">
          <h3>Business Hours</h3>
          <ul className="business-hours-list">
            {Object.entries(contactInfo.businessHours).map(([day, hours]) => (
              <li key={day}>
                <strong>{day}:</strong> {hours}
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <div onClick={handleWhatsAppClick} className="social-icon whatsapp">
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 