export interface Service {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  deliverables: string[];
  turnaround: string;
  isComingSoon?: boolean;
  previewImage: string;
  realWorkSample: {
    title: string;
    client: string;
    year: string;
    highlight: string;
  };
}

export const servicesData: Service[] = [
  {
    id: 'graphic-design',
    number: '01',
    title: 'Graphic Design',
    category: 'Creative Design',
    shortDesc: 'Logos, branding, flyers, banners and creative visual communication.',
    fullDesc: 'We craft bespoke visual assets that capture attention and articulate your brand message with absolute clarity. From high-impact promotional collateral to holistic visual identity systems, every layout is mathematically balanced and art-directed for maximum resonance.',
    features: ['High-contrast visual hierarchy', 'Custom vector assets & layouts', 'Print & digital format readiness', 'Editorial typography systems'],
    deliverables: ['Vector source files (AI, EPS, SVG)', 'High-resolution print-ready PDFs', 'Optimized web and social assets'],
    turnaround: '2–4 Business Days',
    previewImage: '/images/tech_gadgets.jpg',
    realWorkSample: {
      title: 'Sonicus Audio Promotional Rollout',
      client: 'Sonicus Audio & Tech',
      year: '2024',
      highlight: 'Full-bleed high-contrast retail poster suite and multi-tier advertising graphics.'
    }
  },
  {
    id: 'logo-design',
    number: '02',
    title: 'Logo Design',
    category: 'Branding',
    shortDesc: 'Distinctive brand marks, concepts, refinement and complete brand assets.',
    fullDesc: 'A mark that cuts through noise. We build memorable, timeless logo identities rooted in conceptual research, structural balance, and distinctive geometry that scales effortlessly from tiny app icons to massive building facades.',
    features: ['Multi-concept exploration rounds', 'Monochrome & responsive adaptability', 'Grid construction & optical balancing', 'Comprehensive style guides'],
    deliverables: ['Primary & secondary logo lockups', 'Favicon & social profile marks', 'Vector files and brand typography guide'],
    turnaround: '3–5 Business Days',
    previewImage: '/images/culinary_brand.jpg',
    realWorkSample: {
      title: 'Nurvus Bistro & Hearth Brand Identity',
      client: 'Nurvus Hospitality',
      year: '2024',
      highlight: 'Stamped debossed brandmark, custom monogram insignia, and architectural stationery.'
    }
  },
  {
    id: 'flyer-poster-design',
    number: '03',
    title: 'Flyer & Poster Design',
    category: 'Print & Digital',
    shortDesc: 'Promotional visuals for events, businesses, campaigns and announcements.',
    fullDesc: 'Whether launching an international conference, announcing retail sales, or promoting club events, our posters and flyers command attention instantly through bold typography, kinetic layout rhythm, and captivating compositions.',
    features: ['Campaign-specific art direction', 'Print bleed & color separation specs', 'Social media companion formats (Story, Post)', 'Direct call-to-action layout'],
    deliverables: ['High-res CMYK print files (300 DPI)', 'RGB digital promotional cutouts', 'Editable source files'],
    turnaround: '1–2 Business Days',
    previewImage: '/images/healthcare_flyer.jpg',
    realWorkSample: {
      title: 'Next-Gen Sound Campaign Flyers',
      client: 'Sonicus Retail Stores',
      year: '2024',
      highlight: 'A4 double-sided high-gloss event flyers and synchronized Instagram story cards.'
    }
  },
  {
    id: 'crypto-fintech-creatives',
    number: '04',
    title: 'Crypto & Fintech Creatives',
    category: 'Digital Innovation',
    shortDesc: 'Specialised creative solutions for crypto platforms, exchanges and fintech brands.',
    fullDesc: 'Tailored specifically for Web3 ecosystems, cryptocurrency exchanges, and fintech applications. We blend futuristic precision with institutional trust to create UI banners, token launch assets, infographics, and investor pitch deck visuals.',
    features: ['Data-dense visual hierarchy', 'Cryptographic & tech aesthetic', 'Complex flow infographics', 'Investor deck styling'],
    deliverables: ['Vector illustrations & UI graphic components', 'Digital marketing kits', 'Slide decks in Keynote/Figma'],
    turnaround: '3–6 Business Days',
    previewImage: '/images/hero_slate.jpg',
    realWorkSample: {
      title: 'Apex Web3 Protocol Launch Visuals',
      client: 'Apex Capital & Liquidity Network',
      year: '2024',
      highlight: 'Tokenomics visual architecture, mathematical diagrams, and key executive pitch decks.'
    }
  },
  {
    id: 't-shirt-printing',
    number: '05',
    title: 'T-Shirt Printing',
    category: 'Apparel & Print',
    shortDesc: 'Custom DTF, sublimation and vinyl printing.',
    fullDesc: 'Premium apparel printing utilizing cutting-edge Direct-to-Film (DTF), dye-sublimation, and precision vinyl transfer technologies. Vibrant color saturation, wash durability, and tactile softness on luxury cotton and performance fabrics.',
    features: ['Direct-to-Film (DTF) precision', 'Full sublimation for all-over prints', 'Heat-press vinyl lettering & flocking', 'Heavyweight cotton blank sourcing'],
    deliverables: ['Finished wearable apparel', 'Sample test swatches', 'Volume delivery with custom folding/packaging'],
    turnaround: '3–7 Business Days',
    previewImage: '/images/luxury_packaging.jpg',
    realWorkSample: {
      title: 'J-Nails Staff Uniforms & Merchandise',
      client: 'J-Nails Studio Group',
      year: '2024',
      highlight: 'Heavyweight black cotton tees with vibrant vermilion DTF front chest & back print.'
    }
  },
  {
    id: 'web-development',
    number: '06',
    title: 'Web Development',
    category: 'Digital Experiences',
    shortDesc: 'Modern, responsive and functional digital experiences.',
    fullDesc: 'High-performance websites and bespoke digital platforms engineered with modern frontend stacks, seamless micro-animations, and responsive architectural discipline. Fast, accessible, and designed to convert visitors into loyal clients.',
    features: ['Fluid responsive mobile layouts', 'Smooth scroll & interactive motion', 'Search engine optimization & rich schema', 'Fast CDN hosting integration'],
    deliverables: ['Production-ready web application', 'Complete source repository', 'CMS integration / deployment walkthrough'],
    turnaround: '1–3 Weeks',
    previewImage: '/images/hero_slate.jpg',
    realWorkSample: {
      title: 'Bullet Design Concept Web Experience',
      client: 'Bullet Design Concept Limited',
      year: '2024',
      highlight: 'Award-grade editorial portfolio with fluid Motion animation and responsive micro-interactions.'
    }
  },
  {
    id: 'document-printing',
    number: '07',
    title: 'Document Printing',
    category: 'Corporate Services',
    shortDesc: 'Professional document, report and presentation printing.',
    fullDesc: 'Crisp, high-definition printing for corporate proposals, financial reports, architectural manuals, and academic dissertations with superior paper stocks, wire binding, thermal glue binding, and embossed covers.',
    features: ['80gsm to 300gsm paper stocks', 'Spiral, comb, wire, and hardback binding', 'Matte and gloss lamination', 'Confidential handling'],
    deliverables: ['Bound hardcopy booklets', 'Archival quality prints', 'Bulk packaging and delivery'],
    turnaround: 'Same-day to 48 Hours',
    previewImage: '/images/healthcare_flyer.jpg',
    realWorkSample: {
      title: 'Pinnacle Trust Holding Annual Investor Folios',
      client: 'Pinnacle Trust Holding',
      year: '2024',
      highlight: 'Hardcover thermal-bound dossiers with matte lamination and silver foil debossing.'
    }
  },
  {
    id: 'nin-services',
    number: '08',
    title: 'NIN Services',
    category: 'Identification Services',
    shortDesc: 'NIN generation and reprint assistance.',
    fullDesc: 'Certified national identity processing and documentation assistance. We provide swift, secure verification, card reprints, biometric record updates, and plastic PVC card laminations following official compliance guidelines.',
    features: ['Swift verification protocol', 'Durable PVC card fabrication', 'Secure data confidentiality', 'Standard compliance'],
    deliverables: ['Plastic NIN identification card', 'Validated verification slip', 'Digital laminated PDF backup'],
    turnaround: 'Same Day',
    previewImage: '/images/hero_slate.jpg',
    realWorkSample: {
      title: 'Institutional Corporate Identification Rollout',
      client: 'Civic & Corporate Clients',
      year: '2024',
      highlight: 'High-durability plastic PVC card printing with encrypted QR authentication codes.'
    }
  },
  {
    id: 'large-format-printing',
    number: '09',
    title: 'Large Format Printing',
    category: 'Outdoor & Advertising',
    shortDesc: 'Flex banners, SAV prints and large-format materials.',
    fullDesc: 'Industrial-grade billboard prints, trade show backdrops, roll-up banners, and self-adhesive vinyl (SAV) wraps. Weather-resistant UV inks withstand sunlight and rain without fading.',
    features: ['Heavyweight flex banner materials', 'High-res solvent and UV curing inks', 'Eyelet grommets & reinforced hems', 'Window graphics & vehicle wraps'],
    deliverables: ['Roll-up banner stands with canvas carry bag', 'Custom dimension outdoor flex banners', 'Direct surface installation service'],
    turnaround: '2–4 Business Days',
    previewImage: '/images/tech_gadgets.jpg',
    realWorkSample: {
      title: 'Suya Central Storefront Exterior Flex Wraps',
      client: 'Suya Central Express Franchise',
      year: '2024',
      highlight: 'High-durability 440gsm flex vinyl with reinforced hems and anti-fade outdoor UV inks.'
    }
  },
  {
    id: 'customization',
    number: '10',
    title: 'Customization',
    category: 'Branded Merchandise',
    shortDesc: 'Custom apparel, caps and promotional products.',
    fullDesc: 'Bespoke corporate gifting and consumer merchandise. From laser-engraved steel thermoses and embroidered dad hats to customized stationery and tote bags, every piece radiates brand prestige.',
    features: ['3D puff embroidery', 'Laser engraving & UV direct printing', 'Custom woven neck labels & hangtags', 'Corporate swag bundles'],
    deliverables: ['Packaged custom merchandise units', 'Branded packaging & sealing', 'Quality assurance verification report'],
    turnaround: '5–10 Business Days',
    previewImage: '/images/luxury_packaging.jpg',
    realWorkSample: {
      title: 'Velvet Noir Luxury Rigid Packaging & Swag',
      client: 'Velvet Noir Cosmetics',
      year: '2024',
      highlight: 'Laser-cut unboxing drawer boxes, custom metal-accent caps, and gold-foiled bags.'
    }
  },
  {
    id: 'general-contract-services',
    number: '11',
    title: 'General Contract Services',
    category: 'Procurement & Logistics',
    shortDesc: 'Professional contract and documentation services.',
    fullDesc: 'Comprehensive procurement, institutional supply, corporate stationery management, and commercial printing logistics executed with strict adherence to contractual SLAs and timelines.',
    features: ['Institutional corporate procurement', 'Formal invoicing and audit trails', 'Vetted supply chain network', 'Dedicated account supervisor'],
    deliverables: ['Contract fulfillment documentation', 'Itemized delivery receipts', 'Ongoing retainer logistics'],
    turnaround: 'Custom per contract',
    previewImage: '/images/healthcare_flyer.jpg',
    realWorkSample: {
      title: 'Multi-Branch Corporate Stationery Supply',
      client: 'Zenith Commercial Banking Group',
      year: '2023',
      highlight: 'Standardized monthly fulfillment across 12 branch locations with strict audit oversight.'
    }
  },
  {
    id: 'internet-services',
    number: '12',
    title: 'Internet Services',
    category: 'Connectivity',
    shortDesc: 'Internet connectivity solutions.',
    fullDesc: 'High-speed business data connectivity, broadband setup, and secure localized networking solutions for retail stores, creative studios, and commercial offices.',
    features: ['Dedicated broadband access', 'Wi-Fi mesh configuration', 'Network firewall & security tuning', 'Zero-downtime maintenance support'],
    deliverables: ['Active configured router/modem hardware', 'Network topology credential kit', 'Monitoring & on-call support'],
    turnaround: '24–48 Hours',
    previewImage: '/images/hero_slate.jpg',
    realWorkSample: {
      title: 'Creative Studio High-Bandwidth Wi-Fi Mesh',
      client: 'Aura Lens Media Studios',
      year: '2024',
      highlight: 'Dual-band gigabit distribution for instantaneous 4K media streaming and client uploads.'
    }
  },
  {
    id: 'picture-frame-printing',
    number: '13',
    title: 'Picture Frame Printing',
    category: 'Fine Art & Decor',
    shortDesc: 'Custom picture-frame printing.',
    fullDesc: 'Museum-grade giclée photo printing framed in premium hardwood, brushed metallic profiles, and float glass enclosures. Perfect for family heirlooms, executive boardrooms, and art galleries.',
    features: ['Archival cotton rag photo paper', 'Non-reflective UV filtering glass', 'Precision miter-joined wooden moldings', 'Pre-installed brass hanging hardware'],
    deliverables: ['Handcrafted framed display piece', 'Protective bubble wrap & corner guards', 'Installation guidance kit'],
    turnaround: '3–5 Business Days',
    previewImage: '/images/culinary_brand.jpg',
    realWorkSample: {
      title: 'Executive Boardroom Fine Art Installations',
      client: 'Nexus Corporate Headquarters',
      year: '2024',
      highlight: 'Brushed bronze aluminum gallery frames housing 300gsm archival cotton rag monochrome prints.'
    }
  },
  {
    id: 'signage',
    number: '14',
    title: 'Signage',
    category: 'Architectural & 3D',
    shortDesc: 'LED signage, illuminated signs and corporate branding.',
    fullDesc: 'High-impact 3D channel letters, back-lit acrylic signs, edge-lit neon displays, and monolithic outdoor totem signs that announce your physical location with undeniable authority day and night.',
    features: ['Weatherproof IP67 LED modules', 'Precision CNC and laser-cut acrylic', 'Low-voltage energy-efficient transformers', 'On-site structural mounting'],
    deliverables: ['Fully wired 3D illuminated sign unit', 'Mounting template & anchors', 'Full electrical testing certification'],
    turnaround: '7–14 Business Days',
    previewImage: '/images/neon_signage.jpg',
    realWorkSample: {
      title: 'Nexus Technologies Exterior Facade Signage',
      client: 'Nexus Technologies Group',
      year: '2024',
      highlight: 'Warm champagne gold laser-cut 3D letters with concealed warm LED backlighting.'
    }
  },
  {
    id: 'computer-training',
    number: '15',
    title: 'Computer Training',
    category: 'Education & Training',
    shortDesc: 'Computer education and training.',
    fullDesc: 'Practical hands-on training programs in graphic design software (Photoshop, Illustrator, CorelDraw), desktop publishing, digital workstation literacy, and creative workflow fundamentals.',
    features: ['1-on-1 and small cohort labs', 'Real-world studio brief exercises', 'Software proficiency certifications', 'Mentorship from senior designers'],
    deliverables: ['Course syllabus & project portfolio', 'Certificate of Completion', 'Alumni community access'],
    turnaround: 'Enrollment Sessions',
    isComingSoon: true,
    previewImage: '/images/tech_gadgets.jpg',
    realWorkSample: {
      title: 'Creative Design & Digital Literacy Masterclass',
      client: 'Bullet Design Academy Cohort',
      year: 'Upcoming 2025',
      highlight: 'Comprehensive hands-on workstation training using commercial production tools and briefs.'
    }
  },
  {
    id: 'dj-services',
    number: '16',
    title: 'DJ Services',
    category: 'Entertainment',
    shortDesc: 'Entertainment and DJ booking services.',
    fullDesc: 'Top-tier sound engineering and DJ entertainment services curated for corporate galas, brand activation parties, product launches, and private events with pristine sound hardware.',
    features: ['Curated multi-genre live sets', 'Pro audio sound rigs & wireless mics', 'Mood-responsive musical curation', 'Seamless timing coordination'],
    deliverables: ['Live performance booking', 'Sound check & equipment transport', 'Event recording mixdown (optional)'],
    turnaround: 'Advance Booking',
    isComingSoon: true,
    previewImage: '/images/circular_neon.jpg',
    realWorkSample: {
      title: 'Corporate Brand Gala & Activation Mixes',
      client: 'Entertainment & Brand Partners',
      year: 'Upcoming 2025',
      highlight: 'Custom acoustic mapping, wireless line-array sound systems, and high-energy live performance.'
    }
  }
];
