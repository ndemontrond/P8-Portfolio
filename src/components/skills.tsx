"use client";

import React from "react";
import { delay, motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { text } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { once } from "events";
import { useLanguage } from "@/context/language-context";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};
export default function Skills() {
    const { ref } = useSectionInView("Skills", 0.5);

    const { language } = useLanguage();

    // Get the language-specific text based on the current language
    const currentText = text[language];

    return (
        <section
            id="skills"
            ref={ref}
            className="mb-28 max-w-[53] scroll-mt-28 text-center sm:mb-40"
        >
            <SectionHeading>{currentText.skillsSectionHeading}</SectionHeading>
            <ul className="flex flex-wrap gap-2 justify-center text-lg text-gray-800">
                {currentText.skillsData.map((skill, index) => (
                    <motion.li
                        className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}
