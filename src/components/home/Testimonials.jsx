import { FaQuoteLeft } from 'react-icons/fa';
import config from '../../config/config';
import '../../styles/components/Testimonials.css';

const Testimonials = () => {
  const { companyName } = config;
  
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'ABC Chemical Industries',
      text: `${companyName} has been our trusted partner for electrical panel manufacturing for over 5 years. Their LT panels are exceptionally reliable and their service support is outstanding.`,
    },
    {
      id: 2,
      name: 'Sunil Patel',
      company: 'XYZ Engineering',
      text: `We've installed multiple MCC panels from ${companyName} in our manufacturing unit. Their attention to detail and precision in panel wiring is commendable.`,
    },
    {
      id: 3,
      name: 'Amit Shah',
      company: 'PQR Pharma',
      text: `The PLC automation panels provided by ${companyName} have significantly improved our production efficiency. Their technical expertise and after-sales service are truly remarkable.`,
    }
  ];

  return (
    <section className="testimonials-section section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">Hear from our satisfied customers</p>
        
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