import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import Head from 'next/head';
import { ScrollToTop } from '../components/scroll';
import React from 'react';
import useGoogleAnalytics from '../hook/useGoogleAnalytics';
import GoogleAdsTag from '../components/googleads';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
    useGoogleAnalytics(); // Execute the hook for Google Analytics

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* Pre-connect/pre-fetch likely resources */}
                <link
                    rel="preconnect"
                    href="https://www.google-analytics.com"
                />
                <link
                    rel="preconnect"
                    href="https://www.googletagmanager.com"
                />
                <link
                    rel="dns-prefetch"
                    href="https://www.googletagmanager.com"
                />
            </Head>

            <Layout>
                <Component {...pageProps} />
                <ScrollToTop />
                {/* Optimized Google Analytics & Ad Placement */}
                <GoogleAdsTag /> {/* Potentially place this earlier */}
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
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
