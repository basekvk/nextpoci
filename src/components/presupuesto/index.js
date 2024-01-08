import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <div className={styles.ctaContainer}>
      
      <button className={styles.ctaButton} type="button">
        <a href="/contacto">📨 PIDE PRESUPUESTO GRATUITO</a>
      </button >
    </div>
  );
};

export default CallToAction;