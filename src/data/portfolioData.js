/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION - NILEESHA DE SILVA
 * =========================================================================
 */

export const portfolioData = {
  // -------------------------------------------------------------
  // 1. Personal & Hero Information
  // -------------------------------------------------------------
  personal: {
    name: "Nileesha De Silva",
    tagline: "Hello, I'm",
    role: "Full Stack Developer",
    subtitles: [
      "Full Stack Developer",
      "Backend Java (Spring Boot) Developer",
      "MERN Stack Specialist",
      "Software Engineering Undergraduate"
    ],
    status: {
      available: true,
      text: "Available for new opportunities"
    },
    bio: "I design, engineer, optimize, and deploy end-to-end web solutions using the MERN stack, Java (Spring Boot), RESTful APIs, relational databases, and Git-based workflows.",
    location: "Kalutara, Sri Lanka",
    email: "nileeshamax@gmail.com",
    phone: "0768451805",
    github: "https://github.com/Nileesha-De-Silva",
    linkedin: "https://www.linkedin.com/in/nileesha-de-silva-9bb2043b2",
    twitter: null,
    resumeUrl: "/cv.pdf", // Place your cv.pdf in the /public folder to open directly
    avatarUrl: "/profile.jpg",
    terminalFileName: "nileesha_desilva.jpg"
  },

  // -------------------------------------------------------------
  // 2. About Me Section
  // -------------------------------------------------------------
  about: {
    eyebrow: "WHO I AM",
    heading: "About Me",
    subheading: "Building Scalable Full-Stack Web Solutions",
    bioParagraphs: [
      "I am a Software Engineering undergraduate at SLIIT with a strong passion for full-stack web development, clean software architecture, and enterprise backend systems.",
      "I enjoy designing, developing, and deploying end-to-end applications using React, Node.js, Express, MongoDB, Java, Spring Boot, and modern software engineering practices."
    ],
    // 4 High-Impact Stats Cards
    stats: [
      { label: "Full-Stack Systems", value: "3+" },
      { label: "Core Technologies", value: "12+" },
      { label: "Frameworks & Libraries", value: "10+" },
      { label: "Enterprise Backend", value: "Java & .NET" }
    ],
    // Education details
    education: {
      degree: "BSc (Hons) in Information Technology",
      specialization: "Software Engineering",
      institution: "Sri Lanka Institute of Information Technology (SLIIT)",
      institutionUrl: "https://www.sliit.lk",
      period: "Expected Graduation • 2028",
      status: "Undergraduate Student"
    },
    // Career targets
    careerGoals: [
      "Full-Stack Software Engineer",
      "Backend Java (Spring Boot) Developer",
      "Software Architect"
    ],
    // Core high-level technology tags
    coreTechnologies: [
      "Java", "Spring Boot", "React", "Node.js", "Express.js", 
      "MongoDB", "PostgreSQL", "JavaScript", 
      "REST APIs", "Git", "Docker"
    ]
  },

  // -------------------------------------------------------------
  // 3. Technical Skills Section
  // -------------------------------------------------------------
  skills: {
    eyebrow: "MY EXPERTISE",
    heading: "Technical Skills",
    subheading: "A comprehensive showcase of technologies, frameworks, and engineering tools I leverage.",
    categories: [
      {
        id: "frontend",
        title: "Frontend Development",
        icon: "Layout",
        skills: [
          { name: "React.js" },
          { name: "JavaScript (ES6+)" },
          { name: "HTML5" },
          { name: "CSS3" }
        ]
      },
      {
        id: "backend",
        title: "Backend & Enterprise",
        icon: "Server",
        skills: [
          { name: "Java" },
          { name: "Spring Boot" },
          { name: "Node.js" },
          { name: "Express.js" },
          { name: "RESTful APIs" }
        ]
      },
      {
        id: "databases",
        title: "Databases & Storage",
        icon: "Database",
        skills: [
          { name: "PostgreSQL" },
          { name: "MongoDB" }
        ]
      },
      {
        id: "programming-languages",
        title: "Programming Languages",
        icon: "Terminal",
        skills: [
          { name: "Java" },
          { name: "C#" },
          { name: "SQL" }
        ]
      },
      {
        id: "tools-devops",
        title: "Tools & DevOps",
        icon: "Wrench",
        skills: [
          { name: "Git" },
          { name: "GitHub" },
          { name: "Docker" },
          { name: "Postman" },
          { name: "VS Code" }
        ]
      }
    ]
  },

  // -------------------------------------------------------------
  // 4. Featured Projects Section
  // -------------------------------------------------------------
  projects: {
    eyebrow: "PORTFOLIO WORK",
    heading: "Featured Projects",
    subheading: "Innovative software engineering platforms, agentic AI systems, and full-stack solutions.",
    list: [
      {
        id: 1,
        title: "AgriOpsAI – Agentic-Based Farm and Agriculture Management System",
        category: "Agentic AI & Full-Stack",
        description: "AgriOpsAI is an intelligent, multi-agent farm management platform that bridges automated crop health diagnostics with on-ground agricultural field operations. Architected with an autonomous 4-agent ecosystem (Python/LangGraph), a high-performance .NET 10 backend, a React web portal, and a Flutter mobile application, the system incorporates strict Human-in-the-Loop (HITL) managerial approval gates. It streamlines end-to-end farm operations by automating treatment planning, dispatching verified field tasks with photographic evidence validation, and maintaining real-time inventory synchronization.",
        image: "/agriopsai.jpg",
        tags: ["Python", "LangGraph", ".NET 10", "PostgreSQL", "React", "Flutter", "Docker"],
        keyModules: [
          "AI Crop Diagnosis",
          "Task Orchestration & Kanban",
          "Photographic Proof-of-Work",
          "Automated Inventory Management"
        ],
        githubUrl: "https://github.com/Nileesha-De-Silva/SE3090-Project-AgriOps-Agentic-Based-Farm-and-Agriculture-Management-System.git",
        liveUrl: null,
        featured: true
      },
      {
        id: 2,
        title: "ApexTutors – Full-Stack Tutor Booking & Management Platform",
        category: "Enterprise Full-Stack",
        description: "ApexTutors is a full-stack academic platform engineered to streamline the discovery, scheduling, and lifecycle management of verified home tutoring sessions. The system is powered by a robust Spring Boot 3 REST API with JWT role-based authentication and a PostgreSQL database, paired with a responsive, glassmorphic web interface built using modern HTML5, CSS3, and ES6+ JavaScript. Key engineering highlights include an end-to-end appointment state machine, real-time multi-criteria tutor search, and multi-tier client caching (memCache + localStorage) that delivers sub-millisecond UI hydration.",
        image: "/apextutors.jpg",
        tags: ["Spring Boot 3", "Java", "PostgreSQL", "REST APIs", "JWT", "JavaScript (ES6+)", "Glassmorphism"],
        keyModules: [
          "Appointment State Machine",
          "Multi-Criteria Tutor Search",
          "Multi-Tier Client Caching",
          "JWT Role-Based Auth"
        ],
        githubUrl: "https://github.com/Nileesha-De-Silva/ApexTutors-Tutor-Booking-and-Management-Full-stack-system.git",
        liveUrl: null,
        featured: true
      },
      {
        id: 3,
        title: "JourneyX – Full-Stack Travel Booking & Management Platform",
        category: "Enterprise Full-Stack",
        description: "JourneyX is an enterprise-grade full-stack travel booking and management platform built using Java Servlets, JSP, and Microsoft SQL Server following the MVC architectural pattern. The system features secure role-based access control for Administrators, Department Managers, Support Officers, and Customers, integrating dynamic package browsing, automated booking lifecycles, and a Strategy pattern-driven multi-method payment engine. By streamlining end-to-end operations—from digital receipt issuance and refund processing to customer support ticketing—the application optimizes agency workflows while delivering a responsive, seamless booking experience.",
        image: "/journeyx.jpg",
        tags: ["Java (Servlets & JSP)", "Microsoft SQL Server", "JDBC", "Maven", "HTML5", "CSS3", "JavaScript", "MVC Architecture"],
        keyModules: [
          "MVC & Strategy Pattern",
          "Role-Based Access Control (RBAC)",
          "DAO Pattern Architecture",
          "Support Ticketing & Refunds"
        ],
        githubUrl: "https://github.com/Nileesha-De-Silva/JourneyX-Travel-booking-and-Management-Full-stack-System.git",
        liveUrl: null,
        featured: true
      }
    ]
  },

  // -------------------------------------------------------------
  // 5. Certifications Section (Reserved for future)
  // -------------------------------------------------------------
  certifications: {
    eyebrow: "PROFESSIONAL DEVELOPMENT",
    heading: "Certifications & Credentials",
    subheading: "Continuous learning and professional accreditations.",
    list: []
  },

  // -------------------------------------------------------------
  // 6. Contact Section
  // -------------------------------------------------------------
  contact: {
    eyebrow: "GET IN TOUCH",
    heading: "Let's Connect",
    subheading: "I am actively seeking internship opportunities, collaborative software projects, and tech connections.",
    methods: [
      {
        type: "Email",
        label: "nileeshamax@gmail.com",
        link: "mailto:nileeshamax@gmail.com",
        icon: "Mail",
        subtext: "Expect a response within 24 hours"
      },
      {
        type: "LinkedIn",
        label: "nileesha-de-silva-9bb2043b2",
        link: "https://www.linkedin.com/in/nileesha-de-silva-9bb2043b2",
        icon: "Linkedin",
        subtext: "Connect for professional inquiries"
      },
      {
        type: "GitHub",
        label: "github.com/Nileesha-De-Silva",
        link: "https://github.com/Nileesha-De-Silva",
        icon: "Github",
        subtext: "Explore my source code & projects"
      },
      {
        type: "Phone",
        label: "+94 76 845 1805",
        link: "tel:0768451805",
        icon: "Phone",
        subtext: "Available for direct inquiries"
      },
      {
        type: "Location",
        label: "Kalutara, Sri Lanka",
        link: null,
        icon: "MapPin",
        subtext: "Available for onsite & remote roles"
      }
    ]
  }
};
