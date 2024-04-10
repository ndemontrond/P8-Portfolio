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
        // const userLanguage = navigator.language || navigator.userLanguage;
        // const primaryLanguage = userLanguage.split("-")[0];
        // console.log(primaryLanguage);

        const localLanguage = window.localStorage.getItem(
            "language"
        ) as Language | null;

        if (localLanguage) {
            setLanguage(localLanguage);

            if (localLanguage === "english") {
                document.documentElement.classList.add("english");
            }
        }
        //else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //     setTheme("dark");
        //     document.documentElement.classList.add("dark");
        // }
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

// export const LanguageProvider: React.FC<LanguageProviderProps> = ({
//     children,
// }) => {
//     const [language, setLanguage] = useState("English");

//     const handleChangeLanguage = (selectedLanguage: string) => {
//         setLanguage(selectedLanguage);
//     };

//     return (
//         <LanguageContext.Provider value={{language, handleChangeLanguage}}>
//             {children}
//         </LanguageContext.Provider>
//     );
// };

// export function useLanguage() {
//     const context = useContext(LanguageContext);
//     if (!context) {
//         throw new Error("useLanguage must be used within a LanguageProvider");
//     }
//     return context;
// }
