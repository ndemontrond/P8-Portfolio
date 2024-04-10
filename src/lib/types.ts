// src/lib/types.ts

import { text } from "@/lib/data";

export type Link = {
    name: string;
    hash: string;
};

export type Experience = {
    title: string;
    location: string;
    description: string;
    icon: React.ReactNode;
    date: string;
};

export type Text = {
    skillsSectionHeading: string;
    projectSectionHeading: string;
    experienceSectionHeading: string;
    links: Link[];
    experiencesData: Experience[];
    skillsData: string[];
};

export type Language = "français" | "english";

export type SectionName = (typeof text)[Language]["links"][number]["name"];