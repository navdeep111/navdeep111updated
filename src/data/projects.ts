import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  // {
  //   id: "social-media-app-flutter",
  //   title: "Social Media App",
  //   description:
  //     "A social media mobile application developed using Flutter, GetX, Firebase Notifications and Hive.",
  //   icon: "/skills/flutter.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/gsbgajraj/social-media-app-flutter",
  //   // url: "https://www.gsbgajraj.co.in/projects/com.gsbgajraj.rippl",
  //   url: "https://github.com/gsbgajraj/social-media-app-flutter/releases",
  //   tags: ["Flutter", "Dart", "GetX", "Hive"],
  //   sceenshots: ["/screenshots/rippl.png"],
  // },
  {
    id: "e-notes-app-mern",
    title: "Notes App",
    description:
      "A notes app that allows users to create, edit, and organize their notes efficiently. Nextjs",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/gsbgajraj/ecommerce-web-reactjs",
    url: "https://docs.gajraj.tech",
    tags: ["Next.js", "React", "Convex", "Tailwind", "Typescript"]
  },
  {
    id: "Invoice-Generator",
    title: "Invoice Generator",
    description:
    "An Invoice Generator developed using React.js that allows users to create and manage invoices efficiently.",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/gsbgajraj/Invoice-Generator",
    url: "https://invoice.gajraj.tech",
    tags: ["React.js","Vercel"],
  },
  // {
  //   id: "Gajraj-AI",
  //   title: "Ask GPT",
  //   description:
  //     "A MERN stack application with JWT authentication for secure user login and registration.",
  //   icon: "/skills/azure.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/gsbgajraj/gpt2",
  //   url: "https://ai.gajraj.tech",
  //   tags: ["MERN","Azure","Node.js", "Express.js", "MongoDB", "Reactjs"],
  // },
  {
    id: "MERN-JWT-auth",
    title: "MERN JWT Auth",
    description:
      "A MERN stack application with JWT authentication for secure user login and registration.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/gsbgajraj/MERN-JWT-auth",
    url: "https://auth.gajraj.tech",
    tags: ["MERN","Azure","Node.js", "Express.js", "MongoDB", "Reactjs"],
  },
  {
    id: "phone-otp-authentication",
    title: "Phone OTP Authentication",
    description:
      "A phone OTP authentication system developed using MERN stack that allows users to authenticate using their phone numbers.",
    icon: "/skills/mern.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/gsbgajraj/otpless",
    url: "https://otp.gajraj.tech",
    tags: ["MERN","Azure","OTP", "Authentication","Otpless","Tailwind CSS","Phone OTP",],
  },
  // {
  //   id: "grocery-list-maker-app-flutter",
  //   title: "Grocery List Maker App",
  //   description:
  //     "A grocery list maker mobile application developed using Flutter, BloC, Hive DB and PDF.",
  //   icon: "/skills/flutter.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/gsbgajraj/grocery-list-maker-flutter",
  //   url:
  //     "https://github.com/gsbgajraj/grocery-list-maker-flutter/releases/latest",
  //   tags: ["Flutter", "Dart", "BLoC", "PDF", "Hive"],
  // },
  // {
  //   id: "e-commerce-api-nodejs",
  //   title: "E-commerce API",
  //   description:
  //     "An RESTful API developed using Node.js, Express.js, MongoDB, and Stripe to integrate e-commerce backend.",
  //   icon: "/skills/nodejs.svg",
  //   repoType: RepoType.Public,
  //   projectType: ProjectType.Personal,
  //   githubUrl: "https://github.com/gsbgajraj/ecommerce-api-nodejs",
  //   tags: ["Node.js", "Express.js", "MongoDB", "Stripe"],
  // },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
