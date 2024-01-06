import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import { ScrollToTop } from '../components/scroll';
import { Analytics } from '@vercel/analytics/react';
import React, { useEffect } from 'react';
import { useRouter, Router } from 'next/router';
import LazyLoad from 'react-lazyload';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const pageView = (url, title) => {
        window &&
            window.dataLayer &&
            window.dataLayer.push({
                event: 'virtualPageview',
                virtualPageURL: url,
                virtualPageTitle: title,
            });
    };
    useEffect(() => {
        const handleRouteChange = (url) => {
            window.gtag('config', 'G-G7RR3SK94G', {
                page_path: url,
            });
        };

        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    
    return (
        <Layout>
            <Head>
                <title>
                    Desatascos, Desatrancos y Pocería en Madrid | Fosas Sépticas
                </title>
                <meta
                    name="description"
                    content=" Servicios de desatascos y pocería en Madrid. Resolvemos problemas de tuberías, alcantarillado y fosas sépticas. Llama ahora ☎️​ 647 376 782"
                />

                <meta name="robots" content="index, follow" />
                <meta
                    name="google-site-verification"
                    content="j8oNhhcDDjHc4U1eCXwkvjdoyRmPTNQQDMPLOxAocCs"
                />
                <meta
                    property="og:url"
                    content="https://desatascos-madrid.com/"
                />
                <meta
                    property="og:title"
                    content="Desatascos-Pocería-Alcantarillado 【647 376 782】| Desatascos Pociten"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="✅Poceros en Madrid. 🔝 Servicios desatascos en Madrid 24 horas. 📢 Desatrancos con los mejores precios.☎️​ 647 376 782"
                />
                <meta
                    name="p:domain_verify"
                    content="d3df955d4e2e80331481050a676081d6"
                />
                <meta
                    property="og:image"
                    content="https://desatascos-madrid.es/_next/image?url=%2Fimages%2Fabout%2F1-1.webp&w=640&q=75"
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://desatascos-madrid.com/"
                />
                <meta
                    property="twitter:title"
                    content="Desatascos y Poceros Madrid【647 376 782】Desatascos Pociten"
                />
                <meta
                    property="twitter:description"
                    content="✅Poceros en Madrid. 🔝 Empresa de desatascos en Madrid 24 horas. 📢 Desatascos baratos con los mejores precios. ☎️​ 647 376 782"
                />
                <meta
                    property="twitter:image"
                    content="https://desatascos-madrid.com/_next/image?url=%2Fimages%2Fabout%2F1-1.webp&w=640&q=75"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta
                    name="msapplication-TileImage"
                    content="/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#ffffff" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
                    {
        
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
                            "name": "Desatascos Pociten",
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
                            "headline": "Desatrancos y Poceros en Madrid | Desatascos Pociten",
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
                    `,
                    }}
                />
            </Head>
            {/* Google Analytics Script */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-G7RR3SK94G`}
            />
            <Script
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag() { dataLayer.push(arguments); }
                        gtag('js', new Date());
                        gtag('config', 'G-G7RR3SK94G', {
                          page_path: window.location.pathname,
                        });
                      `,
                }}
            />
            <LazyLoad>
                <Analytics />
            </LazyLoad>

            <Component {...pageProps} />
            <LazyLoad>
                <ScrollToTop />
            </LazyLoad>
        </Layout>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
