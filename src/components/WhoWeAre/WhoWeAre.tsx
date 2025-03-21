import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
console.log("WhoWeAre");
const WhoWeAre = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      // Initial animation for the container
      gsap.fromTo(container,
        { opacity: 0 },
        { 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: container,
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-white dark:bg-black flex flex-col p-8 lg:p-16"
    >
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          <h2 className="text-lg font-medium text-black dark:text-white">02 — OUR STORY</h2>
          
          <div className="flex flex-col gap-8 md:gap-24 md:w-2/3">
            <div className="flex flex-col gap-8">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black dark:text-white leading-tight max-w-4xl text-left">
                We are a team of<br/>
                creative thinkers<br/>
                and problem solvers,<br/>
                driven by innovation.
              </h3>
              
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl text-left">
                With years of experience in digital solutions, our diverse team brings together expertise from various fields to create exceptional digital experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre; 