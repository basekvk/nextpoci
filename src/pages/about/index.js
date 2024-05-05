import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutOne from '../../components/about';
import Breadcrumb from '../../components/breadcrumb';
import BannerThree from '../../components/banner/index-3';
import Footer from '../../components/layout/footer';
import { getAllItems } from '../../lib/items-util';

function AboutPage({ aboutItems, bannerThreeItems, footerItems }) {
    return (
        <>
            <Head>
                <title>
                    Desatascos Pociten: Líderes en Desatascos y Pocería en
                    Madrid | Servicio 24/7
                </title>
                <meta
                    name="description"
                    content="Desatascos Pociten, 20 años de experiencia en desatascos y pocería en Madrid. ¡Disponibles 24/7! ☎️ 647 376 782. 😊"
                />
                <link
                    rel="canonical"
                    href="https://www.desatascos-madrid.com/about"
                />
            </Head>
            <Breadcrumb
                subTitle="Sobre Nosotros"
                title="Quiénes Somos"
                desc="Mejor empresa de poceros en toda la Comunidad de Madrid con los mejores precios"
            />
            <AboutOne aboutItems={aboutItems} />
            <BannerThree bannerThreeItems={bannerThreeItems} />
            <br />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {
    const aboutItems = getAllItems('about');
    const bannerThreeItems = getAllItems('banner-3');
    const footerItems = getAllItems('footer');

    return {
        props: {
            aboutItems,
            bannerThreeItems,
            footerItems,
        },
    };
}

AboutPage.propTypes = {
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    bannerThreeItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default AboutPage;
