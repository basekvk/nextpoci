// components/LocalidadBuscador.js
import { useState } from 'react';
import Router from 'next/router';
import styles from './Buscador.module.scss';

const LocalidadBuscador = () => {
  const [localidad, setLocalidad] = useState('');
  const [errorMensaje, setErrorMensaje] = useState('');

  const mapeoNombresCortos = {
    'arganda': 'Arganda del Rey',
    'villalba': 'Collado Villalba',
    'colmenar': 'Colmenar Viejo',
    'el escorial': 'San Lorenzo de El Escorial',
    'sanse': 'San Sebastian de los Reyes',
    // Agrega más mapeos según sea necesario
  };

  const obtenerNombreCompleto = (nombreCorto) => {
    return mapeoNombresCortos[nombreCorto.toLowerCase()];
  };

  const formatearLocalidad = (nombre) => {
    const nombreCompleto = obtenerNombreCompleto(nombre) || nombre;
    return nombreCompleto.trim().toLowerCase().replace(/\s+/g, '-');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const localidadFormateada = formatearLocalidad(localidad);

    if (obtenerNombreCompleto(localidad) || localidad.toLowerCase() === localidadFormateada) {
      Router.push(`https://desatascos-madrid.com/desatascos/${localidadFormateada}`);
    } else {
      setErrorMensaje('Localidad no encontrada. Por favor, intenta escribir el nombre completo.');
    }
  };

  return (
    <div className={styles.buscadorContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Introduce la localidad"
          value={localidad}
          onChange={(e) => {
            setLocalidad(e.target.value);
            setErrorMensaje('');
          }}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Buscar</button>
      </form>
      {errorMensaje && <p className={styles.errorMensaje}>{errorMensaje}</p>}
    </div>
  );
};

export default LocalidadBuscador;
