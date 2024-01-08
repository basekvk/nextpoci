import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import classes from '../services/service.module.scss';


function HomePageServices({ services, serviceSectionItems }) {
    // Puedes eliminar el uso de useState, useEffect y useRef si ya no los necesitas

    return (
        <div className={classes.area}>
            <Container>
                {serviceSectionItems.map((item) => (
                    <div className={classes.section} key={item.id}>
                        <div className={classes.section_title}>
                            <span>{item?.subTitle}</span>
                            <h2
                                dangerouslySetInnerHTML={{
                                    __html: item.title,
                                }}
                            />
                        </div>
                        <div className={classes.section_banner}>
                            <h3
                                className={classes.info}
                                dangerouslySetInnerHTML={{
                                    __html: item.bannerInfo,
                                }}
                            />
                        </div>
                    </div>
                ))}
                {/* Aquí puedes agregar tu imagen estática o cualquier otro contenido */}
                <Row>
                    <Col lg={{ span: 12 }}>
                        {/* Contenido, como una imagen estática, en lugar de Swiper */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

HomePageServices.propTypes = {
    services: PropTypes.instanceOf(Object).isRequired,
    serviceSectionItems: PropTypes.instanceOf(Object).isRequired,
};


export default HomePageServices;
