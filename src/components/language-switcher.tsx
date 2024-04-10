"use client";

import CIcon from "@coreui/icons-react";
import { cifFr, cifUs } from "@coreui/icons";

// import { BsMoon, BsSun } from "react-icons/bs";
import { useLanguage } from "@/context/language-context";
export default function LanguageSwitch() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            className="fixed bottom-24 right-5 w-[4rem] h-[4rem] bg-opacity-80 shadow-2xl flex items-center justify-center hover:scale-115 active:scale-105 transition-all z-50"
            onClick={toggleLanguage}
        >
            {language === "français" ? (
                <CIcon icon={cifFr} size="xl" />
            ) : (
                <CIcon icon={cifUs} size="xl" />
            )}
        </button>
    );
}