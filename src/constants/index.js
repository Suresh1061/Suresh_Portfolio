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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Material UI",
    icon: material,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "C ++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "VS Code",
    icon: vscode,
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
    gitlink: "https://github.com/palhub2002/PokeDex-App",
    demolink: "https://poke-dex-app-theta.vercel.app/",
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
    gitlink: "https://github.com/palhub2002/Weather-App",
    demolink: "https://weather-app-mauve-nine.vercel.app/",
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
    gitlink: "https://github.com/palhub2002/Advance-Todolist",
    demolink: "https://advance-todolist.vercel.app/",
  },
];
