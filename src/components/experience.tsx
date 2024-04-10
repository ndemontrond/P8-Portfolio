// ExperienceTimeline.tsx

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import {
    VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { text } from "@/lib/data";
import { useTheme } from "@/context/theme-context";
import TimelineElement from "./timeline-element";
import { useLanguage } from "@/context/language-context";

export default function ExperienceTimeline() {
    const { ref, isInView } = useSectionInView("Experience", 0.5);
    const { theme } = useTheme();
    const { language } = useLanguage();

    // Get the language-specific text based on the current language
    const currentText = text[language];

    return (
        <section
            id="experience"
            ref={ref}
            className="scroll-mt-28 mb-28 sm:mb-40 leading-8 place-self-stretch"
        >
            <SectionHeading>{currentText.experienceSectionHeading}</SectionHeading>
            <VerticalTimeline lineColor="">
                {currentText.experiencesData.map((item, index) => (
                    <TimelineElement
                        key={index}
                        isInView={isInView}
                        theme={theme}
                        {...item}
                    />
                ))}
            </VerticalTimeline>
        </section>
    );
}