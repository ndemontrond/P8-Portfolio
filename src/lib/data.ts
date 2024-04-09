// src/lib/data.ts

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import placeholder1 from "@/../public/placeholder1.jpg";
import placeholder2 from "@/../public/placeholder2.jpg";
import placeholder3 from "@/../public/placeholder3.jpg";
import monvieuxgrimoire from "@/../public/monvieuxgrimoire.png";
import kasa from "@/../public/kasa.png";
import sophiebluel from "@/../public/sophiebluel.png";
import booki from "@/../public/booki.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Web developer formation",
        location: "OpenClassroom",
        description: "Level 6 RNCP Title",
        icon: React.createElement(LuGraduationCap),
        date: "2023 - present",
    },
] as const;

export const projectsData = [
    {
        title: "mon vieux grimoire",
        description:
            "Backend for a book rating site using Node.js, Express, and MongoDB, implementing CRUD operations, secure data handling, and user authentication.",
        tags: ["Node.js", "Express", "MongoDB", "CRUD Operations", "API"],
        imageUrl: monvieuxgrimoire,
        link: "https://github.com/ndemontrond/P7-Dev-Web-livres",
    },
    {
        title: "kasa",
        description:
            "Frontend for a React application using React Router, focusing on data presentation, React components, and modern user experience.",
        tags: ["React", "Router", "Components", "UX", "Data Presentation"],
        imageUrl: kasa,
        link: "https://github.com/ndemontrond/kasa-openclassrooms",
    },
    {
        title: "sophie bluel",
        description:
            "A dynamic interior design website with JavaScript, integrating user events, DOM manipulation, and API communication.",
        tags: ["JavaScript", "User Event", "DOM Manipulation", "API"],
        imageUrl: sophiebluel,
        link: "https://github.com/ndemontrond/Portfolio-architecte-sophie-bluel",
    },
    {
        title: "booki",
        description:
            "A responsive travel agency homepage using HTML/CSS, emphasizing user experience across devices.",
        tags: ["HTML", "CSS", "Git"],
        imageUrl: booki,
        link: "https://github.com/ndemontrond/project-booki",
    },
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "Express",
    "API",
    "Python",
    "Framer Motion",
    "CRUD",
    "Sass",
] as const;
