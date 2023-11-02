import React, { useState, useEffect } from 'react';
import styles from './CookiePopup.module.css';

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Comprobar si el usuario ya ha aceptado las cookies anteriormente
    const hasAcceptedCookies = localStorage.getItem('hasAcceptedCookies');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Guardar la preferencia del usuario en localStorage
    localStorage.setItem('hasAcceptedCookies', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className={styles.popupContainer}>
      <p className={styles.p} >Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestra web. Si sigues utilizando este sitio asumiremos que estás de acuerdo.</p>
      <button  className={styles.button} type="button" onClick={handleClose}>Aceptar</button>
    </div>
  );
}

export default CookiePopup;
