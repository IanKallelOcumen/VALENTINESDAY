import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, Heart, Sparkles } from "lucide-react";
import { useClickSound } from "../hooks/useClickSound";

export function ReasonsPage() {
  const playClick = useClickSound();

  const reasons = [
    "Your smile lights up my entire world 😊",
    "The way you laugh at my silly jokes 😂",
    "How you understand me without words 💭",
    "Your kindness and compassion for everyone 💝",
    "The way you get excited about the little things ✨",
    "How you make me want to be a better person 🌟",
    "Your adorable love for My Melody, Miku, Hangyodon, Tuxedo Sam & Cinnamoroll 🎀🎵🐧",
    "The comfort I feel when I'm with you 🤗",
    "How you support my dreams and goals 🎯",
    "Your beautiful eyes that I could get lost in 👀",
    "The way you make ordinary moments special 🌈",
    "How patient and understanding you are 🙏",
    "Your creativity and unique perspective 🎨",
    "The way you dance when you're happy 💃",
    "How you always know how to cheer me up 🎉",
    "Your love for cute things (just like you!) 🌸",
    "The way you scrunch your nose when you're thinking 🤔",
    "How you make me feel safe and loved 💕",
    "Your taste in music and anime 🎶",
    "The way you give the warmest hugs 🫂",
    "How you're always there when I need you 🌙",
    "Your beautiful voice 🎤",
    "The way you play games with such enthusiasm 🎮",
    "How you remember the little details 📝",
    "Your incredible strength and resilience 💪",
    "The way you look at me 👁️",
    "How you make me laugh until my cheeks hurt 😄",
    "Your adventurous spirit 🗺️",
    "The way you care about people 💗",
    "How you make every day better just by existing ☀️",
    "Your love for trying new foods with me 🍜",
    "The way you cuddle 🥰",
    "How you're not afraid to be yourself 🦋",
    "Your optimism and positive energy ⚡",
    "The way you make me feel special every day 👑",
    "How you appreciate the small gestures 🌺",
    "Your beautiful heart inside and out 💖",
    "The way we can talk for hours and never get bored 💬",
    "How you believe in me even when I don't 🌠",
    "The way you say my name 💫",
    "How you're my best friend and so much more 🤝",
    "Your amazing personality that shines so bright ✨",
    "The way you make me feel loved every single day 💗",
    "How you're absolutely perfect for me 💯",
    "Simply because you're YOU! 🌹"
  ];

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      {/* Animated background hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.4, 0.15]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart className="text-pink-300" size={20 + Math.random() * 30} fill="currentColor" />
          </motion.div>
        ))}
        {/* Sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles className="text-yellow-300" size={15} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/home">
            <motion.button
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                y: [0, -10, 0],
                boxShadow: [
                  "0 5px 20px rgba(251, 113, 133, 0.3)",
                  "0 15px 30px rgba(251, 113, 133, 0.5)",
                  "0 5px 20px rgba(251, 113, 133, 0.3)"
                ]
              }}
              transition={{
                y: { duration: 2.5, repeat: Infinity },
                boxShadow: { duration: 2.5, repeat: Infinity }
              }}
              className="bg-gradient-to-br from-rose-500 to-rose-600 text-white px-8 py-4 rounded-full shadow-lg flex items-center gap-2 border-4 border-white"
              style={{ fontFamily: 'Kalam, cursive', fontSize: '1.2rem' }}
              onClick={playClick}
            >
              <Home className="w-6 h-6" />
              Back Home 🏠
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-pink-600 mb-2 drop-shadow-lg" style={{ fontFamily: 'Pacifico, cursive', fontSize: '4rem' }}>
              Reasons Why I Love You
            </h1>
            <p className="text-pink-500" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '2rem' }}>
              There are infinite reasons, but here are just a few... 💕✨
            </p>
          </motion.div>

          <div className="w-32" />
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.08, 
                rotate: Math.random() > 0.5 ? 4 : -4,
                zIndex: 10
              }}
              className="bg-gradient-to-br from-pink-100 via-pink-50 to-red-100 rounded-3xl p-8 shadow-xl relative overflow-hidden group border-4 border-white"
            >
              {/* Number badge */}
              <motion.div 
                className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                whileHover={{ scale: 1.2, rotate: 360 }}
                style={{ fontFamily: 'Kalam, cursive', fontSize: '1.1rem' }}
              >
                {index + 1}
              </motion.div>

              {/* Animated heart on hover */}
              <motion.div
                className="absolute -bottom-2 -right-2 opacity-0 group-hover:opacity-30 transition-opacity"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Heart className="text-pink-400 w-28 h-28" fill="currentColor" />
              </motion.div>

              {/* Sparkle decoration */}
              <motion.div
                className="absolute top-8 left-6 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="text-yellow-400 w-5 h-5" />
              </motion.div>

              {/* Reason text */}
              <div className="relative z-10">
                <p className="text-gray-800 leading-relaxed pr-12" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.6rem' }}>
                  {reason}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 rounded-3xl p-16 text-center text-white shadow-2xl relative overflow-hidden border-4 border-white"
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.2) 0%, transparent 50%)",
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          
          <div className="relative z-10">
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-8xl mb-8 drop-shadow-2xl"
            >
              💝
            </motion.div>
            
            <h2 className="mb-6" style={{ fontFamily: 'Pacifico, cursive', fontSize: '3.5rem' }}>
              And so many more reasons...
            </h2>
            <p className="mb-8" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '2.5rem' }}>
              I could fill a thousand pages and still not capture everything I love about you!
            </p>
            <motion.div
              animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-7xl"
            >
              ❤️
            </motion.div>
          </div>
        </motion.div>

        {/* Cute footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="text-center mt-16 mb-8"
        >
          <p className="text-pink-600 mb-6" style={{ fontFamily: 'Pacifico, cursive', fontSize: '3rem' }}>
            You're everything to me, Fiona! 💕✨
          </p>
          <div className="flex justify-center gap-5 mt-8 text-5xl">
            {['🌹', '💖', '🎀', '💝', '🌸', '💗', '🦋'].map((emoji, i) => (
              <motion.span
                key={i}
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2 + i * 0.1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}