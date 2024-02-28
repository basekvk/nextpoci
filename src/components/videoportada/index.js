import { useState, useEffect } from 'react';
import styles from './VideoPortada.module.css';

export default function VideoPortada() {
    const [loadVideo, setLoadVideo] = useState(false);

    useEffect(() => {
        // Opción 1: Cargar el vídeo después de un tiempo determinado
        // const timer = setTimeout(() => setLoadVideo(true), 3000);
        // return () => clearTimeout(timer);

        // Opción 2: Cargar el vídeo cuando el componente está visible
        // Utilizar IntersectionObserver para detectar cuando el componente está en el viewport
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setLoadVideo(true);
                    // Desconectar el observer después de cargar el vídeo
                    observer.disconnect();
                }
            },
            { threshold: 0.5 } // Ajusta según necesidad
        );

        // Observar el elemento actual
        const section = document.querySelector('section');
        if (section) observer.observe(section);

        // Limpiar el observer al desmontar el componente
        return () => observer.disconnect();
    }, []);

    return (
        <section>
            <div className={styles.videoContainer}>
                {loadVideo ? (
                    <iframe
                        className={styles.videoIframe}
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/GUX0FV5qb3A?si=g17whs7j551qtqI6"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <div className={styles.placeholder}>
                        {/* Puedes colocar aquí una imagen de pre-carga o un botón de play */}
                    </div>
                )}
            </div>
        </section>
    );
}