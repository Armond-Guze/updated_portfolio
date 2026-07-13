import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  export const profile = {
    name: "Armond Guze",
    role: "Software Developer",
    headline:
      "I build responsive React interfaces, interactive web experiences, and polished applications that are easy to use.",
    summary:
      "I am a software developer focused on clean front-end experiences, practical full-stack foundations, and thoughtful product details. I enjoy turning ideas into responsive interfaces, organizing code so it is easy to maintain, and using modern tools like React, Tailwind CSS, Node.js, and Three.js to build work that feels complete.",
  };
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Development",
      icon: web,
    },
    {
      title: "Responsive Interfaces",
      icon: mobile,
    },
    {
      title: "Backend Foundations",
      icon: backend,
    },
    {
      title: "Product Thinking",
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
      name: "TypeScript",
      icon: typescript,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Portfolio Website",
      company_name: "Personal Project",
      icon: web,
      iconBg: "#383E56",
      date: "2026",
      points: [
        "Built a polished React and Vite portfolio with animated sections, reusable content data, and responsive layouts.",
        "Integrated Three.js canvases and optimized the project structure so 3D assets load correctly in production.",
        "Reworked template content into resume-ready copy with clear sections for skills, projects, and contact.",
      ],
    },
    {
      title: "Frontend Interface Work",
      company_name: "Project Practice",
      icon: mobile,
      iconBg: "#E6DEDD",
      date: "2025 - Present",
      points: [
        "Created component-based interfaces with React, Tailwind CSS, and modern JavaScript.",
        "Focused on mobile-friendly layouts, accessible navigation, and visual polish across breakpoints.",
        "Used reusable data structures to keep project content easy to update for resumes and interviews.",
      ],
    },
    {
      title: "Full-Stack Foundations",
      company_name: "Independent Learning",
      icon: backend,
      iconBg: "#383E56",
      date: "Ongoing",
      points: [
        "Practiced connecting front-end experiences to server-side concepts with Node.js and database-driven data models.",
        "Built familiarity with Git workflows, package management, deployment builds, and production troubleshooting.",
        "Kept implementation choices practical, readable, and aligned with real user workflows.",
      ],
    },
  ];
  
  const highlights = [
    {
      title: "Clean UI Engineering",
      description:
        "Builds interfaces that balance visual polish with readable structure and responsive behavior.",
      detail: "React, Tailwind CSS, component design",
    },
    {
      title: "Interactive Web Work",
      description:
        "Comfortable using motion, 3D canvases, and thoughtful micro-interactions without losing usability.",
      detail: "Three.js, Framer Motion, Vite",
    },
    {
      title: "Resume-Ready Delivery",
      description:
        "Keeps projects organized, buildable, and easy to present during applications or interviews.",
      detail: "Git, production builds, clear documentation",
    },
  ];
  
  const projects = [
    {
      name: "3D Developer Portfolio",
      description:
        "A responsive portfolio built with React, Tailwind CSS, Framer Motion, and Three.js to present skills, project work, and contact details in one resume-friendly site.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "",
    },
    {
      name: "Job Search Interface",
      description:
        "A front-end concept for browsing opportunities, comparing role details, and organizing job-search information in a clean dashboard-style layout.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ui",
          color: "green-text-gradient",
        },
        {
          name: "dashboard",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "",
    },
    {
      name: "Travel Planning UI",
      description:
        "A visual planning experience for organizing destinations, recommendations, and trip details with a strong focus on responsive layout and content clarity.",
      tags: [
        {
          name: "frontend",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "",
    },
  ];
  
  export { services, technologies, experiences, highlights, projects };
  
