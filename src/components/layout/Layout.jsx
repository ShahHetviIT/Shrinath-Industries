import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top when path changes
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } 
    // Scroll to element if hash exists
    else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Add a slight delay to ensure all content is loaded
        setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout; 