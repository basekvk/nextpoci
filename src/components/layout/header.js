import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { FaSearch, FaBars } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import classes from './header.module.scss';
import { OffcanvasData } from './offcanvas-data';
import Image from 'next/image';


function Header() {
    // Header Sticky Activation
    const header = useRef();
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    const isSticky = (e) => {
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? header.current?.classList.add('is-sticky')
            : header.current?.classList.remove('is-sticky');
    };
    // End here

    // Header Search Toggle Activation
    const [search, setSearch] = useState(false);

    const SearchToggle = () => {
        search ? setSearch(false) : setSearch(true);
    };
    // End here

    // Offcanvas Activation
    const [offcanvas, setOffcanvas] = useState(false);
    const showOffcanvas = () => setOffcanvas(!offcanvas);

    const [submenuOpenId, setSubmenuOpenId] = useState({});

    const showSubmenuClickHandler = (id) =>
        setSubmenuOpenId((prevData) => ({
            [id.toString()]: !prevData[id.toString()],
        }));

    useEffect(() => {
        document.body.onclick = (e) => {
            if (offcanvas) {
                const clickIgnoreClassList = [
                    'offcanvas-menu',
                    'menu-bar-button',
                    'has-children',
                    'offcanvas-close-btn',
                ];

                if (
                    !clickIgnoreClassList.find((item) =>
                        [...e.target.classList].includes(item)
                    )
                ) {
                    setOffcanvas(false);
                }
            }
        };
    }, [offcanvas]);

    // End here

    return (
        <>
            <header className={classes.area}>
                <div className={classes.top}>
                    <Container>
                        <Row>
                            <Col
                                xl={{ span: 4, offset: 2 }}
                                lg={{ span: 5, offset: 3 }}
                                className="d-none d-lg-block"
                            >
                                <div className={classes.info}>
                                    <div className={classes.contact_number} />
                                    <div className={classes.time_schedule}>
                                        <img
                                            
                                            src="/images/header/icon/clock.png"
                                            alt="Servicio 24 Horas"
                                        />
                                        <span style={{fontSize: 36}} >24 HORAS</span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={{ span: 6 }} className="d-block d-lg-none">
                                <div className="header-logo">
                                    <Link href="/">
                                        <a className={classes.logo}>
                                            <Image
                                                width={256}
                                                height={53}                                                
                                                src="/images/logo/light.webp"
                                                alt="Logo Desatascos Pociten Blanco"
                                            />
                                        </a>
                                    </Link>
                                </div>
                            </Col>
                            <Col xl={6} lg={4} sm={6}>
                                <div className={classes.right}>
                                    <div className={classes.contact_number}>
                                        <Image
                                            width={32}
                                            height={32}    
                                            src="/images/header/icon/phone.png"
                                            alt="Llama Ahora a Desatascos Pociten"
                                        />
                                        <Link href="tel://+34647376782">
                                            <a  style={{fontSize: 36}} >647 376 782</a>
                                        </Link>
                                    </div>
                                 
                                    <div
                                        className={`${
                                            search
                                                ? 'search-show'
                                                : 'search-hide'
                                        } d-block d-lg-none search-holder`}
                                    >
                                        
                                        <form className="search-form">
                                            <input
                                                className="search-input"
                                                type="search"
                                                name="search"
                                                placeholder="Search"
                                            />
                                            <button
                                                className="search-inner__btn"
                                                type="submit"
                                            >
                                                <FaSearch />
                                            </button>
                                        </form>
                                    </div>
                                    <div className={classes.offcanvas}>
                                        <button
                                            className={`${classes.offcanvas__btn} d-block d-lg-none menu-bar-button`}
                                            onClick={showOffcanvas}
                                        >
                                            <FaBars />
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div ref={header} className={`sticky_holder ${classes.main}`}>
                    <Container>
                        <Row>
                            <Col
                                xl={{ span: 10, offset: 2 }}
                                className="d-none d-lg-block"
                            >
                                <nav className={classes.menu}>
                                    <ul className={classes.menu__list}>
                                        <li>
                                            <Link href="/">
                                                <a>
                                                    <span>INICIO</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about">
                                                <a>
                                                    <span>QUIÉNES SOMOS</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className={classes.dropdown_holder}>
                                            <Link href="#">
                                                <a>
                                                    <span>SERVICIOS</span>
                                                </a>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href="/services/desatascos-24horas">
                                                        <a>
                                                            DESATASCOS 24 HORAS
                                                        </a>
                                                    </Link>
                                                </li>
                                               
                                                <li>
                                                    <Link href="/services/limpieza-de-tuberias">
                                                        <a>
                                                            LIMPIEZA DE TUBERÍAS
                                                        </a>
                                                    </Link>
                                                </li>
                                               
                                              
                                              
                                                <li>
                                                    <Link href="/services/desatrancos">
                                                        <a>DESATRANCOS</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/desatascos-baratos">
                                                        <a>
                                                            DESATASCOS BARATOS
                                                        </a>
                                                    </Link>
                                                </li>
                                               
                                                <li>
                                                    <Link href="/services/obras-de-poceria">
                                                        <a>OBRAS DE POCERÍA</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/inspeccion-tuberia-con-camara">
                                                        <a>INSPECCIÓN CON CÁMARA</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/empresa-de-desatascos">
                                                        <a>EMPRESA DE DESATASCOS</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/limpieza-fosas-septicas">
                                                        <a>FOSAS SÉPTICAS</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/services/poceros-madrid">
                                                        <a>POCEROS EN MADRID</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={classes.dropdown_holder}>
                                            <Link href="#">
                                                <a>
                                                    <span>TRABAJAMOS EN</span>
                                                </a>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href="/desatascos/desatascos-madrid">
                                                        <a>DESATASCOS MADRID</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/desatascos/desatascos-mostoles">
                                                        <a>DESATASCOS MÓSTOLES</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/desatascos/desatascos-fuenlabrada">
                                                        <a>
                                                            DESATASCOS FUENLABRADA
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/desatascos/desatascos-getafe">
                                                        <a>DESATASCOS GETAFE</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/desatascos/desatascos-alcorcon">
                                                        <a>DESATASCOS ALCORCÓN</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/desatascos/desatascos-parla">
                                                        <a>DESATASCOS PARLA</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/desatascos/desatascos-aranjuez">
                                                        <a>DESATASCOS ARANJUEZ</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/desatascos/desatascos-valdemoro">
                                                        <a>DESATASCOS VALDEMORO</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/desatascos/desatascos-pozuelo">
                                                        <a>DESATASCOS POZUELO</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/desatascos/desatascos-arganda">
                                                        <a>
                                                            DESATASCOS ARGANDA DEL
                                                            REY
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/desatascos/desatascos-leganes">
                                                        <a>DESATASCOS LEGANÉS</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/desatascos/desatascos-alcala">
                                                        <a>
                                                            DESATASCOS ALCALÁ DE
                                                            HENARES
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/desatascos/desatascos-navalcarnero">
                                                        <a>
                                                            DESATASCOS NAVALCARNERO
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/desatascos/desatascos-sesena">
                                                        <a>DESATASCOS SESEÑA</a>
                                                    </Link>
                                                </li>
                                               
                                            </ul>
                                        </li>
                                        {/* <li className={classes.dropdown_holder}>
                                            <Link href="/">
                                                <a>
                                                    <span>Pages</span>
                                                </a>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href="/our-clients">
                                                        <a>Our Clients</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/our-team">
                                                        <a>Our Team</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/our-working-process">
                                                        <a>
                                                            Our Working Process
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={classes.dropdown_holder}>
                                            <Link href="/blogs/blog-fullwidth">
                                                <a>
                                                    <span>Blogs</span>
                                                </a>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href="/blogs/blog-leftsidebar">
                                                        <a>Blog Left Sidebar</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blogs/blog-rightsidebar">
                                                        <a>
                                                            Blog Right Sidebar
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}
                                      
                                        <li className={classes.dropdown_holder}>
                                            <Link href="/blogs/category/todo">
                                                <a>
                                                    <span>BLOGS</span>
                                                </a>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href="/blogs/como-desatascar-un-fregadero">
                                                        <a>COMO DESATASCAR FREGADERO</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blogs/como-desatascar-tuberias">
                                                        <a>COMO DESATASCAR TUBERÍAS</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blogs/como-prevenir-atascos">
                                                        <a>COMO PREVENIR ATASCOS</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blogs/obras-poceria-consejos">
                                                        <a>OBRAS DE POCERÍA</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blogs/lo-que-debes-saber-fosas-septicas">
                                                        <a>COMO MANTENER TUS FOSAS SÉPTICAS</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blogs/arqueta-sifonica-atascada">
                                                        <a>¿ARQUETA SIFÓNICA ATASCADA?</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                        {/*   <li>
                                            <Link href="/blogs/desatascar-tuberias">
                                                <a>
                                                    <span>BLOG</span>
                                                </a>
                                            </Link>
                                        </li> */}
                                        <li className={classes.separator}>
                                            <Link href="/contacto">
                                                <a>
                                                    <span>CONTACTO</span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li
                                            className={`${
                                                search
                                                    ? 'search-show'
                                                    : 'search-hide'
                                            }`}
                                        >
                                           
                                            <form className="search-form">
                                                <input
                                                    className="search-input"
                                                    type="search"
                                                    name="search"
                                                    placeholder="Search"
                                                />
                                                <button
                                                    className="search-inner__btn"
                                                    type="submit"
                                                >
                                                    <FaSearch />
                                                </button>
                                            </form>
                                        </li>
                                    </ul>
                                </nav>
                            </Col>
                        </Row>
                    </Container>
                    <div className={`${classes.fixed__logo} d-none d-lg-flex`}>
                        <Link href="/">
                            <a className={classes.logo}>
                                <img
                                    
                                    src="/images/logo/dark.png"
                                    alt="Logo Desatascos Pociten Oscuro"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </header>
            <div
                className={
                    offcanvas
                        ? 'offcanvas-menu-wrap active'
                        : 'offcanvas-menu-wrap'
                }
            >
                <nav className="offcanvas-menu">
                    <ul className="offcanvas-menu-items">
                        <li className="offcanvas-top">
                            <button
                                type="button"
                                className="offcanvas-close-btn"
                                aria-label="Right Align"
                            >
                                <IoCloseOutline onClick={showOffcanvas} />
                            </button>
                        </li>
                        {OffcanvasData.map((item) => {
                            const { submenu } = item;
                            return (
                                <li
                                    key={item.id}
                                    className={`${item.cName}${
                                        submenuOpenId[item.id.toString()]
                                            ? ' active'
                                            : ''
                                    }`}
                                    onClick={
                                        submenu
                                            ? () =>
                                                  showSubmenuClickHandler(
                                                      item.id
                                                  )
                                            : () => {}
                                    }
                                >
                                    <Link href={item.path}>
                                        <a
                                            className={
                                                item?.submenu
                                                    ? 'has-children'
                                                    : ''
                                            }
                                        >
                                            {item.title}
                                        </a>
                                    </Link>
                                    {submenu && (
                                        <ul className="submenu">
                                            {submenu?.map((submenuItem) => (
                                                <li key={submenuItem.id}>
                                                    <Link
                                                        href={submenuItem.link}
                                                    >
                                                        <a>
                                                            {submenuItem.text}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;
