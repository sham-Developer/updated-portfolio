export const personalInfo = {
  name: "Sham R",
  title: "Software Developer & Team Leader",
  tagline: "Building Scalable Web Apps, Enterprise Android Solutions & Computer Vision Systems",
  phone: "+91 9940846749",
  email: "shamamal622@gmail.com",
  location: "Coimbatore, Tamil Nadu, India",
  github: "https://github.com/Sham-Developer",
  linkedin: "https://www.linkedin.com/in/sham-r-0bb370295/",
  portfolioUrl: "https://www.sham-portfolio.vercel.app",
  status: "Leading Engineering Teams & Delivering Scalable Systems",
  experienceYears: "Nearly 3 Years",
  projectsDelivered: "15+",
  appsDeployed: "8+",
  teamSize: "5+ Developers",
  aboutBio: `Software Developer with nearly 3 years of hands-on experience in designing, developing, deploying, and maintaining high-performance web and Android applications. 

Currently serving as a Software Team Leader at Fisto Tech, spearheading project delivery, client communications, technical architecture, requirement mapping, and cross-functional team coordination. Proven track record in translating complex business problems into production-ready software solutions spanning full-stack web architectures, native Android apps, and computer vision systems.`
};

export const stats = [
  { value: "15+", label: "Client Projects Delivered", icon: "Briefcase", subtext: "Across multiple business domains" },
  { value: "8+", label: "Production Deployments", icon: "CloudCheck", subtext: "Live high-traffic environments" },
  { value: "5+", label: "Engineers Mentored & Led", icon: "Users", subtext: "Agile sprints, code reviews & CI/CD" },
  { value: "3", label: "Years Engineering Depth", icon: "Clock", subtext: "Full-Stack, Android & Computer Vision" }
];

export const competencies = [
  { title: "Software Architecture & Dev", desc: "Clean code principles, scalable microservices, component-driven UI architecture and robust RESTful backends.", icon: "Code2" },
  { title: "Team Leadership & Sprints", desc: "Leading 5+ developers, agile sprint orchestration, client alignment, and technical code reviews.", icon: "Crown" },
  { title: "Cross-Platform & Mobile", desc: "Native Android apps with Kotlin/Java, GPS tracking, sensor telemetry, and offline-first workflows.", icon: "Smartphone" },
  { title: "Full-Stack Web Engineering", desc: "React.js, Next.js, Node.js, Express, PHP, and stateful high-performance frontends.", icon: "Layers" },
  { title: "Database & Cloud Architecture", desc: "MySQL, PostgreSQL, MSSQL, MongoDB query optimization, AWS fundamentals, CI/CD pipelines.", icon: "Database" },
  { title: "Computer Vision & Automation", desc: "Real-time camera feed processing, gap defect detection with OpenCV, and automated inspection pipelines.", icon: "Eye" }
];

