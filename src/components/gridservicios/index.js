import React from 'react';
import styles from './ServicesGrid.module.css'; // Asumiendo que el archivo de estilos se llama ServicesGrid.module.css

const services = [
    { name: "Cambio de bajantes", url: "https://www.desatascos-madrid.com/services/poceros-madrid" },
    { name: "Construcción de arquetas", url: "https://www.desatascos-madrid.com/services/poceros-madrid" },
    { name: "Sustitución de tuberías", url: "https://www.desatascos-madrid.com/services/poceros-madrid" },
    { name: "Colocación de tapas de registro", url: "https://www.desatascos-madrid.com/services/poceros-madrid" },
    { name: "Arreglos de colectores municipales", url: "https://www.desatascos-madrid.com/services/poceros-madrid" },
    { name: "Construcción de galerías visitantes", url: "https://www.desatascos-madrid.com/services/poceros-madrid" },
    { name: "Zanjas para suministro y colocación de tuberías de 160 a 315 cm", url: "https://www.desatascos-madrid.com/services/poceros-madrid" },
    { name: "Reparación de tuberías sin zanja", url: "https://www.desatascos-madrid.com/services/reparacion-tuberias-sin-obras" },
    { name: "Mantenimiento y Limpieza de tuberías", url: "https://www.desatascos-madrid.com/services/desatasco-de-tuberias" },
    { name: "Desatrancos", url: "https://www.desatascos-madrid.com/" },
    { name: "Desatascos", url: "https://www.desatascos-madrid.com/" },
    { name: "Localización y detección de fugas", url: "https://www.desatascos-madrid.com/services/poceros-madrid" },
    { name: "Construcción y limpieza de pozos", url: "https://www.desatascos-madrid.com/services/poceros-madrid" },
    { name: "Obras de alcantarillado público", url: "https://www.desatascos-madrid.com/services/poceros-madrid" },
    { name: "Rehabilitación y mantenimiento de tuberías, pozos o alcantarillados", url: "https://www.desatascos-madrid.com/services/poceros-madrid" },
    { name: "Arreglos de arquetas", url: "https://www.desatascos-madrid.com/services/poceros-madrid" },
    { name: "Localización de malos olores", url: "https://www.desatascos-madrid.com/services/poceros-madrid" },
    { name: "Construcción de pozos de registro", url: "https://www.desatascos-madrid.com/services/poceros-madrid" }
  ];
  

const ServicesGrid = () => {
    return (
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            {service.url ? (
              <h3><a href={service.url} className={styles.link}>{service.name}</a></h3>
            ) : (
              <h3>{service.name}</h3>
            )}
          </div>
        ))}
      </div>
    );
  };

export default ServicesGrid;
