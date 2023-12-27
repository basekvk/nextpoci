import Head from 'next/head';
import React from 'react';

const LocalBusinessSchema = () => {
    const schemaData = {
        
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Organization"],
                "@id": "https://desatascos-madrid.com/#organization",
                "name": "Desatascos Pociten SL",
                "sameAs": [
                  "https://www.facebook.com/desatascospociten",
                  "https://twitter.com/pociten",
                  "https://instagram.com/pociten_desatascos",
              "https://www.youtube.com/@PocitenDesatascos"
                ],
                "logo": {
                  "@type": "ImageObject",
                  "@id": "https://desatascos-madrid.com/#logo",
                  "url": "https://www.desatascos-madrid.com/images/logo/light.png",
                  "contentUrl": "https://www.desatascos-madrid.com/images/logo/light.png",
                  "caption": "Desatascos Pociten",
                  "inLanguage": "es",
                  "width": "256",
                  "height": "53"
                }
              },
              {
                "@type": "WebSite",
                "@id": "https://desatascos-madrid.com/#website",
                "url": "https://desatascos-madrid.com",
                "name": "Desatascos Taser",
                "publisher": {
                  "@id": "https://desatascos-madrid.com/#organization"
                },
                "inLanguage": "es",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://desatascos-madrid.com/?s={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@type": "WebPage",
                "@id": "https://desatascos-madrid.com/#webpage",
                "url": "https://desatascos-madrid.com/",
                "name": "Desatrancos y Pocería en Madrid | Desatascos Madrid",
                "datePublished": "2023-04-26T16:01:27+01:00",
                "dateModified": "2023-12-26T11:11:51+01:00",
                "about": {
                  "@id": "https://desatascos-madrid.com/#organization"
                },
                "isPartOf": {
                  "@id": "https://desatascos-madrid.com/#website"
                },
                "primaryImageOfPage": {
                  "@id": "https://www.desatascos-madrid.com/_next/image?url=%2Fimages%2Fabout%2F1-1.webp&w=640&q=75"
                },
                "inLanguage": "es"
              },
              {
                "@type": "Article",
                "headline": "Desatascos Madrid | Desatascos Pociten: Soluciones Rápidas y Eficaces 24/7",
                "keywords": "desatascos madrid",
                "datePublished": "2020-02-18T16:01:27+01:00",
                "dateModified": "2023-12-17T11:11:51+01:00",
                "author": {
                  "@id": "https://desatascos-madrid.com/#author",
                  "name": "admin"
                },
                "publisher": {
                  "@id": "https://desatascos-madrid.com/#organization"
                },
                "description": "Desatascos Pociten, con más de 25 años de experiencia, es tu solución de confianza para desatascos en Madrid. Ofrecemos servicios rápidos y eficaces las 24 horas del día. Llámanos al 647 376 782 para solucionar tus problemas de atascos.",
                "@id": "https://desatascos-madrid.com/#richSnippet",
                "isPartOf": {
                  "@id": "https://desatascos-madrid.com/#webpage"
                },
                "image": {
                  "@id": "https://www.desatascos-madrid.com/images/services/inspeccion-tuberia-con-camara/inspeccion-tuberia-con-camara-lg.webp"
                },
                "inLanguage": "es",
                "mainEntityOfPage": {
                  "@id": "https://desatascos-madrid.com/#webpage"
                }
              }
            ]
          }
          
    
    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(schemaData)
                }}
            />
        </Head>
            
        
        
    );
};

export default LocalBusinessSchema;
