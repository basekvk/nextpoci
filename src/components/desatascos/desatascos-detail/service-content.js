import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import classes from './index.module.scss';
import CallToAction from '../../cta';
import CallToAction1 from '../../cta1';
import Presupuesto from '../../presupuesto';
import GridServices from '../../gridservicios';
import Problemas from '../../problemas';
import Image from 'next/image';
import ProductCluster from '../../cluster';

function ServiceContent({ service }) {
    const imagePath = `/images/desatascos/${service?.slug}/${service?.largeImage}`;

    return (
        <>
            <Col lg={{ span: 12 }} className="pe-lg-45">
            
                <div className={classes.content}>
                <Image
                width={845}
                height={475}
                className=""
                src={imagePath}
                alt={service?.title}
                priority={true}
            />
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
                    
                    <div
                        className={classes.desc}
                        dangerouslySetInnerHTML={{
                            __html: service?.contenidoDescripcion,
                        }}
                    />
                  <ProductCluster localidad={service?.lugar} />
                    <CallToAction text={service?.title} />
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
                            __html: service?.contenidoDescripcion1,
                        }}
                    />
                    <GridServices />
                    <div
                        className={classes.desc}
                        dangerouslySetInnerHTML={{
                            __html: service?.contenidoDescripcion2,
                        }}
                    />
                    <Presupuesto />

                    <div
                        className={classes.desc}
                        dangerouslySetInnerHTML={{
                            __html: service?.contenidoDescripcion3,
                        }}
                    />

                    <h2 className={classes.desc} style={{ fontSize: 30 }}>
                        {service?.pregunta4}
                    </h2>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion4}
                    </p>
                    <CallToAction1 />
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion41}
                    </p>
                    <h2 className={classes.desc} style={{ fontSize: 30 }}>
                        {service?.pregunta5}
                    </h2>
                    <Problemas />
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion5}
                    </p>
                    <p className={classes.desc} style={{ fontSize: 20 }}>
                        {service?.descripcion51}
                    </p>
                </div>

                <div
                    className={classes.desc}
                    dangerouslySetInnerHTML={{
                        __html: service.contenido,
                    }}
                />

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
                        <h4>📞 {service?.title} - 24 Horas 647 376 782</h4>
                        <p style={{ color: 'white' }}>
                            Haz click aquí para contactarnos. Acudiremos de
                            inmediato para atender tu emergencia.
                        </p>
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
