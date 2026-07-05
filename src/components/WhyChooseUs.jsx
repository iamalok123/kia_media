import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Music, Rocket, Tv, Globe, Megaphone, 
  Film, Sparkles, Sprout, Target, Users 
} from 'lucide-react';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    { icon: Music, text: 'Organic Music Marketing' },
    { icon: Rocket, text: 'Song Launch Campaigns' },
    { icon: Tv, text: 'OTT & Drama Promotions' },
    { icon: Globe, text: 'Asian Entertainment Marketing' },
    { icon: Megaphone, text: 'Brand Awareness Campaigns' },
    { icon: Film, text: 'Hollywood Entertainment Marketing' },
    { icon: Sparkles, text: 'Anime Marketing' },
    { icon: Sprout, text: 'Seeding Campaigns' },
    { icon: Target, text: 'Targeted Creator Campaigns' },
    { icon: Users, text: 'Influencer & Non-Face Creator Campaigns' },
  ];

  return (
    <section className="py-24 bg-linear-to-b from-black via-purple-950/15 to-black relative" id="services" ref={ref}>
      {/* Subtle background glow behind the grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-fuchsia-500 font-bold tracking-wider text-sm uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.h2>
          <motion.h3
            className="text-4xl md:text-5xl font-black text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Our Services
          </motion.h3>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.text}
                className="
                  group relative p-6 sm:p-8 rounded-3xl
                  bg-white/2 backdrop-blur-md
                  border border-white/5 hover:border-purple-500/40
                  transition-all duration-500
                  flex flex-row items-center text-left gap-6
                  overflow-hidden hover:bg-white/4
                  hover:-translate-y-1 hover:shadow-[0_10px_40px_-15px_rgba(168,85,247,0.3)]
                  w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
                "
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                {/* Glowing left edge line effect on hover */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-fuchsia-500 rounded-r-full opacity-0 group-hover:h-16 group-hover:opacity-100 transition-all duration-500 shadow-[0_0_15px_3px_rgba(217,70,239,0.5)]" />
                
                {/* Subtle corner background glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-purple-900/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-600/30 transition-all duration-500">
                  <Icon className="text-purple-400 w-7 h-7 group-hover:text-fuchsia-300 transition-colors" />
                </div>
                
                <h4 className="text-white font-semibold text-lg leading-snug group-hover:text-fuchsia-50 transition-colors z-10 pr-6">
                  {service.text}
                </h4>

                {/* Arrow sliding in on hover */}
                <div className="absolute right-6 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 pointer-events-none">
                  <svg className="w-5 h-5 text-fuchsia-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
