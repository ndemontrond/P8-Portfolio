// src/app/page.tsx

import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import React from "react";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experiences from "@/components/experience";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <Skills />
            <Experiences />
        </main>
    );
}
