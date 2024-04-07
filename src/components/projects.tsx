"use client";

import React, { Fragment, useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useActiveSectionContext } from "./active-section-context";
import { useInView } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5);

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
