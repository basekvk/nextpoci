import React, { useState } from 'react';
import classes from './hero.module.scss'; // Importa tus clases CSS como módulos
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

function Hero() {
    const [isHoveredContactar, setIsHoveredContactar] = useState(false);
    const [isHoveredLlamar, setIsHoveredLlamar] = useState(false);

    const buttonStyle = (isHovered, baseColor, hoverColor) => ({
        backgroundColor: isHovered ? hoverColor : baseColor,
        color: 'black',
        border: 'none',
        borderRadius: '25px', // Incrementa para botones más redondeados
        padding: '10px 25px', // Incrementa para botones más grandes
        margin: '10px', // Incrementa para más espacio entre botones
        fontSize: '18px', // Incrementa para texto más grande
        fontWeight: 'normal',
        cursor: 'pointer',
        transition: 'background-color 0.3s', // Suaviza la transición del hover
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    });
    return (
        <>
           
            <div className={classes.slide}>
                <div className={classes.imageContainer}>
                    {' '}
                    {/* Asegúrate de tener esta clase en tu CSS */}
                    <Image
                        src="/images/hero/1.webp" // URL de tu imagen
                        layout="fill" // Hace que la imagen llene el contenedor
                        objectFit="cover" // Mantiene las proporciones de la imagen
                        alt="Fondo" // Texto alternativo para la imagen
                        priority={true} // Prioriza la carga de la imagen
                    />
                </div>{' '}
                {/* Usa la clase 'slideBg' desde tu módulo CSS para el fondo */}
                <div className="container">
                    <div className="content">
                        <span className={classes.subtitle}>
                            DESATASCOS POCITEN
                        </span>
                        <div className={classes.title}>
                            <h1>
                                Desatascos en <span>Madrid</span>
                            </h1>
                        </div>
                        <div className={classes.desc}>
                            <p className="text-white">
                                No cobramos desplazamiento. Desatascos,
                                Desatrancos, Obras de Pocería, Inspecciones con
                                Cámara, Alcantarillado, Arquetas, Fosas
                                Sépticas, Red de Saneamiento, Bajantes. Poceros
                                en Madrid
                            </p>
                        </div>
                        <div className={classes.btnWrap}>
                            {' '}
                            {/* Asegúrate de que la clase 'btnWrap' esté definida en tu SCSS */}
                            <Link href="/contacto">
                                <a
                                    style={buttonStyle(
                                        isHoveredContactar,
                                        '#03BAB3',
                                        '#009292'
                                    )}
                                    onMouseEnter={() =>
                                        setIsHoveredContactar(true)
                                    }
                                    onMouseLeave={() =>
                                        setIsHoveredContactar(false)
                                    }
                                >
                                    {' '}
                                    {/* Utiliza las clases 'btn' y 'btnSecondary' para el botón "Contactar" */}
                                    Contacta
                                </a>
                            </Link>
                            <Link href="tel:647376782">
                                <a
                                    style={buttonStyle(
                                        isHoveredLlamar,
                                        '#03BAB3',
                                        '#009292'
                                    )}
                                    onMouseEnter={() =>
                                        setIsHoveredLlamar(true)
                                    }
                                    onMouseLeave={() =>
                                        setIsHoveredLlamar(false)
                                    }
                                >
                                    {' '}
                                    {/* Utiliza las clases 'btn' y 'btnPrimary' para el botón "Llámanos" */}
                                    Llámanos
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
