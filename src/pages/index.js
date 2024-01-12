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
import CallButton from '../components/CallButton';
import GridServicios from '../components/gridservicios';
import Problemas from '../components/problemas';

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
                <link rel="canonical" href="https://desatascos-madrid.com" />
            </Head>

            <Hero heroItems={heroItems} />
            <br></br>

            <div className="container">
                <h2 className="text-center" style={{ fontSize: '42px' }}>
                    Desatascos en Madrid
                </h2>
                <p>
                    ¿Problemas con tus tuberías? ¿La ducha o el fregadero no
                    traga agua? ¿Se te ha inundado el garaje? ¿o solo quieres
                    mantener tu red de saneamiento en buen estado con una simple
                    inspección? <br />
                    <br />
                    ¡No te preocupes! Ofrecemos servicios de desatascos de
                    tuberías (fregaderos, duchas, wc, lavavajillas, cocinas,
                    etc..), desatrancos, limpieza y mantenimiento de
                    alcantarillado, limpieza y construcción de arquetas y pozos
                    negros, achiques de agua, reparación de bajantes, inspección
                    con cámara de tuberías, vaciado y mantenimiento de fosas
                    sépticas, reparación de tuberías sin obra, etc...
                </p>

                <br />
                <p>
                    Ofrecemos nuestros servicios en toda la comunidad de Madrid
                    y zonas limítrofes de Toledo y Guadalajara. Contamos con
                    camiones cuba preparados para cualquier urgencia las 24
                    horas del día. <br /> <br />
                    Si estás buscando poceros cualificados y al mejor precio, no
                    busques más, los acabas de encontrar. Compruébalo
                </p>
                <br />
                <CallButton />
            </div>
            <br></br>
            <ProductCluster localidad="Madrid" />

            <CallButton />

            <BannerOne bannerItems={bannerItems} />
            <AboutOne aboutItems={aboutItems} />
            <div className="container">
                <h2 className="text-center" style={{ fontSize: '42px' }}>
                    Desatascos Urgentes
                </h2>
                <p>
                    ¿Es sábado?¿Domingo?¿Festivo? En Desatascos Pociten no
                    importa ni el cuándo ni el dónde, llámanos y acudiremos a tu
                    llamada en el menor tiempo posible con nuestro servicio de
                    desatascos urgentes 24 horas.{' '}
                </p>
                <br />
                <p>
                    No esperes más, antes de agravar la avería llámanos y te lo
                    solucionamos en tiempo record para que puedas seguir con tu
                    día a día ya sea en tu negocio, empresa, comunidad de
                    vecinos o domicilio particular
                </p>
            </div>
            <Problemas />
            <br></br>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '40px' }}>
                    OTROS SERVICIOS
                </h2>
                <GridServicios />
            </div>
            <CallToAction text="inicio" />
            <div className="container">
                <ReviewsSection />
            </div>

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
