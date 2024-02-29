import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import { FaSearch, FaBars } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import classes from './header.module.scss';
import { OffcanvasData } from './offcanvas-data';
import Image from 'next/image';
import { menuDesktop } from './menu';

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
                                        <Image
                                            width={32}
                                            height={32}
                                            src="/images/header/icon/clock.webp"
                                            alt="Servicio 24 Horas"
                                        />
                                        <span style={{ fontSize: 36, color:"white" }}>
                                            24 HORAS
                                        </span>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={{ span: 6 }} className="d-block d-lg-none">
                                <div className="header-logo">
                                    <Link href="/">
                                        <a className={classes.logo}>
                                            <Image
                                                width={256}
                                                height={85}
                                                src="/images/logo/dark.webp"
                                                alt="Logo Desatascos Pociten Color"
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
                                            src="/images/header/icon/phone.webp"
                                            alt="Llama Ahora a Desatascos Pociten"
                                        />
                                        <Link href="tel://+34647376782">
                                            <a style={{ fontSize: 36, color:"white" }}>
                                                647 376 782
                                            </a>
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
                                <nav className={classes.menu}>
                                    <ul className={classes.menu__list}>
                                        {menuDesktop.map((item) => (
                                            <li
                                                className={classes[item.cName]}
                                                key={item.id}
                                            >
                                                <Link href={item.link}>
                                                    <a>
                                                        <span>
                                                            {item.title}
                                                        </span>
                                                    </a>
                                                </Link>
                                                {item.submenu && (
                                                    <ul
                                                        className={
                                                            classes.dropdown_menu
                                                        }
                                                    >
                                                        {item.submenu.map(
                                                            (subItem) => (
                                                                <li
                                                                    key={
                                                                        subItem.id
                                                                    }
                                                                >
                                                                    <Link
                                                                        href={
                                                                            subItem.link
                                                                        }
                                                                    >
                                                                        <a>
                                                                            {
                                                                                subItem.text
                                                                            }
                                                                        </a>
                                                                    </Link>
                                                                    {subItem.submenu && (
                                                                        <ul
                                                                            className={
                                                                                classes.dropdown_nested
                                                                            }
                                                                        >
                                                                            {subItem.submenu.map(
                                                                                (
                                                                                    subSubItem
                                                                                ) => (
                                                                                    <li
                                                                                        key={
                                                                                            subSubItem.id
                                                                                        }
                                                                                    >
                                                                                        <Link
                                                                                            href={
                                                                                                subSubItem.link
                                                                                            }
                                                                                        >
                                                                                            <a
                                                                                                style={{
                                                                                                    textTransform:
                                                                                                        'uppercase',
                                                                                                }}
                                                                                            >
                                                                                                {
                                                                                                    subSubItem.text
                                                                                                }
                                                                                            </a>
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            )}
                                                                        </ul>
                                                                    )}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                        <li
                                            className={classes.separator}
                                            style={{ marginLeft: '40px' }}
                                        >
                                            <Link href="/contacto">
                                                <a>
                                                    <span>CONTACTO</span>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </Col>
                        </Row>
                    </Container>
                    <div className={`${classes.fixed__logo} d-none d-lg-flex`}>
                        <Link href="/">
                            <a className={classes.logo}>
                                <Image
                                    width={256}
                                    height={85}
                                    src="/images/logo/dark.webp"
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
