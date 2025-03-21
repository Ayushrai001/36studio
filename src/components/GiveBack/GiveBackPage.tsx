import React from 'react';
import { motion } from "framer-motion";

export default function GiveBackPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black px-6 py-16 flex items-start justify-center text-black dark:text-white">
      <div className="max-w-4xl w-full space-y-10">
        {/* Section Header */}
        <div className="flex items-center gap-3">
          <span className="text-base font-medium">03</span>
          <span className="w-6 h-px bg-black dark:bg-white" />
          <span className="text-base font-medium uppercase">How we give back</span>
        </div>

        {/* Main Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 text-left"
        >
          <p className="text-xl leading-relaxed font-light">
            At Thirtysixstudio, we recognize that our industry can perpetuate
            harm. We believe we have to try and reverse some of these imbalances.
            That's why we're launching SS36, our local social sustainability hub.
          </p>

          <p className="text-xl leading-relaxed font-light">
            Through SS36, we reinvest some of our revenue and expertise into the
            communities that shape the culture and trends our field so heavily
            relies on.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
