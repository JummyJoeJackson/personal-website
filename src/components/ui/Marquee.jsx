import React from 'react';
import { cn } from '../../lib/utils'; // Assuming cn utility is at src/lib/utils

const Marquee = ({ children, className, reverse, pauseOnHover = false }) => {
    return (
        <div className={cn("flex w-full overflow-hidden [--duration:40s] [--gap:1rem]", className)}>
            <div
                className={cn(
                    "flex w-max shrink-0 items-center justify-around gap-[--gap] animate-marquee",
                    reverse && "animate-marquee-reverse",
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
