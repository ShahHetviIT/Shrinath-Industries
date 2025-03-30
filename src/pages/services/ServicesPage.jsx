import { FaSprayCan, FaTools, FaLightbulb } from 'react-icons/fa';
import ServiceDetail from '../../components/services/ServiceDetail';
import CTA from '../../components/common/CTA';
import Layout from '../../components/layout/Layout';
import '../../styles/pages/ServicesPage.css';

const ServicesPage = () => {
  const services = [
    {
      id: 'powder-coating',
      title: 'Powder Coating',
      icon: <FaSprayCan />,
      description: 'Our powder coating service provides a high-quality, durable finish for metal components and products. Using advanced techniques and equipment, we ensure exceptional results that are resistant to chipping, scratching, fading, and wearing.',
      features: [
        'Environmentally friendly process with minimal waste',
        'Wide range of colors and finishes available',
        'Quick turnaround times',
        'Suitable for various metal products and components',
        'Even coating application for consistent results'
      ],
      benefits: [
        'Superior durability compared to traditional liquid paint',
        'Excellent resistance to UV rays, moisture, and corrosion',
        'Cost-effective long-term solution',
        'Environmentally friendly with low VOC emissions',
        'Aesthetic appeal with smooth, attractive finish'
      ]
    },
    {
      id: 'fabrication',
      title: 'Fabrication',
      icon: <FaTools />,
      description: 'Our fabrication services include custom metal fabrication for a wide range of industrial applications. We work with various metals and utilize precision cutting, forming, and welding techniques to create high-quality components and structures according to client specifications.',
      features: [
        'Custom metal fabrication for specific requirements',
        'Expert welding and joining methods',
        'Precision cutting and forming',
        'Sheet metal work and structural fabrication',
        'Quality assurance at every stage'
      ],
      benefits: [
        'Tailored solutions for your specific needs',
        'High-quality, precise manufacturing',
        'Reduced assembly time and costs',
        'Consistency in production',
        'Expert advice and technical support throughout the project'
      ]
    },
    {
      id: 'electrical-panels',
      title: 'Electrical Panels',
      icon: <FaLightbulb />,
      description: 'We design and manufacture high-quality electrical panels for industrial control systems. Our electrical panels are built according to industry standards, ensuring safety, reliability, and efficiency for your electrical control needs.',
      features: [
        'Custom panel design and engineering',
        'Industry standard compliance',
        'Integration of modern control technologies',
        'Comprehensive testing before delivery',
        'Technical documentation and support'
      ],
      benefits: [
        'Enhanced safety and reliability',
        'Improved electrical efficiency',
        'Reduced downtime and maintenance',
        'Streamlined control of electrical systems',
        'Long-term operational savings'
      ]
    }
  ];

  return (
    <Layout>
      <div className="services-page">
        <section className="services-hero">
          <div className="container">
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle">
              Shreenath Industries offers a comprehensive range of services to meet your industrial needs. 
              Our expertise in powder coating, fabrication, and electrical panels ensures high-quality results
              for your projects.
            </p>
          </div>
        </section>

        <section className="services-list section">
          <div className="container">
            {services.map(service => (
              <ServiceDetail key={service.id} service={service} />
            ))}
          </div>
        </section>

        <CTA 
          title="Need Custom Solutions?" 
          description="Contact our team to discuss your specific requirements and get a personalized quote." 
          buttonText="Contact Us" 
          buttonLink="/contact" 
        />
      </div>
    </Layout>
  );
};

export default ServicesPage; 