import './Youtube.module.css';

export const generateVideoJSONLD = (video) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: video.titleVideo,
        description: video.description,
        thumbnailUrl: video.thumbnailUrl,
        uploadDate: video.uploadDate,
        duration: video.duration,
        contentUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
        embedUrl: `https://www.youtube.com/embed/${video.videoId}`,
        publisher: {
            '@type': 'Organization',
            name: video.publisherName,
            logo: {
                '@type': 'ImageObject',
                url: video.publisherLogoUrl,
            },
        },
    };
};
const YouTubeVideo = ({ videoId, titleVideo }) => {
    const video = {
        videoId: videoId,
        titleVideo: titleVideo,
        // Agrega los otros atributos necesarios aquí
    };
    return (
      <>
    
        <div className="container video-responsive" style={{display:'flex', margin: '0 auto', alignItems:'center',justifyContent:'center'}}>
            
            <iframe
                width="80%"
                height="600"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={titleVideo}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    
      </>
    );
      
};

export default YouTubeVideo;
