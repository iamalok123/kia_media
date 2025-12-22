import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { CheckCircle, TrendingUp, Settings, Zap, BarChart3 } from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    { icon: CheckCircle, text: 'Niche specialists' },
    { icon: TrendingUp, text: 'Proven track record' },
    { icon: Settings, text: 'Custom engagement packages' },
    { icon: Zap, text: 'Fast turnaround (24–48 hours)' },
    { icon: BarChart3, text: 'Performance-driven campaigns' },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-black via-purple-950/15 to-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Why Kia Mediaworks?
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.text}
                className="
                  flex items-center gap-3
                  bg-purple-950 px-6 py-4 rounded-full
                  border border-purple-800
                  hover:border-fuchsia-500
                  transition-colors
                "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="text-fuchsia-500 w-5 h-5" />
                <span className="text-white font-medium">
                  {reason.text}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
