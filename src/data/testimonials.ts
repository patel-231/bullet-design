export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  company: string;
  location: string;
  projectType: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Bullet Design elevated our product campaigns with razor-sharp creative assets. Our customer engagement and conversion rate surged immediately after the launch.",
    clientName: "Michael Adebayo",
    role: "Director of Marketing",
    company: "Sonicus Audio & Tech",
    location: "Lagos, Nigeria",
    projectType: "Campaign & Promotion"
  },
  {
    id: 'test-2',
    quote: "The restaurant branding and embossed menus they crafted set us apart instantly. The level of craftsmanship in both the digital files and physical print was extraordinary.",
    clientName: "Sarah Alabi",
    role: "Founder & Executive Chef",
    company: "Nurvus Bistro & Hearth",
    location: "Abuja, Nigeria",
    projectType: "Brand Identity & Print"
  },
  {
    id: 'test-3',
    quote: "Their illuminated LED signage transformed our headquarters building facade. Precise engineering, flawless night visibility, and on-time structural installation.",
    clientName: "Victor Okonjo",
    role: "Facilities & Operations Lead",
    company: "Nexus Technologies",
    location: "Lekki, Nigeria",
    projectType: "Architectural Signage"
  },
  {
    id: 'test-4',
    quote: "From initial logo concepts to staff apparel and promotional flyers, Aaron and the Bullet Design team delivered with remarkable speed and genuine creative vision.",
    clientName: "Amina Bello",
    role: "Creative Director",
    company: "J-Nails Studio",
    location: "Port Harcourt, Nigeria",
    projectType: "Complete Brand Revamp"
  }
];
