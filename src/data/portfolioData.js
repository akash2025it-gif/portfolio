// ============================================================
// portfolioData.js — Centralized configuration for Akash G's Portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Akash G",
  firstName: "Akash",
  brandName: "Akash G",
  title: "B.Tech IT Student",
  location: "Coimbatore, India",
  phone: "+91 8248830254",
  emails: {
    primary: "akash2025it@gmail.com",
  },
  summary:
    "Motivated second-year B.Tech IT student with a strong academic record and a growing foundation in C++, data structures, and databases. Eager to apply technical skills to real-world projects and internship opportunities.",
  resumeUrl: "./Akash_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/akash2025it-gif",
  linkedin: "https://linkedin.com/in/akash-g-0223b4380",
  leetcode: "https://leetcode.com/u/Akash-0714/",
};

export const heroContent = {
  greeting: "Hi, I'm Akash G",
  titleHighlight: "B.Tech IT Student",
  subtitle:
    "🎓 B.Tech IT Student | Aspiring Software Developer | AI & Web Development Enthusiast | DSA | Problem Solving | Hackathon Enthusiast",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:akash2025it@gmail.com?subject=Inquiry – Portfolio&body=Hello Akash,%0D%0A%0D%0AI came across your portfolio and would like to connect with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "./Akash_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `I'm a B.Tech Information Technology student passionate about AI, web development, and problem-solving. I enjoy learning new technologies, building projects, and participating in hackathons. As a state-level chess player, I've developed strategic thinking, patience, and decision-making skills. Currently, I'm focused on building real-world projects and growing as a software professional.`,
  techStack: ["C++", "Databases / SQL", "Web Development"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world applications",
  description:
    "I follow a structured, logical, and disciplined approach to problem solving and software development.",
  cards: [
    {
      number: "01",
      title: "Analyze",
      text: "Understanding problem requirements, constraints, and fundamentals to establish a clear solution structure.",
    },
    {
      number: "02",
      title: "Design",
      text: "Structuring clean algorithms, relational database schemas, and intuitive responsive user interfaces.",
    },
    {
      number: "03",
      title: "Build",
      text: "Writing clean, efficient code using modern languages, frameworks, and web development practices.",
    },
    {
      number: "04",
      title: "Refine",
      text: "Testing logic, optimizing performance, and ensuring responsive behavior across devices.",
    },
  ],
  endText: "Ready to build!",
};

// Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      skills: [
        { name: "C++ (Basic proficiency)", level: 70 },
        { name: "JavaScript", level: 65 }
      ]
    },
    {
      title: "Data Structures & Core",
      skills: [
        { name: "Data Structures (Basic knowledge)", level: 65 },
        { name: "Algorithms (Basic knowledge)", level: 60 }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "Basic SQL", level: 70 },
        { name: "Relational Database Concepts", level: 70 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 80 },
        { name: "CSS", level: 75 },
        { name: "JavaScript", level: 65 }
      ]
    },
    {
      title: "Languages Known",
      skills: [
        { name: "Tamil", level: 100 },
        { name: "English", level: 90 }
      ]
    }
  ]
};

// Leadership, Academics & Achievements Data
export const leadershipList = [
  {
    title: "B.Tech – Information Technology (Second Year)",
    description: "Sri Krishna College of Engineering and Technology, Coimbatore. Current CGPA: 8.88.",
    role: "Undergraduate Degree",
    badge: "Academics"
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    description: "MGM Matriculation Higher Secondary School. Scored 95.6%.",
    role: "Higher Secondary",
    badge: "Academics"
  },
  {
    title: "Secondary School Leaving Certificate (SSLC)",
    description: "GHSS, Puliyampatti. Scored 95.6%.",
    role: "Secondary School",
    badge: "Academics"
  },
  {
    title: "State-Level Chess Competitions",
    description: "Represented in State-level Chess Competitions on 3 separate occasions during school years.",
    role: "State Competitor",
    badge: "Achievement"
  },
  {
    title: "District-Level Chess Competitions",
    description: "Selected continuously from 4th to 12th standard for District-level Chess Competitions.",
    role: "District Representative",
    badge: "Achievement"
  }
];

export const projects = [
  {
    id: "personal-portfolio",
    number: "01",
    badge: "🚀 Self Project",
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a personal portfolio website to showcase skills, certifications, and achievements using HTML, CSS, and JavaScript.",
    techTags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    links: {
      github: "https://github.com/akash2025it-gif/Akash_Portfolio",
      demo: null,
    },
    isFlagship: true,
  },
];

export const certificates = {
  featured: [
    {
      name: "Introduction to Web Development with HTML, CSS, JavaScript",
      issuer: "IBM (Coursera)",
      icon: "🌐",
    },
    {
      name: "Google AI",
      issuer: "Google (Coursera)",
      icon: "🤖",
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "AWS (Coursera)",
      icon: "☁️",
    },
    {
      name: "Azure Fundamentals Essentials",
      issuer: "Microsoft (Coursera)",
      icon: "🔷",
    },
    {
      name: "Microsoft Azure Machine Learning",
      issuer: "Microsoft (Coursera)",
      icon: "🧠",
    },
    {
      name: "SQL: A Practical Introduction for Querying Databases",
      issuer: "Coursera",
      icon: "🗄️",
    },
    {
      name: "Introduction to Relational Databases (RDBMS)",
      issuer: "IBM (Coursera)",
      icon: "📊",
    },
    {
      name: "Build Responsive Website using HTML5, CSS3, JS and Bootstrap",
      issuer: "Infosys",
      icon: "💻",
    },
  ],
  viewAllUrl: null,
};

export const education = {
  degree: "B.Tech – Information Technology",
  institution: "Sri Krishna College of Engineering and Technology, Coimbatore",
  cgpa: "8.88",
  twelfth: "HSC – MGM Matriculation Higher Secondary School (95.6%)",
  tenth: "SSLC – GHSS, Puliyampatti (95.6%)",
};

export const footerContent = {
  taglines: [
    "B.Tech Information Technology",
    "SKCET Coimbatore",
    "Software & Web Development",
  ],
  credential: "B.Tech IT · CGPA 8.88",
  copyright: `© ${new Date().getFullYear()} Akash G | Built with React`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

