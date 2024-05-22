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
                source: '/desatascos-alcobendas',
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
                source: '/desatascos/desatascos-pinto',
                destination: '/desatascos/pinto',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-pozuelo',
                destination: '/desatascos/pozuelo',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-rivas-vaciamadrid',
                destination: '/desatascos/rivas-vaciamadrid',
                permanent: true,
            },
            {
                source: '/desatascos-sansebastian-delosreyes',
                destination: '/desatascos/san-sebastian-de-los-reyes',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-sesena',
                destination: '/desatascos/sesena',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-torrejon-de-ardoz',
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
            {
                source: '/author/desatrancosypoceriamadrid',
                destination: '/contacto',
                permanent: true,
            },
            {
                source: '/servicios',
                destination: '/',
                permanent: true,
            },
            {
                source: '/projects',
                destination: '/',
                permanent: true,
            },
            {
                source: '/services/tuberias-sin-zanja',
                destination: '/services/reparacion-tuberias-sin-obras',
                permanent: true,
            },
            {
                source: '/sobre-nosotros',
                destination: '/about',
                permanent: true,
            },
            {
                source: '/about',
                destination: '/',
                permanent: true,
            },
            {
                source: '/evacuacion-de-aguas',
                destination: '/services/achiques-de-agua',
                permanent: true,
            },
            {
                source: '/politica-de-privacidad',
                destination: 'politica-privacidad',
                permanent: true,
            },
            {
                source: '/servicios-de-poceria/desatascos-baratos-madrid',
                destination: '/services/desatascos-baratos',
                permanent: true,
            },
            {
                source: '/desatascos-aranjuez',
                destination: '/desatascos/aranjuez',
                permanent: true,
            },
            {
                source: '/desatascos-urgentes-24h',
                destination: '/services/desatascos-24-horas',
                permanent: true,
            },
            {
                source: '/cuenta-con-especialistas-de-confianza',
                destination: '/',
                permanent: true,
            },
            {
                source: '/servicios-de-poceria/inspeccion-de-tuberias',
                destination: '/services/desatasco-de-tuberias',
                permanent: true,
            },
            
            {
                source: '/desatascos-illescas',
                destination: '/desatascos/illescas',
                permanent: true,
            },
            {
                source: '/tips-y-consejos',
                destination: '/blogs/category/todo',
                permanent: true,
            },
            {
                source: '/solicita-tu-presupuesto',
                destination: '/contacto',
                permanent: true,
            },
            {
                source: '/desatascos/arganda',
                destination: '/desatascos/arganda-del-rey',
                permanent: true,
            },
            {
                source: '/blog/tag/tuberias',
                destination: '/blogs/tag/tuberias',
                permanent: true,
            },
            {
                source: '/blog/tag/undefined',
                destination: '/blogs/tag/tuberias',
                permanent: true,
            },
            {
                source: '/blog/category/undefined',
                destination: '/blogs/tag/tuberias',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-valdemoro',
                destination: '/desatascos/valdemoro',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-rivas-vaciamadrid',               
                destination: '/desatascos/rivas-vaciamadrid',
                permanent: true,
            },
            {
                source: '/politica-de-privacidad/',
                destination: '/politica-privacidad',
                permanent: true,
            },
            {
                source: '/desatascos-aranjuez/',
                destination: '/desatascos/aranjuez',
                permanent: true,
            },
            {
                source: '/desatascos-urgentes-24h/',
                destination: '/services/desatascos-24-horas',
                permanent: true,
            },
            {
                source: '/desatascos/desatascos-usera',
                destination: '/desatascos/usera',
                permanent: true,
            },
            {
                source: '/services/empresa-de-desatascos',
                destination: '/',  
                permanent: true,
            },
            {
                source: '/desatascos/madrid',
                destination: '/',
                permanent: true,
            },
           
            {
                source: '/index',
                destination: '/',
                permanent: true,
            },
            {
                source: '/poceros/en/valdemoro',
                destination: '/desatascos/valdemoro',
                permanent: true,
            },
            {
                source: '/poceros/en/torrejon-de-ardoz',
                destination: '/desatascos/torejon-de-ardoz',
                permanent: true,
            }
            ,
            {
                source: '/desatascos/baratos',
                destination: '/services/desatascos-baratos',
                permanent: true,
            }
            ,
            {
                source: '/quienes-somos',
                destination: '/',
                permanent: true,
            }
            ,
            {
                source: '/desatascos/sumideros',
                destination: '/',
                permanent: true,
            }
            ,
            {
                source: '/desatascos/tuberias',
                destination: '/services/desatasco-de-tuberias',
                permanent: true,
            }
            ,
            {
                source: '/poceros/bombas-de-agua',
                destination: '/services/achiques-de-agua',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/illescas',
                destination: '/desatascos/illescas',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/sesena',
                destination: '/desatascos/sesena',
                permanent: true,
            }
            ,
            {
                source: '/desatascos/alcantarillado',
                destination: '/services/desatasco-de-tuberias',
                permanent: true,
            }
            ,
            {
                source: '/poceros/obras-de-poceria',
                destination: '/services/obras-de-poceria',
                permanent: true,
            }
            ,
            {
                source: '/poceros/arquetas',
                destination: '/services/poceros-madrid',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/mostoles',
                destination: '/desatascos/mostoles',
                permanent: true,
            }
            ,
            {
                source: '/desatascos/bajantes',
                destination: '/',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/majadahonda',
                destination: '/desatascos/majadahonda',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/alcala-de-henares',
                destination: '/desatascos/alcala-de-henares',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/arganda-del-rey',
                destination: '/desatascos/arganda-del-rey',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/ocana',
                destination: '/desatascos/toledo',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/fuenlabrada',
                destination: '/desatascos/fuenlabrada',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/parla',
                destination: '/desatascos/parla',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/pozuelo',
                destination: '/desatascos/pozuelo',
                permanent: true,
            }
            ,
            {
                source: '/poceros/alcantarillado',
                destination: '/',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/alcorcon',
                destination: '/desatascos/alcorcon',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/boadilla-del-monte',
                destination: '/desatascos/boadilla',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/san-sebastian-de-los-reyes',
                destination: '/desatascos/san-sebastian-de-los-reyes',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/toledo',
                destination: '/desatascos/toledo',
                permanent: true,
            }
            ,
            {
                source: '/desatascos/desagues',
                destination: '/services/desatasco-de-tuberias',
                permanent: true,
            }
            ,
            {
                source: '/desatascos/urgentes',
                destination: '/services/desatascos-24-horas',
                permanent: true,
            }
            ,
            {
                source: '/poceros/inspeccion',
                destination: '/services/inspeccion-tuberia-con-camara',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/coslada',
                destination: '/desatascos/coslada',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/aranjuez',
                destination: '/desatascos/aranjuez',
                permanent: true,
            }
            ,
            {
                source: '/poceros/redes-de-saneamiento',
                destination: '/services/desatasco-de-tuberias',
                permanent: true,
            }
            ,
            {
                source: '/desatascos/banos',
                destination: '/',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/las-rozas',
                destination: '/desatascos/las-rozas',
                permanent: true,
            }
            ,
            {
                source: '/desatascos/fregadero',
                destination: '/',
                permanent: true,
            }
            ,
            {
                source: '/poceros/bajantes',
                destination: '/',
                permanent: true,
            }
            ,
            {
                source: '/desatascos/industriales',
                destination: '/',
                permanent: true,
            }
            ,
            {
                source: '/poceros/pozos-septicos',
                destination: '/services/limpieza-fosas-septicas',
                permanent: true,
            }
            ,
            {
                source: '/poceros/en/getafe',
                destination: '/desatascos/getafe',
                permanent: true,
            }
            ,
            {
                source: '/desatascos/arquetas',
                destination: '/services/desatasco-de-tuberias',
                permanent: true,
            }
            ,
            {
                source: '/desatascos/24-horas',
                destination: '/services/desatascos-24-horas',
                permanent: true,
            }
            ,
            {
                source: '/poceros/localizacion-de-fugas',
                destination: '/services/obras-de-poceria',
                permanent: true,
            }
            ,
            {
                source: '/poceros/fosas-septicas',
                destination: '/services/limpieza-fosas-septicas',
                permanent: true,
            } ,
            {
                source: '/poceros/en/alcobendas',
                destination: '/desatascos/alcobendas',
                permanent: true,
            } ,
         
        ];
    },
};


module.exports = nextConfig;
