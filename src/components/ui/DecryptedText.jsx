import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const DecryptedText = ({ text, speed = 50, className = "" }) => {
    const [displayText, setDisplayText] = useState("");
    const [isScrambling, setIsScrambling] = useState(false);

    useEffect(() => {
        // Initial scramble on mount
        scramble();
    }, [text]);

    const scramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
                setIsScrambling(false);
            }

            iteration += 1 / 2; // Slower reveal
        }, speed);
    };

    return (
        <span
            className={`inline-block font-mono cursor-default ${className}`}
            onMouseEnter={scramble}
        >
            {displayText || text}
        </span>
    );
};

export default DecryptedText;
