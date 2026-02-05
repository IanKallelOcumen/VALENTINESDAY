import { Outlet } from "react-router";
import { BackgroundMusic } from "./BackgroundMusic";
import { motion } from "motion/react";

// Floating hearts component - reduced for performance
function FloatingHearts() {
  const hearts = Array.from({ length: 8 }, (_, i) => i);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((i) => (
        <motion.div
          key={i}
          className="absolute text-4xl md:text-5xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            opacity: 0.5,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: -100,
            rotate: 360,
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: Math.random() * 8 + 18,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          style={{
            left: `${(i * 12.5) + Math.random() * 10}%`,
          }}
        >
          {['💕', '💖', '💗', '💓', '💝', '❤️'][i % 6]}
        </motion.div>
      ))}
    </div>
  );
}

// Floating sparkles component - reduced for performance
function FloatingSparkles() {
  const sparkles = Array.from({ length: 12 }, (_, i) => i);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {sparkles.map((i) => (
        <motion.div
          key={i}
          className="absolute text-xl md:text-2xl"
          style={{
            left: `${(i * 8.33) + Math.random() * 8}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 2 + 3,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>
      ))}
    </div>
  );
}

// Animated gradient orbs - simplified
function GradientOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: '10%', left: '10%' }}
      />
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-red-400 to-pink-500 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: '50%', right: '10%' }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-rose-400 to-red-400 blur-3xl"
        animate={{
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: '15%', left: '25%' }}
      />
    </div>
  );
}

export function Root() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-pink-50 to-red-50">
      {/* Background flair elements */}
      <GradientOrbs />
      <FloatingHearts />
      <FloatingSparkles />
      
      {/* Main content */}
      <div className="relative z-10">
        <BackgroundMusic />
        <Outlet />
      </div>
    </div>
  );
}