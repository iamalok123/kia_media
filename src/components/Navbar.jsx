import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/8099589858', '_blank');
  };

  const navLinks = [
    { href: '#about', label: 'Who We Are' },
    { href: '#campaigns', label: 'Campaigns' },
    { href: '#services', label: 'Services' },
    { href: '#network', label: 'Network' },
    { href: '#edits', label: 'Edits' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-purple-900/30 transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-purple-950/50' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-purple-700/20 p-1.5 rounded-lg text-purple-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
              </svg>
            </div>
            <h1 className="text-white text-lg font-bold tracking-tight">
              Kia Mediaworks
            </h1>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={handleWhatsApp}
              className="hidden sm:flex bg-purple-500 hover:bg-purple-600 text-white text-sm font-bold px-5 py-2 rounded-lg transition-all items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-purple-950/95 backdrop-blur-md border-t border-purple-800"
          >
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-purple-500 hover:bg-purple-600 text-white text-sm font-bold px-5 py-2 rounded-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
