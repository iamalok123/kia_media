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
    { id: 1, name: 'Netflix', src: 'https://i.ytimg.com/vi/ZMak63mHq5Y/maxresdefault.jpg', fit: 'cover' },
    { id: 2, name: 'hitv', src: 'assets/hitv_card.png', fit: 'cover' },
    { id: 3, name: 'Amazon Prime', src: 'assets/primevideo.png', fit: 'cover' },
    { id: 4, name: 'Hotstar', src: 'assets/jiohotstar.png', fit: 'cover' },
    { id: 5, name: 'DashVerse', src: 'assets/dashverse.png', fit: 'contain', padding: 'p-3.5' },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-black via-purple-950/20 to-black" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Partner Logos — Infinite Marquee Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-center text-white/60 font-semibold mb-10 uppercase tracking-[0.25em] text-xs">
            Worked With
          </h3>

          {/* Marquee wrapper — overflow hidden + edge fade masks */}
          <div
            className="relative overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
            }}
          >
            {/* Scrolling track — doubled for seamless loop */}
            <div className="animate-marquee" style={{ gap: '2rem', animationDuration: '18s' }}>
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="relative rounded-2xl overflow-hidden shrink-0 bg-[#0d0d12] flex items-center justify-center shadow-md shadow-black/50"
                  style={{ width: '220px', height: '95px' }}
                >
                  {logo.fit === 'contain' ? (
                    <div className={`w-full h-full ${logo.padding || 'p-2.5'} flex items-center justify-center overflow-hidden`}>
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className="max-w-full max-h-full object-contain rounded-xl pointer-events-none select-none"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-full h-full object-cover rounded-2xl pointer-events-none select-none"
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>
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
