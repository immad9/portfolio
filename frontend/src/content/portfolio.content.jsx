import { IoLogoReact } from "react-icons/io5";
import { TbBrandTypescript } from "react-icons/tb";
import { SiMui, SiNextdotjs } from "react-icons/si";
import { RiFirebaseLine, RiTailwindCssFill } from "react-icons/ri";
import { FaStripe } from "react-icons/fa";

// import the project images
import {PV_Glare, CO_Pilot, EzSignature, Trivexa, AD_Trade,} from "../assets/images/index"
const ProjectDetails = [
  {
    img: PV_Glare,
    siteName: "PV GlareCheck",
    text: "A web app where users enter their house details to quickly generate a solar glare analysis, helping them understand potential sunlight reflections and impact.",
    liveLink: "https://pv-glarecheck.com/",
    codeLink: "https://github.com/ahramay/solar.git/",
    tectnologyIcons: [{ icon: IoLogoReact, name: "React JS" }, { icon: TbBrandTypescript, name: "Typescript" }, { icon: SiMui, name: "Material UI" }, { icon: RiFirebaseLine, name: "Firebase Firestore" }, { icon: FaStripe, name: "Stripe Payment" },]
  },
  {
    img: EzSignature,
    siteName: "EzSignature",
    text: "A secure web app that lets users easily create, send, and sign documents online. Enables free electronic signatures anytime, anywhere — at work, home, or on the go.",
    liveLink: "http://ezsignature.org/",
    codeLink: "https://github.com/immad9/ezsignature.git",
    tectnologyIcons: [{ icon: SiNextdotjs, name: "Next JS" }, { icon: TbBrandTypescript, name: "Typescript" }, { icon: SiMui, name: "Material UI" }]
  },
  {
    img: AD_Trade,
    siteName: "AD Trade",
    text: "An admin dashboard where clients can add, manage, and track their selling and purchasing information. Connected with Firebase for secure real-time data storage and management.",
     liveLink: "https://inventory-beta-kohl.vercel.app/login",
    codeLink: "https://github.com/GhulamMohiudinN/Inventory.git",
    tectnologyIcons: [{ icon: SiNextdotjs, name: "Next JS" },{ icon: RiFirebaseLine, name: "Firebase Firestore" },{ icon: RiTailwindCssFill, name: "Tailwind CSS" }]
  }, 
  {
    img: Trivexa,
    siteName: "Trivexa",
    text: "A modern website built for a tech startup offering web development, app development, and UI/UX design services to help businesses build their digital presence.",
    liveLink: "https://trivexa-mu.vercel.app/",
    codeLink: "https://github.com/immad9/trivexa.git",
    tectnologyIcons: [{ icon: IoLogoReact, name: "React JS" }, { icon: TbBrandTypescript, name: "Typescript" }, { icon: SiMui, name: "Material UI" }]
  }, 
  {
    img: CO_Pilot,
    siteName: "Nav High",
    text: "An AI-powered web app built with Next.js, designed to work like a copilot that assists users with smart navigation and task guidance. (In progress)",
    liveLink: "https://co-pilot-pied.vercel.app/",
    codeLink: "https://github.com/immad9/co-pilot.git",
    tectnologyIcons: [{ icon: SiNextdotjs, name: "Next JS" }, { icon: TbBrandTypescript, name: "Typescript" }, { icon: SiMui, name: "Material UI" }]
  },
]

export { ProjectDetails }