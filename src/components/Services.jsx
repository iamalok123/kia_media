import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import {
  Megaphone,
  Film,
  Music,
  Smartphone,
  Briefcase,
  Image,
  Video,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  Zap,
  Globe,
  BarChart3,
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Music,
      title: 'Song Promotions',
      description: 'Reels, Posts, Stories',
      color: 'from-blue-500/20 to-purple-500/20',
      iconColor: 'text-blue-400',
    },
    {
      icon: Video,
      title: 'Reel Promotions',
      description: 'Viral content distribution',
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400',
    },
    {
      icon: Smartphone,
      title: 'App Promotions',
      description: 'Mobile app marketing',
      color: 'from-pink-500/20 to-red-500/20',
      iconColor: 'text-pink-400',
    },
    {
      icon: Briefcase,
      title: 'Brand Promotions',
      description: 'Corporate campaigns',
      color: 'from-indigo-500/20 to-blue-500/20',
      iconColor: 'text-indigo-400',
    },
    {
      icon: Target,
      title: 'Niche Campaigns',
      description: 'Targeted marketing',
      color: 'from-violet-500/20 to-purple-500/20',
      iconColor: 'text-violet-400',
    },
    {
      icon: Film,
      title: 'Comprehensive Editing',
      description: 'Short-form content',
      color: 'from-fuchsia-500/20 to-pink-500/20',
      iconColor: 'text-fuchsia-400',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide distribution',
      color: 'from-sky-500/20 to-cyan-500/20',
      iconColor: 'text-sky-400',
    },
  ];

  return (
    <section
      className="py-20 bg-linear-to-b from-black via-purple-950/25 to-black relative overflow-hidden"
      id="services"
      ref={ref}
    >
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fuchsia-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-fuchsia-500 font-bold tracking-wider text-sm uppercase mb-2">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive Media Solutions
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Premium services designed to amplify your brand's reach and engagement
          </p>
        </motion.div>

        {/* Infinite Scrolling Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-6">
            {/* First set of cards */}
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative shrink-0 w-[280px] sm:w-[320px] h-[200px] sm:h-[220px] bg-linear-to-br bg-purple-900/40 backdrop-blur-sm border border-purple-800/50 rounded-2xl p-6 flex flex-col justify-between cursor-pointer hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/20"
                  whileHover={{ y: -8 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-4 transition-transform duration-300`}>
                      <Icon className={`${service.iconColor} w-7 h-7 group-hover:text-white transition-colors duration-300`} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-fuchsia-400 group-hover:to-pink-400 transition-all duration-300">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className="relative z-10 h-1 w-full bg-purple-800/50 rounded-full overflow-hidden">
                    <div className={`h-full w-0 group-hover:w-full bg-linear-to-r ${service.color} transition-all duration-500`} />
                  </div>
                </motion.div>
              );
            })}
            
            {/* Duplicate set for seamless loop */}
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={`duplicate-${index}`}
                  className="group relative shrink-0 w-[280px] sm:w-[320px] h-[200px] sm:h-[220px] bg-linear-to-br bg-purple-900/40 backdrop-blur-sm border border-purple-800/50 rounded-2xl p-6 flex flex-col justify-between cursor-pointer hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/20"
                  whileHover={{ y: -4 }}
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-4  transition-transform duration-300`}>
                      <Icon className={`${service.iconColor} w-7 h-7 group-hover:text-white transition-colors duration-300`} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-fuchsia-400 group-hover:to-pink-400 transition-all duration-300">
                      {service.title}
                    </h4>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  <div className="relative z-10 h-1 w-full bg-purple-800/50 rounded-full overflow-hidden">
                    <div className={`h-full w-0 group-hover:w-full bg-linear-to-r ${service.color} transition-all duration-500`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
