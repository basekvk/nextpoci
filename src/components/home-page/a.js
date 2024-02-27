import classes from './hero.module.scss'; // Importa tus clases CSS como módulos
import Link from 'next/link';
import PropTypes from 'prop-types';

function Hero({ heroItem }) {
    console.log(heroItem)
    return (
        <div className={classes.slide}> {/* Usa la clase 'slideBg' desde tu módulo CSS para el fondo */}
            <div className="container">
                <div className="content">
                    <span className={classes.subtitle}>
                        DESATASCOS POCITEN
                    </span>
                    <div className={classes.title}>
                        <h1>Desatascos en <span>Madrid</span></h1>
                    </div>
                    <div className={classes.desc}>
                        <p className="text-white">
                            No cobramos desplazamiento. Desatascos, Desatrancos, Obras de Pocería, Inspecciones con Cámara, Alcantarillado, Arquetas, Fosas Sépticas, Red de Saneamiento, Bajantes. Poceros en Madrid con los mejores precios.
                        </p>
                    </div>
                    <div className={classes.btnWrap}>
                        <Link href="/contacto">
                            <a className={`${classes.btn} ${classes.btnSecondary} ${classes.btnHoverWhite}`}>
                                {heroItem?.btnSecondaryText}
                            </a>
                        </Link>
                        <Link href="tel:647376782">
                            <a className={`${classes.btn} ${classes.btnPrimary} ${classes.btnHoverWhite}`}>
                                {heroItem?.btnPrimaryText}
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

Hero.propTypes = {
    heroItem: PropTypes.instanceOf(Object).isRequired,
};

export default Hero;
