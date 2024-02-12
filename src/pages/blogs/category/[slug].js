import Head from 'next/head';
import PropTypes from 'prop-types';
import BlogLeftSidebar from '../../../components/blogs/leftsidebar';
import { getBlogCategories } from '../../../lib/blog-categories';
import { getAllItems } from '../../../lib/items-util';
import { getBlogTags } from '../../../lib/blog-tags';

function BlogCategoryPage({ categories, tags, blogs, blogsSidebar,slug }) {
    const canonicalUrl = `https://www.desatascos-madrid.com/blogs/category/${slug}`;
    return (
        // Añade esta línea para retornar el JSX
        <>
            <Head>
                <title>
                    {categories[1].split('|')[0].trim() + ' '} | Blog -
                    Desatascos Pociten
                </title>
                <meta
                    name="description"
                    content="Aquí podrás encontrar los mejores artículos sobre desatascos y obras de pocería para ayudarte con tus problemas de tuberías"
                />
                 <link rel="canonical" href={canonicalUrl} />
               
            </Head>
            <h1
                className="container"
                style={{
                    padding: '20px',
                    textAlign: 'center',
                    fontSize: '42px',
                    marginTop: '20px',
                }}
            >
                Consulta Nuestros Últimos Artículos sobre Pocería y Desatascos
            </h1>
            <BlogLeftSidebar
                blogs={blogs}
                blogsSidebar={blogsSidebar}
                categories={categories}
                tags={tags}
            />
        </>
    );
}

export const getStaticProps = ({ params }) => {
    const { slug } = params;
    const blogs = getAllItems('blogs');
    const blogsSidebar = getAllItems('blog-sidebar');
    const filteredblogs = blogs
        .map((blog) => ({
            ...blog,
            uniqueCategory: blog.category.find(
                (cate) => cate?.split('|')[0]?.trim() === slug
            ),
        }))
        .filter((blog) => blog.uniqueCategory?.split('|')[0]?.trim() === slug);
    const categories = getBlogCategories();
    const tags = getBlogTags();

    return {
        props: {
            blogs: filteredblogs,
            categories,
            tags,
            blogsSidebar,
            slug,
        },
    };
};

export const getStaticPaths = () => {
    const categories = getBlogCategories();

    return {
        paths: categories.map((category) => ({
            params: { slug: category.split('|')[0].trim() },
        })),
        fallback: false,
    };
};

BlogCategoryPage.propTypes = {
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
};

export default BlogCategoryPage;
