import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { Heart, Sparkles } from "lucide-react";
import { useClickSound } from "../hooks/useClickSound";
import catWithFlower from "figma:asset/05f1dd0c53aee8f46bac4ab209159807f1a8f573.png";

const funnyMessages = [
  "Are you sure? 🥺",
  "Really? But I have cookies! 🍪",
  "The cat is sad now... 😿",
  "Please? Pretty please? 🥹",
  "You're breaking my heart! 💔",
  "Fine, only YES works now! 😤"
];

export function ValentinePrompt() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const playClick = useClickSound();

  const handleYes = () => {
    playClick();
    navigate("/home");
  };

  const handleNo = () => {
    playClick();
    if (noClickCount < 5) {
      setNoClickCount(noClickCount + 1);
      setMessage(funnyMessages[noClickCount]);
    }
  };

  // Calculate Yes button size - grows with each No click
  const yesButtonScale = 1 + (noClickCount * 0.3);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
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
      <div className="relative z-10 max-w-2xl w-full">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="text-center"
        >
          {/* Cute cat with flower */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 3, -3, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <img 
              src={catWithFlower} 
              alt="Cute cat with flower"
              className="w-64 h-64 mx-auto object-contain drop-shadow-2xl rounded-3xl"
            />
          </motion.div>

          {/* Main question */}
          <motion.h1 
            className="mb-8 text-pink-600 drop-shadow-lg"
            style={{ fontFamily: 'Pacifico, cursive', fontSize: '4rem', lineHeight: '1.2' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Will You Be My Valentine? 💕
          </motion.h1>

          {/* Funny message when they click No */}
          <AnimatePresence mode="wait">
            {message && (
              <motion.div
                key={message}
                initial={{ opacity: 0, scale: 0.5, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                className="mb-8 text-red-500 drop-shadow-lg"
                style={{ fontFamily: 'Dancing Script, cursive', fontSize: '3rem' }}
              >
                {message}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-8 mt-12">
            {/* YES button - grows bigger each time */}
            <motion.button
              onClick={handleYes}
              className="bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-3xl cursor-pointer text-center border-4 border-white shadow-2xl relative overflow-hidden"
              style={{
                fontFamily: 'Kalam, cursive',
                fontSize: `${1.5 + (noClickCount * 0.3)}rem`,
                fontWeight: 700,
                padding: `${1 + (noClickCount * 0.3)}rem ${2 + (noClickCount * 0.5)}rem`,
                transform: `scale(${yesButtonScale})`
              }}
              whileHover={{ scale: yesButtonScale * 1.1, rotate: 5 }}
              whileTap={{ scale: yesButtonScale * 0.95 }}
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
                YES! 💖
                <Heart fill="currentColor" />
              </span>
            </motion.button>

            {/* NO button - disappears after 5 clicks */}
            {noClickCount < 5 && (
              <motion.button
                onClick={handleNo}
                className="bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-3xl cursor-pointer text-center border-4 border-white shadow-2xl relative overflow-hidden"
                style={{
                  fontFamily: 'Kalam, cursive',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  padding: '1rem 2rem'
                }}
                whileHover={{ scale: 1.05, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0 }}
              >
                No... 😔
              </motion.button>
            )}

            {/* Message when No button is gone */}
            {noClickCount >= 5 && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-pink-500"
                style={{ fontFamily: 'Caveat, cursive', fontSize: '2rem' }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  👉 That's the only option! 😊
                </motion.div>
              </motion.div>
            )}
          </div>

          {/* Sparkles around the Yes button when No button is gone */}
          {noClickCount >= 5 && (
            <div className="mt-8">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: '50%',
                    top: '50%'
                  }}
                  animate={{
                    x: [0, Math.cos(i * Math.PI / 4) * 100],
                    y: [0, Math.sin(i * Math.PI / 4) * 100],
                    opacity: [1, 0],
                    scale: [0, 1.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  <Sparkles className="text-yellow-400" size={30} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
