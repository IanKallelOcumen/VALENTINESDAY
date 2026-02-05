import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, Heart } from "lucide-react";
import { useClickSound } from "../hooks/useClickSound";

export function NotFound() {
  const playClick = useClickSound();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              y: "100vh", 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              opacity: 0.3
            }}
            animate={{ 
              y: "-100vh",
              rotate: 360
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            <Heart 
              className="text-pink-300" 
              size={20 + Math.random() * 30}
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-9xl mb-8"
          >
            😿
          </motion.div>

          <motion.h1 
            className="mb-4 text-pink-600 drop-shadow-lg"
            style={{ fontFamily: 'Pacifico, cursive', fontSize: '4rem', lineHeight: '1.2' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Oops! Page Not Found
          </motion.h1>

          <motion.p
            className="mb-12 text-pink-500 drop-shadow-lg"
            style={{ fontFamily: 'Kalam, cursive', fontSize: '2rem' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Looks like you wandered off the path... 💕
          </motion.p>

          <Link to="/" onClick={playClick}>
            <motion.button
              className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-3xl cursor-pointer text-center border-4 border-white shadow-2xl relative overflow-hidden px-8 py-4"
              style={{
                fontFamily: 'Kalam, cursive',
                fontSize: '1.5rem',
                fontWeight: 700
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                y: [0, -10, 0],
                boxShadow: [
                  "0 10px 30px rgba(236, 72, 153, 0.4)",
                  "0 20px 40px rgba(236, 72, 153, 0.6)",
                  "0 10px 30px rgba(236, 72, 153, 0.4)"
                ]
              }}
              transition={{
                y: { duration: 2, repeat: Infinity },
                boxShadow: { duration: 2, repeat: Infinity }
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Home />
                Take Me Home 💖
              </span>
            </motion.button>
          </Link>

          <motion.div
            className="mt-12 flex justify-center gap-4 text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {['💕', '💖', '💗', '💓'].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