export const experience = [
  {
    company: "FISTO TECH PRIVATE LIMITED",
    location: "Ramanathapuram, Coimbatore, Tamil Nadu",
    role: "Software Team Leader",
    period: "March 2025 - Present",
    type: "Full-Time Leadership",
    current: true,
    highlights: [
      "Promoted to Team Lead based on consistent technical excellence and leadership contributions.",
      "Lead a team of 5+ developers delivering web and Android applications across sprints.",
      "Delivered 15+ client projects successfully from discovery through deployment.",
      "Deployed 8+ web applications to production environments with CI/CD implementation.",
      "Manage task planning, code reviews, architectural standards, and sprint timelines.",
      "Gather requirements directly from clients and participate in strategic solution discussions.",
      "Contributed to acquiring new client contracts through technical demonstrations and live POCs."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "Android (Java/Kotlin)", "MySQL", "AWS", "CI/CD", "Team Leadership"]
  },
  {
    company: "FISTO TECH PRIVATE LIMITED",
    location: "Ramanathapuram, Coimbatore, Tamil Nadu",
    role: "Junior Software Developer",
    period: "Nov 2023 - March 2025",
    type: "Full-Time Engineering",
    current: false,
    highlights: [
      "Developed responsive web applications using HTML5, CSS3, JavaScript, React.js, and PHP.",
      "Built resilient RESTful APIs and backend micro-modules using Node.js and Express.js.",
      "Designed, indexed, and maintained complex MySQL and MS SQL databases.",
      "Participated actively in debugging, unit testing, server deployment, and maintenance.",
      "Contributed to 12+ business applications across diverse client domains."
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "Node.js", "PHP", "MySQL", "MS SQL Server", "REST APIs"]
  },
  {
    company: "APPIN TECHNOLOGY COIMBATORE",
    location: "Ram Nagar, Coimbatore, Tamil Nadu",
    role: "Project Associate (Internship)",
    period: "July 2023 - Oct 2023",
    type: "Internship & Practical Training",
    current: false,
    highlights: [
      "Completed intensive hands-on training in Python, Django, React, and modern full-stack web engineering.",
      "Built real-world development tasks involving frontend interfaces and backend business logic.",
      "Established foundational knowledge in software engineering lifecycle, database management, and cloud deployment."
    ],
    technologies: ["Python", "Django", "React", "PostgreSQL", "REST APIs", "Git"]
  }
];

