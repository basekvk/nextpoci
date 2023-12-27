import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import ServiceDetail from '../../components/services/service-detail';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';

import CallToAction from '../../components/cta';
import ProductCluster from '../../components/cluster';


function ServiceDetailsPage({
    service,

    servicesSidebar,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>{service.titleMeta}</title>
                <meta name="description" content={service.metaContent} />
                <meta property="og:title" content={service.titleMeta} />
                <link rel="canonical" href={service.canonical} />
            </Head>

            <Breadcrumb
                subTitle="Servicios"
                title={service.title}
                desc={service.parrafo}
            />
            
            <ServiceDetail service={service} />

            
            

            <ProductCluster />
            

            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const service = getItemData(slug, 'services');

    const ourServices = getAllItems('our-service');

    const footerItems = getAllItems('footer');

    return {
        props: {
            service,

            ourServices,

            footerItems,
        },
    };
}

export function getStaticPaths() {
    const serviceFilenames = getItemsFiles('services');

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

    ourServices: PropTypes.instanceOf(Object).isRequired,

    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceDetailsPage;
