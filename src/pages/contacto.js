import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/breadcrumb';
import Contact from '../components/contacto';
import Footer from '../components/layout/footer';
import { getAllItems } from '../lib/items-util';
import LazyLoad from 'react-lazyload';

function ContactPage({ contactItems,  footerItems }) {
    return (
        <>
            <Head>
                <title>
                    Contacta - Desatascos y pocería en Madrid | Desatascos Pociten
                </title>
               
                <meta
                    name="description"
                    content="¡Contacta con Desatascos Pociten en Madrid! 🛠️ Líder en desatascos y pocería en Madrid, soluciones rápidas y eficientes. ¡Llámanos ya! 📞 647 376 782"
                />
                <link
                    rel="canonical"
                    href="https://www.desatascos-madrid.com/contacto"
                />
            </Head>
            
                <Breadcrumb
                    subTitle="Contacta"
                    title="Contacta"
                    desc="Si quieres un presupuesto gratuito o cualquier tipo de información así como cualquier duda o pregunta, este es tu sitio."
                />
                <LazyLoad>
                <Contact contactItems={contactItems} />

                <Footer footerItems={footerItems} />
            </LazyLoad>
        </>
    );
}

export function getStaticProps() {
    const contactItems = getAllItems('contacto');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            contactItems,
            newsletterItems,
            footerItems,
        },
    };
}

ContactPage.propTypes = {
    contactItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default ContactPage;
