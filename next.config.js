/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    optimizeFonts: true,
    optimization: true,
    images: {
        domains: ['desatascos-madrid.com'],
        formats: ['image/avif', 'image/webp'],
    },
    /*async redirects() {
        return [
          {
            source: '', // Ruta original que quieres redirigir
            destination: '', // Nueva ruta a la que se redirigirá
            permanent: true, // Esto hace que sea una redirección 301
        },// Tus redirecciones aquí
        ];
    },*/
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({});

module.exports = nextConfig;
