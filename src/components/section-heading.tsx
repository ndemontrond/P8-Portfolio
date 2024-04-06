import React from "react";

export default function SectionHeading({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            <h2 className="text-3xl font-medium capitalize mb-8">{children}</h2>
        </section>
    );
}
