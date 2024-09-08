import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';
import { getBlogCategories } from '../../lib/blog-categories';
import { getBlogTags } from '../../lib/blog-tags';
import Breadcrumb from '../../components/breadcrumb';
import BlogDetail from '../../components/blogs/blog-detail';
import RichSnippetsBlogs from '../../components/RichSnippets/RichSnipetsBlog';
import Footer from '../../components/layout/footer';

function BlogDetailPage({
    blog,
    richTexts,
    blogsSidebar,
    categories,
    tags,
    footerItems,
}) {
    return (
        <>
            <Head>
                <title>{blog.title}</title>
                <meta name="description" content={blog.desc} />
                <link rel="canonical" href={`https://www.desatascos-madrid.com/blogs/${blog.slug}`} />
                <meta property="og:title" content={blog.title} />
                <meta property="og:description" content={blog.desc} />
                <meta property="og:image" content={blog.largeImage} />
                <meta property="og:url" content={`https://www.desatascos-madrid.com/blogs/${blog.slug}`} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={blog.title} />
                <meta name="twitter:description" content={blog.desc} />
                <meta name="twitter:image" content={blog.largeImage} />
            </Head>
            <Breadcrumb
                subTitle={blog?.subTitle}
                title={blog?.title}
                desc={blog.desc}
            />
            <BlogDetail
                blog={blog}
                richTexts={richTexts}
                blogsSidebar={blogsSidebar}
                categories={categories}
                tags={tags}
            />
            <RichSnippetsBlogs
                title={blog?.title}
                description={blog?.desc}
                imageUrl={blog?.largeImage}
                datePublished={blog?.date}
                author={blog?.author}
                url={`https://www.desatascos-madrid.com/blogs/${blog.slug}`}
                categories={blog?.categories}
                tags={blog?.tags}
            />
            <Footer footerItems={footerItems} />
        </>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const blog = getItemData(slug, 'blogs');
    const blogsSidebar = getAllItems('blog-sidebar');
    const richTexts = getAllItems('rich-text');
    const categories = getBlogCategories();
    const tags = getBlogTags();
    const footerItems = getAllItems('footer');

    return {
        props: {
            blog,
            blogsSidebar,
            richTexts,
            categories,
            tags,
            footerItems,
        },
    };
}

export function getStaticPaths() {
    const blogFilenames = getItemsFiles('blogs');

    const slugs = blogFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
}

BlogDetailPage.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        subTitle: PropTypes.string,
        largeImage: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        categories: PropTypes.arrayOf(PropTypes.string),
        tags: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    richTexts: PropTypes.arrayOf(PropTypes.object).isRequired,
    blogsSidebar: PropTypes.arrayOf(PropTypes.object).isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    tags: PropTypes.arrayOf(PropTypes.object).isRequired,
    footerItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BlogDetailPage;