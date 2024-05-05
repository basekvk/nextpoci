import PropTypes from 'prop-types';
import Link from 'next/link';
import classes from './hero.module.scss';

function Hero({ heroItems }) {
    if (!heroItems || heroItems.length === 0) {
        // Renderiza nada o algún placeholder si no hay ítems
        return null;
    }

    return (
        <div className={`${classes['slide-bg']} ${classes['slide-bg-01']}`}>
            {heroItems.map((heroItem, index) => (
                <div key={index} className="container">
                    <div className="content">
                        <span className={classes.subtitle}>
                            {heroItem?.subtitle}
                        </span>
                        <div className={classes.title} dangerouslySetInnerHTML={{ __html: heroItem?.title }} />
                        <div className={classes.desc} dangerouslySetInnerHTML={{ __html: heroItem?.desc }} />
                        <div className={classes.btn_wrap}>
                        <Link href="/contacto">
                                <a className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__white}`}>
                                    {heroItem?.btnSecondaryText}
                                </a>
                            </Link>
                            
                            <Link href="tel:+34647376782">
                                <a className={`${classes.btn} ${classes.btn_primary} ${classes.btn_hover__white}`}>
                                    {heroItem?.btnPrimaryText}
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

Hero.propTypes = {
    heroItems: PropTypes.arrayOf(PropTypes.shape({
        subtitle: PropTypes.string,
        title: PropTypes.string,
        desc: PropTypes.string,
        btnSecondaryText: PropTypes.string,
        btnPrimaryText: PropTypes.string,
    })).isRequired,
};

export default Hero;
