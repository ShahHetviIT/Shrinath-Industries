import { FaQuoteLeft } from 'react-icons/fa';
import '../../styles/components/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      company: 'ABC Industries',
      text: 'Shreenath Industries has been our trusted partner for powder coating services for over 5 years. Their commitment to quality and timely delivery is exceptional.',
    },
    {
      id: 2,
      name: 'Sunil Patel',
      company: 'XYZ Engineering',
      text: 'We have been using their fabrication services for our projects, and the results have always been outstanding. Their attention to detail and precision is commendable.',
    },
    {
      id: 3,
      name: 'Amit Shah',
      company: 'PQR Enterprises',
      text: 'The electrical panels provided by Shreenath Industries are of the highest quality. Their technical expertise and customer service are truly remarkable.',
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