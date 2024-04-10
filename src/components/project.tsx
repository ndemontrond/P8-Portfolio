"use client";

// import { projectsData } from "@/lib/data";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { LuExternalLink } from "react-icons/lu";
import { useLanguage } from "@/context/language-context";
import { text } from "@/lib/data";

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    link,
}: (typeof currentText.projectsData)[number]) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });

    const { language } = useLanguage();

    // Get the language-specific text based on the current language
    const currentText = text[language];

    return (
        <motion.article
            ref={ref}
            style={{
                scale: scrollYProgress,
                opacity: scrollYProgress,
            }}
            className="group bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
        >
            <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
                <h3 className="text-2xl font-semibold flex justify-between">
                    {title}
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <LuExternalLink />
                    </a>
                </h3>
                <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                    {description}
                </p>
                <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                    {tags.map((tag, index) => (
                        <li
                            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                            key={index}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
            <Image
                src={imageUrl}
                alt="Project I worked on"
                quality={95}
                className="object-cover group-odd:object-left-top group-even:object-[146px_top] absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-[20rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
                style={{ objectPosition: "right left" }}
            />
        </motion.article>
    );
}
