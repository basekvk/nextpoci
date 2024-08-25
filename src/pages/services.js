import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/breadcrumb';
import ServiciosComponent from '../components/clusterServicios';
import Footer from '../components/layout/footer';
import { getAllItems } from '../lib/items-util';

function Servicios({ footerItems }) {
    return (
        <>
            <Head>
                <title>
                    Servicios Desatascos y Pocería| Pociten
                </title>

                <meta
                    name="description"
                    content="🛠️ Servicios de desatascos y pocería en Madrid, soluciones rápidas y eficientes. ¡Llámanos ya! 📞 647 376 782"
                />
                <link
                    rel="canonical"
                    href="https://www.desatascos-madrid.com/servicios"
                />
            </Head>

            <Breadcrumb
                subTitle="Servicios"
                title="Servicios"
                desc="Echa un vistazo a los servicios de desatascos y pocería que ofrece Pociten."
            />

            <ServiciosComponent />

            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const footerItems = getAllItems('footer');

    return {
        props: {
            footerItems,
        },
    };
}

Servicios.propTypes = {
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default Servicios;
