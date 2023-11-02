import Head from 'next/head';
import PropTypes from 'prop-types';
import AboutOne from '../components/about';
import BannerOne from '../components/banner';
import Hero from '../components/home-page/hero';
import Footer from '../components/layout/footer';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import ProductCluster from '../components/cluster';
import CallToAction from '../components/cta';
import ContactForm from '../components/form-page';
import CookiePopup from '../components/cookiebanner';
import ReviewsSection from '../components/reviews';
import Areastrabajo from '../components/areastrabajo';

function HomePage({
    heroItems,
    bannerItems,
    aboutItems,
    footerItems,
    contactItemsForm,
}) {
    return (
        <>
            <Head>
                <title>
                    Desatrancos y Pocería en Madrid | Desatascos Madrid
                </title>
                <meta
                    name="description"
                    content=" Servicios de desatascos y pocería en Madrid. Resolvemos problemas de tuberías, desatrancos, alcantarillado y fosas sépticas. Llama ahora ☎️​ 647 376 782"
                />
                <meta name="robots" content="index, follow" />
                <link
                    rel="canonical"
                    href="https://www.desatascos-madrid.com"
                />

            </Head>

            <Hero heroItems={heroItems} />
            <BannerOne bannerItems={bannerItems} />
            <AboutOne aboutItems={aboutItems} />
            <ProductCluster />
            <CallToAction />
            <ReviewsSection />
           
            
            <ContactForm contactItemsForm={contactItemsForm} />
            <br></br>
            <Areastrabajo />

            <Footer footerItems={footerItems} />
            <CookiePopup />
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
    const bannerItems = getAllItems('banner');
    const aboutItems = getAllItems('about');
    const projectSectionItems = getAllItems('project-section');
    const projects = getAllItems('projects');
    const LatestProject = getFeaturedItems(projects);
    const services = getAllItems('services');
    const serviceSectionItems = getAllItems('service-section');
    const HomePageServices = getFeaturedItems(services);
    const bannerTwoItems = getAllItems('banner-2');
    const teamItems = getAllItems('team');
    const teamSectionItems = getAllItems('team-section');
    const footerItems = getAllItems('footer');
    const partnersItems = getAllItems('partners');
    const contactItemsForm = getAllItems('contacto');

    return {
        props: {
            heroItems,
            bannerItems,
            aboutItems,
            projectSectionItems,
            projects: LatestProject,
            services: HomePageServices,
            serviceSectionItems,
            bannerTwoItems,
            teamItems,
            teamSectionItems,
            footerItems,
            partnersItems,
            contactItemsForm,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    bannerItems: PropTypes.instanceOf(Object).isRequired,
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    projects: PropTypes.instanceOf(Object).isRequired,
    projectSectionItems: PropTypes.instanceOf(Object).isRequired,
    services: PropTypes.instanceOf(Object).isRequired,
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
    bannerTwoItems: PropTypes.instanceOf(Object).isRequired,
    teamItems: PropTypes.instanceOf(Object).isRequired,
    teamSectionItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
    contactItemsForm: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
