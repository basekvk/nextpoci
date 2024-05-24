import Head from 'next/head';
import PropTypes from 'prop-types';
import Footer from '../../components/layout/footer';
import ServiceDetail from '../../components/desatascos/desatascos-detail';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';
import ContactForm from '../../components/form-page';
import RichSnippets from '../../components/RichSnippets';
import BannerMini from '../../components/bannermini';


function ServiceDetailsPage({ service, footerItems, contactItemsForm }) {
    
    
    return (
        <>
            <Head>
                <title>{service.titleMeta}</title>
                <meta name="description" content={service.metaContent} />
                
                <link rel="canonical" href={service.canonical} />
                <meta
                    property="og:url"
                    content={service?.canonical}
                />
                <meta
                    property="og:title"
                    content={service?.titleMeta}
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

        
            <BannerMini
                subTitle="Áreas de Servicio"
                title={service.title}
                desc={service.parrafo}
            />
            
            
                <ServiceDetail service={service} />
                
                <ContactForm contactItemsForm={contactItemsForm} />
                
                <Footer footerItems={footerItems} />
            
            <RichSnippets
                areaServed={service?.lugar}
                description={service?.metaContent}
                image={service?.largeImage}
                url={service?.canonical}
                service= "Servicios de desatascos y pocería"
            />
        </>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const service = getItemData(slug, 'desatascos');
    const footerItems = getAllItems('footer');
    const contactItemsForm = getAllItems('contacto');

    return {
        props: {
            service,
            footerItems,
            contactItemsForm,
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
    contactItemsForm: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceDetailsPage;
