import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function NewPage() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl">
        {/* Empty Left Side */}
        <div className="hidden md:block" />

        {/* Right Content Side */}
        <motion.div
          ref={textRef}
          className="flex flex-col justify-center text-black dark:text-white space-y-6 text-left"
        >
          <div>
            <h1 className="text-2xl md:text-3xl font-medium leading-snug">
              Our studio represents <br />
              today's modern world: <br />
              <span className="font-semibold">
                progressive, inclusive, <br />
                and socially engaged.
              </span>
            </h1>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Thirtysixstudio was founded by Gita Jagessar, a queer person of color
            and seasoned production director from Amsterdam. With over 13 years of
            experience in digital advertising, Gita has worked with renowned global
            brands such as Netflix, Converse, Travis Scott, Ben & Jerry's, Adidas,
            Cash App, and many more.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-1.5 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-full text-xs font-medium transition-all self-start"
          >
            LEARN MORE
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}