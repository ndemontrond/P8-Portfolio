// ExperienceTimelineElement.js

import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type TimelineElementProps = {
    isInView: boolean;
    theme: string;
    date: string;
    icon: JSX.Element;
    title: string;
    location: string;
    description: string;
};

export default function TimelineElement({
    isInView,
    theme,
    date,
    icon,
    title,
    location,
    description,
}: TimelineElementProps) {
    return (
        <VerticalTimelineElement
            visible={isInView}
            contentStyle={{
                background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
                borderRight:
                    theme === "light"
                        ? "0.4rem solid  #9ca3af"
                        : "0.4rem solid  rgba(255, 255, 255, 0.5)",
            }}
            date={date}
            icon={icon}
            iconStyle={{
                background: theme === "light" ? "white" : "#111827",
                fontSize: "1.5rem",
                boxShadow:
                    theme === "light"
                        ? "0 0 0 4px #e5e7eb"
                        : "0 0 0 4px #1d2432",
            }}
            iconClassName="border-black shadow-none shadow-black"
            dateClassName="font-medium text-sm text-gray-700 dark:text-white/75"
            className="vertical-timeline-element--work"
        >
            <h3 className="font-semibold capitalize">{title}</h3>
            <p className="font-normal mt-0">{location}</p>
            <p className="font-normal mt-1 text-gray-700 dark:text-white/75">
                {description}
            </p>
        </VerticalTimelineElement>
    );
}
