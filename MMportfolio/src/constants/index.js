import {

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
 AE,
 beth,
 ANF,
 draft,
  threejs,
  ruby,
  rails,
  gsap,
wedding,
gavea,
  BAr,
  LIr,
  nike,
  crypto,
  pokemon1,
  sims,
  iphone

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
    icon: LIr,
  },
  {
    title: "Travel Enthusiast",
    icon: gavea,
  },
  {
    title: "Avid Sports Fan",
    icon: BAr,
  },
  {
    title: "Family & Friends",
    icon: wedding,
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
      "Responsible for developing daily emails to the kids sector of Abercrombie & Fitch using HTML, CSS, & Javascript. Using Oracle Responys to organize all of our builds.",
      "Creating daily push notifications for Iphone and Android usrs for Abercrombie & Fitch adults, Hollister, and Abercrombie & Fitch kids through the Braze platform.",
      "We work collaboratively with our brand partners, design partners, and copy writers to ensure all campaigns are build accurately and on time.",
    ],
  },
  {
    title: "Full Stack Web Development Bootcamp Graduate",
    company_name: "Le Wagon",
    icon: lewagon,
    iconBg: "#E6DEDD",
    date: "July 2023 - Sept 2023",
    points: [
      "400-hour full immersion intensive programming bootcamp, programming languages covered include: HTML, CSS, JavaScript, Ruby, Ruby On Rails, and SQL.",
      "Final project my team created app entirely from scratch that connects Airbnb owners with cleaners that serves as a centralized location for work opportunities.",
      "Other skills learned included utilizing figma for creating a design, operating the terminal, and VS code.",
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
    name: "Crypto Trackers",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "ChartJS",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/mmcgovern25/crpyto-app",
  },

  {
    name: "Nike Ecommerce Store",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "nodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: nike,
    source_code_link: "https://github.com/mmcgovern25/Nike-Ecommerce/tree/main/Nike-Store",
  },
  {
    name: "Connect & Clean",
    description:
      "Connect & Clean was our final group project that myself and my batchmates created at the Le Wagon Full Stack Web Development Bootcamp. The intention of the site is to fill a void for Airbnb owners, and cleaners alike. That was to give them a platform where they can easily arrange cleaning job opportunities. Entirely build using Ruby and Ruby on Rails.",
    tags: [
      {
        name: "Ruby",
        color: "blue-text-gradient",
      },
      {
        name: "Ruby On Rails",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: sims,
    source_code_link: "https://github.com/PSorianoR/Connect-and-Clean",
  },
  {
    name: "Alec Simonovitch CPA",
    description:
      "A complete site for one of my best friends new side huste business he plans to start. With the main focus to simply collect emails and schedule consultation calls, to see how Alec could potentially help their finianical needs. This site was built using React and Tailwind CSS as the staple, my personal favorite part is the slick logo carousel that was used to showcase his experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: sims,
    live_link: "https://alecsimscpa2.netlify.app/",
    source_code_link: "https://github.com/mmcgovern25/AlecSimsCPA",
  },
  {
    name: "iStore Clone",
    description:
      "A beautifully designed landing page for the newest iPhone 15 Pro, made to mimik the real deal on the apple website. This landing page utilizies a variety of design tactics to give it a modern and slick design, including a bento box video collage, 3D models using ThreeJS, and scroll animations using GSAP.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "pink-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://github.com/mmcgovern25/iPhoneGSAP3JS",
  },
  {
    name: "Pokemon Power Rankings",
    description:
      "A complete detailed pokedex from the first five generations of pokemon, with the functionality to add your favorite pokemon to a variety of lists. Those include your top six (your party), top 15 (your dream team), top 30 (box 1), and top 50 (mt battle). Your lists are updated in real time with their video game in PC image. You can compare with your friends and let the debates begin! All done with basic HTML, CSS, and plain vanilla Javascript as was my first solo project.",
    tags: [
      {
        name: "Vanilla JS",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: pokemon1,
    source_code_link: "https://github.com/mmcgovern25/PKMN-Power-Rankings",
  },
];

export { services, technologies, experiences, testimonials, projects };
