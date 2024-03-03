import Head from 'next/head';

const RichSnippetsBlogs = ({
    title,
    description,
    imageUrl,
    datePublished
    
}) => {
    const schema = {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        headline: {title},
        description: {description},
        image: {imageUrl},
        author: {
            '@type': 'Person',
            name: "Pociten",
        },
        datePublished: {datePublished},
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

export default RichSnippetsBlogs;
