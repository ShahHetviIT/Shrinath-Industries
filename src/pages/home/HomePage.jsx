import Carousel from '../../components/home/Carousel';
import ServiceHighlights from '../../components/home/ServiceHighlights';
import AboutSection from '../../components/home/AboutSection';
import Testimonials from '../../components/home/Testimonials';
import CTA from '../../components/common/CTA';
import Layout from '../../components/layout/Layout';
import config from '../../config/config';
import '../../styles/pages/HomePage.css';

const HomePage = () => {
  const { companyName } = config;
  
  return (
    <Layout>
      <Carousel />
      
      <ServiceHighlights />
      
      <AboutSection />
      
      <Testimonials />
      
      <CTA 
        title="Need Electrical Panel Solutions?" 
        description="Contact us today for a consultation and quote on your electrical panel requirements." 
        buttonText="Contact Us" 
        buttonLink="/contact" 
      />
    </Layout>
  );
};

export default HomePage; 