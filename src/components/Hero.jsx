import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MessageCircle, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/918099589858', '_blank');
  };

  const handleEmail = () => {
    window.location.href = "mailto:alokhotta10@gmail.com";
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Decorative background gradient orbs — replaces external image dependency */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-purple-950/60 via-black/80 to-black" />
        <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-purple-700/25 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-purple-900/30 rounded-full blur-[90px]" />
      </div>
      <div className="absolute inset-0 z-0 bg-linear-to-b from-black/30 via-purple-950/20 to-black" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center flex flex-col items-center gap-4 md:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-500 text-xs font-bold uppercase tracking-wider mb-2 md:mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          Creative Digital Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.2] tracking-tight text-white max-w-5xl mx-auto"
        >
          Kia Media Works <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-500 to-pink-500 ">
            Organic Instagram Marketing & Editing for Music Labels, OTT Platforms & Entertainment Brands
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mt-2"
        >
          We help music labels and brands promote their music and products organically through reel marketing, gaining visibility via high-engagement campaigns across our network of 1,000+ Instagram pages.
        </motion.p>

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

