import { Link } from 'react-router-dom';
import '../../styles/components/CTA.css';

const CTA = ({ title, description, buttonText, buttonLink }) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-description">{description}</p>
          <Link to={buttonLink} className="btn cta-btn" onClick={handleClick}>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA; 