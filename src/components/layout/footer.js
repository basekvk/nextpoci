import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import * as FaIcons from 'react-icons/fa';
import Link from 'next/link';
import { Fragment } from 'react';
import classes from './footer.module.scss';

function Footer({ footerItems }) {
    return (
        <footer>
            {footerItems?.map((footerItem) => (
                <Fragment key={footerItem.id}>
                    <div className={`${classes.bg}`}>
                        <Container>
                            <Row>
                                <Col lg={{ span: 3 }}>
                                    <div className={classes.widget__item}>
                                        <Link href="/">
                                            <a className={classes.logo}>
                                                <img
                                                    src={footerItem?.footerLogo}
                                                    alt={
                                                        footerItem?.footerLogoAlt
                                                    }
                                                />
                                            </a>
                                        </Link>
                                        <p
                                            className={classes.desc}
                                            dangerouslySetInnerHTML={{
                                                __html: footerItem?.excerpt,
                                            }}
                                        />
                                        <div className={classes.inquary}>
                                            <h2
                                                className={classes.inquary_info}
                                            >
                                                {footerItem?.inquary}
                                            </h2>

                                            <Link href="tel://+34647376782">
                                                <a
                                                    className={
                                                        classes.inquary_number
                                                    }
                                                >
                                                    {footerItem?.inquaryNumber1}
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </Col>
                                <Col
                                    xl={{ span: 3 }}
                                    lg={{ span: 2 }}
                                    sm={{ span: 6 }}
                                    className="ps-xl-80 pt-40 pt-lg-0"
                                >
                                    <div className={classes.widget__item}>
                                        <h2 className={classes.widget__title}>
                                            {footerItem?.informationTitle}
                                        </h2>
                                        <ul className={classes.widget__list}>
                                            {footerItem?.informationList?.map(
                                                (item) => (
                                                    <li key={item.id}>
                                                        <Link
                                                            href={`/${item.path}`}
                                                        >
                                                            <a>{item.title}</a>
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </Col>
                                <Col
                                    lg={{ span: 3 }}
                                    sm={{ span: 6 }}
                                    className="ps-lg-50 pt-40 pt-lg-0"
                                >
                                    <div className={classes.widget__item}>
                                        <h2 className={classes.widget__title}>
                                            {footerItem?.quickLinkTitle}
                                        </h2>
                                        <ul className={classes.widget__list}>
                                            {footerItem?.quickLinkList?.map(
                                                (item) => (
                                                    <li key={item.id}>
                                                        <Link
                                                            href={`/${item.path}`}
                                                        >
                                                            <a>{item.title}</a>
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </Col>
                                <Col
                                    xl={{ span: 3 }}
                                    lg={{ span: 4 }}
                                    className="pt-40 pt-lg-0"
                                >
                                    <div className={classes.widget__item}>
                                        <h2 className={classes.widget__title}>
                                            {footerItem?.contactInfoTitle}
                                        </h2>
                                        <div
                                            className={`pb-25 ${classes.widget__info}`}
                                        >
                                            <p
                                                className={
                                                    classes.widget_address
                                                }
                                                dangerouslySetInnerHTML={{
                                                    __html: footerItem?.widgetAddress,
                                                }}
                                            />
                                            <span
                                                className={
                                                    classes.widget_number
                                                }
                                            >
                                                {footerItem?.widgetNumber}
                                            </span>
                                        </div>
                                        <div className={classes.widget__info}>
                                            <p
                                                className={
                                                    classes.widget_address
                                                }
                                                dangerouslySetInnerHTML={{
                                                    __html: footerItem?.additionWidgetAddress,
                                                }}
                                            />
                                            <span
                                                className={
                                                    classes.widget_number
                                                }
                                            >
                                                {
                                                    footerItem?.additionWidgetNumber
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className={classes.bottom}>
                        <Container>
                            <Row>
                                <Col md={{ span: 6 }} sm={{ span: 4 }}>
                                    <ul className={classes.social}>
                                        {footerItem?.socialList?.map((item) => {
                                            const Social =
                                                FaIcons[item.socialIcon];
                                            // Asumiendo que `item.socialIcon` o `item.name` contienen el nombre de la red social
                                            const socialName =
                                                item.name; // Ajusta esto según la estructura de tus datos
                                            return (
                                                <li key={item.id}>
                                                    <Link href={`${item.path}`}>
                                                        <a
                                                            aria-label={`Síguenos en ${socialName}`}
                                                        >
                                                            {' '}
                                                            {/* Usa el nombre de la red social aquí */}
                                                            <Social />
                                                        </a>
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </Col>
                                <Col md={{ span: 6 }} sm={{ span: 8 }}>
                                    <div className={classes.copyright}>
                                        <span className={classes.text}>
                                            © 2024{' '}
                                            <Link href="https://duegency.es">
                                                Duegency
                                            </Link>
                                            <span
                                                className={classes.icon}
                                            ></span>
                                            <a href="/"></a>
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Fragment>
            ))}
        </footer>
    );
}

Footer.propTypes = {
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default Footer;
