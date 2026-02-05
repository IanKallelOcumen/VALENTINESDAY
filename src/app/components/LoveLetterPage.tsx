import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, Heart, Mail, Sparkles } from "lucide-react";
import { useClickSound } from "../hooks/useClickSound";

export function LoveLetterPage() {
  const playClick = useClickSound();

  return (
    <div className="min-h-screen p-8 relative">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              y: "100vh", 
              x: Math.random() * window.innerWidth,
              opacity: 0.3
            }}
            animate={{ 
              y: "-100vh",
              rotate: 360
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            <Heart 
              className="text-red-300" 
              size={25 + Math.random() * 30}
              fill="currentColor"
            />
          </motion.div>
        ))}
        {/* Sparkles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles className="text-yellow-300" size={18} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/home" onClick={playClick}>
            <motion.button
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                y: [0, -12, 0],
                boxShadow: [
                  "0 5px 20px rgba(168, 85, 247, 0.3)",
                  "0 15px 30px rgba(168, 85, 247, 0.5)",
                  "0 5px 20px rgba(168, 85, 247, 0.3)"
                ]
              }}
              transition={{
                y: { duration: 2.3, repeat: Infinity },
                boxShadow: { duration: 2.3, repeat: Infinity }
              }}
              className="bg-gradient-to-br from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full shadow-lg flex items-center gap-2 border-4 border-white"
              style={{ fontFamily: 'Kalam, cursive', fontSize: '1.2rem' }}
            >
              <Home className="w-6 h-6" />
              Back Home 🏠
            </motion.button>
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-pink-600 flex items-center gap-3 drop-shadow-lg"
            style={{ fontFamily: 'Pacifico, cursive', fontSize: '3.5rem' }}
          >
            <Mail className="w-12 h-12" />
            A Letter for You
          </motion.h1>

          <div className="w-32" />
        </div>

        {/* Letter envelope animation */}
        <motion.div
          initial={{ rotateX: 0 }}
          animate={{ y: [0, -8, 0], rotateX: [0, -5, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="mb-8"
        >
          <div className="bg-gradient-to-br from-red-400 to-red-500 rounded-t-3xl p-8 relative border-4 border-white shadow-2xl">
            <motion.div
              animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-7xl text-center drop-shadow-xl"
            >
              💌
            </motion.div>
          </div>
        </motion.div>

        {/* Letter content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl relative border-4 border-pink-200"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.95)), repeating-linear-gradient(transparent, transparent 30px, rgba(219,234,254,0.3) 30px, rgba(219,234,254,0.3) 31px)"
          }}
        >
          {/* Decorative hearts in corners */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-4 left-4"
          >
            <Heart className="text-pink-300 w-10 h-10" fill="currentColor" />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute top-4 right-4"
          >
            <Heart className="text-pink-300 w-10 h-10" fill="currentColor" />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute bottom-4 left-4"
          >
            <Heart className="text-pink-300 w-10 h-10" fill="currentColor" />
          </motion.div>
          <motion.div
            animate={{ rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-4 right-4"
          >
            <Heart className="text-pink-300 w-10 h-10" fill="currentColor" />
          </motion.div>

          <div className="space-y-6 text-gray-800 leading-relaxed">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-pink-600 mb-6" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '2.5rem' }}>
                Dear Fiona, 💕
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              style={{ fontFamily: 'Kalam, cursive', fontSize: '1.3rem' }}
            >
              I wanted to take a moment to tell you just how special you are to me. 
              Every single day with you is a gift that I treasure more than words can express.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              style={{ fontFamily: 'Kalam, cursive', fontSize: '1.3rem' }}
            >
              You make me laugh when I'm sad, you inspire me to be better, and you make even 
              the most ordinary moments feel magical. Your smile is the highlight of my day, 
              and your laugh is my favorite sound in the entire world. 🌟
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              style={{ fontFamily: 'Kalam, cursive', fontSize: '1.3rem' }}
            >
              I love how we can watch anime together, game together ALL THE TIME, share our love for My Melody, 
              Hangyodon, Tuxedo Sam, and Cinnamoroll, and just be completely ourselves around each other. 
              You understand me in ways that no one else does, and I'm so grateful for that. 💖
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              style={{ fontFamily: 'Kalam, cursive', fontSize: '1.3rem' }}
            >
              This Valentine's Day, I want you to know that you're not just my Valentine - 
              you're my best friend, my partner in crime, my favorite gaming buddy, and the person I want to share 
              all my adventures with. You make my world brighter, my days happier, and 
              my heart fuller. ✨
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              style={{ fontFamily: 'Kalam, cursive', fontSize: '1.3rem' }}
            >
              Thank you for being you. Thank you for all the little things you do that 
              make me fall for you over and over again. Thank you for choosing me. 🌸
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="pt-8"
            >
              <p className="text-pink-600 mb-2" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '2.5rem' }}>
                I love you so much! 💖
              </p>
              <p className="text-pink-500" style={{ fontFamily: 'Pacifico, cursive', fontSize: '1.8rem' }}>
                Happy Valentine's Day, my love! 🌹
              </p>
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-7xl mt-6 text-center"
              >
                💝
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-8 text-center"
        >
          <div className="flex justify-center gap-6 text-6xl">
            <motion.span 
              animate={{ rotate: [0, 15, -15, 0], y: [0, -10, 0] }} 
              transition={{ duration: 2, repeat: Infinity }}
            >
              💗
            </motion.span>
            <motion.span 
              animate={{ rotate: [0, -15, 15, 0], y: [0, -12, 0] }} 
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              💕
            </motion.span>
            <motion.span 
              animate={{ rotate: [0, 15, -15, 0], y: [0, -8, 0] }} 
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            >
              💖
            </motion.span>
            <motion.span 
              animate={{ rotate: [0, -15, 15, 0], y: [0, -14, 0] }} 
              transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
            >
              💝
            </motion.span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}