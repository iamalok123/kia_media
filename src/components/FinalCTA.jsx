import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Mail, ExternalLink } from 'lucide-react';

const FinalCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleWhatsApp = () => {
    window.open('https://wa.me/918099589858', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:kia.mediaworks.co@gmail.com';
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/kiamediaworks?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
  };

  return (
    <section
      className="py-24 bg-linear-to-t from-purple-950/40 via-black to-black relative"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-black text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Let's Amplify Your Next Release
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join the artists and brands who trust us to deliver millions of views
          and authentic engagement.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            onClick={handleWhatsApp}
            className="flex items-center justify-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white text-lg font-bold h-14 px-10 rounded-xl shadow-lg hover:shadow-fuchsia-500/40 transition-all w-full sm:w-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </motion.button>

          <motion.button
            onClick={handleEmail}
            className="flex items-center justify-center gap-2 bg-purple-950 border border-gray-600 hover:border-white text-white text-lg font-bold h-14 px-10 rounded-xl transition-all w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            Email Us
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={handleInstagram}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
          >
            Follow us on Instagram <ExternalLink className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
