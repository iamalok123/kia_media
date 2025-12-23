import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Calendar, Instagram } from 'lucide-react';

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const musicCampaigns = [
    {
      name: 'Gabriela',
      reach: '10M',
      duration: '7 Days',
      platform: 'Instagram',
      image: 'assets/gabriela.jpg',
    },
    {
      name: 'Golden',
      reach: '25M',
      duration: '30 Days',
      platform: 'Instagram',
      image: 'assets/golden.jpg',
    },
    {
      name: 'Dandelions',
      reach: '3-5M',
      duration: '< 7 Days',
      platform: 'Instagram',
      image: 'assets/dandolines.jpg',
    },
    {
      name: 'Let Me Love You',
      reach: '1.5M',
      duration: '4-6 Days',
      platform: 'Instagram',
      image: 'https://i1.sndcdn.com/artworks-000178696713-pifi3d-t500x500.jpg',
    },
    {
      name: 'Summer Vibes',
      reach: '8M',
      duration: '10 Days',
      platform: 'Instagram',
      image: 'assets/summervibes.jpg',
    },
    {
      name: 'Midnight Dreams',
      reach: '12M',
      duration: '14 Days',
      platform: 'Instagram',
      image: 'assets/midnightdreams.jpg',
    },
  ];

  const brandCampaigns = [
    {
      name: 'HiTv App',
      description: 'Campaign across multiple pages',
      engagement: '100M+',
      metric: 'Monthly Followers',
      image: 'assets/hitv.png',
    },
    {
      name: 'Boo App',
      description: 'Performance marketing',
      engagement: '40M+',
      metric: 'Promoted across  200+  pages',
      image: 'assets/boo app.jpg',
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-black via-purple-950/30 to-black" id="campaigns" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Past Campaigns</h2>
          <p className="text-gray-400">Our campaigns speak for themselves.</p>
        </motion.div>

        {/* Music Campaigns - Horizontal Scrollable */}
        <div className="mb-16">
          <motion.h3
            className="text-xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Music Campaign Highlights
          </motion.h3>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap gap-6">
              {/* First set of cards */}
              {musicCampaigns.map((campaign, index) => (
                <motion.div
                  key={index}
                  className="group relative shrink-0 w-[300px] sm:w-[350px] bg-purple-900/40 backdrop-blur-sm border border-purple-800/50 rounded-2xl overflow-hidden cursor-pointer hover:border-fuchsia-500/50 transition-all duration-300 "
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  {/* Image */}
                  <div className="relative h-[200px] sm:h-[240px] overflow-hidden">
                    <img
                      src={campaign.image}
                      alt={campaign.name}
                      className="w-full h-full object-cover transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Top badge */}
                    <div className="absolute top-4 right-4 bg-purple-500/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Instagram className="w-3.5 h-3.5 text-white" />
                      <span className="text-xs font-bold text-white">{campaign.platform}</span>
                    </div>
                  </div>

                  {/* Content below image */}
                  <div className="p-5 sm:p-6">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-fuchsia-400 group-hover:to-pink-400 transition-all duration-300">
                      {campaign.name}
                    </h4>

                    <div className="flex items-center justify-between mb-3 pt-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-fuchsia-500" />
                          <div className="text-2xl sm:text-3xl font-black text-fuchsia-500">
                            {campaign.reach}
                          </div>
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Reach</div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <div className="text-sm font-semibold text-white">{campaign.duration}</div>
                        </div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                    </div>


                  </div>
                </motion.div>
              ))}

              {/* Duplicate set for seamless loop */}
              {musicCampaigns.map((campaign, index) => (
                <motion.div
                  key={`duplicate-${index}`}
                  className="group relative shrink-0 w-[300px] sm:w-[350px] bg-purple-900/40 backdrop-blur-sm border border-purple-800/50 rounded-2xl overflow-hidden cursor-pointer hover:border-fuchsia-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-fuchsia-500/20"
                  whileHover={{ y: -8 }}
                >
                  <div className="relative h-[200px] sm:h-[240px] overflow-hidden">
                    <img
                      src={campaign.image}
                      alt={campaign.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 right-4 bg-purple-500/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Instagram className="w-3.5 h-3.5 text-white" />
                      <span className="text-xs font-bold text-white">{campaign.platform}</span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-fuchsia-400 group-hover:to-pink-400 transition-all duration-300">
                      {campaign.name}
                    </h4>

                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="w-4 h-4 text-fuchsia-500" />
                          <div className="text-2xl sm:text-3xl font-black text-fuchsia-500">
                            {campaign.reach}
                          </div>
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">Reach</div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <div className="text-sm font-semibold text-white">{campaign.duration}</div>
                        </div>
                        <div className="text-xs text-gray-400">Duration</div>
                      </div>
                    </div>

                    {/* <div className="h-1 w-full bg-purple-800/50 rounded-full overflow-hidden">
                      <div className="h-full w-0 group-hover:w-full bg-linear-to-r from-fuchsia-500 to-pink-500 transition-all duration-500" />
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Campaigns - Side by Side Images */}
        <div>
          <motion.h3
            className="text-xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Brand Campaign Highlights
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {brandCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.name}
                className="group bg-purple-900/40 backdrop-blur-sm border border-purple-800/50 rounded-2xl overflow-hidden hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/20"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Single Image */}
                  <div className="w-full sm:w-2/5 shrink-0">
                    <div className="relative h-[200px] sm:h-full min-h-[250px] overflow-hidden group-hover:brightness-110 transition-all duration-300">
                      <img
                        src={campaign.image}
                        alt={`${campaign.name} campaign`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-linear-to-r from-purple-900/40 via-transparent to-transparent" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between bg-purple-950/30">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-fuchsia-400 group-hover:to-pink-400 transition-all duration-300">
                        {campaign.name}
                      </h4>
                      <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                        {campaign.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-purple-800/50">
                      <div className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-fuchsia-500" />
                        <div>
                          <div className="text-2xl sm:text-3xl font-black text-fuchsia-500">
                            {campaign.engagement}
                          </div>
                          <div className="text-xs text-gray-400 uppercase">{campaign.metric}</div>
                        </div>
                      </div>

                      <div className="h-12 w-1 bg-purple-800/50 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-linear-to-b from-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
