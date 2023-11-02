import React from 'react';
import styles from './PhoneWidget.module.css';

const PhoneWidget = () => {
  return (
    <div className={styles.widgetContainer}>
      <a href="tel:647376782" className={styles.callButton}>
        📞 Llámanos: 647 376 782
      </a>
    </div>
  );
};

export default PhoneWidget;
