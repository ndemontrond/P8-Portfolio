// src/lib/data.ts

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import monvieuxgrimoire from "@/../public/monvieuxgrimoire.png";
import kasa from "@/../public/kasa.png";
import sophiebluel from "@/../public/sophiebluel.png";
import booki from "@/../public/booki.png";


export const text = {
    français: {
        skillsSectionHeading: "Compétences",
        projectSectionHeading: "Mes Projets",
        experienceSectionHeading: "Mes Expériences",
        links: [
            {
                name: "Accueil",
                hash: "#home",
            },
            {
                name: "À propos",
                hash: "#about",
            },
            {
                name: "Projets",
                hash: "#projects",
            },
            {
                name: "Compétences",
                hash: "#skills",
            },
            {
                name: "Expérience",
                hash: "#experience",
            },
            {
                name: "Contact",
                hash: "#contact",
            },
        ],
        experiencesData: [
            {
                title: "Formation de développeur Web",
                location: "OpenClassroom",
                description: "Titre RNCP de niveau 6",
                icon: React.createElement(LuGraduationCap),
                date: "2023 - présent",
            },
        ],
        projectsData: [
            {
                title: "mon vieux grimoire",
                description:
                    "Backend pour un site de notation de livres utilisant Node.js, Express et MongoDB, implémentant des opérations CRUD, une manipulation sécurisée des données et une authentification utilisateur.",
                tags: [
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "Opérations CRUD",
                    "API",
                ],
                imageUrl: monvieuxgrimoire,
                link: "https://github.com/ndemontrond/P7-Dev-Web-livres",
            },
            {
                title: "kasa",
                description:
                    "Frontend pour une application React utilisant React Router, axée sur la présentation des données, les composants React et l'expérience utilisateur moderne.",
                tags: [
                    "React",
                    "Router",
                    "Composants",
                    "UX",
                    "Présentation des données",
                ],
                imageUrl: kasa,
                link: "https://github.com/ndemontrond/kasa-openclassrooms",
            },
            {
                title: "sophie bluel",
                description:
                    "Un site Web dynamique de design d'intérieur avec JavaScript, intégrant des événements utilisateur, la manipulation du DOM et la communication avec les API.",
                tags: [
                    "JavaScript",
                    "Événement utilisateur",
                    "Manipulation du DOM",
                    "API",
                ],
                imageUrl: sophiebluel,
                link: "https://github.com/ndemontrond/Portfolio-architecte-sophie-bluel",
            },
            {
                title: "booki",
                description:
                    "Une page d'accueil réactive d'agence de voyage utilisant HTML/CSS, mettant l'accent sur l'expérience utilisateur sur tous les appareils.",
                tags: ["HTML", "CSS", "Git"],
                imageUrl: booki,
                link: "https://github.com/ndemontrond/project-booki",
            },
        ],
        skillsData: [
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
        ],
    },
    english: {
        skillsSectionHeading: "Skills",
        projectSectionHeading: "My Projects",
        experienceSectionHeading: "My Experiences",
        links: [
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
        ],

        experiencesData: [
            {
                title: "Web developer formation",
                location: "OpenClassroom",
                description: "Level 6 RNCP Title",
                icon: React.createElement(LuGraduationCap),
                date: "2023 - present",
            },
        ],

        projectsData: [
            {
                title: "mon vieux grimoire",
                description:
                    "Backend for a book rating site using Node.js, Express, and MongoDB, implementing CRUD operations, secure data handling, and user authentication.",
                tags: [
                    "Node.js",
                    "Express",
                    "MongoDB",
                    "CRUD Operations",
                    "API",
                ],
                imageUrl: monvieuxgrimoire,
                link: "https://github.com/ndemontrond/P7-Dev-Web-livres",
            },
            {
                title: "kasa",
                description:
                    "Frontend for a React application using React Router, focusing on data presentation, React components, and modern user experience.",
                tags: [
                    "React",
                    "Router",
                    "Components",
                    "UX",
                    "Data Presentation",
                ],
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
        ],

        skillsData: [
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
        ],
    },
};

 // Default to French


// // Update experiencesData based on the language index
// experiencesData[0] = {
//     title: currentText.experiencesData[languageIndex].title,
//     location: currentText.experiencesData[languageIndex].location,
//     description: currentText.experiencesData[languageIndex].description,
//     icon: React.createElement(LuGraduationCap),
//     date: currentText.experiencesData[languageIndex].date,
// };