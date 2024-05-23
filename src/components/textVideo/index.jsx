import { useState } from 'react';

export default function Component() {
  const [loadVideo, setLoadVideo] = useState(false);

  const handlePlayClick = () => {
    setLoadVideo(true);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between bg-[#f8fafc] p-8 my-20">
      <div className="space-y-4 max-w-lg">
        <div className="text-xs font-semibold tracking-wide uppercase text-[#003A70]">Empresa de Desatascos</div>
        <h2 className="text-4xl font-extrabold tracking-tight text-[#003A70]">
          Trabajo de Desatasco en Madrid.
        </h2>
        <p className="text-base text-[#4b5563]">
         Siempre con la mayor rapidez para evitar gastos innecesarios al cliente, aplicando en todos nuestros trabajos la mayor tecnología y los mejores profesionales.
        </p>
      </div>
      <div className="mt-8 lg:mt-0 lg:ml-8 relative">
        {!loadVideo ? (
          <div className="relative cursor-pointer" onClick={handlePlayClick}>
            <img
              alt="Static sites security"
              className="rounded-lg shadow-lg"
              height="400"
              src="/images/miniatura-video-desatascos.webp"
              style={{
                aspectRatio: "600/400",
                objectFit: "cover",
              }}
              width="600"
            />
            <button
              aria-label="Play video"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#facc15] p-4 rounded-full shadow-lg"
            >
              <PlayIcon className="h-8 w-8 text-[#1f2937]" />
            </button>
          </div>
        ) : (
          <iframe
            className="rounded-lg shadow-lg"
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
    </div>
  );
}


function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
