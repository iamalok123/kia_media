import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const WhoWeAre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const networkFeatures = [
    { title: 'Delivered 200+ campaigns with proven success across the last 18 months.' },
    { title: 'Generated 1B+ total Instagram Reel reach' },
    { title: 'From edit & fan pages to influencers' },
    { title: 'End-to-end execution with timeline-based delivery' },
  ];

  const specialisationFeatures = [
    { title: 'Drama & K-pop niche specialists' },
    { title: 'Youth-focused audience (13–30)' },
    { title: 'Strong presence in India, USA, UK & Asia' },
  ];

  const partnerLogos = [
    { id: 1, name: 'Microsoft', src: 'company_logos/unacadamy.svg' },
    { id: 2, name: 'Framer', src: 'company_logos/netflix.png' },
    { id: 3, name: 'Instagram', src: 'company_logos/dashverse.png' },
    { id: 4, name: 'HUAWEI', src: 'company_logos/primevideo.png' },
    { id: 5, name: 'Walmart', src: 'company_logos/jiohotstar.png' },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-black via-purple-950/20 to-black" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Partner Logos Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 bg-[#111111]/80 border border-white/5 rounded-xl py-8 px-6 md:px-12 backdrop-blur-md"
        >
          <h3 className="text-center text-gray-400 font-medium mb-8 uppercase tracking-widest text-sm">Worked With</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 transition-opacity duration-500">
            {partnerLogos.map((logo) => (
              <div 
                key={logo.id} 
                className="group relative flex items-center justify-center transition-all duration-300 w-24 h-12 md:w-32 md:h-16"
              >
                {/* Renders actual image if 'src' exists, otherwise renders styled dummy placeholder */}
                {logo.src ? (
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className="w-full h-full object-contain relative z-10 opacity-70 grayscale group-hover:scale-110 transition-all duration-300" 
                  />
                ) : (
                  <div className="relative z-10 flex items-center justify-center text-base md:text-lg font-medium text-gray-500 group-hover:scale-110 transition-all duration-300 cursor-default text-center">
                    {logo.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-purple-800 shadow-2xl bg-[#0a0a0a] w-full aspect-5/4 flex items-center justify-center">
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent z-10 pointer-events-none" />
              <img
                className="absolute inset-0 w-full h-full object-cover z-0"
                alt="Banner placeholder"
                src="banner.png"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-fuchsia-500 font-bold tracking-wider text-sm uppercase mb-2">
                Our Instagram Network
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Curated Instagram Promotion Network
              </h3>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed">
              We operate a vast network of 1000+ pages specializing in Kdrama-Asian niche, Hollywood,Bollywood, K-pop,Music, and Anime niches.
            </p>

            {/* Our Network & Reach */}
            <div className="space-y-3">
              <h4 className="text-purple-400 font-bold text-lg">Our Network & Reach</h4>
              {networkFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="bg-fuchsia-500/20 p-1 rounded text-fuchsia-500 mt-1 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <h5 className="text-white font-medium">{feature.title}</h5>
                </motion.div>
              ))}
            </div>

            {/* Our Specialisation */}
            <div className="space-y-3">
              <h4 className="text-purple-400 font-bold text-lg">Our Specialisation</h4>
              {specialisationFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div className="bg-fuchsia-500/20 p-1 rounded text-fuchsia-500 mt-1 shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <h5 className="text-white font-medium">{feature.title}</h5>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
