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
        deviceSizes: [640, 768, 1024, 1280, 1600], // Tamaños de dispositivo que Next.js usará para las imágenes responsivas
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Tamaños de imagen para iconos y otros elementos gráficos pequeños
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
