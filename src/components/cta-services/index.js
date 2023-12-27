import styles from './CallToAction.module.css';

const CallToAction = ({text}) => {
  return (
    <div className={styles.ctaContainer}>
      <h2>¿Necesitas un servicio para {text}?</h2>
      <p>Contáctanos ahora y obtén el mejor precio. Sin Compromiso</p>
      <button className={styles.ctaButton} type="button">
        <a href="tel:6473767782">☎ 647 376 782</a>
      </button >
    </div>
  );
};

export default CallToAction;