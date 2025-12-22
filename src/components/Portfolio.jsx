import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const portfolioItems = [
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXljTahQ4IBO5GX0Pnee8vkOwlfYKAeoeIuHmVj8vWwajVNva6551TyKr5kwCoWIeWXa00AnlQxO5qO41bbvafjpnKPqwCM3fl-EDlCQdFPxHlji9bGO_5Xz_pIAJ2YcF6Jr4eldBnBEF9o0yFmB6F31Vm0Fb8D5g8eX0o4zWix6eHuvqLGpGmL_OdtzekEJLADiLEcaWW9gLTSHqj2g1gSMfYa8s4iwY2KTYD8Ua-55rPsI06TXJfzxgJDTZHm3JToN-9aHVd0vM',
      alt: 'Vertical video thumbnail of a music video edit',
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHQBAwQhncUTyMGv85ciVGoIROQnSjnl1Jv4p_1A9RDLkW0LXgNaFbYvHwqyuICtsa4DMYauK-CVpEza22GJs6S4SEQ5rmUXpo0TBPRpXNYqPHUf0Mo_7TrFBFrywt_dPviRYQybRGIj8OxS4-yz7iykuZggCHAOpq6HBl1z1UKMBqloR02WmUM50av4Y_v15luLbOXyCl7VbP2KHkTXCVKtMOwMjnubtexEEZMS0J42lJtvIedLQaLruC7wXobvnDnZtKKk2hrHs',
      alt: 'Vertical video thumbnail of a brand promotion',
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuHiHt6H2eRfvKktkMieEsWwnzUUbbime_4gJ6OHV12sijI-NmmZtYI_Q06_dV-BFBdL0UVUnI0_DwwJaq05uJewxui6HQe2jGwLD15G16RYmyM04eAj9iNMduHtVWCqr29N54rUAk1HGBCtgJTy4uJTZkQQXqOJEnyimJ0n8Nv_NUp-828sB8_Xp22jUXtkhwF-MTrwXvB-f8gpBdp4_1fXhDC9Bm10knYjLSSnpthuE9j1zkO5pv7f7Gb3XseH7HfFDyKw75TM4',
      alt: 'Vertical video thumbnail of an anime edit',
    },
    {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAE2ipg82BR6IG3v2SrnZBL19FtZ6Uxy4QUVS7lEGmINWsfa3ZKUl2sCfc-9mv3jr18F6MZku6D6KVBZkcz7HA8pHAx2q9CnBeyEOG0PZtLs7cwB7aZGs1ePx8ZgM8v14t5IsLT5KyrvBVGF1GxMbfI53WNHYNp7-9sDJ9ck7Fo8xfqTdkeYjXNzpQLxUuxTfDdHYiZ2-MzjYBv0OtGYrze_rKSEMKjr6LXk2fD-uqwonQRD18WGv5btDePttiMiCM19-aJ0JDOg_8',
      alt: 'Vertical video thumbnail of a K-pop edit',
    },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-black via-purple-950/20 to-black" id="portfolio" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="flex justify-between items-end mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Recent Work</h2>
            <p className="text-gray-400">Examples of our edits and viral placements.</p>
          </div>

          <a
            href="#portfolio"
            className="text-purple-500 hover:text-white transition-colors text-sm font-bold flex items-center gap-1"
          >
            See All <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="group relative aspect-9/16 bg-purple-900 rounded-xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={item.alt}
                loading="lazy"
                src={item.image}
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-purple-500/90 rounded-full flex items-center justify-center text-white backdrop-blur-sm shadow-lg">
                  <Play className="w-6 h-6" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                <button className="w-full bg-white text-black text-xs font-bold py-2 rounded">
                  View Reel
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
