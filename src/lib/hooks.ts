import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useActiveSectionContext } from "@/components/active-section-context";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, amount = 0.75) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (isInView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [isInView, setActiveSection, timeOfLastClick, sectionName]);

    return { ref, isInView };
}