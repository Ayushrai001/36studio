import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CursorFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!followerRef.current) return;

    const follower = followerRef.current;

    // Initial follower setup
    gsap.set(follower, {
      xPercent: -50,
      yPercent: -50,
      opacity: 1
    });

    // Mouse move animation
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(follower, {
        duration: 0.8,
        overwrite: "auto",
        x: e.clientX,
        y: e.clientY,
        ease: 'power3.out',
      });
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={followerRef}
      className="fixed top-0 left-0 opacity-0 w-4 h-4 pointer-events-none rounded-full bg-red-500"
      style={{ display: 'block' }}
    />
  );
};

export default CursorFollower; 