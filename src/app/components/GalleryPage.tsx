import { Link } from "react-router";
import { motion } from "motion/react";
import { Home, Heart } from "lucide-react";
import { useClickSound } from "../hooks/useClickSound";
import fionaOutfitImg from "../../assets/b7d2eb3eb33d1281e46d36700def56d7ee6644b7.png";
import myDogImg from "../../assets/a0a8a32cdb8d0cc67d5ba205b8983b1e0bdd1d0f.png";
import mikuGiftsImg from "../../assets/960b2063f43844373c33b5e191289070e4941b51.png";
import herCatImg from "../../assets/8753f5d05e944f2b29eafdbd0713b6158a1bdd74.png";
import hoodieImg from "../../assets/2bfffe5ff6a697c78a4c56a8168d5039c6835e51.png";
import catWithFlowerImg from "../../assets/05f1dd0c53aee8f46bac4ab209159807f1a8f573.png";

export function GalleryPage() {
  const playClick = useClickSound();

  const images = [
    {
      img: fionaOutfitImg,
      caption: "This outfit on you... absolutely stunning! I love everything about this look 😍💕",
      objectFit: "cover"
    },
    {
      img: herCatImg,
      caption: "Your adorable cat with those beautiful yellow eyes! So precious! 🐱💛",
      objectFit: "cover"
    },
    {
      img: mikuGiftsImg,
      caption: "The Miku figures I got you! Seeing them on your desk makes me so happy 🎁✨",
      objectFit: "cover"
    },
    {
      img: myDogImg,
      caption: "My goofy dog who can't wait to meet you! Look at that smile! 🐕💖",
      objectFit: "contain"
    },
    {
      img: hoodieImg,
      caption: "You in my hoodie... the cutest thing ever! You look absolutely perfect! 🧥💗",
      objectFit: "cover"
    },
    {
      img: catWithFlowerImg,
      caption: "A special flower just for you! 🌸🐱",
      objectFit: "cover"
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/home" onClick={playClick}>
            <motion.button
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              animate={{ 
                y: [0, -8, 0],
                boxShadow: [
                  "0 5px 20px rgba(236, 72, 153, 0.3)",
                  "0 15px 30px rgba(236, 72, 153, 0.5)",
                  "0 5px 20px rgba(236, 72, 153, 0.3)"
                ]
              }}
              transition={{
                y: { duration: 2.5, repeat: Infinity },
                boxShadow: { duration: 2.5, repeat: Infinity }
              }}
              className="bg-gradient-to-br from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg flex items-center gap-2 border-4 border-white"
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
            <Heart fill="currentColor" className="w-12 h-12" />
            My Gifts to You
            <Heart fill="currentColor" className="w-12 h-12" />
          </motion.h1>

          <div className="w-32" /> {/* Spacer for flex alignment */}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.08, rotate: 3, zIndex: 10 }}
              className="bg-white rounded-3xl p-4 shadow-2xl border-4 border-pink-200"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-gradient-to-br from-pink-50 to-purple-50">
                <img
                  src={image.img}
                  alt={image.caption}
                  className={`w-full h-64 ${image.objectFit === 'contain' ? 'object-contain' : 'object-cover'}`}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-center text-pink-700" style={{ fontFamily: 'Caveat, cursive', fontSize: '1.8rem' }}>
                {image.caption}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Floating hearts */}
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                y: "100vh", 
                x: Math.random() * window.innerWidth,
              }}
              animate={{ 
                y: "-20vh",
                rotate: 360
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }}
            >
              <Heart 
                className="text-pink-300/40" 
                size={15 + Math.random() * 25}
                fill="currentColor"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16 mb-8"
        >
          <p className="text-pink-600" style={{ fontFamily: 'Dancing Script, cursive', fontSize: '2.5rem' }}>
            Every picture reminds me of how lucky I am to have you! 💕✨
          </p>
        </motion.div>
      </div>
    </div>
  );
}