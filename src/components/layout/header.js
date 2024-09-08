import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import classes from './header.module.scss';
import { OffcanvasData } from './offcanvas-data';
import Image from 'next/image';
import { menuDesktop } from './menu';

// Componente para el logo
const Logo = ({ className }) => (
    <Link href="/">
        <a className={className}>
            <Image
                width={256}
                height={85}
                src="/images/logo/dark.webp"
                alt="Logo Desatascos Pociten"
                priority={true}
            />
        </a>
    </Link>
);

// Componente para el menú de escritorio
const DesktopMenu = () => (
    <nav className={classes.menu}>
        <ul className={classes.menu__list}>
            {menuDesktop.map((item) => (
                <li className={classes[item.cName]} key={item.id}>
                    <Link href={item.link}>
                        <a>
                            <span>{item.title}</span>
                        </a>
                    </Link>
                    {item.submenu && (
                        <ul className={classes.dropdown_menu}>
                            {item.submenu.map((subItem) => (
                                <li key={subItem.id}>
                                    <Link href={subItem.link}>
                                        <a>{subItem.text}</a>
                                    </Link>
                                    {subItem.submenu && (
                                        <ul className={classes.dropdown_nested}>
                                            {subItem.submenu.map((subSubItem) => (
                                                <li key={subSubItem.id}>
                                                    <Link href={subSubItem.link}>
                                                        <a style={{ textTransform: 'uppercase' }}>
                                                            {subSubItem.text}
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
            <li className={classes.separator} style={{ marginLeft: '40px' }}>
                <Link href="/contacto">
                    <a>
                        <span>CONTACTO</span>
                    </a>
                </Link>
            </li>
        </ul>
    </nav>
);

// Componente para el menú offcanvas
const OffcanvasMenu = ({ offcanvas, showOffcanvas }) => {
    const [submenuOpenId, setSubmenuOpenId] = useState({});

    const showSubmenuClickHandler = useCallback((id) => {
        setSubmenuOpenId((prevData) => ({
            ...prevData,
            [id.toString()]: !prevData[id.toString()],
        }));
    }, []);

    return (
        <div className={offcanvas ? 'offcanvas-menu-wrap active' : 'offcanvas-menu-wrap'}>
            <nav className="offcanvas-menu">
                <ul className="offcanvas-menu-items">
                    <li className="offcanvas-top">
                        <button
                            type="button"
                            className="offcanvas-close-btn"
                            aria-label="Cerrar menú"
                            onClick={showOffcanvas}
                        >
                            <IoCloseOutline />
                        </button>
                    </li>
                    {OffcanvasData.map((item) => {
                        const { submenu } = item;
                        return (
                            <li
                                key={item.id}
                                className={`${item.cName}${
                                    submenuOpenId[item.id.toString()] ? ' active' : ''
                                }`}
                                onClick={submenu ? () => showSubmenuClickHandler(item.id) : undefined}
                            >
                                <Link href={item.path}>
                                    <a className={item?.submenu ? 'has-children' : ''}>
                                        {item.title}
                                    </a>
                                </Link>
                                {submenu && (
                                    <ul className="submenu">
                                        {submenu?.map((submenuItem) => (
                                            <li key={submenuItem.id}>
                                                <Link href={submenuItem.link}>
                                                    <a>{submenuItem.text}</a>
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
    );
};

function Header() {
    const header = useRef();
    const [offcanvas, setOffcanvas] = useState(false);

    const isSticky = useCallback(() => {
        const scrollTop = window.scrollY;
        scrollTop >= 250
            ? header.current?.classList.add('is-sticky')
            : header.current?.classList.remove('is-sticky');
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, [isSticky]);

    const showOffcanvas = useCallback(() => setOffcanvas((prev) => !prev), []);

    useEffect(() => {
        const handleBodyClick = (e) => {
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

        document.body.addEventListener('click', handleBodyClick);
        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, [offcanvas]);

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
                                        <Image
                                            width={32}
                                            height={32}
                                            src="/images/header/icon/clock.webp"
                                            alt="Servicio 24 Horas"
                                            priority={true}
                                        />
                                        <span style={{ fontSize: 36, color: "white" }}>
                                            24 HORAS
                                        </span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={{ span: 6 }} className="d-block d-lg-none">
                                <div className="header-logo">
                                    <Logo className={classes.logo} />
                                </div>
                            </Col>

                            <Col xl={6} lg={4} sm={6}>
                                <div className={classes.right}>
                                    <div className={classes.contact_number}>
                                        <Image
                                            width={32}
                                            height={32}
                                            src="/images/header/icon/phone.webp"
                                            alt="Llama Ahora a Desatascos Pociten"
                                            priority={true}
                                        />
                                        <Link href="tel://+34647376782">
                                            <a style={{ fontSize: 36, color: "white" }}>
                                                647 376 782
                                            </a>
                                        </Link>
                                    </div>

                                    <div className={classes.offcanvas}>
                                        <button
                                            aria-label="Abrir menú"
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
                                <DesktopMenu />
                            </Col>
                        </Row>
                    </Container>
                    <div className={`${classes.fixed__logo} d-none d-lg-flex`}>
                        <Logo className={classes.logo} />
                    </div>
                </div>
            </header>
            <OffcanvasMenu offcanvas={offcanvas} showOffcanvas={showOffcanvas} />
        </>
    );
}

export default Header;