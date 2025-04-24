// Debug information
console.log("Environment variables available:", import.meta.env);

// Import images for services
import laserCutting1 from '../assets/laser-cutting-1.jpg';
import laserCutting2 from '../assets/laser-cutting-2.jpg';
import laserCutting3 from '../assets/laser-cutting-3.jpg';
import laserCutting4 from '../assets/laser-cutting-4.jpg';
import laserCutting5 from '../assets/laser-cutting-5.jpg';
import hydraulicCutting1 from '../assets/hydrolic-cutting-1.jpg';
import hydraulicCutting2 from '../assets/hydrolic-cutting-2.jpg';
import hydraulicCutting3 from '../assets/hydrolic-cutting-3.jpg';
import hydraulicCutting4 from '../assets/hydrolic-cutting-4.jpg';
import hydraulicBending1 from '../assets/hydrolic-bending-machine-1.jpg';
import hydraulicBending2 from '../assets/hydrolic-bending-machine-2.webp';
import sevenTankProcess1 from '../assets/PretreamentProcess-1.jpg';
import sevenTankProcess2 from '../assets/PretreamentProcess-2.jpg';
import sevenTankProcess3 from '../assets/PretreamentProcess-3.jpg';
import laserWelding1 from '../assets/laser-welding-1.jpg';
import laserWelding2 from '../assets/laser-welding-2.jpg';
import laserWelding3 from '../assets/laser-welding-3.jpg';
import powderCoatingBooth1 from '../assets/PowderCoatingBooth-1.jpg';
import powderCoatingBooth2 from '../assets/PowderCoatingBooth-2.jpg';
import powderCoatingBooth3 from '../assets/PowderCoatingBooth-3.jpg';
import hydraulicPunching1 from '../assets/hydrolic-punching-1.jpg';
import hydraulicPunching2 from '../assets/hydrolic-punching-2.jpg';
import oven1 from '../assets/oven-1.jpg';
import oven2 from '../assets/oven-2.jpg';
import oven3 from '../assets/oven-3.jpg';
import ACPanel from '../assets/ACPanel.jpeg';
import HTLTPanel from '../assets/electrical-ht-lt-panel.jpg';
import AFCBPanel from '../assets/apfc-panels.png';
import govtPanel from '../assets/gvt.jpeg';
import PlcPanel from '../assets/plc-based-panel.jpg';
import MccPanel from '../assets/MCC-Panel.jpeg';
import Panel2 from '../assets/panel-2.jpg';

