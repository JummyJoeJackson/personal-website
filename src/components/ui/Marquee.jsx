import React from 'react';
import { cn } from '../../lib/utils'; // Assuming cn utility is at src/lib/utils

const Marquee = ({ children, className, reverse, pauseOnHover = false, vertical = false }) => {
    return (
        <div className={cn(
            "flex overflow-hidden [--duration:40s] [--gap:1rem]",
            vertical ? "flex-col h-full w-full" : "flex-row w-full",
            className
        )}>
            <div
                className={cn(
                    "flex shrink-0 items-center justify-around gap-[--gap]",
                    vertical ? "flex-col animate-marquee-vertical h-max" : "flex-row animate-marquee w-max",
                    reverse && (vertical ? "animate-marquee-vertical-reverse" : "animate-marquee-reverse"),
                    pauseOnHover && "group-hover:[animation-play-state:paused]"
                )}
            >
                {children}
                {children}
            </div>
        </div>
    );
};

export default Marquee;
