import {
  pokedex,
  todolist,
  weather,
  css,
  html,
  javascript,
  reactjs,
  redux,
  tailwind,
  threejs,
  bootstrap,
  material,
  mongodb,
  nodejs,
  expressjs,
  postman,
  cpp,
  python,
  git,
  vscode,
  logo,
  mobile,
  web,
  github,
  education_icon,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    name: "Home",
  },
  {
    id: "about",
    name: "About",
  },
  {
    id: "skills",
    name: "Skills",
  },
  {
    id: "projects",
    name: "Projects",
  },
  {
    id: "contact",
    name: "Contact",
  },
];

export const EducationDetails = [
  {
    id: 1,
    date: "2021-2025",
    name: "B.Tech In ECE",
    description:
      "I am a 3rd Year B.Tech student of Ramkrishna Mahato Government Engineering College in Electronic and Communication Engineering Department.I got 9.33 YGPA in 1st Year.",
    icon: education_icon,
    iconBg: "#383E56",
  },
  {
    id: 2,
    date: "2018-2020",
    name: "Higher Secondary",
    description:
      "I have done my Higher Secondary Education at Bishnupur High School affiliated to West Bengal Council of Higher Secondary Education with 465 out of 500 marks in the year of 2020",
    icon: education_icon,
    iconBg: "#383E56",
  },
  {
    id: 3,
    date: "2013-2018",
    name: "Secondary",
    description:
      "I have done my Secondary Education at Maniklal Singha Smrity Madhayamik Vidyalaya affiliated to West Bengal Council of Higher Secondary Education with 648 out of 700 marks in the year of 2018",
    icon: education_icon,
    iconBg: "#383E56",
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
    catagory: "font-end",
  },
  {
    name: "CSS 3",
    icon: css,
    catagory: "font-end",
  },
  {
    name: "JavaScript",
    icon: javascript,
    catagory: "font-end",
  },
  {
    name: "React JS",
    icon: reactjs,
    catagory: "font-end",
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    catagory: "font-end",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    catagory: "font-end",
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
    catagory: "font-end",
  },
  {
    name: "Material UI",
    icon: material,
    catagory: "font-end",
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  //   catagory: "font-end",
  // },
  {
    name: "Node JS",
    icon: nodejs,
    catagory: "backend-end",
  },
  {
    name: "Express JS",
    icon: expressjs,
    catagory: "backend-end",
  },
  {
    name: "MongoDB",
    icon: mongodb,
    catagory: "backend-end",
  },
  {
    name: "Postman Api",
    icon: postman,
    catagory: "backend-end",
  },

  {
    name: "C ++",
    icon: cpp,
    catagory: "language",
  },
  {
    name: "Python",
    icon: python,
    catagory: "language",
  },
  {
    name: "git",
    icon: git,
    catagory: "tools",
  },
  {
    name: "VS Code",
    icon: vscode,
    catagory: "tools",
  },
];

export const ProjectDetails = [
  {
    id: 1,
    duration: 0.3,
    image: pokedex,
    name: "PokeDex App",
    description:
      "Created and deployed fully responsive pokemon details website using React and Tailwind and Pokemon Api",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    gitlink: "https://github.com/Suresh1061/Pokemon_Application",
    demolink: "https://pokemon-application-tawny.vercel.app/",
  },
  {
    id: 2,
    duration: 0.6,
    image: weather,
    name: "Weather App",
    description:
      "Created and deployed fully responsive Weather app using React and Tailwind and  to fetch weather data of any city using AXIOS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    gitlink: "https://github.com/Suresh1061/Weather_Application",
    demolink: "https://weather-application-topaz.vercel.app/",
  },
  {
    id: 3,
    duration: 0.9,
    image: todolist,
    name: "Advance TodoList",
    description:
      "Created and deployed an awesom advance Todo list using React and Tailwind and store data in local storage",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "orange-text-gradient",
      },
    ],
    gitlink: "https://github.com/Suresh1061/Advance_Todolist",
    demolink:
      "https://advance-todolist-i97luoqze-suresh-pals-projects.vercel.app/",
  },
];
