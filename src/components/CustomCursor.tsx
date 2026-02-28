"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
};

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mounted, setMounted] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setMounted(true);
    let sparkleId = 0;
    let lastX = 0;
    let lastY = 0;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const dist = Math.sqrt(Math.pow(e.clientX - lastX, 2) + Math.pow(e.clientY - lastY, 2));

      // Emit sparkles based on distance moved
      if (dist > 15) {
        const newSparkle: Sparkle = {
          id: sparkleId++,
          x: e.clientX + (Math.random() * 20 - 10),
          y: e.clientY + (Math.random() * 20 - 10),
          size: Math.random() * 6 + 2, // 2px to 8px
          color: Math.random() > 0.5 ? "#ffffff" : "#aaaaaa",
        };

        setSparkles((prev) => [...prev, newSparkle]);

        setTimeout(() => {
          setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
        }, 800);
        
        lastX = e.clientX;
        lastY = e.clientY;
      }
      
      // Check if hovering clickable element
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a') !== null || 
                          target.closest('button') !== null ||
                          window.getComputedStyle(target).cursor === 'pointer';
      setIsHovering(isClickable);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden lg:block overflow-hidden">
      {/* Sparkles */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle-fall pointer-events-none"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            backgroundColor: sparkle.color,
            boxShadow: '0 0 2px rgba(0,0,0,0.5)'
          }}
        />
      ))}
      {/* Custom Pointer */}
      <div 
        className={`absolute border-2 border-white bg-black pointer-events-none mix-blend-difference z-[99999] opacity-100 ${isClicking ? 'scale-75' : 'scale-100'} ${isHovering ? 'w-8 h-8 rounded-full' : 'w-5 h-5 rounded-none'}`}
        style={{
          left: position.x,
          top: position.y,
          transform: `translate(-50%, -50%) ${isHovering ? '' : 'rotate(45deg)'}`,
        }}
      />
    </div>,
    document.body
  );
}
