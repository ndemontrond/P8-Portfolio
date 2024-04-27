// context/language-context.tsx
"use client";
// LanguageProvider.tsx

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "français" | "english";

type LanguageContextProviderProps = {
    children: React.ReactNode;
};

type LanguageContextType = {
    language: Language;
    toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
    children,
}: LanguageContextProviderProps) {
    const [language, setLanguage] = useState<Language>("français");

    const toggleLanguage = () => {
        if (language === "français") {
            setLanguage("english");
            window.localStorage.setItem("language", "english");
            document.documentElement.classList.add("english");
        } else {
            setLanguage("français");
            window.localStorage.setItem("language", "français");
            document.documentElement.classList.remove("english");
        }
    };

    useEffect(() => {
        const localLanguage = window.localStorage.getItem(
            "language"
        ) as Language | null;

        if (localLanguage) {
            setLanguage(localLanguage);

            if (localLanguage === "english") {
                document.documentElement.classList.add("english");
            }
        }
    }, []);

    return (
        <LanguageContext.Provider
            value={{
                language,
                toggleLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (context === null) {
        throw new Error(
            "useLanguage must be used within a LanguageContextProvider"
        );
    }

    return context;
}