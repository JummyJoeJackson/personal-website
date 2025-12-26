import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Dock = ({ items, className = "" }) => {
    const mouseX = useMotionValue(Infinity);

    return (
        <div className={`mx-auto flex h-16 items-end gap-4 rounded-2xl bg-neutral-900/50 border border-white/10 px-4 pb-3 ${className}`}
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
        >
            {items.map((item, i) => (
                <DockIcon key={i} mouseX={mouseX} icon={item.icon} href={item.href} label={item.label} />
            ))}
        </div>
    );
};

function DockIcon({ mouseX, icon: Icon, href, label }) {
    const ref = useRef(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.a
            href={href}
            ref={ref}
            style={{ width }}
            className="aspect-square w-10 cursor-pointer rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center hover:bg-neutral-700 transition-colors group relative"
        >
            <Icon className="h-2/3 w-2/3 text-neutral-400 group-hover:text-white transition-colors" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-auto p-2 min-w-max rounded-md bg-neutral-900 border border-white/10 text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100 shadow-lg z-50 pointer-events-none">
                {label}
            </span>
        </motion.a>
    );
}

export default Dock;
