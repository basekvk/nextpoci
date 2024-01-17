import Head from 'next/head';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import { ScrollToTop } from '../components/scroll';
import { Analytics } from '@vercel/analytics/react';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import LazyLoad from 'react-lazyload';
import Script from 'next/script';
import RichSnippets from '../components/RichSnippets';

function MyApp({ Component, pageProps }) {
    const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
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
            <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />  
            <RichSnippets />
            </Head>
            {/* Google Analytics Script */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
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

            <Analytics />

            <Component {...pageProps} />
            <LazyLoad>
                <ScrollToTop />
            </LazyLoad>
            <img
                src="https://tracker.metricool.com/c3po.jpg?hash=87000e24db10b294b3151b5f362f5f72"
                alt="Metricool Pixel"
            />
        </Layout>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.instanceOf(Object).isRequired,
};

export default MyApp;
