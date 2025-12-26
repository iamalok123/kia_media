import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Instagram, Phone, Linkedin } from 'lucide-react';

const Footer = () => {
  const handleEmail = () => {
    window.location.href = 'mailto:kia.mediaworks.co@gmail.com';
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/kiamediaworks?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
  };

  const handlePhone = () => {
    window.location.href = 'tel:+916900068659';
  };

  const handleLinkedin = () => {
    window.open('https://www.linkedin.com/in/kunhismita-madhukalya-3b03b236a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
  };

  // Footer Links Data

  // const pages = [
  //   { name: 'Home', href: '#' },
  //   { name: 'About', href: '#about' },
  //   { name: 'Contact Us', href: '#contact' },
  //   { name: 'Work with us', href: '#work' },
  // ];
  const pages = [
    { name: 'Home', href: '#' },
    { name: 'Who We Are', href: '#about' },
    { name: 'Campaigns', href: '#campaigns' },
    { name: 'Services', href: '#services' },
    { name: 'Network', href: '#network' },
    { name: 'Edits', href: '#edits' },
  ];

  const services = [
    { name: 'Instagram Marketing', href: '#' },
    { name: 'Song Promotion', href: '#' },
    { name: 'Brand Promotion', href: '#' },
    { name: 'App Promotion', href: '#' },
    { name: 'Reel Promotion', href: '#' },
    { name: 'Editing', href: '#' },
    { name: 'Niche Campaigns', href: '#' },
  ];

  return (
    <footer className="bg-black border-t border-purple-900/30 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src="assets/kiamedia.jpeg"
                alt="Kia Mediaworks"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Premium video editing and social media marketing services to help your brand go viral.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <motion.button
                onClick={handleInstagram}
                className="bg-purple-500/10 p-2 rounded-lg text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={handleEmail}
                className="bg-purple-500/10 p-2 rounded-lg text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={handlePhone}
                className="bg-purple-500/10 p-2 rounded-lg text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={handleLinkedin}
                className="bg-purple-500/10 p-2 rounded-lg text-purple-400 hover:text-white hover:bg-purple-500/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h5 className="text-white font-bold text-lg mb-4">Pages</h5>
            <ul className="space-y-3">
              {pages.map((page, index) => (
                <li key={index}>
                  <a
                    href={page.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h5 className="text-white font-bold text-lg mb-4">Services</h5>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h5 className="text-white font-bold text-lg mb-4">Contact</h5>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+916900068659"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  +91 6900068659
                </a>
              </li>
              <li>
                <a
                  href="mailto:kia.mediaworks.co@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  kia.mediaworks.co@gmail.co
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/kiamediaworks?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  @kiamediaworks
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-900/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Kia Mediaworks. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-purple-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div >
    </footer >
  );
};

export default Footer;
