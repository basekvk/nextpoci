import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import { ScrollToTop } from '../components/scroll';
import React from 'react';
import RichSnippets from '../components/RichSnippets';
import useGoogleAnalytics from '../hook/useGoogleAnalytics'; // Hook para Google Analytics
import Script from 'next/script';
import GoogleAdsTag from '../components/googleads';


function MyApp({ Component, pageProps }) {
    useGoogleAnalytics(); // Usamos el hook personalizado para Google Analytics

    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <RichSnippets />
                <meta
                    property="og:url"
                    content="https://www.desatascos-madrid.com/"
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
                    property="og:image"
                    content="https://www.desatascos-madrid.com/_next/image?url=%2Fimages%2Fabout%2F1-1.webp&w=640&q=75"
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.desatascos-madrid.com/"
                />
                <meta
                    property="twitter:title"
                    content="Desatascos y Poceros Madrid【647 376 782】Desatascos Pociten"
                />
                <meta
                    property="twitter:description"
                    content="✅Poceros en Madrid. 🔝 Empresa de desatascos en Madrid 24 horas. 📢 Desatascos baratos con los mejores precios. ☎️​647 376 782"
                />
                <meta
                    property="twitter:image"
                    content="https://www.desatascos-madrid.com/_next/image?url=%2Fimages%2Fabout%2F1-1.webp&w=640&q=75"
                />
                <link
                    rel="canonical"
                    href="https://www.desatascos-madrid.com"
                />
                <link
                    rel="image_src"
                    href="http://localhost:3000/_next/image?url=%2Fimages%2Fservices%2Fdesatascos-24-horas%2Fdesatascos-urgentes-24-horas.webp&w=1024&q=75"
                />
                
            </Head>

            <Component {...pageProps} />
            <ScrollToTop />
              {/* Google Analytics - Global site tag (gtag.js) */}
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                strategy="afterInteractive"
            />
            <Script
                id="google-analytics-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag() { dataLayer.push(arguments); }
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                            page_path: window.location.pathname,
                        });
                    `,
                }}
            />
            <GoogleAdsTag />

            {/* ... */}
        </Layout>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
