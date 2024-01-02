import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import ServiceDetail from '../../components/desatascos/desatascos-detail';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';
import LazyLoad from 'react-lazyload';

import ProductCluster from '../../components/cluster';
import Areastrabajo from '../../components/areastrabajo';

function ServiceDetailsPage({ service, footerItems }) {
    const structuredData = {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        url: service.canonical,
        name: service.title,
        logo: service.image,
        description: service.metaContent,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Calle Lezo 8',
            addressLocality: 'Madrid',
            postalCode: '28041',
            addressCountry: 'ES',
        },
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            telephone: '+34647376782',
        }
    };
    return (
        <>
            <Head>
                <title>{service.titleMeta}</title>
                <meta name="description" content={service.metaContent} />
                <link rel="canonical" href={service.canonical} />
                <meta property="og:title" content={service.titleMeta} />
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Head>

            <Breadcrumb
                subTitle="Donde Trabajamos"
                title={service.title}
                desc={service.parrafo}
            />
            <LazyLoad>
                <ServiceDetail service={service} />
                <ProductCluster />

                <Areastrabajo />
                <Footer footerItems={footerItems} />
            </LazyLoad>
        </>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const sidebarList = getAllItems('desatascos');
    const service = getItemData(slug, 'desatascos');

    const footerItems = getAllItems('footer');

    return {
        props: {
            service,

            footerItems,
        },
    };
}

export function getStaticPaths() {
    const serviceFilenames = getItemsFiles('desatascos');

    const slugs = serviceFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

ServiceDetailsPage.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,

    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceDetailsPage;
