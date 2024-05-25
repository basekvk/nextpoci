import Head from 'next/head';

const RichSnippets = ({ url, description, image, areaServed, services }) => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Desatascos Pociten',
        url: url,
        description: description,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Calle Lezo 8',
            postalCode: '28041',
            addressLocality: 'Madrid',
            addressRegion: 'Madrid',
            addressCountry: 'ES',
        },
        image: [image],
        telephone: '+34-647-376-782',
        priceRange: 'Económicos',
        review: {
            '@type': 'Review',
            reviewRating: {
                '@type': 'Rating',
                ratingValue: '4.6',
                bestRating: '5',
            },
            author: {
                '@type': 'Organization',
                name: 'Pociten',
            },
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 40.357537,
            longitude: -3.693664,
        },
        areaServed: areaServed,
        openingHoursSpecification: [
            {
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
        ],
        service: {
            '@type': 'Service',
            provider: {
                '@type': 'LocalBusiness',
                name: 'Desatascos Pociten',
            },
            serviceType: services,
            areaServed: areaServed,
            description: description,
        },
        video: [
            {
                '@type': 'VideoObject',
                name: 'Desatascos',
                description: 'Desatascos de una Arqueta por Desatascos Pociten',
                thumbnailUrl:
                    'https://i.ytimg.com/vi/GUX0FV5qb3A/mqdefault.jpg',
                uploadDate: '2004-02-27T08:00:00+01:00',
                duration: 'PT2M04S',
                contentUrl:
                    'https://www.youtube.com/watch?v=GUX0FV5qb3A&t=53s&ab_channel=PocitenDesatascos',
                embedUrl:
                    'https://www.youtube.com/embed/GUX0FV5qb3A?si=g17whs7j551qtqI6',
            },
        ],
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
