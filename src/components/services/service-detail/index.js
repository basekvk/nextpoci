import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';
import ServiceContent from './service-content';

function ServiceDetail({
    service,
  
}) {
    return (
        <div className={classes.area}>
            <Container>
                <Row className="g-30">
                    <ServiceContent
                        service={service}
                       
                    />
                  
                </Row>
            </Container>
        </div>
    );
}

ServiceDetail.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
  
};

export default ServiceDetail;
