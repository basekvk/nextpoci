import { useState } from 'react';
import styles from './VideoPortada.module.css';

export default function VideoPortada() {
    const [loadVideo, setLoadVideo] = useState(false);

    const handlePlayClick = () => {
        setLoadVideo(true);
    };

    return (
        <section>
            <div className={styles.videoContainer}>
                {!loadVideo ? (
                    <div className={styles.placeholder} onClick={handlePlayClick}>
                        {/* Miniatura del vídeo o una imagen de pre-carga */}
                        <img src="/images/miniatura-video-desatascos.webp" alt="Miniatura del vídeo" />
                        {/* Botón de play */}
                    </div>
                ) : (
                    <iframe
                        className={styles.videoIframe}
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/GUX0FV5qb3A?autoplay=1"
                        title="Desatascos en Madrid - Pociten"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                )}
            </div>
        </section>
    );
}
