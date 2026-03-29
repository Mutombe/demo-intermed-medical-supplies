export const designTokens = {
  heroStyle: "carousel",
  typography: {
    heading: "Sora",
    body: "DM Sans",
    display: "Outfit",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: false,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "smooth",
  serviceCardStyle: "icon-top",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "stats", "services", "projects", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Intermed Medical Supplies",
    legalName: "Intermed Medical Supplies (Pvt) Ltd",
    tagline: "Equipping Healthcare Excellence",
    description:
      "Zimbabwe's trusted supplier of surgical equipment, diagnostic devices, laboratory supplies, hospital furniture, PPE, and pharmaceutical equipment. Empowering healthcare facilities with world-class medical technology.",
    phone: "+263 71 038 1400",
    phoneRaw: "+263710381400",
    whatsappNumber: "263710381400",
    email: "info@intermedmedical.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.9,
    ratingRounded: 5,
    reviewCount: 28,
    established: "2015",
    yearsExperience: "10+",
    projectsCompleted: "500+",
    employees: "30+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "9:00 AM - 12:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "intermed-cookie-consent",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },

  navbar: {
    logoLine1: "Intermed",
    logoLine2: "Medical",
  },

  hero: {
    badge: "Zimbabwe's Trusted Medical Supplier",
    titleParts: [
      { text: "Equipping " },
      { text: "Healthcare", highlight: true },
      { text: " Excellence" },
    ],
    subtitle:
      "From operating theatres to rural clinics, we supply the medical equipment, diagnostic devices, and consumables that Zimbabwe's healthcare professionals depend on every day.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "View Our Products",
    trustBadge: "WHO Standard Compliant",
    backgroundImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920",
    backgroundAlt:
      "Modern hospital operating theatre with advanced surgical equipment and lighting",
  },

  stats: [
    { number: "500+", label: "Facilities Supplied" },
    { number: "4.9", label: "Star Rating" },
    { number: "10+", label: "Years Experience" },
    { number: "30+", label: "Team Members" },
  ],

  servicesPreview: [
    {
      iconName: "FirstAid",
      title: "Surgical Equipment",
      desc: "Complete surgical theatre setups including instruments, tables, lights, anaesthesia machines, and sterilization systems.",
    },
    {
      iconName: "Eye",
      title: "Diagnostic Devices",
      desc: "Advanced diagnostic equipment from ultrasound and X-ray to ECG, patient monitors, and point-of-care testing devices.",
    },
    {
      iconName: "Briefcase",
      title: "Laboratory Supplies",
      desc: "Full laboratory outfitting including microscopes, centrifuges, reagents, consumables, and safety equipment.",
    },
    {
      iconName: "Buildings",
      title: "Hospital Furniture",
      desc: "Medical-grade beds, trolleys, cabinets, examination couches, and custom ward furniture solutions.",
    },
    {
      iconName: "ShieldCheck",
      title: "PPE & Safety",
      desc: "Personal protective equipment including surgical masks, gowns, gloves, face shields, and infection control supplies.",
    },
    {
      iconName: "Wrench",
      title: "Pharmaceutical Equipment",
      desc: "Pharmacy dispensing systems, cold chain storage, drug compounding equipment, and pharmaceutical-grade refrigeration.",
    },
  ],

  featuredProjects: [
    {
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
      title: "Central Hospital Theatre Upgrade",
      category: "Surgical",
    },
    {
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800",
      title: "Private Lab Setup",
      category: "Laboratory",
    },
    {
      image:
        "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800",
      title: "Rural Clinic Outfitting",
      category: "Healthcare",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Precision in Every " },
      { text: "Instrument", highlight: true },
      { text: " We Supply" },
    ],
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800",
    imageAlt:
      "Medical laboratory with diagnostic equipment and precision instruments",
    experienceYears: "10+",
    experienceLabel: "Years of Trust",
    points: [
      {
        title: "WHO-Compliant Products",
        desc: "Every device we supply meets World Health Organization standards and carries appropriate CE, FDA, or ISO certifications.",
      },
      {
        title: "After-Sales Support",
        desc: "We do not just sell equipment. We install, train your staff, and provide ongoing maintenance and technical support.",
      },
      {
        title: "Local Stock Availability",
        desc: "Critical supplies and consumables are held in our Harare warehouse for same-day or next-day delivery across Zimbabwe.",
      },
      {
        title: "Competitive Procurement",
        desc: "We source from a global network of manufacturers, passing bulk pricing and import efficiencies directly to our clients.",
      },
    ],
  },

  homeCta: {
    backgroundImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920",
    backgroundAlt:
      "Medical team preparing surgical equipment in an operating theatre",
    titleParts: [
      { text: "Ready to Equip Your " },
      { text: "Facility", highlight: true },
      { text: "?" },
    ],
    subtitle:
      "Whether you are setting up a new clinic, upgrading a hospital ward, or stocking a laboratory, we have the equipment, expertise, and support you need.",
    ctaPrimary: "Request a Quote",
    whatsappText:
      "Hello, I would like to enquire about medical equipment and supplies.",
  },

  homeTestimonials: [
    {
      name: "Dr. Tendai Mawire",
      role: "Medical Director, Private Hospital",
      text: "Intermed has been our sole medical equipment supplier for five years. Their product quality, installation support, and after-sales service are consistently exceptional.",
      rating: 5,
    },
    {
      name: "Nurse Chiedza Gumbo",
      role: "Matron, District Hospital",
      text: "When we needed to set up a new maternity ward quickly, Intermed delivered everything from beds to monitors within two weeks. The team even trained our nurses on the new equipment.",
      rating: 5,
    },
    {
      name: "Prof. Samuel Chikosha",
      role: "Head of Pathology, University",
      text: "The laboratory equipment Intermed supplied to our teaching hospital has transformed our diagnostic capabilities. Quality products backed by genuine technical support.",
      rating: 5,
    },
  ],

  // ====== ABOUT PAGE ======
  about: {
    heroTitle: [
      { text: "Partners in " },
      { text: "Healthcare", highlight: true },
      { text: " Delivery" },
    ],
    heroSubtitle:
      "For over a decade, Intermed Medical Supplies has been equipping Zimbabwe's healthcare facilities with world-class medical technology, from operating theatres to rural clinics.",
    storyImage:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800",
    storyImageAlt:
      "Medical professional using diagnostic equipment supplied by Intermed",
    storyProjectCount: "500+",
    storyProjectLabel: "Facilities Equipped",
    storyTitle: "A Decade of Healthcare Partnership",
    storyParagraphs: [
      "Intermed Medical Supplies was founded with a clear purpose: to bridge the gap between world-class medical technology and Zimbabwe's healthcare facilities. We saw that access to quality equipment was a critical barrier to better patient outcomes.",
      "Starting with surgical instruments and consumables, we rapidly expanded into diagnostics, laboratory equipment, hospital furniture, and PPE. Our growth has always been driven by the needs of the healthcare professionals we serve.",
      "Today, we are one of Zimbabwe's most comprehensive medical equipment suppliers, serving government hospitals, private clinics, laboratories, NGOs, and pharmacies. Every product we supply meets international quality standards because patient safety is non-negotiable.",
    ],
    mission:
      "To improve healthcare outcomes across Zimbabwe by providing medical professionals with reliable, high-quality equipment, comprehensive training, and ongoing technical support at accessible price points.",
    vision:
      "To be Southern Africa's most trusted medical equipment partner, known for product quality, technical excellence, and an unwavering commitment to improving healthcare delivery at every level.",
    values: [
      {
        iconName: "Heart",
        title: "Patient Safety",
        desc: "Every product decision we make is guided by one question: will this improve patient outcomes?",
      },
      {
        iconName: "ShieldCheck",
        title: "Quality Assurance",
        desc: "We only supply equipment that meets WHO, CE, FDA, or ISO certification standards. No exceptions.",
      },
      {
        iconName: "Trophy",
        title: "Excellence",
        desc: "From procurement to installation to after-sales, we pursue the highest standards at every touchpoint.",
      },
      {
        iconName: "Handshake",
        title: "Partnership",
        desc: "We are not vendors. We are partners. We work alongside healthcare facilities to understand and solve their challenges.",
      },
      {
        iconName: "Lightbulb",
        title: "Innovation",
        desc: "We continuously source emerging medical technologies that can improve diagnostics, treatment, and patient care.",
      },
      {
        iconName: "Users",
        title: "Accessibility",
        desc: "Quality healthcare equipment should reach every facility, from major hospitals to the most remote rural clinic.",
      },
    ],
    team: [
      {
        name: "Dr. Rumbidzai Macheka",
        role: "Managing Director",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      },
      {
        name: "Tinashe Chirwa",
        role: "Head of Procurement",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400",
      },
      {
        name: "Florence Moyo",
        role: "Technical Support Manager",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
      },
      {
        name: "Kudzai Banda",
        role: "Warehouse & Logistics Manager",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
      },
    ],
    milestones: [
      {
        year: "2015",
        title: "Company Founded",
        desc: "Intermed Medical Supplies established in Harare with a focus on surgical instruments and consumables.",
      },
      {
        year: "2017",
        title: "Diagnostics Division",
        desc: "Expanded into diagnostic equipment, becoming an authorized distributor for major imaging brands.",
      },
      {
        year: "2019",
        title: "100th Facility",
        desc: "Reached the milestone of supplying 100 healthcare facilities across Zimbabwe.",
      },
      {
        year: "2020",
        title: "COVID-19 Response",
        desc: "Rapidly scaled PPE and ventilator supply to support Zimbabwe's healthcare system during the pandemic.",
      },
      {
        year: "2022",
        title: "Laboratory Expansion",
        desc: "Launched comprehensive laboratory outfitting services, from equipment to reagents and consumables.",
      },
      {
        year: "2025",
        title: "500+ Facilities",
        desc: "Surpassed 500 healthcare facilities served, cementing our position as Zimbabwe's leading medical supplier.",
      },
    ],
    ctaTitle: "Let Us Equip Your Facility",
    ctaSubtitle:
      "Partner with us for reliable medical equipment supply, expert installation, and ongoing technical support.",
    ctaCta: "Start a Conversation",
  },

  // ====== SERVICES PAGE ======
  services: {
    heroTitle: [
      { text: "Comprehensive " },
      { text: "Medical", highlight: true },
      { text: " Supply Solutions" },
    ],
    heroSubtitle:
      "Six core product categories covering every medical equipment need. From surgical theatres to pharmacy dispensing, we supply, install, and support.",
    items: [
      {
        iconName: "FirstAid",
        title: "Surgical Equipment",
        slug: "surgical-equipment",
        image:
          "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=900",
        desc: "Complete surgical theatre outfitting from basic instrument sets to advanced electrosurgical units, operating tables, surgical lights, anaesthesia machines, and sterilization autoclaves.",
        features: [
          "Surgical instrument sets (general, ortho, ENT, dental)",
          "Operating tables and surgical lights",
          "Anaesthesia machines and ventilators",
          "Electrosurgical and cautery units",
          "Sterilization autoclaves and washers",
          "Suction machines and surgical consumables",
        ],
      },
      {
        iconName: "Eye",
        title: "Diagnostic Devices",
        slug: "diagnostic-devices",
        image:
          "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900",
        desc: "Advanced diagnostic equipment that enables accurate, timely patient assessment. From portable ultrasound to full digital X-ray systems, we supply technology that saves lives through early detection.",
        features: [
          "Ultrasound machines (portable and console)",
          "Digital X-ray and fluoroscopy systems",
          "ECG and patient monitoring systems",
          "Pulse oximeters and vital signs monitors",
          "Point-of-care testing devices",
          "Ophthalmoscopes and otoscopes",
        ],
      },
      {
        iconName: "Briefcase",
        title: "Laboratory Supplies",
        slug: "laboratory-supplies",
        image:
          "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900",
        desc: "Comprehensive laboratory outfitting from capital equipment to daily consumables. We supply everything needed to run a clinical, research, or reference laboratory at international standards.",
        features: [
          "Microscopes (light, fluorescence, digital)",
          "Centrifuges, incubators, and autoclaves",
          "Haematology and chemistry analysers",
          "Reagents, stains, and chemical supplies",
          "Sample collection and storage systems",
          "Laboratory safety and fume extraction",
        ],
      },
      {
        iconName: "Buildings",
        title: "Hospital Furniture",
        slug: "hospital-furniture",
        image:
          "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=900",
        desc: "Medical-grade furniture designed for durability, hygiene, and patient comfort. From ICU beds with full electric adjustment to ward cabinets and examination couches.",
        features: [
          "Hospital beds (manual, semi-electric, full electric)",
          "Patient trolleys and stretchers",
          "Bedside cabinets and overbed tables",
          "Examination couches and procedure chairs",
          "Waiting room and reception furniture",
          "Custom ward and clinic furniture solutions",
        ],
      },
      {
        iconName: "ShieldCheck",
        title: "PPE & Safety",
        slug: "ppe-safety",
        image:
          "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=900",
        desc: "Personal protective equipment and infection control supplies that protect healthcare workers and patients. Certified products meeting WHO and OSHA standards for medical environments.",
        features: [
          "Surgical and N95 respirator masks",
          "Examination and surgical gloves",
          "Isolation gowns and surgical drapes",
          "Face shields and protective eyewear",
          "Hand sanitizers and disinfectants",
          "Sharps containers and waste management",
        ],
      },
      {
        iconName: "Wrench",
        title: "Pharmaceutical Equipment",
        slug: "pharmaceutical-equipment",
        image:
          "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=900",
        desc: "Specialized equipment for pharmacies, dispensaries, and pharmaceutical operations. From cold chain storage to drug compounding systems and dispensing technology.",
        features: [
          "Pharmaceutical-grade refrigerators and freezers",
          "Cold chain monitoring systems",
          "Drug dispensing and counting machines",
          "Compounding hoods and cleanrooms",
          "Shelving and storage solutions",
          "Temperature and humidity monitoring",
        ],
      },
    ],
    ctaTitle: "Need Specialized Medical Equipment?",
    ctaSubtitle:
      "Every healthcare facility has unique needs. Contact us to discuss your requirements and we will source the right solution.",
  },

  // ====== PROJECTS PAGE ======
  projects: {
    heroTitle: [
      { text: "Facilities We Have " },
      { text: "Equipped", highlight: true },
    ],
    heroSubtitle:
      "From major hospital theatre upgrades to rural clinic outfitting, explore the healthcare facilities that trust Intermed for their medical equipment needs.",
    categories: [
      "All",
      "Surgical",
      "Laboratory",
      "Healthcare",
      "PPE Supply",
      "Pharmaceutical",
    ],
    items: [
      {
        id: 1,
        title: "Central Hospital Theatre Upgrade",
        category: "Surgical",
        location: "Harare",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
        desc: "Complete operating theatre refurbishment including two new surgical tables, LED surgical lights, anaesthesia machines, electrosurgical units, and a sterilization suite.",
        services: [
          "Surgical Equipment",
          "Hospital Furniture",
        ],
      },
      {
        id: 2,
        title: "Private Pathology Lab",
        category: "Laboratory",
        location: "Harare",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800",
        desc: "Full laboratory setup for a private pathology practice including haematology analyser, chemistry analyser, microscopes, centrifuge, and a complete reagent supply contract.",
        services: [
          "Laboratory Supplies",
          "Diagnostic Devices",
        ],
      },
      {
        id: 3,
        title: "Rural Clinic Outfitting",
        category: "Healthcare",
        location: "Masvingo Province",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800",
        desc: "Outfitting of 8 rural clinics with examination beds, vital signs monitors, basic surgical instruments, vaccine refrigerators, and PPE supplies for community healthcare workers.",
        services: [
          "Hospital Furniture",
          "Diagnostic Devices",
          "PPE & Safety",
        ],
      },
      {
        id: 4,
        title: "COVID-19 PPE Supply",
        category: "PPE Supply",
        location: "Nationwide",
        year: "2020",
        image:
          "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
        desc: "Emergency supply of N95 masks, surgical gowns, face shields, and hand sanitizer to 50+ healthcare facilities during the COVID-19 pandemic response.",
        services: [
          "PPE & Safety",
        ],
      },
      {
        id: 5,
        title: "Hospital Pharmacy Upgrade",
        category: "Pharmaceutical",
        location: "Bulawayo",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800",
        desc: "Comprehensive pharmacy upgrade including cold chain refrigeration, dispensing equipment, drug storage shelving, and temperature monitoring systems for a 200-bed hospital.",
        services: [
          "Pharmaceutical Equipment",
        ],
      },
      {
        id: 6,
        title: "Maternity Ward Setup",
        category: "Healthcare",
        location: "Chitungwiza",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800",
        desc: "New maternity ward outfitting with delivery beds, foetal monitors, infant warmers, resuscitation equipment, and associated consumables for a district hospital.",
        services: [
          "Hospital Furniture",
          "Diagnostic Devices",
          "Surgical Equipment",
        ],
      },
      {
        id: 7,
        title: "Dental Clinic Equipment",
        category: "Surgical",
        location: "Harare",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800",
        desc: "Complete dental practice setup with 3 dental chairs, X-ray unit, autoclave, surgical instrument sets, and an air compressor system for a new private dental clinic.",
        services: [
          "Surgical Equipment",
          "Diagnostic Devices",
        ],
      },
      {
        id: 8,
        title: "Veterinary Lab Supply",
        category: "Laboratory",
        location: "Harare",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800",
        desc: "Outfitting of a veterinary diagnostic laboratory with microscopes, haematology analyser adapted for animal samples, centrifuge, and biosafety cabinet.",
        services: [
          "Laboratory Supplies",
          "Diagnostic Devices",
        ],
      },
      {
        id: 9,
        title: "Mining Clinic First Aid",
        category: "Healthcare",
        location: "Kwekwe",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800",
        desc: "Supplied and equipped an on-site mining clinic with trauma equipment, patient monitoring, oxygen supply, defibrillator, and comprehensive first aid stations.",
        services: [
          "Surgical Equipment",
          "Diagnostic Devices",
          "Hospital Furniture",
        ],
      },
    ],
  },

  // ====== REVIEWS PAGE ======
  reviews: {
    heroTitle: [
      { text: "What Healthcare " },
      { text: "Professionals", highlight: true },
      { text: " Say" },
    ],
    heroSubtitle:
      "Real feedback from doctors, nurses, lab technicians, and hospital administrators who trust Intermed with their medical equipment needs.",
    ratingBreakdown: { 5: 22, 4: 5, 3: 1, 2: 0, 1: 0 },
    items: [
      {
        name: "Dr. Tendai Mawire",
        role: "Medical Director, Private Hospital",
        text: "Intermed has been our sole medical equipment supplier for five years. Their product quality, installation support, and after-sales service are consistently exceptional. They understand healthcare.",
        rating: 5,
        date: "1 month ago",
        project: "Hospital Supply",
      },
      {
        name: "Nurse Chiedza Gumbo",
        role: "Matron, District Hospital",
        text: "When we needed to set up a new maternity ward quickly, Intermed delivered everything from beds to monitors within two weeks. The team even trained our nurses on the new equipment. Outstanding.",
        rating: 5,
        date: "2 months ago",
        project: "Maternity Ward",
      },
      {
        name: "Prof. Samuel Chikosha",
        role: "Head of Pathology, University",
        text: "The laboratory equipment Intermed supplied to our teaching hospital has transformed our diagnostic capabilities. Quality products backed by genuine technical support and prompt reagent supply.",
        rating: 5,
        date: "3 months ago",
        project: "Teaching Lab",
      },
      {
        name: "Dr. Grace Nhamo",
        role: "Surgeon, Central Hospital",
        text: "The surgical instruments are excellent quality. Sharp, durable, and precisely manufactured. Intermed also maintains our autoclaves regularly, which is invaluable. A reliable supplier.",
        rating: 5,
        date: "4 months ago",
        project: "Surgical Suite",
      },
      {
        name: "Kudzai Mukarati",
        role: "Lab Manager",
        text: "Having a local supplier who stocks reagents and consumables means we never run out. Intermed understands lab timelines. A delay in reagents means patients waiting for results. They get it.",
        rating: 5,
        date: "4 months ago",
        project: "Lab Consumables",
      },
      {
        name: "Dr. Wellington Matare",
        role: "General Practitioner",
        text: "I set up my private practice entirely through Intermed. From the examination couch to the ECG machine, everything was sourced, delivered, and installed by their team. Seamless experience.",
        rating: 5,
        date: "5 months ago",
        project: "Practice Setup",
      },
      {
        name: "Sister Rutendo Moyo",
        role: "Infection Control Nurse",
        text: "The PPE quality from Intermed is consistent and certified. During COVID we relied on them heavily and they never let us down, even when supply chains globally were strained.",
        rating: 4,
        date: "6 months ago",
        project: "PPE Supply",
      },
      {
        name: "Pharmacist Tawanda Dube",
        role: "Hospital Pharmacist",
        text: "The cold chain refrigerators Intermed installed have been running perfectly for two years. The temperature monitoring system gives us peace of mind that our vaccines and drugs are safe.",
        rating: 5,
        date: "6 months ago",
        project: "Pharmacy Equipment",
      },
      {
        name: "Dr. Farai Chikowore",
        role: "Radiologist",
        text: "The digital X-ray system Intermed installed transformed our diagnostic capacity. Image quality is excellent and their technician trained our entire radiology team thoroughly. Very professional.",
        rating: 5,
        date: "7 months ago",
        project: "Radiology Upgrade",
      },
      {
        name: "Nyasha Chikosi",
        role: "NGO Health Program Manager",
        text: "We needed to equip 8 rural clinics across Masvingo on a tight budget. Intermed worked within our constraints, sourced cost-effective equipment, and delivered to every remote site. Impressive logistics.",
        rating: 4,
        date: "8 months ago",
        project: "Rural Clinics",
      },
      {
        name: "Dr. Memory Gandiwa",
        role: "Dentist",
        text: "My dental practice equipment came entirely from Intermed. The chairs, X-ray unit, autoclave, and instruments are all high quality. Their dental division really knows the specialty requirements.",
        rating: 5,
        date: "8 months ago",
        project: "Dental Practice",
      },
      {
        name: "Sister Martha Hove",
        role: "Theatre Sister",
        text: "The electrosurgical unit and new surgical lights they installed in our theatre have made a significant difference. The lighting quality alone improves visibility during complex procedures.",
        rating: 5,
        date: "9 months ago",
        project: "Theatre Upgrade",
      },
      {
        name: "Dr. Blessing Mudyiwa",
        role: "Paediatrician",
        text: "The neonatal equipment Intermed supplied, including the infant warmer and pulse oximeters, has directly improved outcomes in our nursery. They supplied training materials and on-site demonstrations.",
        rating: 5,
        date: "10 months ago",
        project: "Neonatal Equipment",
      },
      {
        name: "George Matuku",
        role: "Mining Company HSE Manager",
        text: "Our on-site clinic was equipped entirely by Intermed. Trauma equipment, defibrillator, oxygen supply, and first aid stations. Their team understood the mining environment and tailored the setup accordingly.",
        rating: 4,
        date: "10 months ago",
        project: "Mining Clinic",
      },
      {
        name: "Dr. Patricia Hungwe",
        role: "Hospital Administrator",
        text: "What sets Intermed apart is their procurement efficiency. They handle import documentation, customs clearance, and delivery logistics. For a hospital administrator, that simplicity is invaluable.",
        rating: 5,
        date: "11 months ago",
        project: "Equipment Procurement",
      },
      {
        name: "Tapiwa Makoni",
        role: "Veterinary Surgeon",
        text: "Intermed supplied our veterinary diagnostic lab with adapted equipment. They understood the unique requirements for animal samples and provided excellent technical guidance throughout.",
        rating: 4,
        date: "1 year ago",
        project: "Veterinary Lab",
      },
      {
        name: "Dr. James Chatora",
        role: "Ministry of Health Official",
        text: "Intermed has been a key partner in our district health equipment renewal programme. Their ability to deliver at scale, on time, and within budget has made them a preferred government supplier.",
        rating: 5,
        date: "1 year ago",
        project: "Government Programme",
      },
    ],
    ctaTitle: "Ready to Equip Your Practice?",
    ctaSubtitle:
      "Join hundreds of healthcare facilities that trust Intermed for their medical equipment. Contact us today to discuss your needs.",
    ctaCta: "Get Started Today",
    ctaWhatsappText:
      "Hello, I would like to enquire about medical equipment for our facility.",
  },

  // ====== CONTACT PAGE ======
  contact: {
    heroTitle: [
      { text: "Let's Equip " },
      { text: "Your Facility", highlight: true },
    ],
    heroSubtitle:
      "Have a medical equipment need? We would love to hear from you. Reach out via phone, email, WhatsApp, or fill in the form below for a free consultation.",
    formTitle: "Send Us a Message",
    formSubtitle:
      "Fill in the form and choose how you'd like to send it.",
  },

  // ====== CAREERS PAGE ======
  careers: {
    heroTitle: [
      { text: "Join the " },
      { text: "Healthcare", highlight: true },
      { text: " Mission" },
    ],
    heroSubtitle:
      "Be part of a team that makes a real difference in people's lives. We equip the doctors, nurses, and labs that keep Zimbabwe healthy.",
    heroImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1920",
    cultureTitle: "Why Work Here?",
    cultureItems: [
      {
        iconName: "Heart",
        title: "Meaningful Work",
        desc: "Every piece of equipment we supply directly impacts patient care and health outcomes.",
      },
      {
        iconName: "Rocket",
        title: "Growing Industry",
        desc: "Healthcare is expanding across Zimbabwe. Be part of the team building its infrastructure.",
      },
      {
        iconName: "Users",
        title: "Expert Team",
        desc: "Work alongside biomedical engineers, procurement specialists, and healthcare professionals.",
      },
    ],
    cultureImage:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=1400",
    cultureImageAlt:
      "Medical equipment warehouse with team preparing shipments",
    cultureTagline: "More Than a Job. A Mission.",
    cultureTaglineDesc:
      "Every day, our team works to ensure healthcare facilities have the equipment they need to save lives. We do not just sell products, we empower healthcare.",
    benefits: [
      {
        iconName: "CurrencyDollar",
        title: "Competitive Salary",
        desc: "Market-leading compensation with annual reviews and performance bonuses.",
      },
      {
        iconName: "FirstAid",
        title: "Health Coverage",
        desc: "Comprehensive medical aid for you and your family, as you would expect from a medical company.",
      },
      {
        iconName: "GraduationCap",
        title: "Technical Training",
        desc: "Manufacturer-certified training on medical equipment, biomedical engineering, and product specialization.",
      },
      {
        iconName: "Car",
        title: "Transport Allowance",
        desc: "Monthly transport allowance for field staff, with company vehicles for senior technical roles.",
      },
      {
        iconName: "Heart",
        title: "Work-Life Balance",
        desc: "Generous leave policies and a supportive work environment that values your wellbeing.",
      },
      {
        iconName: "ShieldCheck",
        title: "Safety Training",
        desc: "Regular health and safety training, including radiation safety for diagnostic equipment handlers.",
      },
    ],
    positions: [
      {
        id: 1,
        title: "Biomedical Engineer",
        department: "Technical",
        type: "Full-Time",
        location: "Harare",
        description:
          "We are seeking a biomedical engineer to install, maintain, and repair medical equipment across our client facilities. You will be the technical backbone of our after-sales support.",
        requirements: [
          "Degree in Biomedical Engineering or related field",
          "3+ years of medical equipment maintenance experience",
          "Knowledge of imaging, surgical, and diagnostic equipment",
          "Strong troubleshooting and problem-solving skills",
          "Valid driver's license",
        ],
      },
      {
        id: 2,
        title: "Medical Sales Representative",
        department: "Sales",
        type: "Full-Time",
        location: "Harare",
        description:
          "Drive medical equipment sales by building relationships with hospitals, clinics, laboratories, and healthcare NGOs. You will conduct product demonstrations and close procurement deals.",
        requirements: [
          "Degree in Health Sciences, Biomedical Engineering, or Business",
          "2+ years of medical or pharmaceutical sales experience",
          "Strong knowledge of healthcare procurement processes",
          "Excellent presentation and relationship-building skills",
          "Willingness to travel across Zimbabwe",
        ],
      },
      {
        id: 3,
        title: "Procurement & Logistics Officer",
        department: "Operations",
        type: "Full-Time",
        location: "Harare",
        description:
          "Manage international procurement, import documentation, customs clearance, and warehouse inventory for our medical equipment and consumables supply chain.",
        requirements: [
          "Degree in Supply Chain, Logistics, or Business Administration",
          "3+ years of procurement or import/export experience",
          "Knowledge of ZIMRA customs procedures",
          "Experience with medical or pharmaceutical products preferred",
          "Strong organizational and documentation skills",
        ],
      },
      {
        id: 4,
        title: "Laboratory Products Specialist",
        department: "Technical Sales",
        type: "Full-Time",
        location: "Harare",
        description:
          "Specialist role focused on laboratory equipment and reagent sales. You will work with pathologists, lab managers, and researchers to specify and supply the right solutions.",
        requirements: [
          "Degree in Medical Laboratory Sciences or related field",
          "2+ years of laboratory experience",
          "Knowledge of haematology, chemistry, and microbiology equipment",
          "Ability to conduct technical product demonstrations",
          "Strong communication and consultative selling skills",
        ],
      },
    ],
    generalApplicationTitle: "Don't See the Right Role?",
    generalApplicationSubtitle:
      "We are always looking for passionate people who want to make a difference in healthcare. Send us your CV and we will be in touch.",
    generalApplicationCta: "Send Your CV",
  },

  // ====== FOOTER ======
  footer: {
    description:
      "Equipping healthcare excellence across Zimbabwe since 2015. Trusted by hospitals, clinics, and laboratories for world-class medical equipment and support.",
    copyright: "Intermed Medical Supplies (Pvt) Ltd",
  },
};

export default siteData;
