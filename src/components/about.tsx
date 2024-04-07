"use client";

import React, { useRef, useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion, useInView } from "framer-motion";
import { useActiveSectionContext } from "./active-section-context";
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores magnam praesentium fuga ab pariatur impedit, suscipit
                repellendus qui! Veritatis quos veniam ab vel obcaecati suscipit
                ex dolores earum quisquam repudiandae.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique aut nobis, numquam quas voluptas fugit repellendus
                quisquam, facilis quibusdam nihil, voluptate minus perferendis
                praesentium reiciendis eligendi officiis inventore. Eum,
                numquam!
            </p>
        </motion.section>
    );
}
