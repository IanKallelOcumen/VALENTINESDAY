import { Link, useNavigate } from "react-router";
import { motion } from "motion/react";
import { Heart, Sparkles, Gift, Camera, Mail, List, RotateCcw } from "lucide-react";
import { useClickSound } from "../hooks/useClickSound";
import hangyodonImg from "figma:asset/0459ebf1a1f85f10f3abad1f7cad5fcecef6887b.png";
import mikuImg from "figma:asset/0368e44f274159efd96c7f8a45b90d034051d60b.png";
import tuxedoSamImg from "figma:asset/89aa3f4eef74342d201e3983a2afdd196a36dec3.png";
import myMelodyImg from "figma:asset/cb43116898232b3fc956b2b9aad3d784c0e0491d.png";
import cinnamorollImg from "figma:asset/856445b2b16718404ff5765f7b5bd1ad864e7576.png";

export function HomePage() {
  const playClick = useClickSound();
  const navigate = useNavigate();

  const handleReset = () => {
    playClick();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Hidden reset button in top-right corner */}
      <motion.button
        onClick={handleReset}
        className="fixed top-4 right-4 z-50 bg-gradient-to-br from-pink-400 to-rose-500 text-white p-3 rounded-full shadow-lg border-2 border-white opacity-20 hover:opacity-100 transition-opacity"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        title="Reset to Valentine Prompt"
      >
        <RotateCcw size={20} />
      </motion.button>

      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              y: "100vh", 
              x: Math.random() * window.innerWidth,
              opacity: 0.4
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
              size={20 + Math.random() * 40}
              fill="currentColor"
            />
          </motion.div>
        ))}
        {/* Floating sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles className="text-yellow-300" size={15 + Math.random() * 20} />
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl w-full">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="text-center mb-8"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart className="w-32 h-32 mx-auto text-red-500 mb-6 drop-shadow-2xl" fill="currentColor" />
          </motion.div>
          
          <motion.h1 
            className="mb-6 text-pink-600 drop-shadow-lg"
            style={{ fontFamily: 'Pacifico, cursive', fontSize: '5rem', lineHeight: '1.2' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Hey Fiona! 💕✨
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="text-red-500 mb-8 drop-shadow-lg"
            style={{ fontFamily: 'Dancing Script, cursive', fontSize: '4.5rem', lineHeight: '1.2' }}
          >
            Will You Be My Valentine? 💖
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-pink-700 mb-8"
            style={{ fontFamily: 'Kalam, cursive', fontSize: '2rem' }}
          >
            I made this special website just for you! ✨💝
          </motion.p>
        </motion.div>

        {/* Character showcase - All 5 characters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.15, rotate: 8, zIndex: 10 }}
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 3, -3, 0]
            }}
            transition={{
              y: { duration: 3, repeat: Infinity },
              rotate: { duration: 4, repeat: Infinity }
            }}
            className="bg-gradient-to-br from-pink-200 to-pink-300 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border-4 border-white"
          >
            <div className="relative">
              <img
                src={myMelodyImg}
                alt="My Melody"
                className="w-full h-40 object-contain drop-shadow-xl"
              />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="text-pink-500" size={20} />
              </motion.div>
            </div>
            <p className="text-center text-pink-700 mt-3" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.5rem' }}>
              My Melody 🎀
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15, rotate: -8, zIndex: 10 }}
            animate={{ 
              y: [0, -18, 0],
              rotate: [0, -3, 3, 0]
            }}
            transition={{
              y: { duration: 3.2, repeat: Infinity },
              rotate: { duration: 4.2, repeat: Infinity }
            }}
            className="bg-gradient-to-br from-cyan-200 to-cyan-300 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border-4 border-white"
          >
            <div className="relative">
              <img
                src={mikuImg}
                alt="Miku"
                className="w-full h-40 object-contain drop-shadow-xl"
              />
              <motion.div
                className="absolute -top-2 -left-2"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="text-cyan-500" size={20} />
              </motion.div>
            </div>
            <p className="text-center text-cyan-700 mt-3" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.5rem' }}>
              Miku 🎵
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15, rotate: 8, zIndex: 10 }}
            animate={{ 
              y: [0, -12, 0],
              rotate: [0, 4, -4, 0]
            }}
            transition={{
              y: { duration: 2.8, repeat: Infinity },
              rotate: { duration: 3.8, repeat: Infinity }
            }}
            className="bg-gradient-to-br from-blue-200 to-blue-300 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border-4 border-white"
          >
            <div className="relative">
              <img
                src={hangyodonImg}
                alt="Hangyodon"
                className="w-full h-40 object-contain drop-shadow-xl"
              />
              <motion.div
                className="absolute -bottom-2 -right-2"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Heart className="text-red-400" size={20} fill="currentColor" />
              </motion.div>
            </div>
            <p className="text-center text-blue-700 mt-3" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.5rem' }}>
              Hangyodon 🐟
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15, rotate: -8, zIndex: 10 }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, -4, 4, 0]
            }}
            transition={{
              y: { duration: 3.5, repeat: Infinity },
              rotate: { duration: 4.5, repeat: Infinity }
            }}
            className="bg-gradient-to-br from-indigo-200 to-indigo-300 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border-4 border-white"
          >
            <div className="relative">
              <img
                src={tuxedoSamImg}
                alt="Tuxedo Sam"
                className="w-full h-40 object-contain drop-shadow-xl"
              />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="text-pink-400" size={20} fill="currentColor" />
              </motion.div>
            </div>
            <p className="text-center text-indigo-700 mt-3" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.5rem' }}>
              Tuxedo Sam 🐧
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.15, rotate: 8, zIndex: 10 }}
            animate={{ 
              y: [0, -16, 0],
              rotate: [0, 3, -3, 0]
            }}
            transition={{
              y: { duration: 3.3, repeat: Infinity },
              rotate: { duration: 4.3, repeat: Infinity }
            }}
            className="bg-gradient-to-br from-sky-200 to-sky-300 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border-4 border-white col-span-2 md:col-span-1"
          >
            <div className="relative">
              <img
                src={cinnamorollImg}
                alt="Cinnamoroll"
                className="w-full h-40 object-contain drop-shadow-xl"
              />
              <motion.div
                className="absolute -top-2 -left-2"
                animate={{ scale: [1, 1.4, 1], rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="text-yellow-400" size={20} />
              </motion.div>
            </div>
            <p className="text-center text-sky-700 mt-3" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.5rem' }}>
              Cinnamoroll ☁️
            </p>
          </motion.div>
        </motion.div>

        {/* Navigation buttons with floating animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          <Link to="/gallery" onClick={playClick}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                y: [0, -10, 0],
                boxShadow: [
                  "0 10px 30px rgba(236, 72, 153, 0.3)",
                  "0 20px 40px rgba(236, 72, 153, 0.5)",
                  "0 10px 30px rgba(236, 72, 153, 0.3)"
                ]
              }}
              transition={{
                y: { duration: 2.5, repeat: Infinity },
                boxShadow: { duration: 2.5, repeat: Infinity }
              }}
              className="bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 text-white rounded-3xl cursor-pointer text-center border-4 border-white relative overflow-hidden w-full aspect-square flex flex-col items-center justify-center p-6"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Camera className="w-12 h-12 mx-auto mb-3 drop-shadow-lg" />
              </motion.div>
              <p style={{ fontFamily: 'Kalam, cursive', fontSize: '1.8rem', fontWeight: 700 }}>Gallery 📸</p>
            </motion.div>
          </Link>

          <Link to="/memories" onClick={playClick}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                y: [0, -12, 0],
                boxShadow: [
                  "0 10px 30px rgba(239, 68, 68, 0.3)",
                  "0 20px 40px rgba(239, 68, 68, 0.5)",
                  "0 10px 30px rgba(239, 68, 68, 0.3)"
                ]
              }}
              transition={{
                y: { duration: 2.7, repeat: Infinity },
                boxShadow: { duration: 2.7, repeat: Infinity }
              }}
              className="bg-gradient-to-br from-red-400 via-red-500 to-red-600 text-white rounded-3xl cursor-pointer text-center border-4 border-white relative overflow-hidden w-full aspect-square flex flex-col items-center justify-center p-6"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-12 h-12 mx-auto mb-3 drop-shadow-lg" />
              </motion.div>
              <p style={{ fontFamily: 'Kalam, cursive', fontSize: '1.8rem', fontWeight: 700 }}>Memories ✨</p>
            </motion.div>
          </Link>

          <Link to="/letter" onClick={playClick}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                y: [0, -15, 0],
                boxShadow: [
                  "0 10px 30px rgba(168, 85, 247, 0.3)",
                  "0 20px 40px rgba(168, 85, 247, 0.5)",
                  "0 10px 30px rgba(168, 85, 247, 0.3)"
                ]
              }}
              transition={{
                y: { duration: 2.3, repeat: Infinity },
                boxShadow: { duration: 2.3, repeat: Infinity }
              }}
              className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 text-white rounded-3xl cursor-pointer text-center border-4 border-white relative overflow-hidden w-full aspect-square flex flex-col items-center justify-center p-6"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              <motion.div
                animate={{ rotate: [0, -10, 10, 0], y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Mail className="w-12 h-12 mx-auto mb-3 drop-shadow-lg" />
              </motion.div>
              <p style={{ fontFamily: 'Kalam, cursive', fontSize: '1.8rem', fontWeight: 700 }}>Love Letter 💌</p>
            </motion.div>
          </Link>

          <Link to="/reasons" onClick={playClick}>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                y: [0, -8, 0],
                boxShadow: [
                  "0 10px 30px rgba(251, 113, 133, 0.3)",
                  "0 20px 40px rgba(251, 113, 133, 0.5)",
                  "0 10px 30px rgba(251, 113, 133, 0.3)"
                ]
              }}
              transition={{
                y: { duration: 2.9, repeat: Infinity },
                boxShadow: { duration: 2.9, repeat: Infinity }
              }}
              className="bg-gradient-to-br from-rose-400 via-rose-500 to-rose-600 text-white rounded-3xl cursor-pointer text-center border-4 border-white relative overflow-hidden w-full aspect-square flex flex-col items-center justify-center p-6"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-12 h-12 mx-auto mb-3 drop-shadow-lg" fill="currentColor" />
              </motion.div>
              <p style={{ fontFamily: 'Kalam, cursive', fontSize: '1.8rem', fontWeight: 700 }}>Why I Love You 💖</p>
            </motion.div>
          </Link>
        </motion.div>

        {/* Cute message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-center mt-16"
        >
          <motion.div
            animate={{ 
              rotate: [0, 15, -15, 15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block text-6xl mb-6 drop-shadow-2xl"
          >
            💖
          </motion.div>
          <p className="text-pink-600 mb-4" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '2.5rem' }}>
            Click around to explore all the love! 🌸
          </p>
          <motion.div
            className="flex justify-center gap-4 text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            {['💕', '✨', '🎀', '💝', '🌸', '💗'].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 360]
                }}
                transition={{ 
                  duration: 2 + i * 0.2,
                  repeat: Infinity,
                  delay: i * 0.3
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