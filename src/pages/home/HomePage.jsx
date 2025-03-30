import Carousel from '../../components/home/Carousel';
import ServiceHighlights from '../../components/home/ServiceHighlights';
import AboutSection from '../../components/home/AboutSection';
import Testimonials from '../../components/home/Testimonials';
import CTA from '../../components/common/CTA';
import Layout from '../../components/layout/Layout';
import '../../styles/pages/HomePage.css';

const HomePage = () => {
  return (
    <Layout>
      <Carousel />
      
      <ServiceHighlights />
      
      <AboutSection />
      
      <Testimonials />
      
      <CTA 
        title="Ready to Get Started?" 
        description="Contact us today for a free consultation and quote on your next project." 
        buttonText="Contact Us" 
        buttonLink="/contact" 
      />
    </Layout>
  );
};

export default HomePage; 