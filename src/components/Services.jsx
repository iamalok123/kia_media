import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import {
  Music,
  Rocket,
  Tv,
  Globe,
  Megaphone,
  Film,
  Sparkles,
  Sprout,
  Target,
  Users
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const row1 = [
    { icon: Music, title: 'Organic Music Marketing', color: 'from-blue-500/20 to-purple-500/20', iconColor: 'text-blue-400' },
    { icon: Rocket, title: 'Song Launch Campaigns', color: 'from-purple-500/20 to-pink-500/20', iconColor: 'text-purple-400' },
    { icon: Tv, title: 'OTT & Drama Promotions', color: 'from-pink-500/20 to-red-500/20', iconColor: 'text-pink-400' },
    { icon: Globe, title: 'Asian Entertainment Marketing', color: 'from-indigo-500/20 to-blue-500/20', iconColor: 'text-indigo-400' },
    { icon: Megaphone, title: 'Brand Awareness Campaigns', color: 'from-violet-500/20 to-purple-500/20', iconColor: 'text-violet-400' },
  ];

  const row2 = [
    { icon: Film, title: 'Hollywood Entertainment Marketing', color: 'from-fuchsia-500/20 to-pink-500/20', iconColor: 'text-fuchsia-400' },
    { icon: Sparkles, title: 'Anime Marketing', color: 'from-sky-500/20 to-cyan-500/20', iconColor: 'text-sky-400' },
    { icon: Sprout, title: 'Seeding Campaigns', color: 'from-emerald-500/20 to-teal-500/20', iconColor: 'text-emerald-400' },
    { icon: Target, title: 'Targeted Creator Campaigns', color: 'from-amber-500/20 to-orange-500/20', iconColor: 'text-amber-400' },
    { icon: Users, title: 'Influencer & Non-Face Creator Campaigns', color: 'from-rose-500/20 to-pink-500/20', iconColor: 'text-rose-400' },
  ];

  const ServiceCard = ({ service }) => {
    const Icon = service.icon;
    return (
      <div className="group relative shrink-0 w-64 sm:w-[280px] h-40 bg-purple-950/40 backdrop-blur-xl border border-purple-700/30 rounded-3xl p-5 flex flex-col justify-between cursor-pointer hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(209,37,244,0.1)]">
        <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-300`} />
        
        <div className="relative z-10 flex flex-col h-full justify-between">
          <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${service.color} flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-inner`}>
            <Icon className={`${service.iconColor} w-6 h-6 group-hover:text-white transition-colors duration-300`} />
          </div>
          <h4 className="text-base md:text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300 leading-snug whitespace-normal">
            {service.title}
          </h4>
        </div>

        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-transparent overflow-hidden rounded-b-3xl">
          <div className={`h-full w-0 group-hover:w-full bg-linear-to-r ${service.color} transition-all duration-500 ease-out`} />
        </div>
      </div>
    );
  };

  return (
    <section
      className="py-20 bg-linear-to-b from-black via-purple-950/20 to-black relative overflow-hidden"
      id="services"
      ref={ref}
    >
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-fuchsia-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-purple-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-fuchsia-500 font-bold tracking-wider text-sm uppercase mb-2">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
            Comprehensive Media Solutions
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Premium services designed to amplify your brand's reach and engagement.
          </p>
        </motion.div>

        {/* First Row - Moving Left */}
        <div className="relative overflow-hidden mb-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mask-edges">
          <div className="flex animate-marquee whitespace-nowrap gap-6 py-4">
            {[...row1, ...row1, ...row1, ...row1].map((service, index) => (
              <ServiceCard key={`row1-${index}`} service={service} />
            ))}
          </div>
        </div>

        {/* Second Row - Moving Right */}
        <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mask-edges">
          <div className="flex animate-marquee-reverse whitespace-nowrap gap-6 py-4">
            {[...row2, ...row2, ...row2, ...row2].map((service, index) => (
              <ServiceCard key={`row2-${index}`} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;


