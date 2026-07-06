import { useState, useEffect } from 'react';
import { X, AlertCircle } from 'lucide-react';
import { getVideoUrl } from '../lib/api';

const VideoModal = ({ category, videoId, onClose }) => {
    const [videoUrl, setVideoUrl] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        let cancelled = false;
        getVideoUrl(category, videoId)
            .then((data) => !cancelled && setVideoUrl(data.videoUrl))
            .catch(() => !cancelled && setError(true));
        return () => { cancelled = true; };
    }, [category, videoId]);

    useEffect(() => {
        const handleKey = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4" onClick={onClose}>
            <button onClick={onClose} className="absolute top-6 right-6 text-white/80 hover:text-white">
                <X className="w-8 h-8" />
            </button>
            <div className="w-full max-w-4xl" style={{ aspectRatio: '16 / 9' }} onClick={(e) => e.stopPropagation()}>
                {error && (
                    <div className="w-full h-full flex flex-col items-center justify-center text-white/80 gap-2">
                        <AlertCircle className="w-10 h-10 text-red-400" />
                        <p>Couldn't load this video.</p>
                    </div>
                )}
                {!error && !videoUrl && (
                    <div className="w-full h-full flex items-center justify-center text-white/60">Loading...</div>
                )}
                {!error && videoUrl && (
                    <video
                        src={videoUrl}
                        controls
                        autoPlay
                        playsInline
                        className="w-full h-full rounded-xl bg-black"
                        onError={() => setError(true)}
                    />
                )}
            </div>
        </div>
    );
};

export default VideoModal;