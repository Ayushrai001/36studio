import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/animations.css';

gsap.registerPlugin(ScrollTrigger);

const SecondPage = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = textRef.current;
    const container = containerRef.current;

    if (text && container) {
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

      // Text animation
      gsap.fromTo(text,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: text,
            start: 'top center+=100',
            end: 'bottom center',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <>
      <div 
        ref={containerRef}
        className="min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center p-8"
      >
        <div 
          ref={textRef}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-black dark:text-white">
            Bridge Group Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Creating digital experiences that inspire and innovate
          </p>
        </div>
      </div>

      {/* Home Presentation Section */}
  

      {/* What We Do Section */}
      <div className="min-h-screen bg-white dark:bg-black flex flex-col p-8 lg:p-16">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <h2 className="text-lg font-medium text-black dark:text-white">01 — WHAT WE DO</h2>
            
            <div className="flex flex-col gap-8 md:gap-24 md:w-2/3">
              <div className="flex flex-col gap-8">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-black dark:text-white leading-tight max-w-4xl text-left">
                  We aim to elevate<br/>
                  digital production<br/>
                  in the advertising space,<br/>
                  bringing your ideas to life.
                </h3>
                
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl text-left">
                  As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver current digital work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage; 