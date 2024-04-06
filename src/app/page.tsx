// src/app/page.tsx

import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import React from "react";

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Intro />
            <SectionDivider />
        </main>
    );
}
