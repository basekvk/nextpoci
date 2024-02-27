import Head from 'next/head';

const RichSnippets = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Desatascos Pociten",
    "url": "https://desatascos-madrid.com",
    "description": "Empresa líder de desatascos y obras de pocería en la comunidad de Madrid. Experiencia a tu servicio.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Lezo 8",
      "postalCode": "28041",
      "addressLocality": "Madrid",
      "addressRegion": "Madrid"
    },
    "image": "/images/about/1-1.webp",
    "telephone": "+34-647-376-782",
    "priceRange": "Económicos",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "40"
    },
    "areaServed": "Madrid y zonas limítrofes",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "service": {
      "@type": "Service",
      "provider": "Desatascos Pociten",
      "serviceType": "Servicios de desatascos y pocería",
      "areaServed": "Comunidad de Madrid y zonas limítrofes de Toledo y Guadalajara",
      "description": "Limpieza de tuberías, fosas sépticas, arquetas, bajantes, entre otros. Además, también ofrecen servicios de pocería, como la limpieza de pozos y la inspección de tuberías con cámaras de TV."
    }
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

export default RichSnippets;
