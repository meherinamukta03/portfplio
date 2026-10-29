export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "Hosting"
  | "Tools";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  status: "comfortable" | "learning";
  description: string;
  iconName?: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  liveUrl: string;
  clientRepo?: string;
  keyFeatures: string[];
  challenges: string[];
  futureImprovements: string[];
  date: string;
  role: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
}

export const profileData = {
  name: "Meherina Mukta",
  designation: "Aspiring Full-Stack Web Developer",
  shortIntro:
    "Passionate Computer Science and Engineering student at Green University of Bangladesh with a strong foundation in modern web technologies. Committed to crafting high-performance, user-friendly, and accessible full-stack applications with clean code and problem-solving grit.",
  goal: "Become a professional Full-Stack Web Developer building scalable, real-world digital solutions that make an impact.",
  educationShort: "CSE Student at Green University of Bangladesh, Bangladesh",
  interests: ["Programming", "Problem-Solving", "Gardening"],
  avatarUrl: "/images/banner.jpeg",
  bannerUrl: "/images/banner.jpeg",
  resumeUrl: "/resume.pdf",
  email: "meherinamukta03@gmail.com",
  location: "Dhaka, Bangladesh",
  socialLinks: {
    github: "https://github.com/meherinamukta03",
    linkedin: "https://www.linkedin.com/in/meherina-mukta/",
    email: "mailto:meherinamukta03@gmail.com",
  },
};

export const aboutData = {
  journey:
    "My journey in technology started with a fascination for how lines of code translate into interactive, living software. As a Computer Science and Engineering student at Green University of Bangladesh, I discovered my passion for full-stack web development. I love the entire lifecycle of building products—from designing intuitive frontends with React and Tailwind CSS to architecting resilient server logic and databases with Node.js and MongoDB. Every day, I push myself to learn modern tools like Next.js, sharpening my software craftsmanship through hands-on projects.",
  interests: [
    {
      title: "Programming",
      description:
        "Writing clean, modular, and maintainable code. Exploring modern JavaScript ecosystem, Next.js App Router, and scalable architectural patterns.",
      emoji: "💻",
    },
    {
      title: "Problem-Solving",
      description:
        "Strengthening algorithmic thinking, data structures, and debugging complex software challenges with analytical discipline.",
      emoji: "🧩",
    },
    {
      title: "Gardening",
      description:
        "Cultivating plants and nurturing green spaces. Gardening instills patience, daily attentiveness, and appreciation for organic growth—qualities that directly shape my disciplined approach to coding.",
      emoji: "🌱",
    },
  ],
  personality: [
    { label: "Curious & Continuous Learner", detail: "Constantly experimenting with modern frameworks, design systems, and best practices." },
    { label: "Detail-Oriented", detail: "Passionate about clean component architecture, accessible UI, and snappy user experiences." },
    { label: "Collaborative & Empathetic", detail: "Thrives in team environments, embraces constructive code reviews, and communicates transparently." },
    { label: "Resilient Problem-Solver", detail: "View bugs and roadblocks as valuable opportunities to deepen engineering comprehension." },
  ],
  careerGoals:
    "My immediate goal is to transition into an industry internship or junior full-stack developer role where I can contribute to mission-critical codebases, learn alongside seasoned engineers, and deliver user-centric solutions. Long-term, I aspire to grow into a versatile Senior Full-Stack Engineer and technical architect driving impactful digital products.",
};

