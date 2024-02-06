import Head from 'next/head';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import AboutOne from '../components/about';
import BannerOne from '../components/banner';
import Hero from '../components/home-page/hero';
import Footer from '../components/layout/footer';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import ProductCluster from '../components/cluster';
import CallToAction from '../components/cta';
import ReviewsSection from '../components/reviews';
import Areastrabajo from '../components/areastrabajo';
import CallButton from '../components/CallButton';
import GridServicios from '../components/gridservicios';
import Problemas from '../components/problemas';

const ContactForm = dynamic(() => import('../components/form-page'));
const CookiePopup = dynamic(() => import('../components/cookiebanner'));

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
                    Desatrancos y Pocería en Madrid | Desatascos Madrid -
                    Pociten
                </title>
                <meta
                    name="description"
                    content=" Servicios de desatascos y pocería en Madrid. Resolvemos problemas de tuberías, desatrancos, alcantarillado y fosas sépticas. Llama ahora ☎️​ 647 376 782"
                />
                <meta
                    property="og:url"
                    content="https://desatascos-madrid.com/"
                />
                <meta
                    property="og:title"
                    content="Desatascos-Pocería-Alcantarillado 【647 376 782】| Desatascos Pociten"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="✅Poceros en Madrid. 🔝 Servicios desatascos en Madrid 24 horas. 📢 Desatrancos con los mejores precios.☎️​ 647 376 782"
                />

                <meta property="og:image" content="/images/about/1-1.webp" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://desatascos-madrid.com/"
                />
                <meta
                    property="twitter:title"
                    content="Desatascos y Poceros Madrid【647 376 782】Desatascos Pociten"
                />
                <meta
                    property="twitter:description"
                    content="✅Poceros en Madrid. 🔝 Empresa de desatascos en Madrid 24 horas. 📢 Desatascos baratos con los mejores precios. ☎️​647 376 782"
                />
                <meta
                    property="twitter:image"
                    content="/images/about/1-1.webp"
                />
                <link
                    rel="canonical"
                    href="https://www.desatascos-madrid.com"
                />
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
                    inspección? Estás en el sitio adecuado, llevamos la palabra
                    pocero en la sangre
                    <br />
                    <br />
                    ¡No te preocupes! Como Poceros en Madrid ofrecemos servicios
                    de desatascos de tuberías (fregaderos, duchas, wc,
                    lavavajillas, cocinas, etc..), desatrancos, limpieza y
                    mantenimiento de alcantarillado, limpieza y construcción de
                    arquetas y pozos negros, achiques de agua, reparación de
                    bajantes, inspección con cámara de tuberías, vaciado y
                    mantenimiento de fosas sépticas, reparación de tuberías sin
                    obra, etc...
                </p>

                <br />
                <p>
                    Ofrecemos nuestros servicios en toda la comunidad de Madrid
                    y zonas limítrofes de Toledo y Guadalajara. Contamos con
                    camiones cuba preparados para cualquier urgencia las 24
                    horas del día . <br /> <br />
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
                    desatascos urgentes 24 horas .{' '}
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
    const services = getAllItems('services');
    const serviceSectionItems = getAllItems('service-section');
    const HomePageServices = getFeaturedItems(services);
    const bannerTwoItems = getAllItems('banner-2');
    const footerItems = getAllItems('footer');
    const contactItemsForm = getAllItems('contacto');

    return {
        props: {
            heroItems,
            bannerItems,
            aboutItems,
            services: HomePageServices,
            serviceSectionItems,
            footerItems,
            contactItemsForm,
        },
    };
}

HomePage.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
    bannerItems: PropTypes.instanceOf(Object).isRequired,
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
    contactItemsForm: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
