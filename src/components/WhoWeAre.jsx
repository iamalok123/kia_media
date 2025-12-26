import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';

const WhoWeAre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const networkFeatures = [
    { title: 'Worked with 50+ songs and 30+ brands in the last 6 months' },
    { title: 'Generated 1B+ total Instagram Reel reach' },
    { title: 'From edit & fan pages to influencers' },
    { title: 'End-to-end execution with timeline-based delivery' },
  ];

  const specialisationFeatures = [
    { title: 'Drama & K-pop niche specialists' },
    { title: 'Youth-focused audience (13–30)' },
    { title: 'Strong presence in India, USA, UK & Asia' },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-black via-purple-950/20 to-black" id="about" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-purple-800 shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10" />
              <img
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                alt="Collage of viral social media posts and music album covers"
                // src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvpdv_WOW_ITLg6DtpVBrMOkcmuIoYWwo9NY6mYN7Ndelahm13ig5KXrItvZue8RJUSKlScfBKvRubVsFuedQf3KVb4kIDBFFDJqMPvKHIes15jvPF_wnF_2COjV8Jo8FKFrktTsi5DYBH17nFi4dcqQLFpHheTj0duVEfMgBCZC_cKHTvTxNz1Kga8abxEolrtqOwGT7ycsxNvbUaodRAkKAjKwkzN5j1RHZAs2uthac9jIcuBiCwedlPPafPR8apHC8widWmWTM"
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
              We operate a vast network of 1000+ pages specializing in Music, Bollywood, K-pop, and Anime niches.
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
