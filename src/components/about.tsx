"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
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
