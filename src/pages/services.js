import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Breadcrumb from '../components/breadcrumb';
import ServiciosComponent from '../components/clusterServicios';
import Footer from '../components/layout/footer';
import { getAllItems } from '../lib/items-util';
import RichSnippets from '../components/RichSnippets/index.tsx';

function Servicios({ footerItems }) {
    return (
        <>
            <Head>
                <title>
                    Servicios Desatascos y Pocería | Pociten
                </title>
                <meta
                    name="description"
                    content="🛠️ Servicios de desatascos y pocería en Madrid, soluciones rápidas y eficientes. ¡Llámanos ya! 📞 647 376 782"
                />
                <link
                    rel="canonical"
                    href="https://www.desatascos-madrid.com/services"
                />
            </Head>

            <RichSnippets 
                url="https://www.desatascos-madrid.com/services"
                description="Servicios de desatascos y pocería en Madrid, soluciones rápidas y eficientes. Atención 24/7 para emergencias de fontanería y desatasco."
                image="https://www.desatascos-madrid.com/images/servicios-desatascos.jpg"
                areaServed={["Madrid", "Comunidad de Madrid"]}
                services={["Desatascos", "Pocería", "Limpieza de tuberías", "Inspección con cámara"]}
            />

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