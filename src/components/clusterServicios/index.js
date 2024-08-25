import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const servicios = [
  {
    titulo: "DESATASCOS 24 HORAS",
    imagen: '/images/cluster/desatascos24horas-lg.webp',
     texto: "Servicio de desatascos disponible las 24 horas del día, todos los días del año. Atendemos emergencias en cualquier momento, garantizando una respuesta rápida y eficaz para resolver problemas de atascos en tu hogar o negocio.",
     url: '/services/desatascos-24-horas',
  },
  {
    titulo: "DESATASCO DE TUBERÍAS",
    imagen: '/images/cluster/limpiezadetuberias-lg.webp',
    texto: "Especializados en la limpieza y desatasco de todo tipo de tuberías. Utilizamos tecnología avanzada para identificar y eliminar obstrucciones, restaurando el flujo normal en tus sistemas de drenaje de manera eficiente y sin dañar las instalaciones.",
    url: '/services/desatasco-de-tuberias',
  },
  {
    titulo: "DESATASCOS BARATOS",
    imagen: '/images/cluster/desatascosbaratos-lg.webp',
    texto: "Ofrecemos soluciones económicas para desatascos sin comprometer la calidad del servicio. Nuestros precios competitivos se adaptan a todos los presupuestos, asegurando un servicio profesional a un costo accesible.",
    url: '/services/desatascos-baratos',
  },
  {
    titulo: "OBRAS DE POCERÍA",
    imagen: '/images/cluster/obrasdepoceria-lg.webp',
    texto: "Expertos en trabajos de pocería, incluyendo instalación, reparación y mantenimiento de sistemas de alcantarillado. Realizamos obras con mínimo impacto, asegurando la eficiencia y durabilidad de tus instalaciones subterráneas.",
    url: '/services/obras-de-poceria',

  },
  {
    titulo: "DESATRANCOS",
    imagen: "/images/cluster/desatrancos-lg.webp",
    texto: "Servicios profesionales de desatrancos para eliminar bloqueos en tuberías y sistemas de drenaje. Utilizamos equipos especializados para resolver rápidamente problemas de obstrucción, desde pequeños atascos domésticos hasta grandes bloqueos en sistemas comerciales.",
    url: '/services/desatrancos',
  },
  {
    titulo: "REPARACIÓN DE TUBERÍAS SIN OBRAS",
    imagen: '/images/cluster/reparacion-tuberias-sin-obras-md.webp',
    texto: "Reparamos tuberías utilizando técnicas no invasivas, evitando obras extensas y molestias. Nuestros métodos avanzados permiten reparar tuberías dañadas sin necesidad de excavar, ahorrando tiempo y dinero mientras minimizamos las interrupciones en tu rutina diaria.",
    url: '/services/reparacion-tuberias-sin-obras',
  },
  {
    titulo: "FOSAS SÉPTICAS",
    imagen: '/images/cluster/fosassepticas-lg.webp',
    texto: "Ofrecemos servicios completos para fosas sépticas, incluyendo instalación, mantenimiento, limpieza y reparación. Garantizamos un funcionamiento óptimo de tu sistema de gestión de aguas residuales, cumpliendo con todas las normativas sanitarias y ambientales.",
    url: '/services/limpieza-fosas-septicas',
  },
  {
    titulo: "POCEROS",
    imagen: '/images/cluster/poceros-madrid-lg.webp',
    texto: "Nuestro equipo de poceros profesionales está altamente capacitado para realizar todo tipo de trabajos subterráneos. Desde la construcción de pozos hasta la reparación de redes de alcantarillado, ofrecemos soluciones integrales para tus necesidades de infraestructura subterránea.",
    url: '/services/poceros-madrid',
  },
  {
    titulo: "ACHIQUES DE AGUA",
    imagen: '/images/cluster/inundaciones-md.webp',
    texto: "Servicios especializados en achiques de agua para eliminar inundaciones en sótanos, obras y otras áreas afectadas. Contamos con equipos de bombeo de alta capacidad para extraer grandes volúmenes de agua rápidamente, previniendo daños y permitiendo una rápida recuperación de espacios inundados.",
    url: '/services/achiques-de-agua',
  },
  {
    titulo: "CAMIÓN CUBA",
    imagen: "/images/cluster/camion-cuba-md.webp",
    texto: "Disponemos de camiones cuba equipados con la última tecnología para servicios de limpieza y desatasco. Ideales para trabajos de gran envergadura, nuestros camiones cuba ofrecen soluciones eficientes para la limpieza de alcantarillado, fosas sépticas y otros sistemas de drenaje de gran tamaño.",
    url: '/services/camion-cuba',
  },
  {
    titulo: "INSPECCIÓNES CON CÁMARA TV",
    imagen: '/images/cluster/inspeccion-tuberia-con-camara-lg.webp',
    texto: "Realizamos inspecciones detalladas de tuberías y sistemas de drenaje utilizando cámaras de TV de alta resolución. Este método no invasivo nos permite identificar con precisión problemas como grietas, obstrucciones o infiltraciones, facilitando diagnósticos exactos y soluciones más efectivas.",
    url: '/services/inspeccion-tuberia-con-camara',
  }
];

const ServicioCard = ({ titulo, imagen, alt, texto, url }) => {
  const handleCallClick = (e) => {
    e.stopPropagation(); // Previene que el clic se propague a la tarjeta
  };

  return (
    <Link href={url}>
      <a className="block bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full transition duration-300 ease-in-out hover:shadow-xl">
        <div className="h-48 relative">
          <Image
            src={imagen}
            alt={alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-[#003A70] mb-2">{titulo}</h3>
          <p className="text-gray-600 text-base mb-4 flex-grow">{texto}</p>
          <div className="mt-auto">
            <a 
              href="tel:+34647376782"
              onClick={handleCallClick}
              className="block w-full bg-teal-500 hover:bg-teal-600 text-white hover:text-yellow-300 font-semibold py-2 px-4 rounded text-center transition duration-300 ease-in-out"
            >
              Solicitar Servicio
            </a>
          </div>
        </div>
      </a>
    </Link>
  );
};

const ServiciosComponent = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[#003A70] mb-8">Nuestros Servicios</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((servicio, index) => (
          <ServicioCard key={index} {...servicio} />
        ))}
      </div>
    </div>
  );
};

export default ServiciosComponent;