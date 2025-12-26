# 🌐 The Digital Playground | Personal Website

A highly interactive, "Bento Grid" style personal portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**.  
Inspired by the visual creativity of libraries like `react-bits`, this project serves as a playground for experimental UI effects.

![Project Preview](public/vite.svg) *Add a real screenshot here later!*

## ✨ Features

- **🍱 Bento Grid Layout**: A responsive, dashboard-style grid that adapts to any screen size.
- **🔦 Spotlight Cards**: Interactive cards that reveal a radial gradient on mouse hover.
- **🔓 Decrypted Text**: A Matrix-style text scrambling effect for the hero section.
- **⚓️ Macintosh Dock**: A smooth, magnifying dock for navigation links.
- **📜 Infinite Marquee**: A seamless scrolling ticker to showcase tech stack and skills.
- **⚡️ Performance First**: Powered by Vite for instant HMR and optimized builds.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/JummyJoeJackson/personal-website.git
    cd personal-website
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/
│   └── ui/            # Reusable UI bits (Spotlight, Dock, etc.)
├── lib/               # Utilities (cn helper)
├── App.jsx            # Main layout and grid assembly
└── index.css          # Global styles & Tailwind directives
```

## 🎨 Customization

You can easily tweak the animations in `tailwind.config.js` or modify the Framer Motion variants in individual components.

---

Built with ❤️ by [Diego](https://github.com/JummyJoeJackson)
