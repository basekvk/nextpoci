import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    id: 1,
    title: 'Desatascos Urgentes 24 horas',
    image: '/images/cluster/desatascos24horas-lg.webp',
    alt: 'Servicios Desatascos',
    url: '/services/desatascos-24-horas',
  },
  {
    id: 2,
    title: 'Limpieza de Tuberías',
    image: '/images/cluster/limpiezadetuberias-lg.webp',
    alt: 'Servicios Limpieza de Tuberías',
    url: '/services/desatasco-de-tuberias',
  },
  {
    id: 4,
    title: 'Desatascos Baratos',
    image: '/images/cluster/desatascosbaratos-lg.webp',
    alt: 'Servicios Desatascos Baratos',
    url: '/',
  },
  {
    id: 5,
    title: 'Obras de Pocería',
    image: '/images/cluster/obrasdepoceria-lg.webp',
    alt: 'Servicios Obras de Pocería',
    url: '/services/obras-de-poceria',
  },
  {
    id: 6,
    title: 'Inspección Tuberías con Cámara',
    image: '/images/cluster/inspeccion-tuberia-con-camara-lg.webp',
    alt: 'Servicios Inspección CCTV',
    url: '/services/inspeccion-tuberia-con-camara',
  },
  {
    id: 8,
    title: 'Vaciado Fosas Sépticas',
    image: '/images/cluster/fosassepticas-lg.webp',
    alt: 'Servicios Fosas Sépticas',
    url: '/services/limpieza-fosas-septicas',
  },
  {
    id: 9,
    title: 'Poceros',
    image: '/images/cluster/poceros-madrid-lg.webp',
    alt: 'Servicios Poceros Madrid',
    url: '/services/poceros-madrid',
  },
  {
    id: 10,
    title: 'Achiques de Agua',
    image: '/images/cluster/inundaciones-md.webp',
    alt: 'Servicios Inundaciones en Madrid',
    url: '/services/achiques-de-agua',
  },
  {
    id: 12,
    title: 'Reparación Tuberías Sin Obra',
    image: '/images/cluster/reparacion-tuberias-sin-obras-md.webp',
    alt: 'Servicios Reparación Tuberías Sin Obra',
    url: '/services/reparacion-tuberias-sin-obras',
  },
];

const ProductCluster = ({ localidad }) => {
  return (
    <div className="py-10 px-4 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-8">Servicios de Pociten en {localidad}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg overflow-hidden relative group transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <Link href={service.url}>
              <a className="block relative w-full h-full">
                <div className="relative w-full h-48">
                  <Image
                    layout="fill"
                    src={service.image}
                    alt={service.alt}
                    className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-70"
                  />
                </div>
                <h2 className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-70 text-white text-center py-2 px-4">
                  {service.title}
                </h2>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCluster;
