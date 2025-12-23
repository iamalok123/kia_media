import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { label: 'Instagram Pages', value: '1000+', delay: 0 },
    { label: 'Combined Followers', value: '100M+', delay: 0.1 },
    { label: 'Reach Packages', value: '2M–25M', delay: 0.2 },
    // { label: 'Starting Pricing', value: '₹55K+', delay: 0.3 },
  ];

  return (
    <section className="py-12 bg-linear-to-b from-black via-purple-950/30 to-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: stat.delay }}
              className="
                bg-purple-900 p-6 rounded-xl
                border border-purple-800
                hover:border-fuchsia-500/30
                transition-colors group
              "
            >
              <div className="text-gray-400 text-sm font-medium mb-1">
                {stat.label}
              </div>
              <div className="text-3xl font-bold text-white group-hover:text-fuchsia-500 transition-colors">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
