import ContactForm from '../../components/contact/ContactForm';
import ContactInfo from '../../components/contact/ContactInfo';
import Layout from '../../components/layout/Layout';
import config from '../../config/config';
import '../../styles/pages/ContactPage.css';

const ContactPage = () => {
  const { googleMapsUrl, googleMapsUrlImage } = config;

  return (
    <Layout>
      <div className="contact-page">
        <section className="contact-hero">
          <div className="container">
            <h1 className="page-title">Contact Us</h1>
            <p className="page-subtitle">
              Get in touch with our team for inquiries, quotes, or any assistance you need.
            </p>
          </div>
        </section>

        <section className="contact-section section">
          <div className="container">
            <div className="contact-container">
              <div className="contact-info-wrapper">
                <ContactInfo />
              </div>

              <div className="contact-form-wrapper">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="map-section">
          <div className="map-container">
            {googleMapsUrl ? (
              <>
                <iframe
                  src={googleMapsUrlImage}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Shreenath Industries Location"
                ></iframe>

                {/* Overlay Link */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                    cursor: 'pointer',
                  }}
                  aria-label="Open Google Maps"
                ></a>
              </>
            ) : (
              <div className="map-placeholder">
                <div className="placeholder-content">
                  <h3>Google Maps Location</h3>
                  <p>Our facility location will be displayed here</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage; 