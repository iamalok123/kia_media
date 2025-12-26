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
      duration: '< 7 Days',
      platform: 'Instagram',
      image: 'assets/gabriela.jpg',
    },
    {
      name: 'Golden',
      reach: '25M',
      duration: '< 3 Days',
      platform: 'Instagram',
      image: 'assets/golden.jpg',
    },
    {
      name: 'Dandelions',
      reach: '5M',
      duration: '< 7 Days',
      platform: 'Instagram',
      image: 'assets/dandolines.jpg',
    },
    {
      name: 'Let Me Love You',
      reach: '2M',
      duration: '2 Days',
      platform: 'Instagram',
      image: 'https://i1.sndcdn.com/artworks-000178696713-pifi3d-t500x500.jpg',
    },
    {
      name: 'Cheri Cheri Lady ',
      reach: '3M',
      duration: '< 7 Days',
      platform: 'Instagram',
      image: 'https://c.saavncdn.com/490/Original-80-s-2014-500x500.jpg',
    },
    {
      name: 'High on you ',
      reach: '3M',
      duration: '< 7 Days',
      platform: 'Instagram',
      image:'https://static.qobuz.com/images/covers/sa/sg/q3b5o097bsgsa_600.jpg',
    },
    {
      name: 'New Riot ',
      reach: '5M+',
      duration: '< 7 Days',
      platform: 'Instagram',
      image: 'data:image/jpeg;base64,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',
    },
    {
      name: 'In the dark',
      reach: '5M+',
      duration: '< 7 Days',
      platform: 'Instagram',
      image: 'https://celebmix.com/wp-content/uploads/2025/11/1215862-dj-snake-bourget.jpg',
    },
    {
      name: 'Feminatti',
      reach: '2M+',
      duration: '< 7 Days',
      platform: 'Instagram',
      image: 'https://www.easterneye.biz/media-library/sakshi-chopra.jpg?id=62200827&width=1245&height=700&quality=60&coordinates=0%2C759%2C0%2C554',
    },
  ];

  const brandCampaigns = [
    {
      name: 'HiTv App',
      description: 'Campaign across multiple pages',
      engagement: '100M+',
      metric: 'Monthly Reach',
      image: 'assets/hitv.png',
    },
    {
      name: 'Boo App',
      description: 'Performance marketing',
      engagement: '250+',
      metric: 'Pages Working',
      image: 'assets/boo app.jpg',
    },
    {
      name: 'JO1',
      description: 'Jpop Group',
      engagement: '',
      metric: 'Indian Promotion',
      image: 'https://nonno.hpplus.jp/wp-content/uploads/org/aa/aa57405681c1d65598ed6f04cfee7036_1080x1383_h.jpg',
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
          <h2 className="text-3xl font-bold text-white mb-4">Recent Work</h2>
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






// import React, { useRef, useState } from 'react';
// // eslint-disable-next-line no-unused-vars
// import { motion, useInView } from 'framer-motion';
// import { TrendingUp, Users, Calendar, Instagram, ChevronLeft, ChevronRight } from 'lucide-react';

// const Results = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-100px' });
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const carouselRef = useRef(null);

//   const musicCampaigns = [
//     {
//       name: 'Gabriela',
//       reach: '10M',
//       duration: '< 7 Days',
//       platform: 'Instagram',
//       image: 'assets/gabriela.jpg',
//     },
//     {
//       name: 'Golden',
//       reach: '25M',
//       duration: '< 3 Days',
//       platform: 'Instagram',
//       image: 'assets/golden.jpg',
//     },
//     {
//       name: 'Dandelions',
//       reach: '5M',
//       duration: '< 7 Days',
//       platform: 'Instagram',
//       image: 'assets/dandolines.jpg',
//     },
//     {
//       name: 'Let Me Love You',
//       reach: '2M',
//       duration: '2 Days',
//       platform: 'Instagram',
//       image: 'https://i1.sndcdn.com/artworks-000178696713-pifi3d-t500x500.jpg',
//     },
//     {
//       name: 'Cheri Cheri Lady ',
//       reach: '3M',
//       duration: '< 7 Days',
//       platform: 'Instagram',
//       image: 'https://c.saavncdn.com/490/Original-80-s-2014-500x500.jpg',
//     },
//     {
//       name: 'High on you ',
//       reach: '3M',
//       duration: '< 7 Days',
//       platform: 'Instagram',
//       image: 'https://static.qobuz.com/images/covers/sa/sg/q3b5o097bsgsa_600.jpg',
//     },
//     {
//       name: 'New Riot ',
//       reach: '5M+',
//       duration: '< 7 Days',
//       platform: 'Instagram',
//       image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEPEhASERAVEg8REA8YFRUWFRMQFRAQFhUYFhcSFRYYKCohGB4lGxUTIjEtJSotLzAuFx8zODMsOCstLisBCgoKDg0OGxAQGzclHiUuLS4tLS03Ny0tLS0tLS4tLS4tLS0rKy0tLS01LS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//EAD0QAAIBAgIHBQUFBwUBAAAAAAABAgMRBCEFEhUxQVPRE1FhkaIGcYGhsSIyM8HhQkNSVHJzsgcWJPDxYv/EABsBAQACAwEBAAAAAAAAAAAAAAAEBQECAwYH/8QAPREBAAECAgUHCQgBBQEAAAAAAAECAwQREhRRUtEFFSExQVOhBhMyM2FxgZGxFiI0coLB4fDxJEJDVGIj/9oADAMBAAIRAxEAPwD4aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkABgDIGAAAAAAyAAwBkDAGQAGAAAABkDAGQAGAAGQAGAAAABshKTdk5NvgrsZ5M0xNU5QkNH6YlSspxU4eKWsvc+pHu2NPpicpW/J/K1WGnRuURVTsmOmPdPFZcHiaVZXhqt8VZKS96K27Tdt+lm9vgsRgcZTnaiM9mUZwqelJtVqqTaXaT8OJbWpzoj3PnnKMRGLuRG9P1eITfZzd3ftKfHwmbdrjTH/AMp98fu0xm2/vPzeRs5RGc5JTZ8P5yHm+pG8/XuSu+asP/2aTZ8P5yHm+o8/XuSc04f/ALNL3HRWsp9niFUlGN1GLefz95jWcpjSpybxyJTcoqmzeiuYjPKER2ku9+bJSgW/Q2JjWpptLXjlLJb+/wCJUYmmu3X19EvovIt6xi8NE1UxpU9E9EfP4oDTuM16jUMowvHLK74vz+hPw1E00dPXLyPLWJov4qYtxEU09EZeMuCTmrXcldXW9XXeSM1VNM09cLR7PYmNWnqtJzp5PJXceD/L4FXi6aqK9KJ6Je68nb1nEWPN10xpU+zrjs4Iv2ixilPUhlGG9rK8+O7u6krCUTFOlV1yovKDFW7l/wA1aiIpp2ds9vyeNBYOVad5N9nDOWbzfCJtib3m6ejrlx5E5NnGX86vQp6Z9vsWmtTjqy+yvuy4LuKqiurSjpe9xOFsxYryojqns9ih9pLvfmy9fKUpgNGutBT7dRzas3nl8SNdxGhVlo5rrAckRirXnPOxT05ZT/l0bDf8zH/vxOeuf+ZTPs5Hf0/34ovHUXSm49op5LOLb+D8SVbr06c8slHjMNq92belFXthsw2JquFSKvKGo7t56nc0+GZiqmnSie10s3r82q6IjOnLp9nx7HGqj735s6IKVqaYcadOFOKuoR1pNJvW4pXI0WM65qqn4Lu5ytoWKLNmmImIjOrKM8/Y46EK2IlaLcpb99kl3+B1qrpt05z1IFixfxt3Qo6ZSkPZ2rxqpPw1mRZx1HZC9o8lcRMferiPnLzV9nqy+7UUvC8om1OOtz1w53fJfFUxnTVE+CLVarRk1dxknZp5/J5EnKmuM+xRxXew1yaeqY7J4S7abnjJJJxhOMPGKkr78uOaOUzTYpznphY26LvK12KI0aaoj3Z/KOtufs/W5sfOfQ5xjbc9kpdXkvioiZ0qfHghe0l/E/Nkx5pI6P0XVrx1ozSWs1m5Xurd3vI93E025ylccn8i38bbm5bmIiJy6f8ADq/29W5sfOfQ5a9b2SnfZXF71PjwR2hvx6X9aJF/1cqnkr8Za98LPpDRFOtd21Z/xLj71xKu1iq7fR1w9zyhyFh8XnVH3a9sfvCt4vAVcM9bOyeU47v0LO3et3Yy8HisXydi+T69KejZVHV/DirVHOTlJ3lJtt97OsRERlCuuXKrlU11TnM9bbD8Kf8AcpfSZj/c3p9VV74/doja6vu4+42coyz6Uv8A8Hvq/Ii/6j2L3LkfbX4H/B76vyH+o9hlyN/78EjoOeHU2qOvrOOetusmRsTF2ac68sl1yHcwFN+acNpaUx29WUOH2k0fqS7SK+zN5/8AzP8AXqd8Jf06dGeuFX5Q8meYu+etx92rr9k/yjsFjZ0XJxf3otdH70Sa7dNeWfYpsJjbuFmqbc9cTH99sM6OwjrVIw4PNvuit7MXbnm6Jqbcn4SrF4im1Hb1+7tWH2g0epU1KCzpLcuX3fDf5lfhL8xXlV2/V6/yg5Mpqw0XLUdNEZfp/hXMFi5UZa0HnZrz/Wz+BY3LcVxlLxmExdzC16duenKY+bXRpyqSUVnKTy8WzaqYpjOepztWq71yKKemZld8BhFRhGC4b3/FLiyjvXZuVZy+pcnYKjB2ItU/Gdsttb7sv6ZfQ1t+lDvi/UV+6fo+fF++QpvRWhY1qam5tNtqyS4EO/ipt1aOT03JXINGNw/nZrmOmY6tjs/2zDmS8kcdfnYsfsnb7yfkhtK6PeHko62smrp2txtuJlm9F2nN5rlPk6rA3vNzOcTGcSxT0jUUJU27wlFqz4eKZtNmmaoq7Yc7fKF+izVYzzpmOrg40dEF2YjR04whUSbhKKd1+y+Kfccqb1NVU09sJ9/k69atU3ss6aozzjs97OitIPDycrayas1uy70zF6zF2nJvyZyjVgbvnIjOJ6JhPQ9o6L3qa+Cf5kCcDX2S9ZR5U4WY+9TMfKf3eavtJSX3Yyk/hFeZmnA19stbvlVh4j7lEzPt6OKuYzEOrOU2s5PcvJL5IsaKIopimOx4zFYirE3qrtXXVKd9m9Hzg3UmtVONop73e2fhuIOMvUzGhD1Pk3yZdouTiLkZRllET1zn2p+XEr6euHsLvoT7pfPT0L46tfst+C/7kvpEqsd6yPc9/wCSv4Sr80/SEwQnp3LT0fRi1KNOKknk0tzO04i5MZTKtt8kYO3VFdFuImOp1HFYsNXye4ROXSxVTFUZVRnDl2ZQ5UfI76zd2qzmXA93DOzaNmuyjZtPdxV7fVmNZu7WeZcDll5uHnZdDlR8jOs3drHMmB7uDZdDlR8hrN3acyYHu4Nl0OVHyGs3dpzJge7hsoYKlTd4U4xdt6XA1qvV1RlVLtY5MwuHr07VERLbVpxmnGSTi96edzSmuaZziUi/Yt3qJouRnE9jm2XQ5UfI66zd2oPMmB7uG7D4SnTu4QUW99lvRpXdrrjKqUjDcn4fDVTVaoiJluNM8kqaYmMp6nHsuhyo+R21m7tVvMmB7uGyhgqUHrQpxjLvSNar1dUZTLrY5MwtivTt0RE7XQck9hq+QiculrXTFUTTPVLk2XQ5UfI76zd3lbzJge7h0UaMYLVhFRj3I5V11VznUm4fDW8PRoWoyhsNUhor4SnUac4KTSyvnkdKL1dEZUyhYnk/DYmrSu0Zy1bLocqPkb6zd2o/MmB7uDZdDlR8hrN3eOZMD3cOqnBRSUVZJWSXBHGqqapznrWFuzRboi3TGUR2NNXA0p5ypxb9yv5nSm/cp6pRbvJmEu9NduPk0PQ+Hf7pecl+Zvrd3aizyBgJ/wCPxnizHRGHX7pecn9WNau7WY5BwEf8fjPF0UcLTh92EYvwST8znVdrq65TLWAw1mc7duI+Dcc0sBMRMZS49l0OVHyO+s3d5VcyYHuodFChGmrQioq97LvOddyquc6pTsNhbWHp0bVOUdbYaJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABH1NM0Itxc84tp/ZlvWT4EmMJdmM4hR1+UGBoqmmqqc46OqXThsZTqNqMruKu1ZrLV1uPghqd3Yx9o8BvT8pW2h7B6QqRjONGLhKKafa0tzV1xM6nd2MfaPAb0/KULHRsniVg1Km8U5avZqpBvXScnG6dlku8and2H2jwG9PybPaXQ1fRsIVMVFU4TnqpqUan2rN2tBtrJPyGp3dh9o8BvT8pV56cw/M9M+g1O7sPtHgN6flLvpTU4wnFpxnFtNdyk45rg7xe84XLdVE5VLPB4y1irfnLU5xnlsejRLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHpD8Wr/cqf5Mv7fox7nyHF+vr/NP1dWhqkoSdW14U1eSys08rfM3R33L/AE39p6lXC09aUX2acVHWtKyso3ivBxvx9wHHi9OY+OJ1qc9H4ZKtlQ1468m39rXap3lJqTu0/FeIV3/V/S7msNRk4pydSpKKlrxhJR1Ut267e9cMrAfK22/ks+4D6FTowp06EIVI1NWjHWlGcakddtuSi4t7r8fHhYqMb634Pofkv+B/VP7BEejAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHpD8Wr/AHKn+TL+36Me58hxfr6/zT9W2hilThUgs+1jG7tZxavl7rN/I3R1l0HpeeClh4wtJVMPCTg75ylKo/O0vigLXpf291HCtLDU+0Sau6UNeUrcZ2ulu3Phw4B800/pipjarq1N7yS7o38OIEcBbvZr8Bf1S+pUY31vwfRfJn8D+qf2SpEehAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHpD8Wr/cqf5Mv7fox7nyHF+vr/NP1aEbo4pPfxVvgB04zGyqqKl+ze27Jdy8AOUD1ZvvfzsgLf7ORtRX9UvqVGN9b8H0TyY/A/qlJkR6IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAp2lcG05zWcZTnfwlrPL5fNF/b9CPc+Q4v8AEV/mn6uDWSldxvHWzink1fcmbo6Z097PuhepTqRqUnChUcU2qlCNaKnTjUTVr2ks4tr8gggJjB6GnUw063ZztGrCMZ/ZUJOUZtxk27r8PKys22r7gOPD6OnUWtFfZWrd91/Df/4wLToWj2dNx/hnLqVGN9b8H0TyY/A/ql3kR6IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAp2Kxur28LZyq1M+5a31y+bL+36Me58hxfr6/zT9XDNLJxXDNZ5Pd+aN0dZvZXHSxbjo+tU1aNeKpxqasZVKWq3Up04t2c4ueSg3a8lZx3gcOO9nKtOpQjRvXWIc+z+xKnLXhJxqUqkJZwlFr7Wdkne7WYFixOFeDwmHozjSdWspT7anWjXUqEKknCmox+zftZVE3d5RtxApdafZyi4Oz1bXXhl0As+gKrnS1pZtzlfhd33lRjfW/B9E8mPwP6pSREeiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKRjsNN1KrUJNOpP9l7tZl7RVTox0vk+Kw96b9cxRPpT2TteKNGpH93L3astzTT8Nzfmb6dO1w1a9uT8pZjhpr93JNZpqM7pq2Q06drGrXtyflK04H2pxq16lWlHFVKULQniKbqyjTmnTlBbm1aT83fwadO01a9uT8pReM0piMTNyq09WOrGMYQp6kKUElGMKcErRS35cXJ5tsadO01a9uT8pRmKwtRu/Zyz8G93DL4DTp2mrXtyflKyezsHGik009aWTVuJU4yYm50bH0HyboqpwWVUZTpSkyKvwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAZgAGYDMBmAAyAAwAzAZgMwMgAAADAABmAzAAAAABmAzAZgMwGYAABkDDV2Tve/1O/nacupVzgbmnNWn0fHix2T7/rv8x52nY11C7v8A14s9k+/L4jzsbGYwFzPpudHx4kqT4P69RF2O2GbmBuVejX9eL0lLvXkaTVRPYkU2sRTERpx8v5elfizWZp7HW3Tcifvz0MmruBlhmYnKWlcTNMxDX2T7/r1O3nY2K7UbmWWn9eJ2T7+7v+XcPO07GJwN3PPT9/Xx6GVGS4ryZia6J64dLeHxFEZRXHy/lsOKfAGwAA113l3ZnWz6Sv5RnK1nnl0x/exovbj4b7fmScs1NpVRM/enZ/elnW8eHfxy8fAxoxsZm5VPTFXZw9pGa3Pf/V8t5iaJ7HS3eo6q85q9k5eGfW2/Z7/Hezl9/YnxqsRnNc7euWYxT3Nv4s1qqqjrh1tWbNyn7lUzHvl6UUnf/vkaTXMxkk0YemirSjP5vRq7PFVN7jramInpQcbRcqpiKNv92Ndpdz8/BZ7zrpUIHm8TlllPT/c+tjVfc/DP9RpUtYw9/Pqn2f3M1Zdz8/1940qNrbzN/L0Z+f8ALZGllnv97OVVzp6E2zgo0YmuZ0vfPF61Pf5mmnKRqtGeec/OXo1SAMgAMZAAAAAAAyAAAYAAAAGQAADGUAzY0Y2AzNGAZmjGwGZoxsAzERAGQAGAADIBkAAyAAKXtrEcz0w6F1qtrdfL+fMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HA21iOZ6YdBqtrdOfMf3s+HBHkhUgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=',
//     },
//     {
//       name: 'In the dark',
//       reach: '5M+',
//       duration: '< 7 Days',
//       platform: 'Instagram',
//       image: 'https://celebmix.com/wp-content/uploads/2025/11/1215862-dj-snake-bourget.jpg',
//     },
//     {
//       name: 'Feminatti',
//       reach: '2M+',
//       duration: '< 7 Days',
//       platform: 'Instagram',
//       image: 'https://www.easterneye.biz/media-library/sakshi-chopra.jpg?id=62200827&width=1245&height=700&quality=60&coordinates=0%2C759%2C0%2C554',
//     },
//   ];

//   const brandCampaigns = [
//     {
//       name: 'HiTv App',
//       description: 'Campaign across multiple pages',
//       engagement: '100M+',
//       metric: 'Monthly Followers',
//       image: 'assets/hitv.png',
//     },
//     {
//       name: 'Boo App',
//       description: 'Performance marketing',
//       engagement: '40M+',
//       metric: 'Promoted across  200+  pages',
//       image: 'assets/boo app.jpg',
//     },
//   ];

//   return (
//     <section className="py-20 bg-linear-to-b from-black via-purple-950/30 to-black" id="campaigns" ref={ref}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl font-bold text-white mb-4">Recent Work</h2>
//           <p className="text-gray-400">Our campaigns speak for themselves.</p>
//         </motion.div>

//         {/* Music Campaigns - Horizontal Scrollable */}
//         <div className="mb-16">
//           <motion.h3
//             className="text-xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4"
//             initial={{ opacity: 0, x: -20 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Music Campaign Highlights
//           </motion.h3>

//           <div className="relative">
//             {/* Left Navigation Button */}
//             <button
//               onClick={() => setCurrentIndex((prev) => (prev - 1 + musicCampaigns.length) % musicCampaigns.length)}
//               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-purple-900/80 backdrop-blur-sm border border-purple-700/50 rounded-full flex items-center justify-center text-white hover:bg-fuchsia-600 hover:border-fuchsia-500 transition-all duration-300 hover:scale-110 shadow-lg shadow-purple-900/50"
//               aria-label="Previous campaign"
//             >
//               <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>

//             {/* Right Navigation Button */}
//             <button
//               onClick={() => setCurrentIndex((prev) => (prev + 1) % musicCampaigns.length)}
//               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-purple-900/80 backdrop-blur-sm border border-purple-700/50 rounded-full flex items-center justify-center text-white hover:bg-fuchsia-600 hover:border-fuchsia-500 transition-all duration-300 hover:scale-110 shadow-lg shadow-purple-900/50"
//               aria-label="Next campaign"
//             >
//               <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>

//             {/* Carousel Container */}
//             <div className="overflow-hidden mx-6 sm:mx-10">
//               <div
//                 ref={carouselRef}
//                 className="flex gap-6 transition-transform duration-500 ease-out"
//                 style={{
//                   transform: `translateX(calc(-${currentIndex * 100}% / 3 - ${currentIndex * 24}px))`,
//                 }}
//               >
//                 {/* Render cards with infinite loop support */}
//                 {[...musicCampaigns, ...musicCampaigns, ...musicCampaigns].map((campaign, index) => (
//                   <motion.div
//                     key={index}
//                     className="group relative shrink-0 w-[280px] sm:w-[320px] lg:w-[350px] bg-purple-900/40 backdrop-blur-sm border border-purple-800/50 rounded-2xl overflow-hidden cursor-pointer hover:border-fuchsia-500/50 transition-all duration-300"
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//                     transition={{ duration: 0.5, delay: 0.3 + (index % musicCampaigns.length) * 0.05 }}
//                     whileHover={{ y: -8 }}
//                   >
//                     {/* Image */}
//                     <div className="relative h-[180px] sm:h-[220px] overflow-hidden">
//                       <img
//                         src={campaign.image}
//                         alt={campaign.name}
//                         className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                         loading="lazy"
//                       />
//                       {/* Gradient overlay */}
//                       <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

//                       {/* Top badge */}
//                       <div className="absolute top-4 right-4 bg-purple-500/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5">
//                         <Instagram className="w-3.5 h-3.5 text-white" />
//                         <span className="text-xs font-bold text-white">{campaign.platform}</span>
//                       </div>
//                     </div>

//                     {/* Content below image */}
//                     <div className="p-5 sm:p-6">
//                       <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-fuchsia-400 group-hover:to-pink-400 transition-all duration-300">
//                         {campaign.name}
//                       </h4>

//                       <div className="flex items-center justify-between mb-3 pt-4">
//                         <div>
//                           <div className="flex items-center gap-2 mb-1">
//                             <TrendingUp className="w-4 h-4 text-fuchsia-500" />
//                             <div className="text-2xl sm:text-3xl font-black text-fuchsia-500">
//                               {campaign.reach}
//                             </div>
//                           </div>
//                           <div className="text-xs text-gray-400 uppercase tracking-wide">Reach</div>
//                         </div>

//                         <div className="text-right">
//                           <div className="flex items-center gap-1.5 mb-1">
//                             <Calendar className="w-4 h-4 text-purple-400" />
//                             <div className="text-sm font-semibold text-white">{campaign.duration}</div>
//                           </div>
//                           <div className="text-xs text-gray-400">Duration</div>
//                         </div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Dots Indicator */}
//             <div className="flex justify-center gap-2 mt-6">
//               {musicCampaigns.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentIndex(index)}
//                   className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex % musicCampaigns.length === index
//                       ? 'w-6 bg-fuchsia-500'
//                       : 'bg-purple-700 hover:bg-purple-500'
//                     }`}
//                   aria-label={`Go to campaign ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Brand Campaigns - Side by Side Images */}
//         <div>
//           <motion.h3
//             className="text-xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4"
//             initial={{ opacity: 0, x: -20 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//             transition={{ duration: 0.6, delay: 0.6 }}
//           >
//             Brand Campaign Highlights
//           </motion.h3>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//             {brandCampaigns.map((campaign, index) => (
//               <motion.div
//                 key={campaign.name}
//                 className="group bg-purple-900/40 backdrop-blur-sm border border-purple-800/50 rounded-2xl overflow-hidden hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-fuchsia-500/20"
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//                 transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
//                 whileHover={{ scale: 1.02, y: -5 }}
//               >
//                 <div className="flex flex-col sm:flex-row">
//                   {/* Single Image */}
//                   <div className="w-full sm:w-2/5 shrink-0">
//                     <div className="relative h-[200px] sm:h-full min-h-[250px] overflow-hidden group-hover:brightness-110 transition-all duration-300">
//                       <img
//                         src={campaign.image}
//                         alt={`${campaign.name} campaign`}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                         loading="lazy"
//                       />
//                       <div className="absolute inset-0 bg-linear-to-r from-purple-900/40 via-transparent to-transparent" />
//                     </div>
//                   </div>

//                   {/* Text Content */}
//                   <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between bg-purple-950/30">
//                     <div>
//                       <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-fuchsia-400 group-hover:to-pink-400 transition-all duration-300">
//                         {campaign.name}
//                       </h4>
//                       <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
//                         {campaign.description}
//                       </p>
//                     </div>

//                     <div className="flex items-center justify-between pt-4 border-t border-purple-800/50">
//                       <div className="flex items-center gap-2">
//                         <Users className="w-5 h-5 text-fuchsia-500" />
//                         <div>
//                           <div className="text-2xl sm:text-3xl font-black text-fuchsia-500">
//                             {campaign.engagement}
//                           </div>
//                           <div className="text-xs text-gray-400 uppercase">{campaign.metric}</div>
//                         </div>
//                       </div>

//                       <div className="h-12 w-1 bg-purple-800/50 rounded-full overflow-hidden">
//                         <div className="h-full w-full bg-linear-to-b from-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Results;
