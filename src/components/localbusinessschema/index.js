import Head from 'next/head';
import React from 'react';

const LocalBusinessSchema = () => {
    const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Desatascos y Pocería Pociten',
        image: 'https://www.desatascos-madrid.com/images/about/1-1.webp',
        url: 'https://www.desatascos-madrid.com',
        logo: 'https://www.desatascos-madrid.com/images/logo/dark.png',
        description:
            'Nuestra labor como empresa de desatascos abarca principalmente el sistema de saneamiento y depuración de aguas residuales, uno de los principales trabajos de un pocero, que incluye diversas funciones dentro de la construcción, limpieza y mantenimiento de pozos, tuberías o acometidas de agua. El tratamiento de las aguas residuales es una parte importante para mantener el suministro de agua limpia. La limpieza del alcantarillado de Desatascos Pociten, como empresa de desatrancos, puede ayudar a mantener su zona limpia y libre de bacterias dañinas, al mismo tiempo que mejora la calidad general del agua. Si tiene aguas residuales que necesitan ser limpiadas, o necesita ayuda para mantener su sistema de alcantarillado limpio, contacte con Desatascos Pociten hoy mismo, su empresa de desatascos de confianza. Estamos aquí para ayudarle.',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Calle Lezo 4D',
            addressLocality: 'Madrid',
            addressRegion: 'Madrid',
            postalCode: '28041',
            addressCountry: 'España',
        },

        telephone: '647 376 782',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Servicios',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Desatascos',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Desatrancos',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Obras de Pocería',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Desatascos 24 Horas',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Desatascos Baratos',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Inspección de Tuberías con Cámara',
                    },
                },
            ],
        },
        sameAs: [
            'https://www.facebook.com/desatascospociten',
            'https://twitter.com/pociten',
            'https://instagram.com/pociten_desatascos',
            'https://www.youtube.com/@PocitenDesatascos'
        ],
        mainEntity: [
            {
                '@type': 'Question',
                name: '¿Cuál es el precio promedio de un servicio de desatasco?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'El precio de un servicio de desatasco puede variar según la complejidad del problema y la ubicación. En general, los precios pueden oscilar entre 100 y 400 euros, pero es importante solicitar un presupuesto específico a la empresa de desatascos para obtener una estimación más precisa.',
                },
            },
            {
                '@type': 'Question',
                name: '¿Cómo puedo desatascar una tubería por mí mismo?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Para desatascar una tubería, puedes intentar lo siguiente: primero, utiliza un desatascador de ventosa para aplicar presión y succionar el atasco. Si eso no funciona, considera utilizar una serpiente de fontanería para alcanzar y deshacer el bloqueo. Sin embargo, si el atasco persiste, es recomendable contratar a un profesional para evitar daños en las tuberías o agravar el problema.',
                },
            },
            {
                '@type': 'Question',
                name: '¿Qué es un pocero?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Un pocero es un profesional especializado en la construcción, mantenimiento y reparación de pozos y sistemas de alcantarillado. Estos expertos trabajan con tuberías, desagües, fosas sépticas y alcantarillas, y pueden diagnosticar y solucionar problemas relacionados con atascos y obstrucciones.',
                },
            },
            {
                '@type': 'Question',
                name: '¿Cuánto tiempo tarda un profesional en solucionar un desatasco?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'El tiempo necesario para solucionar un desatasco puede variar según la gravedad y la ubicación del problema. Algunos desatascos simples pueden resolverse en menos de una hora, mientras que problemas más complicados pueden requerir varias horas o incluso días de trabajo. Es importante consultar con un profesional de desatascos para obtener una estimación del tiempo y los costos asociados con la solución del problema específico.',
                },
            },
        ],
    };

    return (
        <Head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData, null, 2) }}
        />
    </Head>
    );
};

export default LocalBusinessSchema;
