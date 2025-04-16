import { FaUsers, FaCog, FaAward, FaHandshake } from 'react-icons/fa';
import CTA from '../../components/common/CTA';
import Layout from '../../components/layout/Layout';
import config from '../../config/config';
import jatilImage from '../../assets/jatil-2.jpg';
import jayImage from '../../assets/jay-1.jpg';
import excellenceImage from '../../assets/img-1.jpg';

// Import office images
import office2 from '../../assets/Office-2.jpg';
import office3 from '../../assets/Office-3.jpg';
import office4 from '../../assets/Office-4.jpg';
import office5 from '../../assets/Office-5.jpg';
import office6 from '../../assets/Office-6.jpg';
import office7 from '../../assets/Office-7.jpg';

import '../../styles/pages/AboutPage.css';

const AboutPage = () => {
  const { companyName } = config;

  // Office gallery images
  const officeImages = [
    { id: 1, src: office2, alt: 'SHRINATH INDUSTRIES Meeting Area' },
    { id: 2, src: office3, alt: 'SHRINATH INDUSTRIES Work Space' },
    { id: 3, src: office4, alt: 'SHRINATH INDUSTRIES Reception' },
    { id: 4, src: office5, alt: 'SHRINATH INDUSTRIES Office Space' },
    { id: 5, src: office6, alt: 'SHRINATH INDUSTRIES Team Area' },
    { id: 6, src: office7, alt: 'SHRINATH INDUSTRIES Management Office' },
  ];

  const values = [
    {
      id: 1,
      icon: <FaUsers />,
      title: 'Team Excellence',
      description: 'Our experienced professionals work collaboratively to deliver the highest quality solutions.',
    },
    {
      id: 2,
      icon: <FaCog />,
      title: 'Technical Expertise',
      description: 'We employ advanced technologies and methodologies to ensure precision and efficiency.',
    },
    {
      id: 3,
      icon: <FaAward />,
      title: 'Quality Commitment',
      description: 'We maintain rigorous quality control standards throughout our manufacturing processes.',
    },
    {
      id: 4,
      icon: <FaHandshake />,
      title: 'Customer Focus',
      description: 'We build lasting relationships by understanding and exceeding client expectations.',
    }
  ];

  return (
    <Layout>
      <div className="about-page">
        <section className="about-hero">
          <div className="container">
            <h1 className="page-title">About Us</h1>
            <p className="page-subtitle">
              At {companyName}, we take immense pride in being one of the leading panel builders in the region.
            </p>
          </div>
        </section>

        <section className="about-company section">
          <div className="container">
            <div className="about-content">
              <div className="about-text">
                <h2 className="section-title text-left">Our Story</h2>
                <p className="about-paragraph">
                  At Shrinath Industries, we take pride in being a leading electrical panel manufacturer, delivering quality craftsmanship and exceptional service since November 1, 2006.
                </p>

                <h3 className="subsection-title">Our Legacy & Leadership</h3>
                <p className="about-paragraph">
                  Founded by Jatil P. Shah, a visionary leader committed to innovation, precision, and reliability, we have grown into a trusted name, providing superior electrical solutions tailored to industry needs. His expertise and dedication to quality continue to drive our success.
                </p>

                <h3 className="subsection-title">What We Do</h3>
                <p className="about-paragraph">
                  We specialize in design, manufacturing, and installation of Electrical, Instrumentation & Automation Control Panels. With a state-of-the-art fabrication shop and an in-house powder coating facility, we ensure durability and excellence. As a Government-approved electrical contractor, we also handle project installations and GEB consultancy.
                </p>

                <h3 className="subsection-title">Our Commitment</h3>
                <p className="about-paragraph">
                  Our core values—quality, reliability, and integrity—guide us in delivering top-tier products, efficient services, and lasting client relationships. As we grow, we continue to embrace new challenges while upholding our legacy of excellence.
                </p>
              </div>

              <div className="about-image-container">
                <div className="about-image">
                  <img src={jatilImage} alt="Jatil P. Shah - Founder, SHRINATH INDUSTRIES" />
                  <div className="image-caption">
                    <h3>Jatil P. Shah</h3>
                    <p>Founder & Partner</p>
                  </div>
                </div>
                
                <div className="about-image" style={{ marginTop: '2rem' }}>
                  <img src={jayImage} alt="Jay Shah - Key Person, SHRINATH INDUSTRIES" />
                  <div className="image-caption">
                    <h3>Jay S. Patel</h3>
                    <p>Key Person</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="company-values section">
          <div className="container">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide our work and relationships</p>

            <div className="values-grid">
              {values.map(value => (
                <div key={value.id} className="value-card">
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="why-choose-us section">
          <div className="container">
            <div className="why-choose-content">
              <div className="why-choose-text">
                <h2 className="section-title text-left">Why Choose Us</h2>
                <ul className="why-choose-list">
                  <li>Founded by Jatil P. Shah in 2006 with a vision of excellence</li>
                  <li>State-of-the-art fabrication and in-house powder coating facility</li>
                  <li>Specialized in design and manufacturing of various types of electrical panels</li>
                  <li>Government approved electrical contractor for installation projects</li>
                  <li>Dedicated customer support and after-sales service</li>
                  <li>Unwavering commitment to quality, safety, and reliability</li>
                </ul>
              </div>

              <div className="why-choose-image">
                <div className="about-image">
                  <img src={excellenceImage} alt="SHRINATH INDUSTRIES - Excellence in Manufacturing" />
                  <div className="image-caption">
                    <h3>Excellence in Manufacturing</h3>
                    <p>Quality at every step</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Gallery Section */}
        <section className="office-gallery section">
          <div className="container">
            <h2 className="section-title">Our Office</h2>
            <p className="section-subtitle">A glimpse into our professional workspace</p>
            
            <div className="office-images-gallery">
              {officeImages.map(image => (
                <div key={image.id} className="gallery-item">
                  <img src={image.src} alt={image.alt} className="gallery-image" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="Ready to Collaborate?"
          description="Partner with us for your electrical panel manufacturing needs and experience the difference."
          buttonText="Contact Us"
          buttonLink="/contact"
        />
      </div>
    </Layout>
  );
};

export default AboutPage; 