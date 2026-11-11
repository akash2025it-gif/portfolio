// ============================================================
// portfolioData.js — Centralized configuration for Akash G's Portfolio
// Single source of truth from latest resume (Akash_Resume.pdf)
// ============================================================

export const personalInfo = {
  name: "Akash G",
  firstName: "Akash",
  brandName: "Akash G",
  title: "B.Tech IT Student",
  headline:
    "B.Tech IT Student | Software Developer | C++ & DSA | Web Development | AI | Hackathons | State-Level Chess Competitor",
  location: "Coimbatore, Tamil Nadu",
  phone: "+91 8248830254",
  emails: {
    primary: "akash2025it@gmail.com",
  },
  summary:
    "Second-year B.Tech Information Technology student with hands-on experience contributing to full-stack web applications during an onsite internship and collaborative projects. Familiar with Python, Django, C++, Java (Basics), SQL and AI/ML-based web applications. Interested in Python/Django development and building practical, user-focused software solutions.",
  resumeUrl: "/Akash_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/akash2025it-gif",
  linkedin: "https://linkedin.com/in/akash-g-0223b4380",
  leetcode: "https://leetcode.com/u/Akash-0714",
  portfolio: "https://portfolio-51nk.vercel.app/",
  phone: "+91 8248830254",
  email: "akash2025it@gmail.com",
};

