export interface ProcessStep {
  step: string;
  name: string;
  tagline: string;
  description: string;
  actionItems: string[];
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    name: 'DISCOVER',
    tagline: 'Understand the business, goals and creative requirements.',
    description: 'Every standout design starts with deep listening. We dissect your brand positioning, core audience psychology, competitive landscape, and specific business objectives before drafting a single pixel.',
    actionItems: ['Stakeholder alignment brief', 'Audience & competitor analysis', 'Technical specifications audit', 'Project scope & timeline roadmap']
  },
  {
    step: '02',
    name: 'STRATEGIZE',
    tagline: 'Establish the right direction and visual approach.',
    description: 'We synthesize research into strategic art direction: defining typographic moodboards, structural grid systems, chromatic palettes, and tactile materials that align with your brand value.',
    actionItems: ['Curated moodboards & color theory', 'Typographic hierarchy formulation', 'Material & substrate exploration', 'Strategic creative proposal']
  },
  {
    step: '03',
    name: 'CREATE',
    tagline: 'Develop the design, identity or digital experience.',
    description: 'Our senior designers execute with obsessive precision. We construct vector geometries, layout editorial posters, code responsive interactions, and fabricate physical print mockups.',
    actionItems: ['Geometric vector craftsmanship', 'High-fidelity layout drafting', 'Prototyping & interactive motion', 'Physical print pre-flight tests']
  },
  {
    step: '04',
    name: 'REFINE',
    tagline: 'Review details, make improvements and polish the final result.',
    description: 'We scrutinize every curve, kerning pair, color calibration, and physical material tolerance. Feedback is integrated systematically to ensure the final product exceeds expectations.',
    actionItems: ['Rigorous optical calibration', 'Client feedback collaboration', 'Color proofing & cross-device checks', 'Durability & material testing']
  },
  {
    step: '05',
    name: 'DELIVER',
    tagline: 'Deliver the completed work and final assets.',
    description: 'Handoff is seamless and comprehensive. From organized digital design repositories and vector brand guidelines to high-resolution production prints and on-site signage installation.',
    actionItems: ['Full source file kit (AI, SVG, PDF)', 'Comprehensive brand style guide', 'Physical delivery & on-site mounting', 'Post-delivery support & continuity']
  }
];
