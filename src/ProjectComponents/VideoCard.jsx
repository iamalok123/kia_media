import { motion } from 'framer-motion';

const VideoCard = ({ item, index, onOpen }) => (
    <motion.div
        className="group relative rounded-2xl overflow-hidden cursor-pointer border border-purple-500/40 shadow-lg shadow-purple-500/30 hover:border-fuchsia-500/60 hover:shadow-xl hover:shadow-fuchsia-500/40 transition-all duration-300"
        whileHover={{ y: -8, scale: 1.02 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        onClick={() => onOpen(item.id)}
    >
        <div className="relative w-full aspect-9/16 bg-black">
            <img
                src={item.thumbnailUrl}
                loading="lazy"
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/50 transition">
                <svg className="w-12 h-12 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </div>
        </div>
    </motion.div>
);

export default VideoCard;