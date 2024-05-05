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
    blog: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
    newsletterItems: PropTypes.instanceOf(Object).isRequired,
    footerItems: PropTypes.instanceOf(Object).isRequired,
};

export default BlogDetailPage;
