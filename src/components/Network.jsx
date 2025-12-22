import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { Network as NetworkIcon, Users, User } from 'lucide-react';

const Network = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const networkData = [
    { label: 'Bollywood Pages', value: '400+', percentage: 50, color: 'bg-purple-500' },
    { label: 'K-pop & Asian Pages', value: '400+', percentage: 50, color: 'bg-purple-400' },
    { label: 'Anime Pages', value: '100+', percentage: 12, color: 'bg-blue-500' },
    { label: 'Wholesome / Lyrical Pages', value: '100+', percentage: 12, color: 'bg-green-500' },
  ];

  const geographies = ['India 🇮🇳', 'USA 🇺🇸', 'UK 🇬🇧', 'Asia 🌏'];

  return (
    <section className="py-20 bg-linear-to-b from-black via-purple-950/20 to-black" id="network" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Network & Audience</h2>
          <p className="text-gray-400 max-w-2xl">
            Deep penetration into high-engagement niches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Network Stats */}
          <motion.div
            className="bg-purple-900 rounded-xl p-8 border border-purple-800"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <NetworkIcon className="text-purple-500 w-6 h-6" />
              Network Breakdown
            </h3>

            <div className="space-y-6">
              {networkData.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between text-sm mb-2 text-gray-300">
                    <span>{item.label}</span>
                    <span className="font-bold text-white">{item.value}</span>
                  </div>

                  <div className="w-full bg-purple-900/60 rounded-full h-2">
                    <motion.div
                      className={`${item.color} h-2 rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.percentage}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Audience Info */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              className="bg-purple-900 rounded-xl p-6 border border-purple-800 flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
                <Users className="text-white w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">25M+</div>
              <div className="text-sm text-gray-400">Combined Followers</div>
            </motion.div>

            <motion.div
              className="bg-purple-900 rounded-xl p-6 border border-purple-800 flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4">
                <User className="text-white w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">13–30</div>
              <div className="text-sm text-gray-400">Core Age Group</div>
            </motion.div>

            <motion.div
              className="col-span-2 bg-purple-900 rounded-xl p-6 border border-purple-800"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-sm text-gray-400 mb-2 font-bold uppercase tracking-wider">
                Top Geographies
              </div>

              <div className="flex flex-wrap gap-2">
                {geographies.map((geo, index) => (
                  <motion.span
                    key={geo}
                    className="px-3 py-1 rounded-full bg-purple-900/60 text-white border border-purple-800 text-sm"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  >
                    {geo}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;

