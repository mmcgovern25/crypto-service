import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  lewagon,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  sass,
 AE,
 beth,
 ANF,
 draft,
  carrent,
  jobit,
  tripguide,
  threejs,
  ruby,
  rails,
  gsap,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "rails",
    icon: rails,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "gsap",
    icon: gsap,
  },
];

const experiences = [
  {
    title: "Email Developer",
    company_name: "Abercrombie & Fitch",
    icon: ANF,
    iconBg: "#E6DEDD",
    date: "November 2023 - Present",
    points: [
      "❖	",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Web Development Bootcamp Graduate",
    company_name: "Le Wagon",
    icon: lewagon,
    iconBg: "#E6DEDD",
    date: "July 2023 - Sept 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "CMS Content Manager",
    company_name: "Beth Israel Lehay Health",
    icon: beth,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - July 2023",
    points: [
      "Over 150 requested updates made to all Beth Israel Lahey webpages, assisting in one of the biggest hospital mergers in the country.",
      "Utilized such skills such as Adobe Photoshop, HTML, CSS, and Javascript to complete those requested updates.",
      "Our team organized all of our webpages using SiteCore 10, and all internal communication was done through Microsoft Teams.",
      "Managed website content for over 13 hospitals and health care facilities all together",
    ],
  },
  {
    title: "Digital Marketing Associate",
    company_name: "Animal Equality",
    icon: AE,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - January 2023",
    points: [
      "Assisted the US team's marketing efforts including: Facebook Ad campaigns, Google Ad campaigns, and Email Marketing.",
      "Most successful Facebook ad campaign led to over 146,000 US citizens signing our petition",
      "Set up email newsletters through EveryAction and experimented with different ways to help increase our open rates.",
    ],
  },
  {
    title: "Customer Experience Associate",
    company_name: "DraftKings",
    icon: draft,
    iconBg: "#E6DEDD",
    date: "June 2021 - Oct 2022",
    points: [
      "Assisting customers through Twitter and Instagram direct messages.",
      "Troubleshooting issues for over 50 customers per day on average through our customer help center, and live chat features.",
      "Developed many soft skills in learning how to defuse esclating situations with an unhappy customer, and provide the best service possible.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
