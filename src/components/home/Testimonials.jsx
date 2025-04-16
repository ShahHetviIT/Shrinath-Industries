import { FaQuoteLeft } from 'react-icons/fa';
import config from '../../config/config';
import '../../styles/components/Testimonials.css';

const Testimonials = () => {
  const { companyName } = config;
  
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Mehta',
      company: 'Mehta Pharmaceutical Industries',
      text: `${companyName} has been our trusted partner for electrical panel manufacturing for over 7 years. Their PCC panels have enhanced our facility's power distribution system with exceptional reliability and their prompt service support is outstanding.`,
    },
    {
      id: 2,
      name: 'Sunil Patel',
      company: 'Patel Engineering Works',
      text: `We've installed multiple MCC panels from ${companyName} in our manufacturing unit. Their attention to detail in panel fabrication and precision in wiring work has resulted in zero downtime for our production line since installation.`,
    },
    {
      id: 3,
      name: 'Amit Shah',
      company: 'Shah Automation Systems',
      text: `The PLC automation panels provided by ${companyName} have significantly improved our production efficiency by 35%. Their technical expertise in designing custom control systems and responsive after-sales service make them our go-to electrical contractor.`,
    }
  ];

  return (
    <section className="testimonials-section section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">Trusted by leading manufacturers across industries</p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonial.name}</h4>
                <p className="author-company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 