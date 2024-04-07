// Context api

"use client";

import React, { useState, createContext, useContext } from "react";
import { links } from "@/lib/data";

export const ActiveSectionContext = createContext<{
    activeSection: (typeof links)[number]["name"];
    setActiveSection: React.Dispatch<
        React.SetStateAction<(typeof links)[number]["name"]>
    >;
}| null>(null);

export default function ActiveSectionContextProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [activeSection, setActiveSection] =
        useState<(typeof links)[number]["name"]>("Home");

    return (
        <ActiveSectionContext.Provider
            value={{ activeSection, setActiveSection }}
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