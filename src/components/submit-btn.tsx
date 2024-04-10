import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { useLanguage } from "@/context/language-context";

export default function SubmitBtn() {
    const { pending } = useFormStatus();
    const { language } = useLanguage();

    // Define language-specific text
    const text = {
        français: {
            submit: "Me Contacter",
            contact1: "Je m'appelle ",
        },
        english: {
            submit: "Contact Me",
            contact1: "My name is ",
        },
    };

    // Get the language-specific text based on the current language
    const currentText = text[language];
    return (
        <button
            type="submit"
            className="group flex self-center items-center justify-center gap-2 h-[3rem] w-[9rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10 align-self-middle"
            disabled={pending}
        >
            {pending ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
            ) : (
                <>
                    {currentText.submit}
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
            )}
        </button>
    );
}
