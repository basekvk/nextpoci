import Link from 'next/link';
import styles from './ProductCluster.module.css';

const services = [
    {
        id: 1,
        title: 'Desatascos 24 Horas',
        image: '/images/cluster/desatascos24horas-lg.webp',
        alt: 'Desatascos',
        url: '/services/desatascos-24horas',
    },
    {
        id: 2,
        title: 'Limpieza de Tuberías',
        image: '/images/cluster/limpiezadetuberias-lg.webp',
        alt: 'Limpieza de Tuberías',
        url: '/services/limpieza-de-tuberias',
    },
    {
        id: 3,
        title: 'Desatrancos',
        image: '/images/cluster/desatrancos-lg.webp',
        alt: 'Desatrancos',
        url: '/services/desatrancos',
    },
    {
        id: 4,
        title: 'Desatascos Baratos',
        image: '/images/cluster/desatascosbaratos-lg.webp',
        alt: 'Desatascos Baratos',
        url: '/services/desatascos-baratos',
    },
    {
        id: 5,
        title: 'Obras de Pocería',
        image: '/images/cluster/obrasdepoceria-lg.webp',
        alt: 'Obras de Pocería',
        url: '/services/obras-de-poceria',
    },
    {
        id: 6,
        title: 'Inspección CCTV',
        image: '/images/cluster/inspeccion-tuberia-con-camara-lg.webp',
        alt: 'Inspección CCTV',
        url: '/services/inspeccion-tuberia-con-camara',
    },
    {
      id: 7,
      title: 'Empresa de Desatascos',
      image: '/images/cluster/empresadedesatascos-ld.webp',
      alt: 'Empresa de Desatascos',
      url: '/services/empresa-de-desatascos',
  },
  {
    id: 8,
    title: 'Fosas Sépticas',
    image: '/images/cluster/fosassepticas-lg.webp',
    alt: 'Fosas Sépticas',
    url: '/services/limpieza-fosas-septicas',
},
{
  id: 9,
  title: 'Poceros Madrid',
  image: '/images/cluster/poceros-madrid-lg.webp',
  alt: 'Poceros Madrid',
  url: '/services/poceros-madrid',
},
];

const ProductCluster = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Servicios Pociten</h2>
            <div className={styles.cluster}>
                { services.map((service, index) => (
                        <div key={index} className={styles.box}>
                          <Link href={service.url}>
                            <a>
                              <img
                                src={service.image}
                                alt={service.alt}
                                className={styles.productImage}
                              />
                              <h2>{service.title}</h2>
                            </a>
                            
                          </Link>
                            
                            
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProductCluster;
