import styles from './CallToAction.module.css';

const CallToAction = ({lugar}) => {
  return (
    <div className={styles.ctaContainer}>
      <h2>{`¿Necesitas un pocero en ${lugar}?`}</h2>
      <p>Contáctanos ahora y obtén el mejor precio para tus obras de pocería. Alcantarillados, arquetas, bajantes, red de saneamiento, inundaciones, construcción de pozos sépticos, vaciado de fosas sépticas... Llámanos sin Compromiso</p>
      <button className={styles.ctaButton} type="button">
        <a href="tel:6473767782">☎ 647 376 782</a>
      </button >
    </div>
  );
};

export default CallToAction;