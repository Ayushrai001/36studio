import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';
import ScrollReveal from '../ScrollReveal';
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.fromTo(
      '.services-container',
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1, // Final state
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.services-container',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section className="services">
      <div className="services-container">
        <h3 className="services-subtitle">OUR SERVICES</h3>

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          containerClassName="services-title"
        >
          We provide you with captivating design, interactive animations, reliable code, and immaculate project coordination. Whether you need a campaign built from scratch or assistance at a specific phase, we've got you covered.
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;
