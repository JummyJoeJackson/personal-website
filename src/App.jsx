import React from 'react';
import SpotlightCard from './components/ui/SpotlightCard';
import DecryptedText from './components/ui/DecryptedText';
import Dock from './components/ui/Dock';
import Marquee from './components/ui/Marquee';
import { Home, User, Briefcase, FileText, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const UWaterlooLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM6.5 7H8.5L10.5 13L12.5 7H14.5L11.5 17H9.5L6.5 7ZM17.5 7H15.5L13.5 13L11.5 7H9.5L12.5 17H14.5L17.5 7Z" />
    {/* Simplified W/Shield shape representation for demo purposes since we can't fetch external assets perfectly */}
    <path fillRule="evenodd" clipRule="evenodd" d="M4.17 6.04001L10.25 19.34L11.99 15.34L13.73 19.34L19.82 6.04001H17.47L13.84 13.97L13.06 12.18L15.65 6.04001H13.47L12.01 9.53001L10.54 6.04001H8.34998L10.94 12.18L10.16 13.97L6.51998 6.04001H4.17Z" />
  </svg>
);

const RocketBit = () => {
  const [isLaunching, setIsLaunching] = React.useState(false);

  const handleLaunch = () => {
    if (isLaunching) return;
    setIsLaunching(true);
    setTimeout(() => setIsLaunching(false), 2000);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-full w-full cursor-pointer hover:bg-neutral-800/50 rounded-xl transition-colors p-2"
      onClick={handleLaunch}
    >
      <motion.div
        animate={isLaunching ? { y: -200, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        initial={{ y: 0, opacity: 1 }}
        onAnimationComplete={() => {
          if (isLaunching) {
            // Reset happens via state change which triggers re-render to initial, 
            // but we want it to 're-appear' presumably or snap back.
            // framer-motion manages this gracefully when state changes back.
          }
        }}
      >
        <span className="text-4xl select-none">🚀</span>
      </motion.div>
      <p className="text-xs text-neutral-500 mt-2 font-mono select-none">
        {isLaunching ? "LIFTING OFF..." : "LIFT OFF"}
      </p>
    </div>
  );
};

const dockItems = [
  { icon: Home, label: 'Home', href: '#' },
  { icon: User, label: 'About', href: '#' },
  { icon: Briefcase, label: 'Projects', href: '#' },
  { icon: FileText, label: 'Blog', href: '#' },
  { icon: Code, label: 'Source', href: '#' },
];

const skills = ['React', 'Next.js', 'Tailwind', 'Node.js', 'PostgreSQL', 'Framer Motion', 'Three.js', 'WebGL', 'TypeScript', 'Docker', 'AWS'];

function App() {
  return (
    <div className="min-h-screen bg-black p-4 md:p-8 font-sans text-white/90 selection:bg-purple-500/30 relative overflow-hidden flex flex-col">

      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-4 md:h-[800px] flex-grow">

        {/* Hero Section */}
        <SpotlightCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between group">
          <div className="h-full flex flex-col justify-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              <span className="text-neutral-500 text-2xl md:text-3xl font-normal block mb-2">Hello, I'm</span>
              <DecryptedText text="Diego" className="text-white" />
            </h1>
            <p className="mt-4 text-neutral-400 max-w-md text-lg">
              Welcome to my digital playground. I build interactive web experiences that <span className="text-purple-400 font-semibold">wow</span>.
            </p>
          </div>
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
            <div className="w-32 h-32 bg-purple-500 rounded-full blur-[80px]" />
          </div>
        </SpotlightCard>

        {/* Location / Status Card */}
        <SpotlightCard className="md:col-span-1 md:row-span-1 flex items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-neutral-400">
            <UWaterlooLogo className="w-12 h-12 text-yellow-500" />
            <span className="font-mono text-sm">Waterloo, Canada</span>
            <span className="relative flex h-3 w-3 mt-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </div>
        </SpotlightCard>

        {/* Interactive Element A */}
        <SpotlightCard className="md:col-span-1 md:row-span-1 flex items-center justify-center bg-neutral-900/80">
          <RocketBit />
        </SpotlightCard>

        {/* Big Project Feature */}
        <SpotlightCard className="md:col-span-2 md:row-span-2 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 group-hover:scale-105 transition-transform duration-500" />

          <div className="relative z-20 h-full flex flex-col justify-end p-4">
            <h3 className="text-2xl font-bold text-white mb-2">Project Alpha</h3>
            <p className="text-neutral-300 mb-4 line-clamp-2">
              A revolutionary platform for something cool. Built with Next.js, WebGL and magic.
            </p>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-white/10 rounded text-xs text-neutral-300 border border-white/5">React</span>
              <span className="px-2 py-1 bg-white/10 rounded text-xs text-neutral-300 border border-white/5">WebGL</span>
            </div>
          </div>
        </SpotlightCard>

        {/* Tech Stack / Skills - Replaced with Marquee */}
        <SpotlightCard className="md:col-span-1 md:row-span-2 flex flex-col overflow-hidden">
          <h3 className="text-xl font-bold text-neutral-200 mb-4 px-2">Stack</h3>
          <div className="flex-grow flex items-center justify-center w-full px-2">
            <Marquee className="[--duration:20s] py-4 h-full" pauseOnHover vertical>
              {skills.map((tech) => (
                <span key={tech} className="mx-auto px-4 py-2 bg-neutral-800 rounded-full text-sm text-neutral-400 border border-neutral-700 hover:border-neutral-500 hover:text-white transition-colors cursor-default whitespace-nowrap w-40 text-center">
                  {tech}
                </span>
              ))}
            </Marquee>
          </div>
        </SpotlightCard>

        {/* Contact CTA */}
        <SpotlightCard className="md:col-span-1 md:row-span-1 bg-purple-900/10 border-purple-500/20 group hover:border-purple-500/50" spotlightColor="rgba(168, 85, 247, 0.25)">
          <div className="h-full flex flex-col items-center justify-center text-center cursor-pointer">
            <div className="mb-2 p-3 bg-purple-500/10 rounded-full text-purple-400 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="text-purple-300 font-bold group-hover:text-purple-200">Contact Me</div>
          </div>
        </SpotlightCard>

      </div>

      {/* Dock Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <Dock items={dockItems} />
      </div>

    </div>
  );
}

export default App;
