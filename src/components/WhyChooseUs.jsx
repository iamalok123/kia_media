import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Leaf,
  Ban,
  VideoOff,
  Tag,
  Users,
  Globe,
  Award,
  Timer
} from "lucide-react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const reasons = [
    { icon: Leaf, text: '100% Organic Marketing' },
    { icon: Ban, text: 'No Meta Ads' },
    { icon: VideoOff, text: 'No Reel Boosting' },
    { icon: Tag, text: 'No Sponsored Ad Labeling (#ad)' },
    { icon: Users, text: '1,000+ Instagram Pages' },
    { icon: Globe, text: '1B+ Organic Reach Delivered' },
    { icon: Award, text: '1+ Year Experience' },
    { icon: Timer, text: 'Campaign Duration: 2–5 Days' },
  ];



return(
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
        
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.text}
                className="
                  flex items-center gap-3
                  bg-purple-950/40 px-5 py-3 md:px-6 md:py-4 rounded-full
                  border border-purple-800/50 backdrop-blur-sm
                  hover:bg-purple-900/60 hover:border-fuchsia-500
                  transition-all duration-300
                  "
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                >
                <Icon className="text-fuchsia-500 w-5 h-5 shrink-0" />
                <span className="text-white font-medium text-sm md:text-base whitespace-nowrap">
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