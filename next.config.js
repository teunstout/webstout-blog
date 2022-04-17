/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // 2 rerenders if true
    images: {
        domains: ["firebasestorage.googleapis.com", "vitals.vercel-insights.com"],
    },
};

module.exports = nextConfig;
