// Botón de Llamada - CallButton.js
import React from 'react';
import styles from './CallButton.module.css';

const CallButton = () => (
  <div className={styles.callButtonContainer}>
    <a
      href="tel:647376782" // Número de teléfono
      className={styles.callButton}
    >
      Llama Ahora
    </a>
  </div>
);

export default CallButton;

