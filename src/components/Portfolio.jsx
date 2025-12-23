import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Category 1: After Effects Edits
  const aeVideos = [
    { src: '/videos/AE/1.mp4', title: 'Motion Graphics', category: 'After Effects' },
    { src: '/videos/AE/10.mp4', title: 'Visual Effects', category: 'After Effects' },
    { src: '/videos/AE/12.mp4', title: 'Title Animation', category: 'After Effects' },
    { src: '/videos/AE/4.mov', title: 'Logo Reveal', category: 'After Effects' },
    { src: '/videos/AE/AE.mp4', title: 'Intro Sequence', category: 'After Effects' },
  ];

  // Category 2: Meme Edits
  const memeVideos = [
    { src: '/videos/meme/lv_0_20250611111501.mp4', title: 'Trending Meme', category: 'Meme Edit' },
    { src: '/videos/meme/lv_0_20250611112306.mp4', title: 'Viral Content', category: 'Meme Edit' },
    { src: '/videos/meme/lv_0_20250611115335.mp4', title: 'Comedy Reel', category: 'Meme Edit' },
    { src: '/videos/meme/lv_0_20250613112229.mp4', title: 'Reaction Edit', category: 'Meme Edit' },
    { src: '/videos/meme/lv_0_20250624011250.mp4', title: 'Meme Compilation', category: 'Meme Edit' },
  ];

  // Category 3: Music Videos
  const musicVideos = [
    { src: '/videos/music/10.mp4', title: 'Music Promo', category: 'Music Video' },
    { src: '/videos/music/12.mp4', title: 'Lyric Video', category: 'Music Video' },
    { src: '/videos/music/13.mp4', title: 'Beat Sync Edit', category: 'Music Video' },
    { src: '/videos/music/4.mp4', title: 'Album Teaser', category: 'Music Video' },
    { src: '/videos/music/6.mp4', title: 'Concert Highlight', category: 'Music Video' },
  ];

  // Category 4: Other Edits
  const otherVideos = [
    { src: '/videos/other/1.mp4', title: 'Brand Story', category: 'Other' },
    { src: '/videos/other/2.mp4', title: 'Product Showcase', category: 'Other' },
    { src: '/videos/other/3.mp4', title: 'Event Highlight', category: 'Other' },
    { src: '/videos/other/4.mp4', title: 'Documentary Style', category: 'Other' },
  ];

  // Category 5: Voice Over Edits
  const voiceVideos = [
    { src: '/videos/voice/1.mp4', title: 'Narration Edit', category: 'Voice Over' },
    { src: '/videos/voice/10.mp4', title: 'Podcast Clip', category: 'Voice Over' },
    { src: '/videos/voice/12.mp4', title: 'Storytelling', category: 'Voice Over' },
    { src: '/videos/voice/3.mp4', title: 'Explainer Video', category: 'Voice Over' },
    { src: '/videos/voice/5.mp4', title: 'Audio Visual', category: 'Voice Over' },
  ];

  // All categories
  const categories = [
    { title: 'After Effects Edits', subtitle: 'Premium motion graphics & visual effects', items: aeVideos },
    { title: 'Meme Edits', subtitle: 'Viral meme content & trending formats', items: memeVideos },
    { title: 'Music Videos', subtitle: 'Dynamic music visualizations & edits', items: musicVideos },
    { title: 'Other Edits', subtitle: 'Creative & versatile video content', items: otherVideos },
    { title: 'Voice Over Edits', subtitle: 'Professional voice-over content', items: voiceVideos },
  ];

  // Video Card Component with HTML5 video
  const VideoCard = ({ item, index }) => {
    return (
      <motion.div
        key={index}
        className="group relative bg-purple-900/40 rounded-2xl overflow-hidden cursor-pointer border border-purple-500/40 shadow-lg shadow-purple-500/30 hover:border-fuchsia-500/60 hover:shadow-xl hover:shadow-fuchsia-500/40 transition-all duration-300"
        whileHover={{ y: -8, scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
      >
        {/* HTML5 Video Player */}
        <div className="relative w-full aspect-9/16">
          <video
            src={item.src}
            className="absolute inset-0 w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
          />
        </div>

        {/* Content overlay */}
        <div className="p-4 bg-black/60">
          <span className="text-fuchsia-400 text-xs font-semibold uppercase tracking-wider">
            {item.category}
          </span>
          <h4 className="text-white font-bold text-lg mt-1">{item.title}</h4>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-linear-to-b from-black via-purple-950/20 to-black relative overflow-hidden" id="portfolio" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="flex justify-between items-end mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-fuchsia-500 font-bold tracking-wider text-sm uppercase mb-2">
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Recent Work</h3>
            <p className="text-gray-400">Examples of our edits and viral placements.</p>
          </div>

          <a
            href="#portfolio"
            className="text-purple-500 hover:text-white transition-colors text-sm font-bold flex items-center gap-1"
          >
            See All <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Category Sections */}
        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="mb-6">
                <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {category.title}
                </h4>
                <p className="text-gray-500 text-sm">{category.subtitle}</p>
              </div>

              {/* Video Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {category.items.map((item, index) => (
                  <VideoCard key={`${catIndex}-${index}`} item={item} index={index} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
