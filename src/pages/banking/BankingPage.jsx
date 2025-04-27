import Layout from '../../components/layout/Layout';
import config from '../../config/config';
import { FaUniversity, FaUser, FaPhone, FaBuilding, FaMapMarkerAlt, FaCreditCard, FaKey } from 'react-icons/fa';
import '../../styles/pages/BankingPage.css';

const BankingPage = () => {
  const { companyName, organizationDetails, contactInfo } = config;
  

  return (
    <Layout>
      <div className="banking-page">
        <section className="banking-hero">
          <div className="container">
            <h1 className="page-title">Banking Details</h1>
            <p className="page-subtitle">
              Use the following banking information for payments and transactions.
            </p>
          </div>
        </section>

        <section className="banking-content section">
          <div className="container">
            <div className="banking-card">
              <div className="banking-header">
                <h2>Payment Information</h2>
                <p>Please use the following details for all bank transfers and payments.</p>
              </div>
              
              <div className="banking-details">
                <div className="banking-row">
                  <div className="banking-icon">
                    <FaBuilding />
                  </div>
                  <div className="banking-info">
                    <h3>Company Name</h3>
                    <p>{companyName}</p>
                  </div>
                </div>
                
                <div className="banking-row">
                  <div className="banking-icon">
                    <FaUser />
                  </div>
                  <div className="banking-info">
                    <h3>Contact Person</h3>
                    <p>{organizationDetails.contactPerson}</p>
                  </div>
                </div>
                
                <div className="banking-row">
                  <div className="banking-icon">
                    <FaPhone />
                  </div>
                  <div className="banking-info">
                    <h3>Phone Number</h3>
                    <p>{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="banking-row">
                  <div className="banking-icon">
                    <FaUniversity />
                  </div>
                  <div className="banking-info">
                    <h3>Bank Name</h3>
                    <p>{organizationDetails.bankDetails.bankName}</p>
                  </div>
                </div>
                
                <div className="banking-row">
                  <div className="banking-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="banking-info">
                    <h3>Branch</h3>
                    <p>{organizationDetails.bankDetails.branch}</p>
                  </div>
                </div>
                
                <div className="banking-row">
                  <div className="banking-icon">
                    <FaCreditCard />
                  </div>
                  <div className="banking-info">
                    <h3>Account Number</h3>
                    <p>{organizationDetails.bankDetails.accountNo}</p>
                  </div>
                </div>
                
                <div className="banking-row">
                  <div className="banking-icon">
                    <FaKey />
                  </div>
                  <div className="banking-info">
                    <h3>IFSC Code</h3>
                    <p>{organizationDetails.bankDetails.ifscCode}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BankingPage; 