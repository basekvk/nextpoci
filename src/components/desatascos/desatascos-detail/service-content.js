import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import classes from './index.module.scss';

function ServiceContent({ service, ourServices }) {
    const imagePath = `/images/desatascos/${service?.slug}/${service?.largeImage}`;

    return (
        <>
            <Col lg={{ span: 12 }} className="pe-lg-45">
                <div className="banner">
                    <img
                        className="img-full"
                        src={imagePath}
                        alt={service?.title}
                        priority
                    />
                </div>
                <div className={classes.content}>
                    <h2 className={classes.title}>{service?.title2}</h2>
                    <h2 className={classes.subtitle}>
                        {service?.detailSubTitle}
                    </h2>
                    <h2 className={classes.desc} style={{ fontSize: 30 }}>
                        {service?.pregunta}
                    </h2>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.detailDesc}
                    </p>
                    <h2 className={classes.desc} style={{ fontSize: 30 }}>
                        {service?.pregunta2}
                    </h2>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion1}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion2}
                    </p>
                    <h2 className={classes.desc} style={{ fontSize: 30 }}>
                        {service?.pregunta3}
                    </h2>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion3}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion31}
                    </p>

                    <div
                        className={classes.desc}
                        dangerouslySetInnerHTML={{
                            __html: service?.contenidoDescripcion,
                        }}
                    />

                    <h2 className={classes.desc} style={{ fontSize: 30 }}>
                        {service?.pregunta4}
                    </h2>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion4}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion41}
                    </p>
                    <h2 className={classes.desc} style={{ fontSize: 30 }}>
                        {service?.pregunta5}
                    </h2>

                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion5}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion51}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option1}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option2}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option3}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option4}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option5}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option6}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option7}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option8}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.option9}
                    </p>
                </div>

                <div
                    className={classes.desc}
                    dangerouslySetInnerHTML={{
                        __html: service.contenido,
                    }}
                />
                {/* 
                <div className={classes.desc} style={styles}>
                    <Acordeon
                        title="¿CÓMO DESATASCO UNA TUBERÍA?"
                        content={content2}
                    />
                    <Acordeon
                        title="¿QUÉ PRODUCTOS PUEDO UTILIZAR?"
                        content={content2}
                    />
                </div> */}

                {/*PODEMOS INCLUIR CÓDIGO DESDE MARKDOWN*/}
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: '50px',
                        marginBottom: '50px',
                        borderRadius: 10,
                        backgroundColor: '#003a70',
                        color: '#fff',
                        padding: '20px',
                        fontSize: 20,
                    }}
                >
                    <a
                        style={{ color: '#fff' }}
                        href="tel:647376782"
                        call-button
                    >
                        📞 Urgencias 24 Horas 647 376 782
                    </a>
                </div>
            </Col>
        </>
    );
}

ServiceContent.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceContent;