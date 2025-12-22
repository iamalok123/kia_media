import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';

const Footer = () => {
  const handleEmail = () => {
    window.location.href = 'mailto:your-email@example.com';
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/your-handle', '_blank');
  };

  return (
    <footer className="bg-black border-t border-purple-900/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <motion.div
              className="flex items-center gap-2 mb-2 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-purple-500/20 p-1.5 rounded text-purple-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                </svg>
              </div>
              <h4 className="text-white font-bold text-lg">Kia Mediaworks</h4>
            </motion.div>
            <p className="text-gray-400 text-sm">
              © 2023 Kia Mediaworks. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <motion.button
              onClick={handleInstagram}
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={handleEmail}
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


