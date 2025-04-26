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
    businessHours: JSON.parse(import.meta.env.BUSINESS_HOURS),
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
      description: `At <strong>Shrinath Industries</strong>, we offer <strong>precision laser cutting services</strong> as part of our job work solutions. Our advanced <strong>laser cutting machine</strong> delivers high-quality, accurate, and consistent cuts on various sheet metals, catering to diverse industrial needs.
<br />
<br />
<strong>What We Offer:</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Custom sheet metal cutting</strong> with fine detail and smooth edges
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>High-speed production</strong> for bulk orders
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Cutting of various materials</strong> including MS, SS, and aluminum sheets
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Thickness capacity</strong>: Up to 10mm MS / 5mm SS
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>CAD/CAM integration</strong> for design-based precision cutting`,
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
      description: `At <strong>Shrinath Industries</strong>, we offer <strong>high-precision hydraulic sheet cutting services</strong> tailored to meet the diverse needs of modern fabrication. Our advanced <strong>hydraulic cutting machine</strong> delivers clean, accurate, and efficient cuts—perfect for both small custom jobs and high-volume production.
<br />
<br />
<strong>What We Offer:</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Precise straight-line cutting</strong> of MS, SS, and aluminum sheets
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Heavy-duty cutting capacity</strong> for medium to thick materials
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Consistent quality</strong> with minimal edge deformation
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Thickness capability</strong>: Up to 6mm MS / 4mm SS
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Fast turnaround for <strong>custom and bulk sheet cutting jobs</strong>`,
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
      description: `At <strong>Shrinath Industries</strong>, we offer <strong>precision hydraulic bending services</strong> as part of our comprehensive fabrication solutions. Our <strong>hydraulic bending machine</strong> delivers accurate and consistent bends on a wide range of sheet metals, supporting both custom and large-scale production requirements.
<br />
<br />
<strong>What We Offer:</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Accurate <strong> angle bending</strong> for MS, SS, and aluminum sheets
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Capable of bending sheets up to <strong> 6mm thickness / 2500mm width</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Ideal for creating <strong>boxes, panels, enclosures, and complex profiles</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• High repeatability for <strong>bulk bending operations</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Custom bending</strong> based on technical drawings or client specifications`,
      icon: 'FaIndustry',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
      galleryImages: [
        hydraulicBending1,
        hydraulicBending2
      ]
    },
    {
      id: 'seven-tank-process',
      title: '7 Tank Pre-Treatment Process',
      description: `At <strong>Shrinath Industries</strong>, we follow a <strong>7 Tank Pre-Treatment Process</strong> as a critical step in our <strong>in-house powder coating system</strong>. This process ensures <strong>excellent surface preparation</strong>, which enhances paint adhesion, corrosion resistance, and the overall durability of coated components.
<br />
<br />
<strong>What We Offer:</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Thorough cleaning and degreasing</strong> of metal surfaces
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Removal of <strong>rust, oil, scale, and contaminants</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Surface activation</strong> for better coating adhesion
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Pre-treatment for <strong> mild steel, galvanized, and aluminum components</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Ensures <strong> long-lasting, high-quality powder coating finish</strong>`,
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
      description: `At <strong>Shrinath Industries</strong>, our <strong>powder coating oven</strong> plays a vital role in delivering durable, high-quality finishes on fabricated components. Designed for <strong>uniform heating and efficient curing</strong>, our oven ensures that every part we coat achieves optimal strength, appearance, and corrosion resistance.
<br />
<br />
<strong>What We Offer:</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Even and consistent curing</strong> for all powder-coated parts
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Suitable for<strong> MS, SS, and aluminum components</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Supports a<strong> wide range of part sizes</strong> and shapes
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>High-temperature capability</strong> for faster turnaround
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Durable finish with <strong> excellent adhesion and surface protection </strong>`,
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
      description: `At <strong>Shrinath Industries</strong>, we offer advanced <strong>laser welding services</strong> using precision technology for clean, strong, and aesthetically pleasing welds. Our <strong>laser welding machine</strong> enables us to handle intricate assemblies and delicate materials with unmatched accuracy and minimal distortion.
<br />
<br />
<strong>What We Offer:</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>High-precision welding</strong> for MS, SS, and aluminum
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Ideal for<strong> thin sheets and complex geometries</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Minimal heat-affected zone</strong> (HAZ) and reduced warping
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Clean welds with <strong> little to no post-processing required</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Suitable for<strong> automotive parts, enclosures, electronics, and custom fabrication</strong>`,
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
      description: `At <strong>Shrinath Industries</strong>, our <strong>powder coating booth</strong> ensures efficient and controlled application of powder coatings to a variety of metal components. This booth is a crucial part of our coating process, allowing us to achieve a uniform, high-quality finish with excellent adhesion and durability.
<br />
<br />
<strong>What We Offer:</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Uniform powder application</strong> for consistent coating thickness
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Controlled environment</strong> to prevent contaminants from affecting the finish
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Suitable for coating<strong> MS, SS, and aluminum components</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Ability to handle<strong> small to large batch sizes</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Supports both<strong> custom and high-volume orders</strong>`,
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
      title: 'Hydraulic Punching Services',
      description: `At <strong>Shrinath Industries</strong>, we provide <strong>precision hydraulic punching services</strong> that cater to a wide range of industrial needs. Our <strong>hydraulic punching machine</strong> enables us to create high-quality, accurate holes and shapes in sheet metals, ensuring consistent results for both small and large production runs.
<br />
<br />
<strong>What We Offer:</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Precision hole punching</strong> for MS, SS, and aluminum sheets
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Capable of producing a variety of <strong>shapes and sizes</strong>
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Custom punching</strong> according to specific designs and specifications
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• High-speed,<strong> consistent results </strong> with minimal tooling changes
<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Ideal for<strong> custom metal parts, panels, and enclosures</strong>`,
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