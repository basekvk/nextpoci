import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/tailwind-component.css';
import Layout from '../components/layout/layout';
import { ScrollToTop } from '../components/scroll';
import GoogleAdsTag from '../components/googleads';
import useGoogleAnalytics from '../hook/useGoogleAnalytics';
import '../styles/globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

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
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Google Tag Manager */}
            <Script
                id="google-tag-manager"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-NWFQKZVB');
                    `,
                }}
            />

            <Layout>
                {/* Google Tag Manager (noscript) */}
                <noscript>
                    <iframe 
                        src="https://www.googletagmanager.com/ns.html?id=GTM-NWFQKZVB"
                        height="0" 
                        width="0" 
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript>

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