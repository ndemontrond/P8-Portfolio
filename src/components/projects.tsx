"use client";

import React, { Fragment, useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useActiveSectionContext } from "./active-section-context";
import { useInView } from "framer-motion";
export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: 0.75,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (isInView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Projects");
        }
    }, [isInView, setActiveSection, timeOfLastClick]);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <Fragment key={index}>
                        <Project {...project} />
                    </Fragment>
                ))}
            </div>
        </section>
    );
}
