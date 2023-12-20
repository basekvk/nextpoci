import Head from 'next/head';
import React from 'react';

const LocalBusinessSchema = () => {
    const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        "serviceType": 'Desatascos y Pocería',
        "provider": {
            '@type': 'Organization',
            "name": 'Desatascos Pociten',
            "image": 'https://www.desatascos-madrid.com/_next/image?url=%2Fimages%2Fabout%2F1-1.webp&w=1080&q=75',
            "address": {
                '@type': 'PostalAddress',
                "streetAddress": 'Calle Lezo 8, 4D',
                "postalCode": '28041',
                "addressLocality": 'Madrid',
                "addressCountry": 'ES',
            },
            "telephone": '647 376 782',
        },
        "areaServed": {
            '@type': 'Place',
            "name": 'Comunidad de Madrid y zonas limítrofes'
        },
        "hasOfferCatalog": {
            '@type': 'OfferCatalog',
            "name": 'Servicios de Desatascos',
            "itemListElement": [
                {
                    '@type': 'Offer',
                    "itemOffered": {
                        '@type': 'Service',
                        "name": 'Desatascos Urgentes 24 Horas',
                        "url": 'https://www.desatascos-madrid.com/services/desatascos-24horas'
                    }
                },
                {
                    '@type': 'Offer',
                    "itemOffered": {
                        '@type': 'Service',
                        "name": 'Limpieza y Mantenimiento de Alcantarillado',
                        "url": 'https://www.desatascos-madrid.com/services/limpieza-de-tuberias'
                    }
                },
                {
                    '@type': 'Offer',
                    "itemOffered": {
                        '@type': 'Service',
                        "name": 'Inspección con Cámara de Tuberías',
                        "url": 'https://www.desatascos-madrid.com/services/inspeccion-tuberia-con-camara'
                    }
                },
                {
                    '@type': 'Offer',
                    "itemOffered": {
                        '@type': 'Service',
                        "name": 'Desatascos de Tuberías',
                        "url": 'https://www.desatascos-madrid.com/services/limpieza-de-tuberias'
                    }
                },
                {
                    '@type': 'Offer',
                    "itemOffered": {
                        '@type': 'Service',
                        "name": 'Desatascos de Fregaderos',
                        "url": 'https://www.desatascos-madrid.com/'
                    }
                },
                {
                    '@type': 'Offer',
                    "itemOffered": {
                        '@type': 'Service',
                        "name": 'Desatascos de WC',
                        "url": 'https://www.desatascos-madrid.com/'
                    }
                },
                {
                    '@type': 'Offer',
                    "itemOffered": {
                        '@type': 'Service',
                        "name": 'Vaciado de Fosas Sépticas',
                        "url": 'https://www.desatascos-madrid.com/services/limpieza-fosas-septicas'
                    }
                },
                {
                    '@type': 'Offer',
                    "itemOffered": {
                        '@type': 'Service',
                        "name": 'Desatascos y Reparación de Arquetas',
                        "url": 'https://www.desatascos-madrid.com/'
                    }
                },
                {
                    '@type': 'Offer',
                    "itemOffered": {
                        '@type': 'Service',
                        "name": 'Achiques de Agua en Inundaciones',
                        "url": 'https://www.desatascos-madrid.com/'
                    }
                },
                {
                    '@type': 'Offer',
                    "itemOffered": {
                        '@type': 'Service',
                        "name": 'Limpieza de Alcantarillado',
                        "url": 'https://www.desatascos-madrid.com/services/limpieza-de-tuberias'
                    }
                },
                {
                    '@type': 'Offer',
                    "itemOffered": {
                        '@type': 'Service',
                        "name": 'Obras de pocería en Madrid',
                        "url": 'https://www.desatascos-madrid.com/services/obras-de-poceria'
                    }
                },
                {
                    '@type': 'Offer',
                    "itemOffered": {
                        '@type': 'Service',
                        "name": 'Acometidas de agua y desagües',
                        "url": 'https://www.desatascos-madrid.com/services/poceros-madrid'
                    }
                }
            ]
        },
        "description":'Empresa líder de desatascos en la comunidad de Madrid. Ofrecemos servicios de desatascos de tuberías, desatrancos, limpieza y mantenimiento de alcantarillado, y más.'
    };
    return (
        
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaData)
                }}
            />
        
        
    );
};

export default LocalBusinessSchema;
