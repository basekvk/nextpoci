import styles from './CallToAction.module.css';

const CallToAction = ({text}) => {
  return (
    <div className={styles.ctaContainer}>
      <h2> {
    (text === "inicio")
      ? "Necesitas un Servicio de desatasco"
      : (text === "Inundaciones")
        ? "Resuelve tu problema de inundación ahora mismo"
        :(text === "Empresa de Desatascos")
        ? "Somos tu Empresa de Desatascos"
        :`¿Necesitas un servicio de ${text}?`
  }</h2>
      <p>Contáctanos ahora y obtén el mejor precio. Sin Compromiso</p>
      <button className={styles.ctaButton} type="button">
        <a href="tel:6473767782">☎ 647 376 782</a>
      </button >
    </div>
  );
};

export default CallToAction;