import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img1 from '../../assets/img-1.jpg';
import img2 from '../../assets/img-2.jpg';
import '../../styles/components/Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: img1,
      alt: 'Shreenath Industries Facility',
      title: 'Quality Manufacturing Solutions',
      description: 'Experts in Powder Coating, Fabrication & Electrical Panels'
    },
    {
      id: 2,
      image: img2,
      alt: 'Shreenath Industries Services',
      title: 'Precision Engineering',
      description: 'Delivering Excellence in Every Project'
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide(current => (current === 0 ? slides.length - 1 : current - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(current => (current === slides.length - 1 ? 0 : current + 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
          >
            <img src={slide.image} alt={slide.alt} className="carousel-image" />
            <div className="carousel-content">
              <h2 className="carousel-title">{slide.title}</h2>
              <p className="carousel-description">{slide.description}</p>
            </div>
          </div>
        ))}

        <button className="carousel-arrow prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="carousel-arrow next" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel; 