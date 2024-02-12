import Head from 'next/head';
import PropTypes from 'prop-types';
import BlogLeftSidebar from '../../../components/blogs/leftsidebar';
import { getBlogCategories } from '../../../lib/blog-categories';
import { getAllItems } from '../../../lib/items-util';
import { getBlogTags } from '../../../lib/blog-tags';





function BlogTagPage({ categories, tags, blogs, blogsSidebar, slug}) {

    
    
    const canonicalUrl = `https://www.desatascos-madrid.com/blog/tag/${slug}`;
   
    return (
        <>
            <Head>
                <title>{tags[0].split('|')[0].trim()+ " "}| Blog - Desatascos Pociten</title>
                <meta name="description" content="Los Mejores consejos en nuestro blog para que te ayuden en tus desatascos y obras de pocería desde la empresa líder del sector Desatascos Pociten"/>
                <link rel="canonical" href={canonicalUrl} />
            </Head>
            <h1 className='container' style={{padding:"20px", textAlign: 'center', fontSize: '42px', marginTop: '20px'}} >{`Consulta Nuestros Últimos Artículos sobre ${categories[1].split('|')[0].trim()+ " "} `}</h1>
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
            uniqueTag: blog.tag.find((tag) => tag === slug),
        }))
        .filter((blog) => blog.uniqueTag === slug);
    const tags = getBlogTags();
    const categories = getBlogCategories();

    return {
        props: {
            blogs: filteredblogs,
            categories,
            tags,
            blogsSidebar,
            slug
        },
    };
};

export const getStaticPaths = () => {
    const tags = getBlogTags();

    return {
        paths: tags.map((tag) => ({
            params: { slug: tag },
        })),
        fallback: false,
    };
};

BlogTagPage.propTypes = {
    categories: PropTypes.instanceOf(Object).isRequired,
    tags: PropTypes.instanceOf(Object).isRequired,
    blogs: PropTypes.instanceOf(Object).isRequired,
    blogsSidebar: PropTypes.instanceOf(Object).isRequired,
};

export default BlogTagPage;
