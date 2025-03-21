import { motion } from "framer-motion";
import CursorFollower from '../CursorFollower/CursorFollower';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 relative bg-white dark:bg-black">
      {/* Main content wrapper */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-normal leading-tight text-black dark:text-white mb-8"
          >
            At Bridge Group Solutions, we build digital assets and immersive experiences for purposeful brands.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300"
          >
            We're a boutique production studio focused on design, animation, and technology, constantly rethinking what digital craft can do for present-day ads and campaigns.
          </motion.p>
        </div>

        {/* Circular text */}
        <div className="relative w-40 h-40 flex justify-center items-center">
          <div className="animate-spin-slow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="circlePath"
                d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                fill="none"
              />
              <text className="text-xs">
                <textPath href="#circlePath" className="text-gray-400 dark:fill-white">
                — BRIDGE GROUP SOLUTIONS — FOR ALL THINGS DIGITAL PRODUCTION —
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">Scroll</p>
      </motion.div>

      <CursorFollower />
    </section>
  );
};

export default Hero;
