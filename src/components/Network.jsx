import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { Network as NetworkIcon, Users, User, Globe2 } from 'lucide-react';

const Network = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const networkData = [
    { label: 'K-pop & Asian Pages', value: '500+', percentage: 70, color: 'bg-fuchsia-500' },
    { label: 'Hollywood Pages', value: '150+', percentage: 30, color: 'bg-purple-500' },
    { label: 'Bollywood Pages', value: '200+', percentage: 60, color: 'bg-pink-500' },
    { label: 'Influencer and Theme based Pages', value: '200+', percentage: 50, color: 'bg-indigo-500' },
    { label: 'Anime Pages', value: '100+', percentage: 12, color: 'bg-blue-500' },
    { label: 'Wholesome / Lyrical Pages', value: '100+', percentage: 12, color: 'bg-emerald-500' },
  ];

  const geographyData = [
    { label: 'Asia (South Korea, Japan, China, SEA & others)', value: '60%' },
    { label: 'India', value: '30%' },
    { label: 'UK & USA', value: '20%' },
    { label: 'Global Audience', value: '20%' },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-black via-purple-950/20 to-black relative" id="network" ref={ref}>
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="mb-12 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Network & Reach</h2>
          <p className="text-gray-400 max-w-2xl mx-auto lg:mx-0 text-lg">
            Deep penetration into high-engagement niches.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Network Stats */}
          <motion.div
            className="bg-purple-950/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-700/30 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <NetworkIcon className="text-fuchsia-400 w-6 h-6" />
              </div>
              Network Breakdown
            </h3>

            <div className="space-y-6">
              {networkData.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item.label}</span>
                    <span className="font-bold text-white">{item.value}</span>
                  </div>

                  <div className="w-full bg-purple-950/60 rounded-full h-2.5 overflow-hidden">
                    <motion.div
                      className={`${item.color} h-full rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] shadow-${item.color.replace('bg-', '')}/50`}
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
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                className="bg-purple-950/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-700/30 flex flex-col items-center text-center shadow-2xl hover:border-purple-500/50 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 rotate-3 hover:rotate-6 transition-transform">
                  <Users className="text-purple-400 w-8 h-8" />
                </div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-purple-200 mb-2">100M+</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Combined Followers</div>
              </motion.div>

              <motion.div
                className="bg-purple-950/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-700/30 flex flex-col items-center text-center shadow-2xl hover:border-fuchsia-500/50 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center mb-6 -rotate-3 hover:-rotate-6 transition-transform">
                  <User className="text-fuchsia-400 w-8 h-8" />
                </div>
                <div className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-white to-fuchsia-200 mb-2">13–45</div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-widest">Age Group</div>
              </motion.div>
            </div>

            <motion.div
              className="bg-purple-950/40 backdrop-blur-xl rounded-3xl p-8 border border-purple-700/30 shadow-2xl flex-1"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-pink-500/20 rounded-lg">
                  <Globe2 className="text-pink-400 w-6 h-6" />
                </div>
                Audience Geography
              </h3>

              <div className="space-y-4">
                {geographyData.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex justify-between items-center p-4 rounded-xl bg-purple-900/40 border border-purple-800/50 hover:bg-purple-800/40 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <span className="text-gray-200 font-medium pr-4">{item.label}</span>
                    <span className="font-bold text-fuchsia-400 text-lg whitespace-nowrap">{item.value}</span>
                  </motion.div>
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

