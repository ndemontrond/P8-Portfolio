// Context API
"use client";

import React, { useState, createContext, useContext } from "react";
import type { SectionName } from "@/lib/types";

// Define the context type
type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// Create the context with initial value of null
export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);

// Context provider component
export default function ActiveSectionContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // used to track the last click time to disable the observed temporalry when the user clicks on a link

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}
// Custom hook to use the context
export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);

    // Ensure the hook is used within the provider
    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}
