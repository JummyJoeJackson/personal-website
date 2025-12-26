import React from 'react';
import { cn } from '../../lib/utils'; // Assuming cn utility is at src/lib/utils

const Marquee = ({ children, className, reverse, pauseOnHover = false, vertical = false }) => {
    return (
        <div className={cn(
            "flex overflow-hidden [--duration:40s] [--gap:1rem]",
            vertical ? "flex-col h-full w-full" : "flex-row w-full",
            // Add gradient mask for smooth fading effects
            vertical
                ? "[mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
                : "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
            className
        )}>
            <div
                className={cn(
                    "flex shrink-0 items-center justify-around gap-[--gap]",
                    vertical ? "flex-col animate-marquee-vertical h-max" : "flex-row animate-marquee w-max",
                    reverse && (vertical ? "animate-marquee-vertical-reverse" : "animate-marquee-reverse"),
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {children}
                {children}
            </div>
        </div>
    );
};

export default Marquee;
