import { useState } from 'react';
import emailjs from 'emailjs-com';
import config from '../../config/config';
import '../../styles/components/ContactForm.css';

// EmailJS service IDs from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;
const EMAILJS_USER_ID = import.meta.env.EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  // Company email from config, with fallback
  const companyEmail = config.contactInfo?.email;
  const companyName = config.companyName;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      console.log('Sending email with data:', formData);

      // Initialize EmailJS with your user ID
      emailjs.init(EMAILJS_USER_ID);

      // Format the message to include sender details
      const formattedMessage = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
      `;

      // Prepare the template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        subject: `${formData.subject} - Contact from ${formData.name}`,
        message: formattedMessage,
        to_name: companyName,
        to_email: companyEmail,
        reply_to: formData.email
      };

      console.log('Using EmailJS with:', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        userId: EMAILJS_USER_ID
      });

      // Send the email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('Email sent successfully:', result);
      setFormSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setError('Failed to send your message. Please try again or contact us directly at ' + companyEmail);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-container">
      <h2 className="form-title">Send Us a Message</h2>

      {formSubmitted ? (
        <div className="success-message">
          <p>Thank you for your message! We'll get back to you soon.</p>
          <button
            className="btn mt-2"
            onClick={() => setFormSubmitted(false)}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}

          <button
            type="submit"
            className="btn submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm; 