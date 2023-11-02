import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import { ScrollToTop } from '../components/scroll';
import { Analytics } from '@vercel/analytics/react';
import React, { useEffect } from 'react';
import { useRouter, Router } from 'next/router';
import LazyLoad from 'react-lazyload';

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
        pageView(router.pathname, document.title);
        const handleRouteChange = (url) => {
            pageView(url, document.title);
        };
        Router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);
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
                ;
                <meta name="robots" content="index, follow" />
                <meta
                    name="google-site-verification"
                    content="j8oNhhcDDjHc4U1eCXwkvjdoyRmPTNQQDMPLOxAocCs"
                />
                <meta
                    property="og:url"
                    content="https://DesatascosPociten.es/"
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
                    content="https://DesatascosPociten.es/images/contact/contacto.jpg"
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://desatascosPociten.es/"
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
                    content="https://DesatascosPociten.es/images/contacto/contacto.jpg"
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
            </Head>
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
