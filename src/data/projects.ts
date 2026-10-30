export interface Project {
  id: string;
  title: string;
  category: 'Graphic Design' | 'Branding' | 'Printing' | 'Signage' | 'Web Development' | 'Customization';
  year: string;
  image: string;
  accentColor: string;
  client: string;
  overview: string;
  creativeDirection: string;
  deliverables: string[];
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: 'gadgets-store-promotion',
    title: 'Gadgets Store Promotion',
    category: 'Graphic Design',
    year: '2024',
    image: '/images/tech_gadgets.jpg',
    accentColor: '#FF7138',
    client: 'Sonicus Audio & Tech',
    overview: 'High-energy retail campaign and digital display system for a premium consumer technology store launching next-generation audio hardware.',
    creativeDirection: 'Futuristic geometric angles paired with electric blue illumination and bold vermilion action typography to convey sonic velocity and acoustic purity.',
    deliverables: ['In-store backlit posters', 'Digital display screen graphics', 'Social media countdown cards', 'Promotional product flyers'],
    featured: true
  },
  {
    id: 'tech-store-advertising',
    title: 'Tech Store Advertising Poster',
    category: 'Graphic Design',
    year: '2024',
    image: '/images/vertical_tech_poster.jpg',
    accentColor: '#FF7138',
    client: 'TechWave Electronics',
    overview: 'High-impact vertical promotional poster showcasing smart wearables, wireless ANC headphones, and seasonal upgrade discounts.',
    creativeDirection: 'Vertical geometric layout on dark carbon slate with electric blue circuit accents and vibrant vermilion focal typography.',
    deliverables: ['Vertical A1 showroom posters', 'Digital kiosk display graphics', 'Social media vertical story cutouts'],
    featured: true
  },
  {
    id: 'restaurant-logo-design',
    title: 'Restaurant Logo Design & Identity',
    category: 'Branding',
    year: '2024',
    image: '/images/culinary_brand.jpg',
    accentColor: '#FF7138',
    client: 'Nurvus Bistro & Hearth',
    overview: 'A complete culinary brand identity including custom typography, embossed menu collateral, and artisanal tabletop aesthetics for a high-end restaurant.',
    creativeDirection: 'Warm organic tones, blind debossing on raw kraft cardstock, and structured serif titling reflecting wood-fired culinary heritage.',
    deliverables: ['Primary brandmark & monogram stamp', 'Embossed leather drink & dinner menus', 'Embroidered linen napkins', 'Staff uniform brass pins'],
    featured: true
  },
  {
    id: 'branded-shopping-bag',
    title: 'Branded Shopping Bag & Packaging',
    category: 'Printing',
    year: '2024',
    image: '/images/luxury_packaging.jpg',
    accentColor: '#D5AC57',
    client: 'Aurélia Luxury Goods',
    overview: 'Luxury retail carrier bags and rigid unboxing boxes produced with 250gsm matte laminated kraft paper, metallic gold hot-stamping, and woven grosgrain handles.',
    creativeDirection: 'Subtle elegance through tactile paper textures, champagne gold foil stamping, and minimal typography.',
    deliverables: ['Custom die-cut shopping bags (3 sizes)', 'Interior matching tissue wrap', 'Embossed seal stickers'],
    featured: true
  },
  {
    id: 'corporate-building-sign',
    title: 'Corporate Building Facade Sign',
    category: 'Signage',
    year: '2024',
    image: '/images/facade_signage_wide.jpg',
    accentColor: '#2465B5',
    client: 'Aurora Innovations Tower',
    overview: 'Towering exterior 3D architectural signage with halo-lit illumination installed across the glass and textured concrete exterior facade.',
    creativeDirection: 'Monolithic corporate presence built to endure extreme weather, engineered with structural wind-load steel backing and clean nocturnal illumination.',
    deliverables: ['Engineered aluminum letter channels', 'IP68 waterproof power converters', 'Crane installation & certification'],
    featured: true
  },
  {
    id: 'crypto-fintech-creatives',
    title: 'Crypto & Fintech Creatives',
    category: 'Graphic Design',
    year: '2024',
    image: '/images/hero_slate.jpg',
    accentColor: '#2465B5',
    client: 'Apex Capital & Web3 Protocols',
    overview: 'Specialized design system and visual marketing assets for decentralized finance exchanges, cross-border remittance, and liquidity providers.',
    creativeDirection: 'Precision lines, mathematical grid overlays, and cobalt blue nodes conveying security, liquidity depth, and algorithmic transparency.',
    deliverables: ['Protocol launch banners', 'Tokenomics infographic suite', 'Product walkthrough carousel decks', 'Investor pitch presentation deck'],
    featured: true
  },
  {
    id: 'led-illuminated-sign',
    title: 'LED Illuminated Sign',
    category: 'Signage',
    year: '2024',
    image: '/images/neon_signage.jpg',
    accentColor: '#D5AC57',
    client: 'Nexus Technologies',
    overview: 'Bespoke 3D dimensional lettering with warm LED halo illumination engineered for the architectural facade of corporate headquarters.',
    creativeDirection: 'Warm champagne gold metal surfaces against dark architectural concrete, delivering refined nocturnal visibility without harsh glare.',
    deliverables: ['Custom laser-cut bronze-finished letters', 'Internal IP67 weatherproof LED modules', 'Mounting structural blueprint', 'On-site installation execution'],
    featured: true
  },
  {
    id: 'healthcare-marketing-flyer',
    title: 'Healthcare Marketing Flyer',
    category: 'Graphic Design',
    year: '2024',
    image: '/images/healthcare_flyer.jpg',
    accentColor: '#2465B5',
    client: 'Aurora Wellness Clinic',
    overview: 'Informational outreach flyer and clinic banner system designed to educate patients on preventive wellness examinations and telemedicine services.',
    creativeDirection: 'Calm medical cerulean blue with spacious typographic measure, crisp infographics, and clear call-to-action touchpoints.',
    deliverables: ['Tri-fold clinical brochures', 'Consultation room posters', 'WhatsApp digital announcement flyer'],
    featured: false
  },
  {
    id: 'food-menu-design',
    title: 'Food Menu Design & Poster',
    category: 'Printing',
    year: '2024',
    image: '/images/vertical_culinary_poster.jpg',
    accentColor: '#D5AC57',
    client: 'The Fireside Bistro',
    overview: 'Handcrafted dinner menu posters and table books with water-resistant lamination, leather spine binding, and modular clip-in inserts for seasonal rotation.',
    creativeDirection: 'Vertical editorial layout with generous margins, refined serif typography, and rich culinary imagery.',
    deliverables: ['Hardcover laminated menu folios', 'Interchangeable daily specials sheets', 'Laminated cocktail mini-cards'],
    featured: false
  },
  {
    id: 'restaurant-brand-flyer',
    title: 'Restaurant Brand Flyer',
    category: 'Graphic Design',
    year: '2024',
    image: '/images/culinary_brand.jpg',
    accentColor: '#FF7138',
    client: 'The Smoked Oak Grill',
    overview: 'Gourmet weekend brunch and live barbecue event flyer designed to drive weekend reservations and VIP table bookings.',
    creativeDirection: 'Rich amber embers, dramatic dark photography framing, and hand-finished display type.',
    deliverables: ['A5 double-sided printed flyers', 'Digital reservation flyers', 'Tabletop QR menu displays'],
    featured: false
  },
  {
    id: 'premium-packaging-design',
    title: 'Premium Packaging Design',
    category: 'Customization',
    year: '2024',
    image: '/images/luxury_packaging.jpg',
    accentColor: '#FF7138',
    client: 'Velvet Noir Cosmetics',
    overview: 'Rigid unboxing packaging, custom drawer box structure, and product sleeve design for an artisanal perfume and skincare launch.',
    creativeDirection: 'Dark velvet-touch matte finish with sharp geometric die-cuts and interior metallic foil lining.',
    deliverables: ['Rigid box dieline engineering', 'Bottle label typography', 'Batch packaging production run'],
    featured: false
  },
  {
    id: 'circular-neon-signs',
    title: 'Circular Neon Signs',
    category: 'Signage',
    year: '2024',
    image: '/images/circular_neon.jpg',
    accentColor: '#FF7138',
    client: 'The Echo Boutique Lounge',
    overview: 'Dual-ring neon sign featuring warm orange and electric blue silicone LED neon tubing mounted on smoke acrylic backing for a boutique nightlife venue.',
    creativeDirection: 'Retro-futuristic glow with seamless dimmer controls to adjust ambiance between daytime and nightlife hours.',
    deliverables: ['Custom CNC-routed circular backplate', 'Dual-color LED flex neon circuitry', 'Wireless RF dimmer remote'],
    featured: true
  },
  {
    id: 'education-admission-flyer',
    title: 'Education Admission Flyer',
    category: 'Graphic Design',
    year: '2024',
    image: '/images/healthcare_flyer.jpg',
    accentColor: '#2465B5',
    client: 'Crown Heights International Academy',
    overview: 'Academic recruitment flyer and campus prospectus highlighting STEM curriculum, extracurricular excellence, and scholarship criteria.',
    creativeDirection: 'Inspiring collegiate styling with deep royal blue accents, geometric frame crops, and organized admission timelines.',
    deliverables: ['Direct-mail admissions flyer', 'Banner for parent orientation day', 'Social media enrollment campaign'],
    featured: false
  },
  {
    id: 'corporate-brand-signs',
    title: 'Corporate Brand Signs',
    category: 'Signage',
    year: '2023',
    image: '/images/neon_signage.jpg',
    accentColor: '#D5AC57',
    client: 'Zenith Legal Partners',
    overview: 'Brushed gold stainless-steel reception plaque with precision laser-etched legal heraldry and hidden standoff mounts.',
    creativeDirection: 'Dignified corporate authority through metallic reflection, tight spacing, and architectural alignment.',
    deliverables: ['Brushed brass steel plaque', 'Solid brass standoff wall anchors', 'Protective anti-tarnish coating'],
    featured: false
  },
  {
    id: 'beauty-salon-flyer',
    title: 'Beauty Salon Flyer',
    category: 'Graphic Design',
    year: '2024',
    image: '/images/beauty_flyer.jpg',
    accentColor: '#FF7138',
    client: 'Aurélia Beauty & Wellness',
    overview: 'Promotional grand opening flyer and service pricing card for an upscale skincare and aesthetic studio in Victoria Island.',
    creativeDirection: 'Minimalist editorial composition with champagne accents, delicate serif accents, and spacious price listings.',
    deliverables: ['Soft-touch velvet laminated flyers', 'Social media launch bundle', 'Loyalty discount card inserts'],
    featured: false
  },
  {
    id: 'makeup-masterclass-flyer',
    title: 'Makeup Masterclass Poster',
    category: 'Graphic Design',
    year: '2024',
    image: '/images/vertical_beauty_poster.jpg',
    accentColor: '#FF7138',
    client: 'The Lumina Salon & Academy',
    overview: 'High-impact vertical ticket reservation flyer for a celebrity makeup artist masterclass and certification workshop.',
    creativeDirection: 'Vertical 3:4 poster layout with champagne gold typography, high-fashion portrait framing, and clear event schedules.',
    deliverables: ['Event posters with serial verification', 'Digital promotional banner suite', 'Printed stage backdrop banner'],
    featured: false
  },
  {
    id: 'perfume-brand-flyer',
    title: 'Perfume Brand Flyer',
    category: 'Graphic Design',
    year: '2024',
    image: '/images/luxury_packaging.jpg',
    accentColor: '#D5AC57',
    client: 'Sillage Olfactory Studio',
    overview: 'Luxury fragrance tasting announcement flyer designed as an editorial fragrance discovery card with scent profile diagrams.',
    creativeDirection: 'High-contrast monochrome background with subtle gold typography and structured olfactory pyramid graphics.',
    deliverables: ['Archival cardstock printed cards', 'Digital story invitations', 'VIP press kit envelope inserts'],
    featured: false
  },
  {
    id: 'photography-studio-flyer',
    title: 'Photography Studio Flyer',
    category: 'Graphic Design',
    year: '2024',
    image: '/images/beauty_flyer.jpg',
    accentColor: '#2465B5',
    client: 'Aura Lens Studios',
    overview: 'Seasonal portrait session rates and booking flyer crafted for a boutique photography studio specializing in portraits and fashion.',
    creativeDirection: 'Clean framing that lets photographic tones shine, backed by deep navy blue structural borders.',
    deliverables: ['Studio rate sheet PDF & print cards', 'Social media booking announcement', 'Client welcome deck'],
    featured: false
  },
  {
    id: 'j-nails-branding',
    title: 'J-Nails Luxury Branding',
    category: 'Branding',
    year: '2024',
    image: '/images/facade_signage_wide.jpg',
    accentColor: '#FF7138',
    client: 'J-Nails Studio Group',
    overview: 'Complete visual identity revamp, salon service menu books, staff apparel prints, and storefront signage for a luxury nail salon.',
    creativeDirection: 'Sleek modern beauty aesthetic combining crisp linear monogram branding with vibrant lifestyle accents.',
    deliverables: ['Primary logo suite & monogram', 'Acrylic storefront illuminated sign', 'Embroidered staff aprons', 'Full price menu flyers'],
    featured: true
  },
  {
    id: 'bakery-and-restaurant-designs',
    title: 'Bakery & Restaurant Designs',
    category: 'Branding',
    year: '2023',
    image: '/images/culinary_brand.jpg',
    accentColor: '#FF7138',
    client: 'Crust & Crumb Artisans',
    overview: 'Comprehensive brand identity, window vinyl decals, pastry packaging boxes, and loyalty punch cards for an artisan bakery.',
    creativeDirection: 'Warm wheat gold and roasted terracotta colors, organic badge illustration, and tactile packaging craft.',
    deliverables: ['Logo family & stamp marks', 'Pastry window vinyl graphics', 'Recycled kraft pastry packaging', 'Loyalty cards'],
    featured: false
  },
  {
    id: 'food-business-promotion',
    title: 'Food Business Promotion',
    category: 'Graphic Design',
    year: '2024',
    image: '/images/vertical_culinary_poster.jpg',
    accentColor: '#FF7138',
    client: 'Suya Central Express',
    overview: 'High-volume promotional rollout for a fast-casual food franchise launch, including storefront vinyls and delivery app collateral.',
    creativeDirection: 'Appetite-inducing warm tones, dynamic angled headers, and prominent contact ordering badges.',
    deliverables: ['Storefront outdoor flex banners', 'Delivery menu inserts', 'Digital takeaway ordering cards'],
    featured: false
  }
];
