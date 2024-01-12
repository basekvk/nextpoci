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
    async redirects() {
        return [
            {
                source: '/desatascos/desatascos-lasrozas', // Ruta original que quieres redirigir
                destination: '/desatascos/las-rozas', // Nueva ruta a la que se redirigirá
                permanent: true, // Esto hace que sea una redirección 301
            },
            {
                source: '/desatascos/desatascos-vallecas',
                destination: '/desatascos/vallecas',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-getafe',
                destination: '/desatascos/getafe',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-alcala',
                destination: '/desatascos/alcala-de-henares',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-alcobendas',
                destination: '/desatascos/alcobendas',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-alcorcon',
                destination: '/desatascos/alcorcon',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-aranjuez',
                destination: '/desatascos/aranjuez',
                permanent: true,
            },

            {
                source: '/desatascos/desatascos-arganda',
                destination: '/desatascos/arganda-del-rey',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-boadilla',
                destination: '/desatascos/boadilla',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-carabanchel',
                destination: '/desatascos/carabanchel',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-ciempozuelos',
                destination: '/desatascos/ciempozuelos',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-coslada',
                destination: '/desatascos/coslada',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-fuenlabrada',
                destination: '/desatascos/fuenlabrada',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-leganes',
                destination: '/desatascos/leganes',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-madrid',
                destination: '/desatascos/madrid',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-majadahonda',
                destination: '/desatascos/majadahonda',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-mostoles',
                destination: '/desatascos/mostoles',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-navalcarnero',
                destination: '/desatascos/navalcarnero',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-parla',
                destination: '/desatascos/parla',
                permanent: true,
            },
            {
                source: '/desatascos/pinto',
                destination: '/desatascos/pinto',
                permanent: true,
            },
            {
                source: '/desatascos/pozuelo',
                destination: '/desatascos/pozuelo',
                permanent: true,
            },
            {
                source: '/desatascos/rivas-vaciamadrid',
                destination: '/desatascos/rivas-vaciamadrid',
                permanent: true,
            },
            {
                source: '/desatascos/san-sebastian-de-los-reyes',
                destination: '/desatascos/san-sebastian-de-los-reyes',
                permanent: true,
            },
            {
                source: '/desatascos/sesena',
                destination: '/desatascos/sesena',
                permanent: true,
            },
            {
                source: '/desatascos/torrejon-de-ardoz',
                destination: '/desatascos/torrejon-de-ardoz',
                permanent: true,
            },
            {
                source: '/services/limpieza-de-tuberias',
                destination: '/services/desatasco-de-tuberias',
                permanent: true,
            },
            {
                source: '/services/desatascos-24horas',
                destination: '/services/desatascos-24-horas',
                permanent: true,
            },
        ];
    },
};


module.exports = nextConfig;
