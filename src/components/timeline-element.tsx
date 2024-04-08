// ExperienceTimelineElement.js

import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function TimelineElement(
    
    {
    isInView,
    theme,
    date,
    icon,
    title,
    location,
    description,
}) {
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
                background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
            }}
            dateClassName="font-medium text-sm text-gray-700 dark:text-white/75"
            // className="mb-6"
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
