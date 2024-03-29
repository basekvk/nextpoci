import PropTypes from 'prop-types';
import Link from 'next/link';
import { IoAddSharp } from 'react-icons/io5';
import classes from './service.module.scss';

function ServiceItem({ service }) {
    const imagePath = `/images/desatascos/${service?.slug}/${service?.mediumImage}`;
    const linkPath = `/desatascos/${service?.slug}`;

    return (
        <div className="service-item">
            <Link href={linkPath}>
                <a className={classes.img}>
                    <img
                        className="img-full"
                        src={imagePath}
                        alt={service?.title}
                    />
                </a>
            </Link>
            <div className={classes.add__action}>
                <h2 className="title mb-0">
                    <Link href={linkPath}>{service?.title}</Link>
                </h2>
                <div className={classes.icon}>
                    <Link href="mailto://info@pocitendesatascos.es" passHref>
                        <a>
                            <IoAddSharp />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

ServiceItem.propTypes = {
    service: PropTypes.instanceOf(Object).isRequired,
};

export default ServiceItem;
