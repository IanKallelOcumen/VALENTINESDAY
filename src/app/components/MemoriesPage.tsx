import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, Heart, Sparkles, Star } from "lucide-react";
import { useClickSound } from "../hooks/useClickSound";

export function MemoriesPage() {
  const playClick = useClickSound();

  const memories = [
    {
      emoji: "😈",
      title: "Our First Meeting",
      description: "Okay, I was a total jerk at first. Teasing you about that whole situationship mess... I was being cruel when I should've been kinder. But somehow you didn't hate me for it, and that's when I realized how special you actually are. 😂💕",
      color: "from-pink-400 to-pink-600"
    },
    {
      emoji: "🎬",
      title: "Anime & Movie Nights",
      description: "We watch completely different stuff and have such different tastes, but there's something magical about just sitting there together anyway. Even if I don't understand half the shows you love, I love experiencing them with you. 🍿",
      color: "from-purple-400 to-purple-600"
    },
    {
      emoji: "💬",
      title: "Late Night Talks",
      description: "You're the reason I stay up so late talking. Like, way too late, where we both have to force ourselves to sleep. These talks with you are the ones I replay in my head over and over. 🌙",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      emoji: "🎮",
      title: "Gaming Together",
      description: "We have such different gaming tastes, but that doesn't stop us from playing together constantly. Even when we're playing different things or you're watching me, these moments just feel right. That's us. 🕹️",
      color: "from-red-400 to-red-600"
    },
    {
      emoji: "✈️",
      title: "Can't Wait to Meet You",
      description: "I think about meeting you in person all the time. Like, actually holding your hand and seeing that smile up close. It's one of those dreams that feels so real I can almost touch it. 🥰",
      color: "from-rose-400 to-rose-600"
    },
    {
      emoji: "☁️",
      title: "Lazy Sundays (Soon!)",
      description: "I keep imagining just... doing absolutely nothing with you. No pressure, no plans. Just us being lazy together. That's my kind of perfect day. 💤",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      emoji: "💕",
      title: "Everything Together",
      description: "I genuinely want to share every part of my life with you. The big adventures, the small stupid moments, the quiet ones. Everything just feels better when I think about doing it with you.",
      color: "from-orange-400 to-orange-600"
    },
    {
      emoji: "🌟",
      title: "All The Moments to Come",
      description: "We haven't even scratched the surface yet. All the memories we're going to make together... I'm so excited for our story. It's only getting started. 💖",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      {/* Sparkle background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles className="text-yellow-300" size={20} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/home" onClick={playClick}>
            <motion.button
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                y: [0, -10, 0],
                boxShadow: [
                  "0 5px 20px rgba(239, 68, 68, 0.3)",
                  "0 15px 30px rgba(239, 68, 68, 0.5)",
                  "0 5px 20px rgba(239, 68, 68, 0.3)"
                ]
              }}
              transition={{
                y: { duration: 2.7, repeat: Infinity },
                boxShadow: { duration: 2.7, repeat: Infinity }
              }}
              className="bg-gradient-to-br from-red-500 to-red-600 text-white px-8 py-4 rounded-full shadow-lg flex items-center gap-2 border-4 border-white"
              style={{ fontFamily: 'Kalam, cursive', fontSize: '1.2rem' }}
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
            <h1 className="text-pink-600 flex items-center gap-3 mb-2 drop-shadow-lg" style={{ fontFamily: 'Pacifico, cursive', fontSize: '3.5rem' }}>
              <Star fill="currentColor" className="w-10 h-10" />
              Our Precious Memories
              <Star fill="currentColor" className="w-10 h-10" />
            </h1>
            <p className="text-pink-500" style={{ fontFamily: 'Caveat, cursive', fontSize: '2rem' }}>
              So many beautiful moments together 💕✨
            </p>
          </motion.div>

          <div className="w-32" />
        </div>

        {/* Timeline of memories */}
        <div className="space-y-8">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center`}
            >
              {/* Emoji circle */}
              <motion.div
                whileHover={{ scale: 1.3, rotate: 360 }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  y: { duration: 2.5 + index * 0.2, repeat: Infinity },
                  rotate: { duration: 3 + index * 0.2, repeat: Infinity }
                }}
                className={`flex-shrink-0 w-28 h-28 rounded-full bg-gradient-to-br ${memory.color} flex items-center justify-center text-6xl shadow-2xl border-4 border-white`}
              >
                {memory.emoji}
              </motion.div>

              {/* Memory card */}
              <motion.div
                whileHover={{ scale: 1.03, y: -8 }}
                className="flex-1 bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-pink-200"
              >
                <h3 className="text-pink-600 mb-3 flex items-center gap-2" style={{ fontFamily: 'Caveat, cursive', fontSize: '2.5rem' }}>
                  <Heart fill="currentColor" className="w-6 h-6" />
                  {memory.title}
                </h3>
                <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Kalam, cursive', fontSize: '1.3rem' }}>
                  {memory.description}
                </p>
              </motion.div>

              {/* Connecting line (hidden on mobile) */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-pink-200 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center bg-gradient-to-r from-pink-400 via-purple-400 to-red-400 text-white rounded-3xl p-12 shadow-2xl border-4 border-white"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 15, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-7xl mb-6"
          >
            💖
          </motion.div>
          <h2 className="mb-4" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '3rem' }}>
            Can't wait to make more memories with you!
          </h2>
          <p style={{ fontFamily: 'Pacifico, cursive', fontSize: '2rem' }}>
            Here's to many more adventures together, Fiona! 🌸💕
          </p>
        </motion.div>
      </div>
    </div>
  );
}