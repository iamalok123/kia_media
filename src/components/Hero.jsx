import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MessageCircle, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/918099589858", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:alokhotta10@gmail.com";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFU6p3wcIGB3eEamnHY11jM6JhhzIqz0Iq9K_kjdW1XaQLpGNC54XpiEG_p3CvlijGQEbGxFqhRCZnwI2pKHX6cQzA9i61eg35zhIOMRY2LmtvlG7bkpxE8E2CktSWnWHh-V-BCNCfe9n96JPe2slGRB91u98RPO1KgbXaYa19qJWBB4TfgVdiKfYGwTJw1hgaLNOrsFV8Baxwjh62wT7W_3HJNeDTZeChZ1Mdl4lMACnQRZZkeCeNEKlcLXD_3IsHzWNGV3I-9sQ')`,
        }}
      />
      <div className="absolute inset-0 z-0 bg-linear-to-b from-black via-purple-950/40 to-black" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-500 text-xs font-bold uppercase tracking-wider mb-2"
        >
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          Creative Digital Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white max-w-4xl"
        >
          Kia Media Works <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-500">
            Organic Reel Marketing & Editing
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
        >
          We help music labels and brands promote their music and products organically through reel marketing, gaining visibility via high-engagement campaigns across our network of 1,000+ Instagram pages.
        </motion.p>

        {/* Buttons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto"
        >
          <motion.button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white text-base font-bold h-12 px-8 rounded-lg shadow-lg transition-all w-full sm:w-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </motion.button>
          <motion.button
            onClick={handleEmail}
            className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-base font-bold h-12 px-8 rounded-lg backdrop-blur-sm transition-all w-full sm:w-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            Email Us
          </motion.button>
        </motion.div> */}

        {/* Scroll Indicator */}
        <div className='flex flex-col items-center justify-center gap-2 mt-8 animate-bounce cursor-pointer'>
          <span className='text-white font-medium'>Scroll Down</span>
          <img src="double-arrow.svg" alt="double-arrow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

