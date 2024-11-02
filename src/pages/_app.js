import React from 'react'; 
import PropTypes from 'prop-types';
import Head from 'next/head';
import '../styles/tailwind-component.css';
import Layout from '../components/layout/layout';
import { ScrollToTop } from '../components/scroll';
import GoogleAdsTag from '../components/googleads';
import '../styles/globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="preconnect" href="https://www.google-analytics.com" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            </Head>

            <Layout>
                <Component {...pageProps} />
                <ScrollToTop />
                <GoogleAdsTag />
            </Layout>
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired,
};

export default MyApp;
