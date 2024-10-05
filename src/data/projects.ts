import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
// import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "I9 Inovation",
    href: "/projects",
    tags: ["Firebase", "Tailwindcss", "React Js", "Vercel"],
    image: {
      LIGHT: "https://i.ibb.co/LkdVqvs/i9innovations-com.png",
      DARK: "https://i.ibb.co/LkdVqvs/i9innovations-com.png",
    },
  },
  {
    index: 1,
    title: "Filimo School",
    href: "/projects",
    tags: [
      "Next js",
      "Tailwindcss",
      "NodeJS",
      "Express JS ",
      "App Router",
      "Context Api",
      "Vercel",
      "Mongo DB",
    ],
    image: {
      LIGHT: "https://i.ibb.co/zQ8QvCF/www-newschool-top.png",
      DARK: "https://i.ibb.co/zQ8QvCF/www-newschool-top.png",
    },
  },
  {
    index: 2,
    title: "KOA Agency Dashboard",
    href: "/projects",
    tags: [
      "Reactjs",
      "Vite",
      "Tailwindcss",
      "Vercel",
      "MUI",
      "React Router Dom",
      "NodeJs",
      "ExpressJs",
      "MOngo DB",
    ],
    image: {
      LIGHT: "https://i.ibb.co/rs3zn5y/koa-live-vercel-app-login.png",
      DARK: "https://i.ibb.co/rs3zn5y/koa-live-vercel-app-login.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "I9 Inovation",
    favicon: "https://i9innovations.com/logo3.png",
    imageUrl: [
      "https://i.ibb.co/LkdVqvs/i9innovations-com.png",
      "https://i.ibb.co/LZv1Dsd/i9innovations-com-1.png",
    ],
    description:
      "Joining i9 Innovations is not just a career move; it's a leap into the future of healthcare technology. Here, you'll not only grow as a professional but also contribute to meaningful change that impacts society at large. We offer a platform where your work directly contributes to enhancing healthcare delivery and patient outcomes.",
    sourceCodeHref: "https://github.com/AhsanAlijs/i9-innovations",
    liveWebsiteHref: "https://i9innovations.com/",
  },
  {
    name: "Astral Developers Managment System",
    favicon: "https://astraldevelopersmanagement.web.app/logo.png",
    imageUrl: [
      "https://i.ibb.co/12nNhft/astraldevelopersmanagement-web-app-employee-employee-Profile.png",
      "https://i.ibb.co/stkb0My/astraldevelopersmanagement-web-app.png",
      "https://i.ibb.co/y0Xhfwr/astraldevelopersmanagement-web-app-1.png",
    ],
    description:
      "A task management system using Firebase allows users to assign, track, and manage tasks efficiently with real-time updates. It supports task creation, editing, and deletion with secure user authentication. Employees can submit completed tasks, attach files, and update task statuses. Notifications and reports help ensure deadlines are met and performance is tracked.",
    sourceCodeHref:
      "https://github.com/AhsanAlijs/Astral_Managment-System-React-Firebase",
    liveWebsiteHref: "https://astraldevelopersmanagement.web.app/",
  },
  {
    name: "Filimo School",
    favicon:
      "https://yt3.googleusercontent.com/vHTKesLbMXwTzfUP5sW2Shd10vtONmrzZIGvdG2FQnl91b_49gMUi4gFWUIVT_Zyhg4PlPvYaw=s900-c-k-c0x00ffffff-no-rj",
    imageUrl: [
      "https://i.ibb.co/0mSLTCZ/www-newschool-top-1.png",
      "https://i.ibb.co/1vZgBLJ/www-newschool-top-2.png",
      "https://i.ibb.co/GRXdtXZ/www-newschool-top-3.png",
      "https://i.ibb.co/4WspsCR/www-newschool-top-4.png",
      "https://i.ibb.co/mq9rsyt/www-newschool-top-5.png",
    ],
    description:
      "The content of Filmomdaresa was prepared with the cooperation of more than 150 experienced teachers, and of course it is approved by the best teachers of the country:",
    sourceCodeHref: "https://github.com/AhsanAlijs/FIlimo-School",
    liveWebsiteHref: "https://www.newschool.top/",
  },
  {
    name: "D S R",
    favicon:
      "https://dsr-production.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoD.dbded834.png&w=256&q=75",
    imageUrl: [
      "https://i.ibb.co/n3cT8LF/dsr-production-vercel-app.png",
      "https://i.ibb.co/Y7rCXZ7/dsr-production-vercel-app-dashboard.png",
    ],
    description: `Elevate your recruiting game with a custom player profile
        Our custom profiles are crafted to highlight each athlete's unique talents, academic dedication, and readiness to excel at the collegiate level, ensuring coaches have all the information they need to make informed recruiting decisions.`,
    sourceCodeHref: "https://github.com/AhsanAlijs/DSR-Ecommerce",
    liveWebsiteHref: "https://dsr-production.vercel.app/",
  },
  {
    name: "Bubber Chating App Dashboard",
    favicon:
      "https://raw.githubusercontent.com/AhsanAlijs/Chating-App-ReactJS-DashBoard/refs/heads/main/asset/logo.png?token=GHSAT0AAAAAACYNA4MEYHHIJARYTZHDGYWAZYBBPSA",
    imageUrl: [
      "https://i.ibb.co/vLjmHTp/bubberchatingappdashboard-netlify-app.png",
      // "/images/projects/covidTrackerMap.webp",
      // "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "The chatting app dashboard features a clean and intuitive user interface, allowing users to view and manage conversations seamlessly. It includes real-time messaging, user status indicators, and notifications for new messages. The dashboard is responsive and built with modern technologies like React.js, ensuring smooth performance. Custom themes and settings provide a personalized user experience.",
    sourceCodeHref:
      "https://github.com/AhsanAlijs/Chating-App-ReactJS-DashBoard",
    liveWebsiteHref: "https://bubberchatingappdashboard.netlify.app/",
  },
  {
    name: "Astreo Products",
    favicon: "https://astro-product.vercel.app/logo192.png",
    imageUrl: [
      "https://i.ibb.co/f167dww/astro-product-vercel-app-product-1.png",
      "https://i.ibb.co/BPBDNyn/astro-product-vercel-app-1.png",
      "https://i.ibb.co/869pppj/astro-product-vercel-app-product.png",
    ],
    description: `Services We Offer
      Transform your digital vision into reality with our expert software development services, crafting innovative solutions to propel your business into the future.


      Web Development
      Crafting dynamic and responsive websites that not only engage users but also elevate your online presence to new heights.


      Digital Marketing
      Driving growth through strategic digital marketing campaigns, we ensure your brand stands out in the digital landscape.


      SEO Services
      Optimizing your online visibility and rankings, our SEO services enhance your digital footprint and attract the right audience.`,
    sourceCodeHref: "https://astro-product.vercel.app/",
    liveWebsiteHref: "https://astro-product.vercel.app/",
  },
];

// siteMetadata.siteUrl
