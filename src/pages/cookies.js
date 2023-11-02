import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/breadcrumb';
import { getAllItems } from '../lib/items-util';
import Footer from '../components/layout/footer';
import Cookies from '../components/cookiestext';

function cookies({ footerItems }) {
    return (
        <>
            <Head>
                <title>Política de Cookies - Desatascos Pociten</title>
                <meta
                    name="description"
                    content="Política de Cookies - Desatascos Pociten"
                />
            </Head>
            <Breadcrumb
                subTitle="Política de Cookies"
                title="COOKIES"
                desc="Aquí te informamos sobre las cookies que utiliza Desatascos Pociten"
            />
            <Cookies />
          
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            newsletterItems,
            footerItems,
        },
    };
}

cookies.propTypes = {
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default cookies;