export const skillsData: SkillItem[] = [
  // 1. Languages (4): C, Java, JavaScript, SQL
  {
    name: "C",
    category: "Languages",
    status: "comfortable",
    description: "Structured programming, pointers, memory allocation, and algorithmic logic",
  },
  {
    name: "Java",
    category: "Languages",
    status: "comfortable",
    description: "Core OOP principles, class hierarchies, and modular software design",
  },
  {
    name: "JavaScript",
    category: "Languages",
    status: "comfortable",
    description: "ES6+, asynchronous programming, closures, DOM manipulation, and promises",
  },
  {
    name: "SQL",
    category: "Languages",
    status: "comfortable",
    description: "Relational queries, table joins, indexes, and database schema design",
  },

  // 2. Frontend (5): React.js, Next.js, Tailwind CSS, HTML5, CSS3
  {
    name: "React.js",
    category: "Frontend",
    status: "comfortable",
    description: "Hooks, functional components, reusable UI architecture, and state management",
  },
  {
    name: "Next.js",
    category: "Frontend",
    status: "learning",
    description: "App Router, server components, route handlers, and streaming SSR",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    status: "comfortable",
    description: "Utility-first design, dark mode, responsive styling, and modern UI layouts",
  },
  {
    name: "HTML5",
    category: "Frontend",
    status: "comfortable",
    description: "Semantic markup, accessibility (a11y), and standard web structure",
  },
  {
    name: "CSS3",
    category: "Frontend",
    status: "comfortable",
    description: "Modern Flexbox, CSS Grid layouts, animations, and responsive utilities",
  },

  // 3. Backend (3): Node.js, Express.js, MongoDB
  {
    name: "Node.js",
    category: "Backend",
    status: "comfortable",
    description: "Event-driven runtime, non-blocking I/O, and npm ecosystem",
  },
  {
    name: "Express.js",
    category: "Backend",
    status: "comfortable",
    description: "Routing, middleware architecture, request handling, and REST services",
  },
  {
    name: "MongoDB",
    category: "Backend",
    status: "comfortable",
    description: "NoSQL document collections, CRUD operations, and data aggregation",
  },

  // 4. Databases (3): MongoDB, PostgreSQL, MySQL
  {
    name: "MongoDB",
    category: "Databases",
    status: "comfortable",
    description: "NoSQL document schemas, indexing, and high-performance querying",
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    status: "learning",
    description: "Relational modeling, SQL queries, foreign keys, and transactions",
  },
  {
    name: "MySQL",
    category: "Databases",
    status: "comfortable",
    description: "Structured database tables, schemas, and normalized data storage",
  },

  // 5. Hosting (2): Vercel, Netlify
  {
    name: "Vercel",
    category: "Hosting",
    status: "comfortable",
    description: "Global edge deployment and automated Next.js continuous integration",
  },
  {
    name: "Netlify",
    category: "Hosting",
    status: "comfortable",
    description: "Frontend web hosting, atomic deploys, and continuous Git deployment",
  },

  // 6. Tools (2): Git & GitHub, VS Code
  {
    name: "Git & GitHub",
    category: "Tools",
    status: "comfortable",
    description: "Version control, feature branches, pull requests, and code collaboration",
  },
  {
    name: "VS Code",
    category: "Tools",
    status: "comfortable",
    description: "Configured extensions, linting, debugging, and terminal productivity",
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
    institution: "Green University of Bangladesh (GUB)",
  },
];

