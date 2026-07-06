const API_BASE = import.meta.env.VITE_API_BASE;

if (!API_BASE) {
  throw new Error(
    "[api.js] VITE_API_BASE is not set. " +
    "Add it to your .env file (local) or deployment environment variables (production)."
  );
}

export async function getAllVideos() {
    const res = await fetch(`${API_BASE}/api/videos`);
    if (!res.ok) throw new Error("Failed to fetch videos");
    return res.json(); // { afterEffects: [...], meme: [...], ... }
}

export async function getVideoUrl(category, id) {
    const res = await fetch(`${API_BASE}/api/videos?category=${category}&id=${id}`);
    if (!res.ok) throw new Error("Failed to fetch video URL");
    return res.json(); // { videoUrl: "..." }
}