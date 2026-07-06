import { motion } from 'framer-motion';
import VideoCard from './VideoCard';

const CategoryGrid = ({ title, subtitle, items, categoryKey, onOpen, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay }}
    >
        <div className="mb-6">
            <h4 className="text-xl md:text-2xl font-bold text-white mb-1">{title}</h4>
            <p className="text-gray-500 text-sm">{subtitle}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {items.map((item, index) => (
                <VideoCard key={item.id} item={item} index={index} onOpen={(id) => onOpen(categoryKey, id)} />
            ))}
        </div>
    </motion.div>
);

export default CategoryGrid;