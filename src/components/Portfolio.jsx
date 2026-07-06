import { useState, useEffect } from 'react';
import { getAllVideos } from '../lib/api';
import CategoryGrid from '../ProjectComponents/CategoryGrid';
import VideoModal from '../ProjectComponents/VideoModal';

// Maps your backend's category keys to display labels — the ONLY hardcoded
// thing left, since your API doesn't (and shouldn't) know about UI text
const CATEGORY_META = {
  afterEffects: { title: 'After Effects Edits', subtitle: 'Premium motion graphics & visual effects' },
  meme: { title: 'Meme Edits', subtitle: 'Viral meme content & trending formats' },
  music: { title: 'Music Videos', subtitle: 'Dynamic music visualizations & edits' },
  other: { title: 'Other Edits', subtitle: 'Creative & versatile video content' },
  voice: { title: 'Voice Over Edits', subtitle: 'Professional voice-over content' },
  brand: { title: 'Brand Stories', subtitle: 'Storytelling for brand identity' },
  finance: { title: 'Finance Edits', subtitle: 'Explainer content for finance clients' },
  unacadamy: { title: 'Unacademy Edits', subtitle: 'Educational content edits' },
};

const Portfolio = () => {
  const [videosByCategory, setVideosByCategory] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null); // { category, id }
  const [error, setError] = useState(false);

  useEffect(() => {
    getAllVideos()
      .then(setVideosByCategory)
      .catch(() => setError(true));
  }, []);

  return (
    <section className="py-20 bg-linear-to-b from-black via-purple-950/20 to-black relative overflow-hidden" id="edits">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-fuchsia-500/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="text-fuchsia-500 font-bold tracking-wider text-sm uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">Sample Edits</h3>
          <p className="text-gray-400">Examples of our edits and viral placements.</p>
        </div>

        {error && <p className="text-red-400">Couldn't load portfolio. Please refresh.</p>}

        {!error && !videosByCategory && <p className="text-gray-400">Loading portfolio...</p>}

        {videosByCategory && (
          <div className="space-y-16">
            {Object.entries(videosByCategory).map(([key, items], i) => {
              const meta = CATEGORY_META[key] || { title: key, subtitle: '' };
              return (
                <CategoryGrid
                  key={key}
                  categoryKey={key}
                  title={meta.title}
                  subtitle={meta.subtitle}
                  items={items}
                  delay={i * 0.1}
                  onOpen={(category, id) => setActiveVideo({ category, id })}
                />
              );
            })}
          </div>
        )}
      </div>

      {activeVideo && (
        <VideoModal
          category={activeVideo.category}
          videoId={activeVideo.id}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
};

export default Portfolio;