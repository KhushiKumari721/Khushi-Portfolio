// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import agcLogo from './assets/company_logo/agc_logo.png';

// Education Section Logo's
import msit from './assets/education_logo/msit.png';
import acme from './assets/education_logo/acme.png';
import tri from './assets/education_logo/tri.png';

// Project Section Logo's
import portFolio from './assets/work_logo/portFolio.png';
import ems from './assets/work_logo/ems.png';
import game from './assets/work_logo/game.png';
import gym from './assets/work_logo/gym.png';
import dogStudio from './assets/work_logo/dog.png';
import eCommerce from './assets/work_logo/ecom.png';



// ========================================
// SKILLS
// ========================================

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
    ],
  },

  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },

  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'C', logo: cLogo },
    ],
  },

  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];


// ========================================
// EXPERIENCE
// ========================================

export const experiences = [
  {
    id: 0,
    img: agcLogo,
    role: "DSA in C++ Programming",
    company: "Intern pe",
    date: "7 July 2025 - 21 July 2025",

    desc: "Completed an intensive internship focused on Data Structures and Algorithms using C++. Solved a wide range of algorithmic problems involving arrays, linked lists, stacks, queues, trees, and graphs. Implemented optimized solutions using recursion, dynamic programming, and STL while improving time and space complexity. Practiced competitive programming style problem solving and strengthened analytical thinking for technical interviews.",

    skills: [
      "C++",
      "Data Structures",
      "Algorithms",
      "STL",
      "Recursion",
      "Dynamic Programming",
      "Problem Solving",
    ],
  },
];


// ========================================
// EDUCATION
// ========================================

export const education = [
  {
    id: 0,
    img: msit,
    school: "Meghnad Saha Institute Of Technology, Kolkata",
    date: "Aug 2023 - Present",
    grade: "7.65 CGPA",

    desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering from Meghnad Saha Institute Of Technology, Kolkata. As a fourth-year student, I have been developing strong foundations in programming, Data Structures and Algorithms, and full-stack web development. During my coursework, I have worked on several projects and gained hands-on experience in technologies such as the MERN stack while strengthening my problem-solving skills in C++.",

    degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
  },

  {
    id: 1,
    img: tri,
    school: "Trident Public School",
    date: "Apr 2022 - March 2023",
    grade: "76.20%",

    desc: "I completed my class 12 education from Trident Public School, Harishankar Maniyari, Silaut, Muzaffarpur, Bihar, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",

    degree: "CBSE(XII) - PCM",
  },

  {
    id: 2,
    img: acme,
    school: "Acme Public School",
    date: "Apr 2020 - March 2021",
    grade: "79.60%",

    desc: "I completed my class 10 education from Acme Public School, Barkagaon Karja Muzaffarpur, Bihar, under the CBSE board.",

    degree: "CBSE(X)",
  },
];


// ========================================
// PROJECTS
// ========================================

export const projects = [
  {
    id: 0,
    title: "AI Interview Platform",

    description:
      "An AI-powered interview preparation platform where users provide their resume and target job description as input. The platform analyzes the candidate's profile and generates personalized technical and behavioral interview questions, identifies skill gaps, provides a resume-to-job match score, and creates a personalized interview preparation plan. It also supports PDF generation for the resume and interview-related results.",

    image: eCommerce,

    tags: [
      "React.js",
      "Vite",
      "SCSS",
      "React Router",
      "Context API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Multer",
      "PDF Parse",
      "Google Gemini API",
      "Zod",
      "Zod JSON Schema",
      "Puppeteer",
      "Git",
      "GitHub",
    ],

    github: "https://github.com/KhushiKumari721/AI-Interview-Platform",

    webapp: "",
  },


  {
    id: 1,
    title: "3D DogStudio Clone Website",

    description:
      "A visually immersive clone of the DogStudio website featuring interactive 3D elements and smooth UI animations. Built using React.js for component-based structure, Three.js for rendering 3D graphics, and GSAP for advanced timeline and scroll animations. The project recreates modern web interactions and responsive layouts to deliver a highly engaging user experience across devices.",

    image: dogStudio,

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Three JS",
      "GSAP",
    ],

    github: "https://github.com/KhushiKumari721/DogstudioClone",

    webapp: "",
  },


  {
    id: 2,
    title: "Animated Portfolio Website",

    description:
      "A modern and responsive developer portfolio website built using React.js and Tailwind CSS. The project showcases projects, skills, and experience with smooth animations and an interactive UI. Implemented reusable React components and responsive layouts using Tailwind CSS to create a clean and visually engaging user experience across all devices.",

    image: portFolio,

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Tailwind CSS",
    ],

    github: "https://github.com/KhushiKumari721/Khushi-Portfolio",

    webapp: "https://khushi-portfolio-vert-alpha.vercel.app/",
  },


  {
    id: 3,
    title: "Employee Management System",

    description:
      "A React.js based Employee Management System that allows users to manage employee records efficiently. The application provides features to add, update, delete, and view employee details through an interactive and responsive user interface. Built using reusable React components and modern JavaScript practices to ensure smooth data handling and better user experience.",

    image: ems,

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
    ],

    github: "https://github.com/KhushiKumari721/Task-Manager-Dashboard-for-Employees",

    webapp: "",
  },


  {
    id: 4,
    title: "Khushi's Gym Fitness Landing Page",

    description:
      "A responsive gym fitness landing page built using HTML, CSS, and JavaScript. The website highlights gym services, workout programs, trainer information, and membership plans with a clean and modern layout. Focused on creating a user-friendly interface and responsive design to ensure a smooth experience across different devices.",

    image: gym,

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    github: "https://github.com/KhushiKumari721/GymFitness",

    webapp: "",
  },


  {
    id: 5,
    title: "Interactive-Shapes-Game-with-Sound-Animations",

    description:
      "Developed an interactive shapes game where each shape responds to user clicks with distinct sound effects and animations. Implemented event-driven programming, DOM manipulation, and audio integration to create engaging user interactions. Ensured responsive design and smooth UI transitions for an enhanced user experience.",

    image: game,

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],

    github: "https://github.com/KhushiKumari721/Interactive-Shapes-Game-with-Sound-Animations",

    webapp: "",
  },
];







