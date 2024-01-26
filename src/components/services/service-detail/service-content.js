import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import classes from './index.module.scss';
import CallToAction from '../../cta';
import Presupuesto from '../../presupuesto';
import CallButton from '../../CallButton';
import Image from 'next/image';

function ServiceContent({ service }) {
    const imagePath = `/images/services/${service?.slug}/${service?.largeImage}`;

    return (
        <Col lg={{ span: 12 }} className="pe-lg-45">
            <Image
                width={845}
                height={475}
                className=""
                src={imagePath}
                alt={service?.title}
                priority
            />
            <div className={classes.content}>
                <h2 className={classes.title}>{service?.title2}</h2>
                <h2 className={classes.subtitle}>{service?.detailSubTitle}</h2>
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

                <div
                    className={classes.desc}
                    dangerouslySetInnerHTML={{
                        __html: service?.contenidoDescripcion,
                    }}
                />

                <CallToAction text={service?.title} />

                <div
                    className={classes.desc}
                    dangerouslySetInnerHTML={{
                        __html: service?.contenidoDescripcion1,
                    }}
                />

                <Presupuesto />
                <div
                    className={classes.desc}
                    dangerouslySetInnerHTML={{
                        __html: service?.contenidoDescripcion2,
                    }}
                />
                <CallButton text={service?.title} />
                <div
                    className={classes.desc}
                    dangerouslySetInnerHTML={{
                        __html: service?.contenidoDescripcion3,
                    }}
                />

                <h2 className={classes.desc} style={{ fontSize: 30 }}>
                    {service?.pregunta4}
                </h2>

                <h2 className={classes.desc} style={{ fontSize: 30 }}>
                    {service?.pregunta5}
                </h2>
            </div>

            <div
                className={classes.desc}
                dangerouslySetInnerHTML={{
                    __html: service.contenido,
                }}
            />
        </Col>
    );
}

ServiceContent.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceContent;
