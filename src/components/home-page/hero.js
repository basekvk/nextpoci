import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import classes from './hero.module.scss';

function Hero({ heroItems }) {
    const heroItem = heroItems[0];

    // Asegúrate de que tu archivo SCSS tenga reglas para posicionar el texto sobre la imagen
    // Por ejemplo, .hero-container { position: relative; z-index: 1; }

    return (
        <div className={classes.heroBackground}>
            {/* La imagen de fondo */}
            <Image
                src="/images/hero/1.webp"
                alt="Poceria Pociten desatascos en Madrid Camion Cuba"
                layout="fill"
                objectFit="cover"
                quality={75}
                priority
            />
            {/* El contenedor y el contenido */}
            <div className={classes.heroContainer}>
                <div className={classes.container}>
                    {' '}
                    {/* Asegúrate de que esta clase esté definida para contener y centrar tu contenido */}
                    <div className={classes.content}>
                        {' '}
                        {/* Esta clase debería posicionar tu contenido sobre la imagen */}
                        <span
                            className={`subtitle-animation ${classes.subtitle}`}
                        >
                            {heroItem?.subtitle}
                        </span>
                        <div
                            className={`title-animation ${classes.title}`}
                            dangerouslySetInnerHTML={{
                                __html: heroItem.title,
                            }}
                        />
                        <div
                            className={`desc-animation ${classes.desc}`}
                            dangerouslySetInnerHTML={{
                                __html: heroItem.desc,
                            }}
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
    heroItems: PropTypes.instanceOf(Object).isRequired,
};

export default Hero;
