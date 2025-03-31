// Debug information
console.log("Environment variables available:", import.meta.env);

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
    facebook: import.meta.env.FACEBOOK,
    instagram: import.meta.env.INSTAGRAM,
  },

  // Maps
  googleMapsUrl: import.meta.env.GOOGLE_MAPS_URL,
  
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
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
      subServices: [
        {
          id: 'ht-lt-panel',
          title: 'HT & LT Panel',
          description: 'Our extensive and highly usable range of control panels includes Main L.T. Panel that is available in compartmentalized constructions. It consists of incoming ACB or MCCB and outgoings MCCB\'S or SDFU\'S as per the requirement of the customer.',
          icon: 'FaChargingStation',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
        },
        {
          id: 'mcc-panel',
          title: 'MCC Panel',
          description: 'Our complete range of Motor control Center is capable to feed larger loads and comes with multiple power stabs. This way our MCC supports high capacity industrial motors.',
          icon: 'FaIndustry',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
        },
        {
          id: 'apfc-panel',
          title: 'APFC Panel',
          description: 'Our range of APFC panels is capable for maintaining the desired PF as per the clients requirement, and they are designed accurately after studying nature of load of customers so as to give maximum benefits.',
          icon: 'FaWaveSquare',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
        },
        {
          id: 'ac-drives-panel',
          title: 'AC Drives Panel',
          description: 'We supply AC drive panels which are widely used as speed controllers of alternate current induction motor. Widely used across various industries, AC drives are used to control the speed of motor by controlling frequency of supply. AC Drive panels offered by us are manufactured using high quality material and electrical components procured from quality conscious manufacturers. This allows us to deliver optimum functionality based drive panels that help in monitoring of machines and delivering superior on-site operator control of machines.',
          icon: 'FaCogs',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
        },
        {
          id: 'plc-panel',
          title: 'PLC Based Automation Panel',
          description: 'Our company is engaged in designing and manufacturing of automation panels that are having an excellent appearance. We have the facility to manufacture these in different shapes like one sided, double sided and desk type. All panels are hard wired, plc based, electrically controlled. These automation panels are made using careful wiring to provide best results.',
          icon: 'FaMicrochip',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
        },
        {
          id: 'electrical-contractor',
          title: 'Govt. approved Electrical Contractor',
          description: 'We are Govt. approved electrical contractor engaged in GEB consultancy work, also we take electrification project work for Industries, offices, hotels, commercial buildings etc. All the projects are completed with through process covering all code of conducts laid for the same.',
          icon: 'FaBuilding',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
        }
      ]
    },
    {
      id: 'fabrication',
      title: 'FABRICATION',
      description: 'State-of-the-art fabrication facility equipped with advanced machinery for precise panel manufacturing.',
      icon: 'FaTools',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
      equipment: [
        'HYDRAULIC SHEARING MACHINE 6mm X 2500mm',
        'HYDRAULIC BENDING MACHINE 5mm X 2500mm',
        'HAND OPERATED BENDING MACHINE',
        'WELDING MACHINE',
        'DRILL MACHINE',
        'JIKSAW MACHINE'
      ]
    },
    {
      id: 'painting',
      title: 'PAINTING',
      description: 'Professional surface treatment and powder coating facility for durable and aesthetic panel finishes.',
      icon: 'FaSprayCan',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
      equipment: [
        'TANK FOR SURFACE TREATMENT',
        'OVEN SIZE 12FT. X 6FT X 8FT',
        'SPREY GUN',
        'COMPRESSOR',
        'CYCLONE BOOTH'
      ]
    },
    {
      id: 'busbar',
      title: 'BUSBAR BENDING & ASSEMBLY',
      description: 'Specialized equipment for precise busbar bending and assembly to ensure optimal electrical conductivity.',
      icon: 'FaLayerGroup',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 'wiring',
      title: 'WIRING',
      description: 'Professional wiring services with attention to detail for reliable electrical connections.',
      icon: 'FaPlug',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop'
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