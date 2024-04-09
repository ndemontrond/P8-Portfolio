"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion, useInView } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
    const { ref } = useSectionInView("About");

    console.log(useInView);
    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                My name is <span className="font-bold">Nicolas</span>, and as a
                junior web developer, , I&apos;m driven by a curiosity to
                explore and a passion to create outstanding digital experiences.
                With a solid grasp of HTML, CSS, and JavaScript, I&apos;m
                currently expanding my skills with advanced frameworks such as{" "}
                <span className="underline">React</span> and{" "}
                <span className="underline">Next.Js</span> to build dynamic,
                user-centric web applications. I thrive on problem-solving
                challenges and strive to push creative boundaries to deliver
                polished, innovative solutions.
            </p>
            <p>
                Beyond technical expertise, I bring a strong foundation in{" "}
                <span className="italic">UX/UI</span> principles, ensuring the
                projects I undertake not only look visually appealing but also
                provide seamless, intuitive user experiences. Continuously
                seeking to expand my knowledge, I actively engage in online
                courses and community to remain updated on industry trends and
                best practices.
            </p>
        </motion.section>
    );
}
