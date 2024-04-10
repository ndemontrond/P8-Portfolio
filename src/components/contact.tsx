"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/action/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";
import { useLanguage } from "@/context/language-context";

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5);
    const { language } = useLanguage();

    // Define language-specific text
    const text = {
        français: {
            heading: "Me contacter",
            contactMessage: "Merci de me contacter directement à",
            email: "nicolas.demontrond@ipag.fr",
            orThroughForm: "ou avec ce formulaire",
            formPlaceholderEmail: "Votre email",
            formPlaceholderMessage: "Votre message",
            successMessage: "Email envoyé avec succès!",
            errorMessage: "Une erreur s'est produite. Veuillez réessayer.",
        },
        english: {
            heading: "Contact Me",
            contactMessage: "Please contact me directly at",
            email: "nicolas.demontrond@ipag.fr",
            orThroughForm: "or through this form",
            formPlaceholderEmail: "Your email",
            formPlaceholderMessage: "Your message",
            successMessage: "Email sent successfully!",
            errorMessage: "An error occurred. Please try again.",
        },
    };

    // Get the language-specific text based on the current language
    const currentText = text[language];

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading>{currentText.heading}</SectionHeading>

            <p className="text-gray-700 -mt-6 dark:text-white/80">
                {currentText.contactMessage}&nbsp;
                <a className="underline" href={`mailto:${currentText.email}`}>
                    {currentText.email}
                </a>
                &nbsp;{currentText.orThroughForm}.
            </p>

            <form
                className="mt-10 flex flex-col dark:text-black"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success("Email sent successfully!");
                }}
            >
                <input
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={50}
                    placeholder={currentText.formPlaceholderEmail}
                />
                <textarea
                    className=" h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder={currentText.formPlaceholderMessage}
                    required
                    maxLength={5000}
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
}
