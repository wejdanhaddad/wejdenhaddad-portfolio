// index.js

/**
 * "Competences" or "Services" section
 * Highlighting Wejden Haddad’s blend of web development, design, and multimedia expertise.
 */

export const servicesData = [
  {
    title: "Web Development Foundations",
    description:
      "Exploring the full process of web creation — from designing front-end interfaces to building secure, structured back-end systems. I enjoy connecting logic and creativity to deliver functional, elegant results.",
    items: [
      {
        title: "Frontend Development",
        description: "(React, Angular, WordPress, UI & animation with GSAP)",
      },
      {
        title: "Backend Fundamentals",
        description: "(Symfony, PHP, REST API integration, Node.js basics)",
      },
      {
        title: "Database & Security",
        description: "(SQL Server, authentication, and RESTful data handling)",
      },
    ],
  },
  {
    title: "Multimedia & 3D Design",
    description:
      "Merging artistic vision with technical skill. I design digital visuals, 3D environments, and brand identities that enhance user experience and tell a story.",
    items: [
      {
        title: "Visual Identity & Branding",
        description: "(Photoshop, Illustrator, Canva — print & digital media)",
      },
      {
        title: "3D Modeling & Animation",
        description: "(Blender — UI/UX elements, product visualization, motion)",
      },
      {
        title: "Creative Content",
        description: "(Social media banners, newsletters, and digital campaigns)",
      },
    ],
  },
  {
    title: "System Integration & E-Commerce",
    description:
      "Hands-on experience developing and managing CMS-based websites. From rebuilding designs from Figma to deploying e-commerce solutions with smooth user and admin interfaces.",
    items: [
      {
        title: "E-Commerce Platforms",
        description: "(WordPress, PrestaShop, Elementor, Astra theme)",
      },
      {
        title: "Figma to Web",
        description: "(Translating client mockups into responsive websites)",
      },
      {
        title: "Custom Tools",
        description: "(License management systems, dashboard interfaces)",
      },
    ],
  },
  {
    title: "Emerging & Complementary Skills",
    description:
      "Curious and eager to learn new technologies, I enjoy exploring areas that expand my creative and technical range.",
    items: [
      {
        title: "Game Development Basics",
        description: "(Unity — asset creation, interactive elements)",
      },
      {
        title: "Mobile App Development",
        description: "(Simple mobile apps and UI experimentation)",
      },
      {
        title: "Support & Maintenance",
        description: "(System setup, troubleshooting, basic networking)",
      },
    ],
  },
];

/**
 * "Projects" or "Experience" section
 * Highlighting key academic and professional projects.
 */

export const projects = [
  {
    id: 1,
    name: "Software License Management System",
    description:
      "A full-stack project developed as a final year thesis. It includes a secure REST API for license generation, a C# desktop dashboard (DevExpress) for administrators, and a public company showcase website built with Symfony.",
    href: "#contact",
    image: "/assets/projects/twinkle.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "Symfony (PHP)" },
      { id: 2, name: "C#" },
      { id: 3, name: "REST API" },
      { id: 4, name: "SQL Server" },
      { id: 5, name: "JavaScript" },
    ],
  },
  {
    id: 2,
    name: "CMS E-Commerce Website Development & Design",
    description:
      "Recreated and customized e-commerce websites for clients using WordPress and PrestaShop. Tasks included layout design in Figma, integration with Elementor and Astra, and optimization of UI elements and banners.",
    href: "#contact",
    image: "/assets/projects/cms.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "WordPress / PrestaShop / Elementor" },
      { id: 2, name: "Figma" },
      { id: 3, name: "Photoshop / Illustrator" },
    ],
  },
  {
    id: 3,
    name: "3D Modeling & Animation for UI/UX",
    description:
      "Created 3D models and simple animations to enhance digital visuals and web interactions. Focused on product presentation and creative content for websites and ads.",
    href: "#contact",
    image: "/assets/projects/3d.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Blender" },
      { id: 2, name: "Illustrator" },
      { id: 3, name: "Unity" },
    ],
  },
  {
    id: 4,
    name: "Luxury Car Rental Website (Front-End Development)",
    description:
      "Developed a modern car rental website using Angular. Implemented clean UI components, responsive layouts, and connected front-end logic with a Node.js backend prototype.",
    href:"#contact",
    image: "/assets/projects/luxe.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "HTML / CSS" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "Node.js" },
    ],
  },
  {
    id: 5,
    name: "SportsLand E-Commerce Website (Front-End Development)",
    description:
      "Designed and developed a sports e-commerce interface using Angular, focusing on performance, visual appeal, and user experience.",
    href: "#contact",
    image: "/assets/projects/sportsLand.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "HTML / CSS" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "Node.js" },
    ],
  },
];

/**
 * Contact and Social Media Links
 */
export const socials = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/wejden-haddad", // Make sure your URL is lowercase and correct
  },
  { name: "GitHub", href: "https://github.com/wejdanhaddad" },
  { name: "Email", href: "mailto:wejdenhadded57@gmail.com" },
  { name: "Phone", href: "tel:+21650024648" },
];
