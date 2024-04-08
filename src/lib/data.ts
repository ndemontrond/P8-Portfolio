// src/lib/data.ts

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import placeholder1 from "@/../public/placeholder1.jpg";
import placeholder2 from "@/../public/placeholder2.jpg";
import placeholder3 from "@/../public/placeholder3.jpg";

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
        title: "",
        location: "",
        description:
            "lorem ipsum dolor sit amet consectetur adipiscing elit sodales",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "title placeholder",
        location: "location placeholder",
        description:
            "lorem ipsum dolor sit amet consectetur adipiscing elit sodales",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "",
        location: "",
        description:
            "lorem ipsum dolor sit amet consectetur adipiscing elit sodales",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "placeholder1",
        description:
            "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
        imageUrl: placeholder1,
    },
    {
        title: "placeholder2",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
        imageUrl: placeholder2,
    },
    {
        title: "placeholder3",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
        imageUrl: placeholder3,
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
    "PostgreSQL",
    "Python",
    "Framer Motion",
] as const;
