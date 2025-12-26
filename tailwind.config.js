/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // We'll add custom fonts later
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                // Define custom colors here if needed
            },
            animation: {
                marquee: "marquee var(--duration) linear infinite",
                "marquee-reverse": "marquee-reverse var(--duration) linear infinite",
                "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
            },
            keyframes: {
                marquee: {
                    from: { transform: "translateX(0)" },
                    to: { transform: "translateX(calc(-100% - var(--gap)))" },
                },
                "marquee-reverse": {
                    from: { transform: "translateX(calc(-100% - var(--gap)))" },
                    to: { transform: "translateX(0)" },
                },
                "marquee-vertical": {
                    from: { transform: "translateY(0)" },
                    to: { transform: "translateY(calc(-100% - var(--gap)))" },
                },
            },
        },
    },
    plugins: [],
}
