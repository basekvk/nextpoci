import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../../components/breadcrumb';
import Footer from '../../components/layout/footer';
import ServiceDetail from '../../components/services/service-detail';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';
import ProductCluster from '../../components/cluster';
import Problemas from '../../components/problemas';
import ContactForm from '../../components/form-page';

function ServiceDetailsPage({
    service,
    footerItems,
    contactItemsForm
}) {
    return (
        <>
            <Head>
                <title>{service.titleMeta}</title>
                <meta name="description" content={service.metaContent} />
                <meta property="og:title" content={service.titleMeta} />
                <link rel="canonical" href={service.canonical} />
                <meta
                    property="og:url"
                    content={service?.canonical}
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content={service?.metaContent}
                />
                
                <meta
                    property="og:image"
                    content={service?.largeImage}
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content={service?.canonical}
                />
                <meta
                    property="twitter:title"
                    content={service?.titleMeta}
                />
                <meta
                    property="twitter:description"
                    content={service?.metaContent}
                />
                <meta
                    property="twitter:image"
                    content={service?.largeImage}
                />
            </Head>

            <Breadcrumb
                subTitle="Servicios"
                title={service.title}
                desc={service.parrafo}
            />
            
            <ServiceDetail service={service} />   
            <Problemas />     
            <ProductCluster localidad={service?.lugar} />
            <ContactForm contactItemsForm={contactItemsForm} />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const contactItemsForm = getAllItems('contacto');
    const service = getItemData(slug, 'services');
    const ourServices = getAllItems('our-service');
    const footerItems = getAllItems('footer');

    return {
        props: {
            service,
            ourServices,
            footerItems,
            contactItemsForm
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
    contactItemsForm: PropTypes.instanceOf(Object).isRequired
};

export default ServiceDetailsPage;
