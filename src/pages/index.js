// Importaciones esenciales
import Head from 'next/head';
import PropTypes from 'prop-types';
import { getAllItems, getFeaturedItems } from '../lib/items-util';
import { parseSpanishDate } from '../utils/dateUtils';
import RichSnippets from '../components/RichSnippets';
import Footer from '../components/layout/footer';
// Importaciones estáticas de componentes
import ProductCluster from '../components/cluster';
import CallToAction from '../components/cta';
import ReviewsSection from '../components/reviews';
import GridServicios from '../components/gridservicios';
import LatestBlog from '../components/home-page/latest-blog';
import ContactForm from '../components/form-page';
import CookiePopup from '../components/cookiebanner';
import TextHome from '../components/textHome';
import TextUrgentesHome from '../components/textUrgentesHome';
import TextFirst from '../components/textFirst';
import Areastrabajo from '../components/areastrabajo';
import TextVideo from '../components/textVideo';
import CTA2 from '../components/cta2';
import HeroTailwind from '../components/herotailwind';
import Precios from '../components/precios';
import Whatsdesatascos from '../components/whatsdesatascos';
import Hazlotu from '../components/Hazlotu';






function HomePage({
    
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

           <HeroTailwind />
          
            <TextFirst />
            
            <div className="container">
                <ProductCluster localidad="Madrid" />
            </div>
             <Whatsdesatascos />
            <Areastrabajo />
            <TextHome />
            

        
            <CTA2 />
            <TextUrgentesHome />
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '40px' }}>
                    OTROS SERVICIOS
                </h2>
                <GridServicios />

              
                <TextVideo />
            </div>

            <CallToAction text="inicio" />
            <div className="container">
                <ReviewsSection />
            </div>
            <Hazlotu />
            <Precios />
            <ContactForm contactItemsForm={contactItemsForm} />
            <br></br>

            <h3 className="container" style={{ fontSize: '32px' }}>
                ÚLTIMAS PUBLICACIONES
            </h3>
            <p className="container">
                Puedes seguir nuestros consejos y trucos para desatascos y
                pocería desde la sección{' '}
                <a href="https://www.desatascos-madrid.com/blogs/category/todo">
                    blog
                </a>{' '}
                de nuestra web
            </p>
            <br/>
            
            <LatestBlog blogs={blogs} />
            <Footer footerItems={footerItems} />
            <RichSnippets
                areaServed="Madrid"
                description="Empresa líder de desatascos y obras de pocería en la comunidad de Madrid. Experiencia a tu servicio"
                image="/images/about/1-1.webp"
                url="https://www.desatascos-madrid.com"
                service="Servicios de desatascos y pocería en Madrid"
            />
            <CookiePopup />
        </>
    );
}

export function getStaticProps() {
    const heroItems = getAllItems('heros');
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
            heroItems,
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
    heroItems: PropTypes.instanceOf(Object).isRequired,
    bannerItems: PropTypes.instanceOf(Object).isRequired,
    aboutItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
    contactItemsForm: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
};

export default HomePage;
