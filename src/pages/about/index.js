import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutOne from '../../components/about';
import Breadcrumb from '../../components/breadcrumb';
import BannerThree from '../../components/banner/index-3';
import CounterTwo from '../../components/counter/index-2';
import LatestProject from '../../components/home-page/latest-project';
import Footer from '../../components/layout/footer';
import Team from '../../components/team';
import { getAllItems, getFeaturedItems } from '../../lib/items-util';



function AboutPage({
    aboutItems,
    bannerThreeItems,
    projects,
    projectSectionItems,
    teamItems,
    teamSectionItems,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>Desatascos Pociten: Líderes en Desatascos y Pocería en Madrid | Servicio 24/7</title>
                <meta
                    name="description"
                    content="Con más de 25 años de experiencia, Desatascos Pociten es tu solución de confianza para desatascos y pocería en Madrid. Ofrecemos una amplia gama de servicios de alta calidad, disponibles las 24 horas del día. Contacta con nosotros al 647 376 782."
                />
                <link rel="canonical" href="https://www.desatascos-madrid.com/about" />
            </Head>
            
            <Breadcrumb
                subTitle="Sobre Nosotros"
                title="Quiénes Somos"
                desc="Mejor empresa de poceros en toda la Comunidad de Madrid con los mejores precios"
            />
            <AboutOne aboutItems={aboutItems} />
            <BannerThree bannerThreeItems={bannerThreeItems} />
            <CounterTwo />
           <br></br>
           
           

            
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps() {

    const aboutItems = getAllItems('about');
    const bannerThreeItems = getAllItems('banner-3');
    const projectSectionItems = getAllItems('project-section');
    const projects = getAllItems('projects');
    const LatestProject = getFeaturedItems(projects);
    const teamSectionItems = getAllItems('team-section');
    const teamItems = getAllItems('team');
    const testimonialSectionItems = getAllItems('testimonial-section');
    const testimonialItems = getAllItems('testimonial');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            aboutItems,
            bannerThreeItems,
            projectSectionItems,
            projects: LatestProject,
            teamSectionItems,
            testimonialItems,
            testimonialSectionItems,
            teamItems,
            newsletterItems,
            footerItems,
        },
    };
}

AboutPage.propTypes = {
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    bannerThreeItems: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    projectSectionItems: PropTypes.instanceOf(Object).isRequired,
    teamItems: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    teamSectionItems: PropTypes.instanceOf(Object).isRequired,
    testimonialItems: PropTypes.instanceOf(Object).isRequired,
    testimonialSectionItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default AboutPage;
