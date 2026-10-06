import inkMink from "@/assets/projects/ink-mink-mobile.jpg";
import sidInk from "@/assets/projects/sid-ink-mobile.jpg";
import fitness from "@/assets/projects/fitness-palace-mobile.jpg";
import glamourra from "@/assets/projects/glamourra-mobile.jpg";

export const CONTACT = {
  phone: "+91 8595984063",
  tel: "tel:+918595984063",
  whatsapp: "https://wa.me/918595984063",
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  sector: string;
  image: string;
  description: string;
  overview: string;
  challenge: string;
  approach: string[];
  result: string;
};

export const projects: Project[] = [
  {
    slug: "ink-mink-tattooz",
    title: "Ink Mink Tattooz",
    category: "Website Design / Development",
    sector: "Tattoo Studio",
    image: inkMink,
    description:
      "A cinematic digital experience built to showcase tattoo work, artists and the studio's identity.",
    overview:
      "Ink Mink Tattooz needed a website that felt like walking into the studio — moody, confident and focused entirely on the craft. The site was designed as a cinematic showcase for the work, the artists and the studio's personality.",
    challenge:
      "Tattoo clients choose with their eyes. The studio's work had to be the hero, while the site still needed to explain services clearly and make it effortless for someone to reach out and book.",
    approach: [
      "A dark, atmospheric visual system that lets the artwork carry the page.",
      "Portfolio-led structure with the artists and their styles front and centre.",
      "Mobile-first layout, since most visitors arrive from social media on their phones.",
      "Direct, always-visible contact paths so interest turns into a conversation.",
    ],
    result:
      "A distinctive online home that reflects the studio's identity and gives the work the stage it deserves — built to be shared, browsed and acted on.",
  },
  {
    slug: "sid-ink-tattooz",
    title: "Sid Ink Tattooz",
    category: "Website Design / Development",
    sector: "Tattoo & Piercing Studio",
    image: sidInk,
    description:
      "A bold, visual-first website designed around the artist's work and brand identity.",
    overview:
      "Sid Ink is a tattoo and piercing studio with a strong artistic voice. The website was built visual-first — bold typography, striking imagery and a structure shaped around the artist's portfolio.",
    challenge:
      "Covering both tattoo and piercing services without diluting the brand, and presenting a large body of work in a way that feels curated rather than crowded.",
    approach: [
      "Bold, high-contrast typography that matches the studio's attitude.",
      "Clear separation between tattoo and piercing offerings.",
      "A gallery rhythm that feels editorial instead of a generic image grid.",
      "Fast-loading, responsive build tuned for phone browsing.",
    ],
    result:
      "A website with real presence — one that feels unmistakably like the studio and makes the artist's work the reason to get in touch.",
  },
  {
    slug: "fitness-palace",
    title: "Fitness Palace",
    category: "Website Design / Development",
    sector: "Fitness & Gym",
    image: fitness,
    description: "A conversion-focused digital presence designed for a fitness business.",
    overview:
      "Fitness Palace needed a digital presence that matched the energy of the gym floor and made it simple for new members to understand the offer and take the first step.",
    challenge:
      "Gym websites often blur together. The goal was to communicate facilities, programmes and membership clearly, while giving the brand a sharper, more energetic personality.",
    approach: [
      "Energetic visual language with strong headlines and confident calls to action.",
      "Information structured around the questions new members actually ask.",
      "Prominent enquiry and contact actions throughout the page.",
      "Responsive layouts designed to perform well on mobile.",
    ],
    result:
      "A clear, energetic website that presents Fitness Palace as a serious, modern gym and guides visitors toward getting in touch.",
  },
  {
    slug: "glamourra",
    title: "Glamourra",
    category: "Website Design / Development / Local SEO",
    sector: "Unisex Salon",
    image: glamourra,
    description: "A premium digital presence created for a modern salon and beauty business.",
    overview:
      "Glamourra is a premium unisex salon. The website was designed to feel as polished as the in-salon experience, paired with local SEO foundations to help nearby customers find it.",
    challenge:
      "Conveying a premium, welcoming atmosphere online while making services easy to browse — and making sure the salon shows up when people nearby search for it.",
    approach: [
      "Refined, elegant visual direction that reflects a premium salon experience.",
      "Clear service presentation so visitors know exactly what's on offer.",
      "Local SEO foundations: structure, metadata and location signals.",
      "Simple booking and contact paths optimised for mobile.",
    ],
    result:
      "A polished digital presence that matches the salon's quality and is structured to be discovered by people searching locally.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
