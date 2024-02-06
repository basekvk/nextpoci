import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import { ScrollToTop } from '../components/scroll';
import React from 'react';
import RichSnippets from '../components/RichSnippets';
import useGoogleAnalytics from '../hook/useGoogleAnalytics'; // Hook para Google Analytics
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    useGoogleAnalytics(); // Usamos el hook personalizado para Google Analytics

    return (
        <Layout>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <RichSnippets />
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

            {/* ... */}
        </Layout>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