export const config = {
  // Company Information
  companyName: import.meta.env.COMPANY_NAME,
  companyTagline: import.meta.env.COMPANY_TAGLINE,

  // Contact Information
  contactInfo: {
    phone: import.meta.env.PHONE_NUMBER,
    email: import.meta.env.EMAIL,
    address: import.meta.env.ADDRESS,
    businessHours: import.meta.env.BUSINESS_HOURS,
  },

  // Social Media Links
  socialMedia: {
    whatsapp: import.meta.env.WHATSAPP,
  },

  // Maps
  googleMapsUrl: import.meta.env.GOOGLE_MAPS_URL,
  googleMapsUrlImage: import.meta.env.GOOGLE_MAPS_URL_IMAGE,

  // Organization Details
  organizationDetails: {
    name: import.meta.env.COMPANY_NAME,
    address: import.meta.env.ADDRESS,
    mobile: import.meta.env.PHONE_NUMBER,
    email: import.meta.env.EMAIL,
    nature: import.meta.env.BUSINESS_NATURE,
    activity: import.meta.env.BUSINESS_ACTIVITY,
    contactPerson: import.meta.env.CONTACT_PERSON,
    bankReference: import.meta.env.BANK_REFERENCE,
    established: import.meta.env.ESTABLISHED_DATE,
    introduction: import.meta.env.COMPANY_INTRODUCTION
  },

  // Key Services
  mainServices: [
    {
      id: 'electrical-panels',
      title: 'Electrical Panels',
      description: 'Manufacturing all types of Electrical, Instrumentation & Automation control panels, also we are Govt. approved electrical contractor engaged in installation of electrical projects and GEB consultancy work.',
      icon: 'FaBolt',
      image: Panel2,
      subServices: [
        {
          id: 'ht-lt-panel',
          title: 'HT & LT Panel',
          description: 'Our extensive and highly usable range of control panels includes Main L.T. Panel that is available in compartmentalized constructions. It consists of incoming ACB or MCCB and outgoings MCCB\'S or SDFU\'S as per the requirement of the customer.',
          icon: 'FaChargingStation',
          image: HTLTPanel
        },
        {
          id: 'mcc-panel',
          title: 'MCC Panel',
          description: 'Our complete range of Motor control Center is capable to feed larger loads and comes with multiple power stabs. This way our MCC supports high capacity industrial motors.',
          icon: 'FaIndustry',
          image: MccPanel
        },
        {
          id: 'apfc-panel',
          title: 'APFC Panel',
          description: 'Our range of APFC panels is capable for maintaining the desired PF as per the clients requirement, and they are designed accurately after studying nature of load of customers so as to give maximum benefits.',
          icon: 'FaWaveSquare',
          image: AFCBPanel
        },
        {
          id: 'ac-drives-panel',
          title: 'AC Drives Panel',
          description: 'We supply AC drive panels which are widely used as speed controllers of alternate current induction motor. Widely used across various industries, AC drives are used to control the speed of motor by controlling frequency of supply. AC Drive panels offered by us are manufactured using high quality material and electrical components procured from quality conscious manufacturers. This allows us to deliver optimum functionality based drive panels that help in monitoring of machines and delivering superior on-site operator control of machines.',
          icon: 'FaCogs',
          image: ACPanel
        },
        {
          id: 'plc-panel',
          title: 'PLC Based Automation Panel',
          description: 'Our company is engaged in designing and manufacturing of automation panels that are having an excellent appearance. We have the facility to manufacture these in different shapes like one sided, double sided and desk type. All panels are hard wired, plc based, electrically controlled. These automation panels are made using careful wiring to provide best results.',
          icon: 'FaMicrochip',
          image: PlcPanel
        },
        {
          id: 'electrical-contractor',
          title: 'Govt. approved Electrical Contractor',
          description: 'We are Govt. approved electrical contractor engaged in GEB consultancy work, also we take electrification project work for Industries, offices, hotels, commercial buildings etc. All the projects are completed with through process covering all code of conducts laid for the same.',
          icon: 'FaBuilding',
          image: govtPanel
        }
      ]
    },
    {
      id: 'laser-cutting',
      title: 'Laser Cutting Machine',
      description: `• Utilizes advanced fiber laser technology for precision cutting
      • Suitable for metals like steel, aluminum, brass, and more  
      • High-speed cutting with minimal thermal distortion  
      • Supports intricate designs and complex shapes  
      • Reduces material waste with clean, burr-free edges  
      • Ideal for both prototype and mass production`,
      icon: 'FaLaser',
      image: laserCutting1,
      galleryImages: [
        laserCutting1,
        laserCutting2,
        laserCutting3,
        laserCutting4,
        laserCutting5
      ]
    },
    {
      id: 'hydraulic-cutting',
      title: 'Hydraulic Cutting Machine',
      description: `• Heavy-duty machine powered by a reliable hydraulic system
      • Provides consistent pressure for clean, accurate cuts
      • Handles thick sheets and tough materials with ease
      • Low maintenance with a durable build
      • Suitable for industrial and manufacturing operations
      • Ensures operator safety with built-in protection features`,
      icon: 'FaCut',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
      galleryImages: [
        hydraulicCutting1,
        hydraulicCutting2,
        hydraulicCutting3,
        hydraulicCutting4
      ]
    },
    {
      id: 'hydraulic-bending',
      title: 'Hydraulic Bending Machine',
      description: `• Provides precise bending of sheet metal using hydraulic force
      • Ideal for bending thick and tough materials with high accuracy
      • Offers adjustable bending angles for versatile applications
      • Equipped with a robust frame and hydraulic system for long-lasting use
      • Allows for multiple bending processes with a single setup
      • Suitable for both small-scale and large-scale production
      • Ensures operator safety with advanced control systems and safety features`,
      icon: 'FaIndustry',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
      galleryImages: [
        hydraulicBending1,
        hydraulicBending2
      ]
    },
    {
      id: 'seven-tank-process',
      title: '7 Tank Process',
      description: `• Essential surface treatment before powder coating or painting
      • Removes grease, rust, and contaminants effectively
      • Enhances adhesion of coating materials
      • Increases corrosion resistance and durability
      • Includes processes like degreasing, rinsing, phosphating, etc.
      • Ensures a smooth, clean, and reactive surface`,
      icon: 'FaWater',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
      galleryImages: [
        sevenTankProcess1,
        sevenTankProcess2,
        sevenTankProcess3
      ]
    },
    {
      id: 'powder-coating',
      title: 'Powder Coating Oven',
      description: `• Cures powder-coated parts evenly for a long-lasting finish
      • Maintains consistent temperature with uniform heat distribution
      • Energy-efficient and eco-friendly operation
      • Provides resistance to chipping, scratching, and UV damage
      • Suitable for a wide range of metal components
      • Available in various sizes for small to large parts`,
      icon: 'FaSprayCan',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
      galleryImages: [
        oven1,
        oven3
      ]
    },
    {
      id: 'laser-welding',
      title: 'Laser Welding Machine',
      description: `• Offers precise, clean welds with minimal heat impact
      • Suitable for delicate and high-strength welding applications
      • Reduces post-processing time with minimal distortion
      • High-speed operation for improved productivity
      • Ideal for stainless steel, aluminum, and similar metals
      • Used in automotive, electronics, and precision fabrication`,
      icon: 'FaFire',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
      galleryImages: [
        laserWelding1,
        laserWelding2,
        laserWelding3
      ]
    },
    {
      id: 'powder-coating-booth',
      title: 'Powder Coating Booth',
      description: `• Provides a controlled environment for powder application
      • Advanced filtration system minimizes powder waste
      • Designed for operator safety and comfort
      • Ensures even coating with high transfer efficiency
      • Easy to clean and maintain
      • Complies with industry safety and environmental standards`,
      icon: 'FaSprayCan',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
      galleryImages: [
        powderCoatingBooth1,
        powderCoatingBooth2,
        powderCoatingBooth3
      ]
    },
    {
      id: 'hydraulic-punching',
      title: 'Hydraulic Punching Machine',
      description: `• Delivers powerful, accurate punching for sheet metals
      • Supports various dies for custom shapes and holes
      • Quick setup and easy operation
      • Minimal material deformation during punching
      • Suitable for heavy-duty, continuous production
      • Strong frame and reliable hydraulic system for long-term use`,
      icon: 'FaTools',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
      galleryImages: [
        hydraulicPunching1,
        hydraulicPunching2
      ]
    }
  ],

  // Keeping the old services format for backward compatibility
  services: [
    {
      id: 'ht-lt-panel',
      title: 'HT & LT Panel',
      description: 'Our extensive and highly usable range of control panels includes Main L.T. Panel that is available in compartmentalized constructions. It consists of incoming ACB or MCCB and outgoings MCCB\'S or SDFU\'S as per the requirement of the customer.',
      icon: 'FaChargingStation'
    },
    {
      id: 'mcc-panel',
      title: 'MCC Panel',
      description: 'Our complete range of Motor control Center is capable to feed larger loads and comes with multiple power stabs. This way our MCC supports high capacity industrial motors.',
      icon: 'FaIndustry'
    },
    {
      id: 'apfc-panel',
      title: 'APFC Panel',
      description: 'Our range of APFC panels is capable for maintaining the desired PF as per the clients requirement, and they are designed accurately after studying nature of load of customers so as to give maximum benefits.',
      icon: 'FaWaveSquare'
    },
    {
      id: 'ac-drives-panel',
      title: 'AC Drives Panel',
      description: 'We supply AC drive panels which are widely used as speed controllers of alternate current induction motor. Widely used across various industries, AC drives are used to control the speed of motor by controlling frequency of supply. AC Drive panels offered by us are manufactured using high quality material and electrical components procured from quality conscious manufacturers. This allows us to deliver optimum functionality based drive panels that help in monitoring of machines and delivering superior on-site operator control of machines.',
      icon: 'FaCogs'
    },
    {
      id: 'plc-panel',
      title: 'PLC Based Automation Panel',
      description: 'Our company is engaged in designing and manufacturing of automation panels that are having an excellent appearance. We have the facility to manufacture these in different shapes like one sided, double sided and desk type. All panels are hard wired, plc based, electrically controlled. These automation panels are made using careful wiring to provide best results.',
      icon: 'FaMicrochip'
    },
    {
      id: 'electrical-contractor',
      title: 'Govt. approved Electrical Contractor',
      description: 'We are Govt. approved electrical contractor engaged in GEB consultancy work, also we take electrification project work for Industries, offices, hotels, commercial buildings etc. All the projects are completed with through process covering all code of conducts laid for the same.',
      icon: 'FaBuilding'
    }
  ],

  // Facilities (keeping this for backward compatibility)
  facilities: [
    {
      id: 'fabrication',
      title: 'FABRICATION',
      equipment: [
        'HYDRAULIC SHEARING MACHINE 6mm X 2500mm',
        'HYDRAULIC BENDING MACHINE 5mm X 2500mm',
        'HAND OPERATED BENDING MACHINE',
        'WELDING MACHINE',
        'DRILL MACHINE',
        'JIKSAW MACHINE'
      ],
      icon: 'FaTools'
    },
    {
      id: 'painting',
      title: 'PAINTING',
      equipment: [
        'TANK FOR SURFACE TREATMENT',
        'OVEN SIZE 12FT. X 6FT X 8FT',
        'SPREY GUN',
        'COMPRESSOR',
        'CYCLONE BOOTH'
      ],
      icon: 'FaSprayCan'
    },
    {
      id: 'busbar',
      title: 'BUSBAR BENDING & ASSEMBLY',
      equipment: [],
      icon: 'FaLayerGroup'
    },
    {
      id: 'wiring',
      title: 'WIRING',
      equipment: [],
      icon: 'FaPlug'
    }
  ]
};

// Debug the final config
console.log("Config loaded:", {
  companyName: config.companyName,
  tagline: config.companyTagline,
  contactInfo: config.contactInfo,
  organizationDetails: config.organizationDetails
});

export default config; 