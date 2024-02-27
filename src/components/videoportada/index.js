import styles from './VideoPortada.module.css';



export default function VideoPortada() {
    return (
        <section>
            <div className={styles.videoContainer}>
            <div >
            <iframe className={styles.videoIframe} width="560" height="315" src="https://www.youtube.com/embed/GUX0FV5qb3A?si=g17whs7j551qtqI6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            
        </section>
    );
}