import React from 'react';
import Head from 'next/head';

const RichSnippetsBlogs = ({
    title,
    description,
    imageUrl,
    datePublished,
    author = "Pociten",
    url,
    categories = [],
    tags = []
}) => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description: description,
        image: imageUrl,
        author: {
            '@type': 'Person',
            name: author,
        },
        datePublished: datePublished,
        dateModified: datePublished,
        url: url,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url
        },
        publisher: {
            '@type': 'Organization',
            name: 'Pociten',
            logo: {
                '@type': 'ImageObject',
                url: 'http://www.desatascos-madrid.com/_next/image?url=%2Fimages%2Flogo%2Fdark.webp&w=256&q=75' // Replace with your actual logo URL
            }
        },
        keywords: tags.join(', '),
        articleSection: categories.join(', ')
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