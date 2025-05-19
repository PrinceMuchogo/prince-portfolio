export const PERSONAL_DATA = {
  name: "Prince William Muchogo",
  title: "Software Engineer & AI Specialist",
  email: "princemuchogo@gmail.com",
  phone: "+263 77 653 1418",
  location: "Harare, Zimbabwe",
  socials: {
    github: "https://github.com/princemuchogo",
    linkedin: "https://linkedin.com/in/princemuchogo",
    twitter: "https://x.com/princemuchogo",
  },
  about: `Innovative software developer specializing in AI, IoT, and enterprise solutions. 
  With expertise in building intelligent systems that solve complex problems, 
  I create seamless digital experiences that drive business growth and enhance user experiences.`,
};

export const EXPERIENCE_DATA = [
  {
    id: 1,
    title: "Co-Founder",
    company: "GenzTechLabs",
    period: "2023 - Present",
    description:
      "Leading a team of developers in creating innovative software solutions focused on AI and IoT integration for enterprise clients.",
    skills: ["Leadership", "Business Development", "System Architecture", "AI Integration"],
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "Sybrin",
    period: "2023 - 2024",
    description:
      "Developed enterprise software solutions, focusing on payment processing systems and data analytics platforms.",
    skills: ["Software Development", "Payment Systems", "Data Analytics", "Enterprise Solutions"],
  },
];

export const SKILLS_DATA = {
  technical: [
    { name: "React/Next.js", level: 90 },
    { name: "Python/FastAPI", level: 95 },
    { name: "Machine Learning", level: 85 },
    { name: "IoT Development", level: 90 },
    { name: "Full Stack Development", level: 85 },
  ],
  soft: [
    "Leadership",
    "Problem Solving",
    "Communication",
    "Project Management",
    "Creativity",
  ],
};

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Smart Glasses IoT Solution",
    description:
      "Prototype for smart glasses using ESP32 Module, ESP32 Camera module, Ultrasonic sensors, and sound buzzers. Includes a mobile application using React Native for text-to-speech functionality.",
    problem:
      "Visual impairment affects millions worldwide, limiting independence and quality of life.",
    solution:
      "Created smart glasses that capture images, identify objects using AI, and communicate information audibly to the user.",
    technologies: ["ESP32", "React Native", "FastAPI", "OpenAI DALL-E", "IoT Sensors"],
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#contact",
  },
  {
    id: 2,
    title: "Patient Management System",
    description:
      "A comprehensive repository for patient information, including medical records and doctor-patient interactions.",
    problem:
      "Healthcare providers struggle with fragmented patient information across multiple systems.",
    solution:
      "Developed a unified platform to securely store and manage all patient data, improving healthcare delivery and record accessibility.",
    technologies: ["Next.js", "TypeScript", "Uploadcare", "Database Management"],
    image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#contact",
  },
  {
    id: 3,
    title: "Shona Sentiment Analysis",
    description:
      "Sentiment analysis model for the Shona language, built for online stores and comment sections using Retrieval Augmented Generation.",
    problem:
      "Lack of NLP tools for African languages limits business insights from customer feedback.",
    solution:
      "Created a specialized sentiment analysis tool for Shona, enabling businesses to understand customer feedback in local languages.",
    technologies: ["OpenAI", "RAG", "FastAPI", "NLP", "Python"],
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#contact",
  },
  {
    id: 4,
    title: "Fraud Detection System",
    description:
      "ML-based system for detecting fraudulent online payments by identifying suspicious patterns and behaviors.",
    problem:
      "Financial fraud causes billions in losses annually, with traditional detection methods failing to keep pace with sophisticated fraud techniques.",
    solution:
      "Implemented an advanced machine learning system that analyzes transaction patterns to identify potential fraud in real-time.",
    technologies: ["FastAPI", "Next.js", "Random Forest", "Machine Learning"],
    image: "https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#contact",
  },
  {
    id: 5,
    title: "Corporate Funds Request Application",
    description:
      "System for managing advance requests and acquittals for employee expenses, with tracking and approval workflows.",
    problem:
      "Manual expense management creates administrative burden and lacks transparency.",
    solution:
      "Built an automated system that streamlines expense requests, approvals, and reconciliation while enhancing accountability.",
    technologies: ["Next.js", "TypeScript", "API Integration", "Workflow Automation"],
    image: "https://images.pexels.com/photos/7567474/pexels-photo-7567474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#contact",
  },
  {
    id: 6,
    title: "Tax Evasion Detection System",
    description:
      "System using machine learning and rule-based logic to detect suspicious financial submissions by SMEs.",
    problem:
      "Tax authorities struggle to identify sophisticated tax evasion strategies, especially among small and medium enterprises.",
    solution:
      "Developed an intelligent system that flags potential tax evasion by analyzing financial patterns and identifying inconsistencies.",
    technologies: ["FastAPI", "Machine Learning", "Next.js", "Data Analysis"],
    image: "https://images.pexels.com/photos/6693663/pexels-photo-6693663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "#contact",
  },
];