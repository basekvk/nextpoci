import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import classes from './hero.module.scss';

function Hero({ heroItems }) {
    const heroItem = heroItems[0];

    return (
        <div className={classes.heroBackground}>
            <Image
                src="/images/hero/1.webp"
                alt="Poceria Pociten desatascos en Madrid Camion Cuba"
                layout="fill"
                objectFit="cover"
                quality={75}
                priority
            />
            <div className={classes.heroContainer}>
                <div className={classes.container}>
                    <div className={classes.content}>
                        <span
                            className={`subtitle-animation ${classes.subtitle}`}
                        >
                            {heroItem?.subtitle}
                        </span>
                        <div
                            className={`title-animation ${classes.title}`}
                            dangerouslySetInnerHTML={{ __html: heroItem.title }}
                        />
                        <div
                            className={`desc-animation ${classes.desc}`}
                            dangerouslySetInnerHTML={{ __html: heroItem.desc }}
                        />
                        <div className={`btn-animation ${classes.btn_wrap}`}>
                            <Link href="/contacto">
                                <a
                                    className={`me-20 ${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__white}`}
                                >
                                    {heroItem?.btnSecondaryText}
                                </a>
                            </Link>
                            <Link href="tel:+34647376782">
                                <a
                                    className={`${classes.btn} ${classes.btn_primary} ${classes.btn_hover__white}`}
                                >
                                    {heroItem?.btnPrimaryText}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Hero.propTypes = {
    heroItems: PropTypes.arrayOf(
        PropTypes.shape({
            subtitle: PropTypes.string,
            title: PropTypes.string,
            desc: PropTypes.string,
            btnSecondaryText: PropTypes.string,
            btnPrimaryText: PropTypes.string,
        })
    ).isRequired,
};

export default Hero;
