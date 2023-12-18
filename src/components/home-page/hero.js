import PropTypes from 'prop-types';
import Link from 'next/link';
import classes from './hero.module.scss';

function Hero({ heroItems }) {
    const heroItem = heroItems[0];
    return (
        <div
            className={`hero-background ${heroItem.heroBG
                .split(' ')
                .map((item) => classes[item])
                .join(' ')}`}
            style={{ backgroundImage: `url(/images/hero/1.webp)` }}
        >
            <div className="container">
                <div className="content">
                    <span className={`subtitle-animation ${classes.subtitle}`}>
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
                        <Link href="tel://+34647376782">
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
    );
}

Hero.propTypes = {
    heroItems: PropTypes.instanceOf(Object).isRequired,
};

export default Hero;
