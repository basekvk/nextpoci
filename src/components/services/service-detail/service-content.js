import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import classes from './index.module.scss';
import OurServices from './our-services';
import Accordion from '../../acordeon';
import CallToAction from '../../cta';


function ServiceContent({ service, ourServices }) {
    const imagePath = `/images/services/${service?.slug}/${service?.largeImage}`



    return (
        <Col lg={{ span: 12 }} className="pe-lg-45">
            <div className="banner">
                <img
                    className="img-full"
                    src={imagePath}
                    alt={service?.title}
                />
            </div>
            <div className={classes.content}>
                <h2 className={classes.title}>{service?.title}</h2>
                <h3 className={classes.subtitle}>{service?.detailSubTitle}</h3>
                <div
                    className={classes.desc}
                    dangerouslySetInnerHTML={{
                        __html: service.contenido,
                    }}
                />
            </div>
                
                <CallToAction /> 
                <Accordion accordionData={service?.accordionData} />

                <OurServices ourServices={ourServices} />
                
            </Col>
        
    );
}

ServiceContent.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceContent;
