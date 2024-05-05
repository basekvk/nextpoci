import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/layout/layout';
import { ScrollToTop } from '../components/scroll';
import GoogleAdsTag from '../components/googleads';
import useGoogleAnalytics from '../hook/useGoogleAnalytics';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    useGoogleAnalytics(); // Execute the hook for Google Analytics

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* Pre-connect to likely resources to speed up their loading time */}
                <link rel="preconnect" href="https://www.google-analytics.com" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            </Head>

            <Layout>
                <Component {...pageProps} />
                <ScrollToTop />
                <GoogleAdsTag />

                {/* Google Tag Manager - Global site tag (gtag.js) */}
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
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                              page_path: window.location.pathname,
                            });
                        `,
                    }}
                />
            </Layout>
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default MyApp;