export const experienceData = [
  {
    title: "Full-Stack Development Projects & Academic Practicum",
    organization: "Green University of Bangladesh / Self-Directed Development",
    period: "2023 – Present",
    type: "Academic & Personal Projects",
    description:
      "Developing end-to-end full-stack web applications to solve practical challenges. Practicing modern development workflows, building responsive user interfaces, and designing robust server backends.",
    points: [
      "Designed and implemented full-stack web applications using Next.js, React, Node.js, Express, and MongoDB.",
      "Applied software engineering principles such as modular component design, state management, and secure API integration.",
      "Collaborated with university peers on engineering assignments, git version-controlled repositories, and technical documentation.",
      "[Open for Internship & Junior Developer Opportunities]",
    ],
    isPlaceholder: true,
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "bazardor",
    slug: "bazardor",
    title: "BazarDor",
    tagline: "Daily Grocery & Commodity Price Tracker for Bangladesh",
    category: "Full-Stack Web Application",
    image: "/projects/bazardor.png",
    date: "2025 – 2026",
    role: "Full-Stack Developer",
    shortDescription:
      "A comprehensive daily grocery and commodity price tracker helping citizens monitor current market rates across local Dhaka bazars and compare essential commodity price changes.",
    fullDescription:
      "BazarDor is a localized web application designed to bring daily transparency to kitchen market commodity prices in Bangladesh. By tracking essential groceries including rice, lentils, edible oils, seasonal vegetables, fish, meat, and spices, the platform empowers consumers to view fluctuating rates, calculate price changes, and find the best neighborhood rates.",
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://assignment-7-git-main-mmm-6442.vercel.app/",
    clientRepo: "https://github.com/meherinamukta03/Assignment-7",
    keyFeatures: [
      "Real-time daily commodity price tracking with visual market indicators",
      "Categorized food staples: Rice, Lentils, Oil, Vegetables, Fish, Meat, Dairy, and Spices",
      "Interactive market comparison across Dhaka kitchen markets",
      "Quick category filter and search bar for instant commodity lookups",
      "Clean, modern responsive user interface designed for mobile and desktop shoppers",
    ],
    challenges: [
      "Structuring responsive layout components that handle extensive lists of grocery items seamlessly on small mobile screens.",
      "Implementing efficient client-side filtering by commodity category without lagging the user experience.",
      "Designing clean visual price indicators that clearly convey daily market price changes.",
    ],
    futureImprovements: [
      "Integrating historical 30-day price trend graphs to visualize market inflation patterns.",
      "Adding SMS or WhatsApp daily price alert subscriptions for essential household staples.",
      "Implementing Progressive Web App (PWA) offline caching so shoppers can check saved rates in basement markets.",
      "Expanding coverage beyond Dhaka to major division and district markets across Bangladesh.",
    ],
  },
  {
    id: "fitlog",
    slug: "fitlog",
    title: "FitLog",
    tagline: "Workout Library & Fitness Routine Tracker",
    category: "Health & Fitness Web Application",
    image: "/projects/fitlog.png",
    date: "2025",
    role: "Frontend & Full-Stack Developer",
    shortDescription:
      "A dark-themed workout library and daily fitness companion where users can explore workouts, view detailed exercise routines, add sessions to today's plan, and save favorites.",
    fullDescription:
      "FitLog is a responsive workout library web application designed to train with intent and log every set. Users can seamlessly browse a curated collection of exercises, view target muscle groups, add workouts to 'Today\'s Plan', mark planned workouts as completed, and save custom workouts for later sessions.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://fit-log-assignment-6-omega.vercel.app/",
    clientRepo: "https://github.com/meherinamukta03/fit-log-assignment-6",
    keyFeatures: [
      "Curated workout library with target muscle group indicators and exercise details",
      "Interactive 'Today\'s Plan' manager where users queue up daily exercises",
      "Completed workout status toggle allowing users to mark finished sets",
      "Saved workouts library for quick access to recurring workout routines",
      "High-contrast dark mode interface built for distraction-free gym usage",
    ],
    challenges: [
      "Managing reactive client state across multiple lists (Today's Plan, Saved Workouts, and Completed Workouts).",
      "Designing a high-contrast dark theme with sharp visual typography optimized for gym screens.",
      "Maintaining state persistence across user interactions while browsing exercises.",
    ],
    futureImprovements: [
      "Adding user account authentication for persistent cross-device workout history storage.",
      "Integrating weekly consistency heatmaps and automated caloric expenditure calculations.",
      "Adding a rest-timer utility between sets with auditory or vibration notifications.",
      "Allowing users to create, customize, and share their own custom exercise routines.",
    ],
  },
  {
    id: "news-website",
    slug: "news-website",
    title: "News Website",
    tagline: "Interactive Web Portal & Tech Stack Explorer",
    category: "Content & Tech Platform",
    image: "/projects/news-website.png",
    date: "2024 – 2025",
    role: "Frontend Developer",
    shortDescription:
      "A modern web portal featuring structured categorized content, tech stack exploration, and a responsive reading experience.",
    fullDescription:
      "A clean, responsive web application showcasing technology stacks, project insights, and informative articles. Designed with a clear visual hierarchy, modern cards, and fluid cross-device navigation to deliver high readability and fast performance.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    liveUrl: "https://darling-froyo-fee2bb.netlify.app/",
    clientRepo: undefined, // Omit GitHub repository link as requested: "Not provided. Do not invent a GitHub URL."
    keyFeatures: [
      "Structured content sections showcasing development technologies and tools",
      "High-performance clean layout deployed on Netlify global CDN",
      "Responsive navigation bar with category links and smooth transitions",
      "Card-based UI layout optimized for fast reading and clear comprehension",
      "Mobile-friendly viewport adaptation across tablets, laptops, and smartphones",
    ],
    challenges: [
      "Ensuring fluid responsive grid adaptation across different viewport widths and mobile aspect ratios.",
      "Optimizing web performance and asset delivery for instant initial page render.",
      "Structuring accessible and clean semantic HTML markup for modern web standards.",
    ],
    futureImprovements: [
      "Integrating live dynamic news feed APIs for real-time article updates.",
      "Adding search indexing and category filtering for instant article discovery.",
      "Implementing user article bookmarking using client-side localStorage.",
      "Adding a public GitHub repository once the open-source client codebase is finalized.",
    ],
  },
];
