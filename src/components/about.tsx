"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion, useInView } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";

export default function About() {
    const { ref } = useSectionInView("About");

    const { language } = useLanguage();

    // Define language-specific text
    const text = {
        français: {
            heading: "Me Contacter",
            contact1: "Je m'appelle ",
            contact2: "Nicolas",
            contact3:
                " et en tant que développeur web junior, je suis animé par une curiosité d'exploration et une passion pour créer des expériences numériques exceptionnelles. Avec une solide maîtrise du HTML, du CSS et du JavaScript, j'élargis actuellement mes compétences avec des frameworks avancés tels que",
            contact4: "React",
            contact5: "et",
            contact6: "Next.js",
            contact7:
                "pour construire des applications web dynamiques et centrées sur l'utilisateur. Je prospère sur les défis de résolution de problèmes et m'efforce de repousser les limites créatives pour proposer des solutions innovantes et soignées.",
            contact8:
                "Au-delà de l'expertise technique, je possède une solide base dans les principes",
            contact9: "UX/UI",
            contact10:
                ", assurant que les projets que j'entreprends non seulement ont un aspect visuellement attrayant mais offrent également des expériences utilisateur fluides et intuitives. Cherchant continuellement à élargir mes connaissances, je participe activement à des cours en ligne et à la communauté pour rester à jour sur les tendances et les meilleures pratiques de l'industrie.",
        },
        english: {
            heading: "Contact Me",
            contact1: "My name is ",
            contact2: "Nicolas",
            contact3:
                ", and as a junior web developer, , I'm driven by a curiosity to explore and a passion to create outstanding digital experiences. With a solid grasp of HTML, CSS, and JavaScript, I'm currently expanding my skills with advanced frameworks such as",
            contact4: "React",
            contact5: "and ",
            contact6: "Next.Js",
            contact7:
                " to build dynamic, user-centric web applications. I thrive on problem-solving challenges and strive to push creative boundaries to deliver polished, innovative solutions.",
            contact8:
                "Beyond technical expertise, I bring a strong foundation in",
            contact9: "UX/UI",
            contact10:
                " principles, ensuring the projects I undertake not only look visually appealing but also provide seamless, intuitive user experiences. Continuously seeking to expand my knowledge, I actively engage in online courses and community to remain updated on industry trends and best practices.",
        },
    };

    // Get the language-specific text based on the current language
    const currentText = text[language];

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>{currentText.heading}</SectionHeading>
            <p className="mb-3">
                {currentText.contact1}
                <span className="font-bold">{currentText.contact2}</span>
                {currentText.contact3}{" "}
                <span className="underline">{currentText.contact4}</span>{" "}
                {currentText.contact5}{" "}
                <span className="underline">{currentText.contact6}</span>
                {currentText.contact7}
            </p>
            <p>
                {currentText.contact8}{" "}
                <span className="italic">{currentText.contact9}</span>{" "}
                {currentText.contact10}
            </p>
        </motion.section>
    );
}