export const heroContent = {
  greeting: "Hi, I'm Akash G",
  titleHighlight: "B.Tech IT Student",
  subtitle:
    "B.Tech IT Student | Software Developer | C++ & DSA | Web Development | AI | Hackathons | State-Level Chess Competitor",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:akash2025it@gmail.com?subject=Inquiry – Portfolio&body=Hello Akash,%0D%0A%0D%0AI came across your portfolio and would like to connect with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Akash_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Second-year B.Tech Information Technology student with hands-on experience contributing to full-stack web applications during an onsite internship and collaborative projects. Familiar with Python, Django, C++, Java (Basics), SQL and AI/ML-based web applications. Interested in Python/Django development and building practical, user-focused software solutions.`,
  techStack: ["Python", "Django", "C++", "Java", "SQL", "Web Dev", "AI/ML"],
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

// Technical Skills (organized into 6 professional categories, progress-free)
export const technicalSkills = {
  categories: [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["C++", "Python", "Java (Basics)"],
    },
    {
      title: "Web Development",
      icon: "🌐",
      skills: ["Django", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["SQL", "RDBMS (Basic)"],
    },
    {
      title: "Core Computer Science",
      icon: "⚙️",
      skills: [
        "Object-Oriented Programming (Basic)",
        "Operating Systems (Basic)",
        "Data Structures & Algorithms (Foundational)",
      ],
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "AI/ML-based Web Application Development",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: "🛠️",
      skills: [
        "GitHub",
        "GitHub Desktop",
        "VS Code",
        "Vercel",
        "Antigravity AI",
      ],
    },
  ],
};

// Internship Experience Data
export const internshipExperience = {
  role: "Python Developer Intern",
  company: "Adhoc Softwares Pvt. Ltd., Coimbatore",
  mode: "Onsite",
  duration: "21 October 2026 – 6 November 2026",
  responsibilities: [
    "Contributed to a team-developed Student–HOD Management System, working across frontend and backend modules.",
    "Built student login, registration and document-upload pages using Django and web technologies.",
    "Developed HOD-facing pages for document assignment and management workflows.",
    "Integrated and tested student and HOD workflows as part of the development team.",
  ],
};

// Projects Data (All 4 verified from new resume)
export const projects = [
  {
    id: "student-hod-management",
    number: "01",
    badge: "Team Project | Internship",
    title: "Student–HOD Management System",
    description:
      "Contributed to frontend and backend implementation within the internship team. Built student login, registration, document-upload and HOD document-management pages.",
    techTags: ["Python", "Django", "HTML", "CSS", "JavaScript"],
    links: {
      github: null,
      demo: null,
    },
    isFlagship: true,
  },
  {
    id: "metroscan-ai",
    number: "02",
    badge: "Hackathon | Team Project",
    title: "MetroScan AI – Package Compliance Scanner",
    description:
      "Collaborated on a web-based package-compliance scanner for analysing packaged-product information.",
    techTags: ["Python", "Django", "HTML", "CSS", "JavaScript", "AI/ML"],
    links: {
      github: null,
      demo: "https://package-scanner-rust.vercel.app/",
    },
    isFlagship: false,
  },
  {
    id: "disease-prediction",
    number: "03",
    badge: "AI/ML Web Project",
    title: "Disease Prediction Web Application",
    description:
      "Developed and deployed a live disease-prediction website using AI/ML concepts.",
    techTags: ["AI/ML", "Web Development"],
    links: {
      github: null,
      demo: "https://akash2025it-gif.github.io/codeAlpha_disease_prediction/",
    },
    isFlagship: false,
  },
  {
    id: "personal-portfolio",
    number: "04",
    badge: "Personal Project",
    title: "Personal Portfolio Website",
    description:
      "Built and deployed a portfolio website showcasing technical skills, projects and professional profiles.",
    techTags: ["HTML", "CSS", "JavaScript", "Vercel"],
    links: {
      github: null,
      demo: "https://portfolio-51nk.vercel.app/",
    },
    isFlagship: false,
  },
];

// Certifications Data (All 5 verified from new resume)
export const certificates = {
  featured: [
    {
      name: "Google Prompting Essentials Specialization",
      issuer: "Google",
      icon: "✨",
    },
    {
      name: "Microsoft Azure AI Fundamentals (AI-900) Exam Prep Specialization",
      issuer: "Microsoft",
      icon: "🔷",
    },
    {
      name: "Google AI Specialization",
      issuer: "Google",
      icon: "🤖",
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "AWS (Course Completion)",
      icon: "☁️",
    },
    {
      name: "SQL: A Practical Introduction for Querying Databases",
      issuer: "Coursera",
      icon: "🗄️",
    },
  ],
  viewAllUrl: null,
};

// Education Data (All 3 verified entries from new resume)
export const educationList = [
  {
    level: "B.Tech – Information Technology",
    institution: "Sri Krishna College of Engineering and Technology (SKCET), Coimbatore",
    period: "August 2025 – Present",
    score: "CGPA: 8.88/10",
    badge: "Higher Education",
  },
  {
    level: "HSC (Class XII)",
    institution: "MGM Matriculation Higher Secondary School, Krishnagiri",
    period: "June 2024 – March 2025",
    score: "Percentage: 95.6%",
    badge: "Higher Secondary",
  },
  {
    level: "SSLC (Class X)",
    institution: "GHSS, Puliyampatti, Krishnagiri",
    period: "June 2022 – April 2023",
    score: "Percentage: 95.6%",
    badge: "Secondary School",
  },
];

// Achievements & Extracurricular Data (Languages Known removed per request)
export const achievements = [
  {
    category: "Chess Achievements",
    icon: "♟️",
    points: [
      "Selected for district-level chess competitions continuously from 4th to 12th standard.",
      "Represented at state level on three separate occasions.",
    ],
  },
  {
    category: "Scholarships",
    icon: "🎓",
    points: [
      "Awarded prestigious SBI and LIC scholarships.",
      "Renewal is subject to academic eligibility and consistent performance.",
    ],
  },
  {
    category: "Hackathons & Problem Solving",
    icon: "💡",
    points: [
      "Participated in hackathons, gaining hands-on experience in collaborative technical problem-solving.",
    ],
  },
];

export const footerContent = {
  taglines: [
    "B.Tech Information Technology",
    "SKCET Coimbatore · CGPA 8.88",
    "Software & Web Developer",
  ],
  credential: "B.Tech IT · CGPA 8.88/10",
  copyright: `© ${new Date().getFullYear()} Akash G. All rights reserved.`,
};

// EmailJS Configuration
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
