"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "../context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { useLanguage } from "@/context/language-context";
export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    const { language } = useLanguage();

    // Define language-specific text
    const text = {
        français: {
            intro1: "Bonjour, je m'appelle Nicolas.",
            intro2: "Je suis un ",
            intro3: "développeur junior. ",
            intro4: "J'apprécie créer des ",
            intro5: "sites et applications. ",
            intro6: "Je me concentre sur ",
            intro7: "React (Next.js)",
            contact: "Me contacter ici",
            cv: "Télécharger CV",
        },
        english: {
            intro1: "Hello, I'm Nicolas.",
            intro2: "I'm a ",
            intro3: "junior developer. ",
            intro4: "I enjoy building ",
            intro5: "sites & apps. ",
            intro6: "My focus is ",
            intro7: "React (Next.js)",
            contact: "Contact me here",
            cv: "Download CV",
        },
    };

    // Get the language-specific text based on the current language
    const currentText = text[language];

    return (
        <section
            ref={ref}
            id="home"
            className="mt-28 sm:mt-4 mb-28 max-w-[53rem] text-center sm:mb-0 scroll-mt-[100rem]"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1711861982569-565113102217?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <motion.span
                        className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.h1
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl pt-[5rem]"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">{currentText.intro1}</span>{" "}
                {currentText.intro2}
                <span className="font-bold">{currentText.intro3}</span>
                {currentText.intro4}
                <span className="italic">{currentText.intro5}</span>
                {currentText.intro6}
                <span className="underline">{currentText.intro7}</span>.
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                >
                    {currentText.contact}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="/CV.pdf"
                    download
                >
                    {currentText.cv}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    className="bg-white p-4  text-gray-700 flex items-center gap-2 rounded-full focus:scale-115 hover:scale-115 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://www.linkedin.com/in/nicolas-demontrond-101bb9a4/"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>

                <a
                    className="bg-white p-4  text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-115 hover:scale-115 hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/ndemontrond"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    );
}
