// Importaciones esenciales
import Head from 'next/head';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import { parseSpanishDate } from '../utils/dateUtils';
import RichSnippets from '../components/RichSnippets';
import Footer from '../components/layout/footer';
import Hero from '../components/home-page/hero';

// Importaciones dinámicas
const BannerOne = dynamic(() => import('../components/banner'), { ssr: false });
const AboutOne = dynamic(() => import('../components/about'), { ssr: false });

const ProductCluster = dynamic(() => import('../components/cluster'), {
    ssr: false,
});
const CallToAction = dynamic(() => import('../components/cta'), { ssr: false });
const ReviewsSection = dynamic(() => import('../components/reviews'), {
    ssr: false,
});

const GridServicios = dynamic(() => import('../components/gridservicios'), {
    ssr: false,
});
const Problemas = dynamic(() => import('../components/problemas'), {
    ssr: false,
});
const LatestBlog = dynamic(
    () => import('../components/home-page/latest-blog'),
    { ssr: false }
);
const ContactForm = dynamic(() => import('../components/form-page'), {
    ssr: false,
});
const CookiePopup = dynamic(() => import('../components/cookiebanner'), {
    ssr: false,
});
const TextHome = dynamic(() => import('../components/textHome'), {
    ssr: false,
});
const TextUrgentesHome = dynamic(
    () => import('../components/textUrgentesHome'),
    { ssr: false }
);
const TextFirst = dynamic(() => import('../components/textFirst'), {
    ssr: false,
});
const Areastrabajo = dynamic(() => import('../components/areastrabajo'), {
    ssr: false,
});

const VideoPortada = dynamic(() => import('../components/videoportada'), {
    ssr: false,
});

function HomePage({
    bannerItems,
    aboutItems,
    footerItems,
    contactItemsForm,
    blogs,
}) {
    return (
        <>
            <Head>
                <title>
                    Desatrancos y Pocería en Madrid | Desatascos Madrid -
                    Pociten
                </title>

                <meta name="robots" content="index, follow" />
                <meta
                    name="description"
                    content=" Servicios de desatascos y pocería en Madrid. Resolvemos problemas de tuberías, desatrancos, alcantarillado y fosas sépticas. 647 376 782"
                />
                <link
                    rel="canonical"
                    href="https://www.desatascos-madrid.com"
                />
                <meta
                    property="og:url"
                    content="https://www.desatascos-madrid.com/"
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

                <meta
                    property="og:image"
                    content="https://www.desatascos-madrid.com/_next/image?url=%2Fimages%2Fabout%2F1-1.webp&w=640&q=75"
                />
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://www.desatascos-madrid.com/"
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
                    content="https://www.desatascos-madrid.com/_next/image?url=%2Fimages%2Fabout%2F1-1.webp&w=640&q=75"
                />

                <link
                    rel="image_src"
                    href="https://www.desatascos-madrid.com/_next/image?url=%2Fimages%2Fservices%2Fdesatascos-24-horas%2Fdesatascos-urgentes-24-horas.webp&w=1024&q=75"
                />
            </Head>

            <Hero />
            <br></br>
            <TextFirst />
            <div className='container'>
            <ProductCluster localidad="Madrid" />
            </div>
            
            <Areastrabajo />
            <TextHome />
            <br></br>

            <BannerOne bannerItems={bannerItems} />
            <AboutOne aboutItems={aboutItems} />
            <TextUrgentesHome />
            <Problemas />
            <br></br>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '40px' }}>
                    OTROS SERVICIOS
                </h2>
                <GridServicios />

                <VideoPortada />
            </div>

            <CallToAction text="inicio" />
            <div className="container">
                <ReviewsSection />
            </div>

            <ContactForm contactItemsForm={contactItemsForm} />
            <br></br>

            <h3 className="container" style={{ fontSize: '32px' }}>
                ÚLTIMAS PUBLICACIONES
            </h3>
            <LatestBlog blogs={blogs} />
            <Footer footerItems={footerItems} />
            <RichSnippets
                areaServed="Madrid"
                description="Empresa líder de desatascos y obras de pocería en la comunidad de Madrid. Experiencia a tu servicio"
                image="/images/about/1-1.webp"
                url="https://desatascos-madrid.com"
                service="Servicios de desatascos y pocería"
            />
            <CookiePopup />
        </>
    );
}

export function getStaticProps() {
    const bannerItems = getAllItems('banner');
    const aboutItems = getAllItems('about');
    let blogs = getAllItems('blogs')
        .map((blog) => ({
            ...blog,
            parsedDate: parseSpanishDate(blog.date).toISOString(),
        }))
        .sort((a, b) => new Date(b.parsedDate) - new Date(a.parsedDate));

    // Nos quedamos solo con los últimos 3 blogs
    blogs = blogs.slice(0, 3);

    const footerItems = getAllItems('footer');
    const contactItemsForm = getAllItems('contacto');
    const LatestBlog = getFeaturedItems(blogs);

    return {
        props: {
            bannerItems,
            aboutItems,
            footerItems,
            contactItemsForm,
            blogs: LatestBlog,
        },
        revalidate: 3600,
    };
}

HomePage.propTypes = {
    bannerItems: PropTypes.instanceOf(Object).isRequired,
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
    contactItemsForm: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