export const projects = [
  {
    id: "3d-mockup-platform",
    title: "3D Website with Mockup Pattern Application",
    category: "Full Stack / 3D Web",
    badge: "Featured 3D Visualization",
    featured: true,
    image: "/assets/mockup_3d.jpg",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "WebGL / Canvas"],
    summary: "Interactive 3D product visualization platform featuring real-time mockup texture application, pattern editing, and responsive dynamic rendering.",
    description: "Developed an interactive 3D product visualization and custom pattern rendering platform. Users can test apparel/device mockups in 3D space with real-time pattern placement, material reflections, multi-axis orbit controls, and live texture scaling. Implemented responsive UI with scroll-based animations and reusable component architecture for cross-browser fluidity.",
    keyPoints: [
      "Real-time 3D model rotation, zoom, and texture application",
      "Dynamic pattern layering with opacity, scale, and color tinting",
      "Scroll-triggered interactive animations and zero-lag performance",
      "Modular reusable UI component library optimized for WebGL frames"
    ],
    demoType: "3d-simulator"
  },
  {
    id: "crm-system",
    title: "Customer Relationship Management (CRM) System",
    category: "Full Stack / Enterprise",
    badge: "Enterprise Web & Mobile",
    featured: true,
    image: "/assets/crm_system.jpg",
    technologies: ["React.js", "Node.js", "PHP", "MySQL", "Android (Java)"],
    summary: "Comprehensive multi-tenant web & mobile CRM solution for customer onboarding, lead pipelines, live GPS tracking, and executive analytics.",
    description: "Architected end-to-end web and mobile CRM platform tailored for fast-growing sales and service teams. Built real-time lead capture, automated follow-up workflows, customer onboarding pipelines, push notifications, and detailed conversion analytics. Integrated live employee GPS location tracking for field agents and executive dashboards for real-time operational visibility.",
    keyPoints: [
      "Multi-stage Kanban lead management with automated status alerts",
      "Live GPS field employee tracking with location breadcrumbs",
      "Role-based access control (RBAC) across web and Android interfaces",
      "High-throughput MySQL query optimization for analytics dashboards"
    ],
    demoType: "crm-pipeline"
  },
  {
    id: "alloy-wheel-inspection",
    title: "Real-Time Alloy Wheel Inspection System",
    category: "Computer Vision / AI",
    badge: "Computer Vision & Automation",
    featured: true,
    image: null, // Simulated high-tech live canvas
    technologies: ["Python", "OpenCV", "Computer Vision", "Image Processing", "Real-Time Camera Processing"],
    summary: "Real-time industrial computer vision system inspecting rotating alloy wheel gaps for dust, debris, and structural obstructions using live video feed.",
    description: "Developed an automated Python and OpenCV-based computer vision system to perform live defect inspection on alloy wheel spokes while the wheel rotates on an industrial test rig. Employs adaptive image processing algorithms to detect dust, burrs, or obstructions within individual spoke gaps. Designed an intuitive color-coded operator GUI (Green = Clear, Yellow = Marginal/Partial, Red = Obstructed) for instant quality control decisions.",
    keyPoints: [
      "Real-time high-speed video frame segmentation and contour filtering",
      "Sub-millisecond gap clearance calculations during active rotation",
      "Visual color indicator matrix (Green = Clear, Red = Obstructed, Yellow = Partial)",
      "Automated inspection report logging with frame snapshot captures"
    ],
    demoType: "cv-simulator"
  },
  {
    id: "smart-irrigation",
    title: "Smart Irrigation Design Platform",
    category: "Mobile / Android",
    badge: "Android & Agritech",
    featured: true,
    image: "/assets/smart_irrigation.jpg",
    technologies: ["Android Studio", "Java", "Kotlin", "XML", "Telemetry APIs"],
    summary: "Native Android application empowering farmers and engineers to visually blueprint agricultural field layouts and optimize sprinkler distribution.",
    description: "Engineered a native Android application for agricultural irrigation planning. Features interactive drag-and-drop blueprint canvas where users place water lines, valves, and sprinklers over farm boundaries with pinch-to-zoom and rotational alignment. Generates real-time water flow telemetry projections and downloadable PDF visualization reports for client presentations.",
    keyPoints: [
      "Custom Android canvas for drag-and-drop pipe and sprinkler layout",
      "Mathematical flow calculation based on nozzle radius and pipe diameter",
      "Offline-first architecture with local SQLite sync",
      "Comprehensive PDF visualization reports and client proposals"
    ],
    demoType: "irrigation-demo"
  },
  {
    id: "product-distribution",
    title: "Product Distribution Management System",
    category: "Mobile & Backend",
    badge: "Supply Chain & Billing",
    featured: false,
    image: null,
    technologies: ["Android", "Java", "MySQL", "REST APIs", "PDF Generation"],
    summary: "Enterprise distribution application streamlining inventory management, dealer registration, invoicing, and executive sales dashboards.",
    description: "Developed a mission-critical distribution management platform designed for wholesale logistics. Features automated PDF tax-compliant invoice generation, multi-tier dealer onboarding, warehouse stock level monitoring, and responsive admin analytics to track fulfillment rates and field sales performance in real time.",
    keyPoints: [
      "On-device dynamic PDF invoice and dispatch slip generator",
      "Multi-dealer ledger tracking with credit limit validations",
      "Real-time warehouse inventory alerts and restocking triggers",
      "Admin telemetry dashboard for sales KPIs and delivery tracking"
    ],
    demoType: "distribution-demo"
  }
];

