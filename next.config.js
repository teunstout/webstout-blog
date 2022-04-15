/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, // 2 rerenders if true
    images: {
        domains: ["media.istockphoto.com", "firebasestorage.googleapis.com"],
    },
};

module.exports = nextConfig;
