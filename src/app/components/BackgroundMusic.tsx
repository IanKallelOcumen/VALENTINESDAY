import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";
import { useClickSound } from "../hooks/useClickSound";
import backgroundMusic from "../../assets/Daniel Caesar - Baby Blue feat. Norwill Simmonds (Official Lyric Video).mp3";

export function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playClick = useClickSound();

  useEffect(() => {
    // Try to play muted audio on mount for better autoplay compatibility
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay blocked, will play when user clicks
      });
    }
  }, []);

  const handleToggle = () => {
    playClick();
    
    if (audioRef.current) {
      if (isMuted) {
        // Unmute and ensure playing
        audioRef.current.muted = false;
        audioRef.current.play().catch(() => {
          console.log('Play prevented');
        });
      } else {
        // Mute
        audioRef.current.muted = true;
      }
    }
    
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Audio element - Replace /background-music.mp3 with your MP3 file path */}
      <audio
        ref={audioRef}
        loop
        muted
        playsInline
        className="hidden"
      >
        <source src={backgroundMusic} type="audio/mpeg" />
      </audio>

      {/* Control Button */}
      <motion.button
        onClick={handleToggle}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-gradient-to-br from-pink-500 to-rose-500 text-white p-4 md:p-5 rounded-full shadow-2xl border-3 md:border-4 border-white"
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
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
          key={isMuted ? "muted" : "playing"}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ 
            scale: 1, 
            rotate: 0,
            ...(isMuted ? {} : { rotate: 360 })
          }}
          transition={{ 
            scale: { duration: 0.3 },
            rotate: isMuted ? { duration: 0.3 } : { duration: 3, repeat: Infinity, ease: "linear" }
          }}
        >
          {isMuted ? <VolumeX className="w-6 h-6 md:w-8 md:h-8" /> : <Volume2 className="w-6 h-6 md:w-8 md:h-8" />}
        </motion.div>
      </motion.button>
    </>
  );
}