export const technicalSkills = {
  frontend: {
    title: "Frontend Engineering",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 95, exp: "3 yrs" },
      { name: "JavaScript (ES6+)", level: 95, exp: "3 yrs" },
      { name: "Next.js", level: 85, exp: "2 yrs" },
      { name: "HTML5 & Semantic Web", level: 98, exp: "3 yrs" },
      { name: "CSS3 / Modern CSS", level: 95, exp: "3 yrs" },
      { name: "Tailwind CSS", level: 90, exp: "2 yrs" },
      { name: "Bootstrap", level: 90, exp: "3 yrs" },
      { name: "jQuery", level: 88, exp: "3 yrs" }
    ]
  },
  backend: {
    title: "Backend & APIs",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 92, exp: "3 yrs" },
      { name: "Express.js", level: 92, exp: "3 yrs" },
      { name: "RESTful API Architecture", level: 95, exp: "3 yrs" },
      { name: "PHP", level: 88, exp: "2.5 yrs" },
      { name: "Django (Basic)", level: 75, exp: "1.5 yrs" },
      { name: "Microservices & Auth (JWT)", level: 88, exp: "2 yrs" }
    ]
  },
  mobile: {
    title: "Mobile Development",
    icon: "Smartphone",
    skills: [
      { name: "Android Studio", level: 90, exp: "2.5 yrs" },
      { name: "Java", level: 90, exp: "3 yrs" },
      { name: "Kotlin", level: 85, exp: "2 yrs" },
      { name: "Android XML UI", level: 92, exp: "2.5 yrs" },
      { name: "Flutter (Basic)", level: 70, exp: "1 yr" },
      { name: "Location & GPS Services", level: 90, exp: "2 yrs" }
    ]
  },
  database: {
    title: "Database Management",
    icon: "Database",
    skills: [
      { name: "MySQL", level: 95, exp: "3 yrs" },
      { name: "PostgreSQL", level: 85, exp: "2 yrs" },
      { name: "MS SQL Server", level: 88, exp: "2 yrs" },
      { name: "MongoDB (Basic)", level: 78, exp: "1.5 yrs" },
      { name: "Query Optimization & Indexing", level: 90, exp: "2.5 yrs" }
    ]
  },
  cloud: {
    title: "Cloud & Deployment",
    icon: "Cloud",
    skills: [
      { name: "AWS Fundamentals", level: 82, exp: "2 yrs" },
      { name: "CI/CD Pipelines", level: 88, exp: "2 yrs" },
      { name: "cPanel & DirectAdmin", level: 92, exp: "3 yrs" },
      { name: "Linux Server Management", level: 85, exp: "2 yrs" },
      { name: "Vercel & Netlify Deployment", level: 95, exp: "3 yrs" }
    ]
  },
  tools: {
    title: "Tools & Methodologies",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub Workflow", level: 95, exp: "3 yrs" },
      { name: "Postman & API Testing", level: 95, exp: "3 yrs" },
      { name: "VS Code & Debuggers", level: 98, exp: "3 yrs" },
      { name: "Agile / Scrum Sprint Leadership", level: 92, exp: "2 yrs" },
      { name: "Computer Vision (OpenCV)", level: 85, exp: "1.5 yrs" }
    ]
  }
};

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Bharathiar University – Distance Education",
    period: "2025 – Present",
    status: "Pursuing",
    description: "Advanced study in software architecture, distributed computing, database systems, and enterprise application engineering.",
    icon: "GraduationCap"
  },
  {
    degree: "Bachelor of Commerce with Computer Applications (B.Com CA)",
    institution: "Bishop Appasamy College of Arts and Science",
    period: "2020 – 2023",
    status: "Graduated",
    description: "Solid foundation in business workflows, accounting information systems, relational databases, and commercial software applications.",
    icon: "Award"
  }
];

export const certifications = [
  {
    name: "Full Stack Python Developer",
    issuer: "Appin Technology",
    desc: "Comprehensive certification covering full-stack web architectures, Python, Django backend systems, RESTful API design, React frontend integration, and database orchestration.",
    badge: "Verified Specialist"
  }
];

export const leadershipPoints = [
  {
    title: "Agile Sprint & Delivery Management",
    desc: "Coordinate sprint planning, backlogs, code reviews, and milestones for 5+ developers to guarantee 100% on-time project execution."
  },
  {
    title: "Direct Client Collaboration",
    desc: "Interface directly with enterprise clients for requirement discovery, architectural scoping, milestone demos, and live solution deployments."
  },
  {
    title: "Architectural Code Quality",
    desc: "Establish code quality standards, reusable component libraries, security practices, and CI/CD automated deployment pipelines."
  },
  {
    title: "Cross-Domain Technical Expertise",
    desc: "Seamlessly unify web platforms, native Android applications, backend microservices, and AI/vision modules into cohesive systems."
  }
];
