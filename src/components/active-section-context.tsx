// Context api

"use client";

import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

export const ActiveSectionContext = createContext<{
    activeSection: (typeof links)[number]["name"];
    setActiveSection: React.Dispatch<
        React.SetStateAction<(typeof links)[number]["name"]>
    >;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}| null>(null);

export default function ActiveSectionContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [activeSection, setActiveSection] =
        useState<(typeof links)[number]["name"]>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // used to track the last click time to disable the observed temporalry when the user clicks on a link

    return (
        <ActiveSectionContext.Provider
            value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext); 

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        );
    }

    return context;
}