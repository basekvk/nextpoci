import React from 'react';
import styles from './ServicesGrid.module.css'; // Asumiendo que el archivo de estilos se llama ServicesGrid.module.css

const services = [
    { name: "Cambio de bajantes", url: "" },
    { name: "Construcción de arquetas", url: "" },
    { name: "Sustitución de tuberías", url: "" },
    { name: "Colocación de tapas de registro", url: "" },
    { name: "Arreglos de colectores municipales", url: "" },
    { name: "Construcción de galerías visitantes", url: "" },
    { name: "Zanjas para suministro y colocación de tuberías de 160 a 315 cm", url: "" },
    { name: "Reparación de tuberías sin zanja", url: "" },
    { name: "Mantenimiento y Limpieza de tuberías", url: "" },
    { name: "Desatrancos", url: "" },
    { name: "Desatascos", url: "" },
    { name: "Localización y detección de fugas", url: "" },
    { name: "Construcción y limpieza de pozos", url: "" },
    { name: "Obras de alcantarillado público", url: "" },
    { name: "Rehabilitación y mantenimiento de tuberías, pozos o alcantarillados", url: "" },
    { name: "Arreglos de arquetas", url: "" },
    { name: "Localización de malos olores", url: "" },
    { name: "Construcción de pozos de registro", url: "" }
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
