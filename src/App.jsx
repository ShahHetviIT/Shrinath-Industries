import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ServicesPage from './pages/services/ServicesPage';
import ContactPage from './pages/contact/ContactPage';
import BankingPage from './pages/banking/BankingPage';
import config from './config/config';
import './styles/common/global.css';

function App() {  
  // Log configuration information during development
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('App configuration loaded:', config);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/banking" element={<BankingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
