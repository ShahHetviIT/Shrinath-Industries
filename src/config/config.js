/**
 * Configuration file for Shreenath Industries website
 * Contains all the important contact and business information
 * sourced from environment variables
 */

export const config = {
  // Company Information
  companyName: import.meta.env.COMPANY_NAME || 'Shreenath Industries',
  companyTagline: import.meta.env.COMPANY_TAGLINE || 'Specialists in Powder Coating, Fabrication, and Electrical Panels',

  // Contact Information
  contactInfo: {
    phone: import.meta.env.PHONE_NUMBER || '+919824558239',
    email: import.meta.env.EMAIL || 'contact@shreenathindustries.com',
    address: import.meta.env.ADDRESS || 'Industrial Area, City, State, India',
    businessHours: import.meta.env.BUSINESS_HOURS || 'Monday to Saturday: 9:00 AM - 6:00 PM',
  },

  // Social Media Links
  socialMedia: {
    whatsapp: import.meta.env.WHATSAPP || '+919824558239',
    facebook: import.meta.env.FACEBOOK || 'https://facebook.com/shreenathindustries',
    instagram: import.meta.env.INSTAGRAM || 'https://instagram.com/shreenathindustries',
  },

  // Maps
  googleMapsUrl: import.meta.env.GOOGLE_MAPS_URL || '',
};

export default config; 