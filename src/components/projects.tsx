"use client";

import React, { Fragment } from "react";
import SectionHeading from "./section-heading";
import { text } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

    const { language } = useLanguage();

    // Get the language-specific text based on the current language
    const currentText = text[language];

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>{currentText.projectSectionHeading}</SectionHeading>
            <div>
                {currentText.projectsData.map((project, index) => (
                    <Fragment key={index}>
                        <Project {...project} />
                    </Fragment>
                ))}
            </div>
        </section>
    );
}
