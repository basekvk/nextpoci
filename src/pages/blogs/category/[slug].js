import Head from 'next/head';
import PropTypes from 'prop-types';
import BlogLeftSidebar from '../../../components/blogs/leftsidebar';
import { getBlogCategories } from '../../../lib/blog-categories';
import { getAllItems } from '../../../lib/items-util';
import { getBlogTags } from '../../../lib/blog-tags';

function BlogCategoryPage({ categories, tags, blogs, blogsSidebar, slug }) {
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

function parseDate(dateString) {
    const months = {
      ENERO: 0,
      FEBRERO: 1,
      MARZO: 2,
      ABRIL: 3,
      MAYO: 4,
      JUNIO: 5,
      JULIO: 6,
      AGOSTO: 7,
      SEPTIEMBRE: 8,
      OCTUBRE: 9,
      NOVIEMBRE: 10,
      DICIEMBRE: 11,
    };
  
    const parts = dateString.split(' ');
    const day = parseInt(parts[0], 10);
    const month = months[parts[1]];
    const year = parseInt(parts[2], 10);
  
    return new Date(year, month, day);
  }
  
  export const getStaticProps = async ({ params }) => {
    const { slug } = params;
    let blogs = getAllItems('blogs');
  
    // Parse the dates and sort by them
    blogs = blogs.map(blog => ({
      ...blog,
      parsedDate: parseDate(blog.date), // Asumiendo que 'blog.date' tiene la fecha en el formato '12 MARZO 2024'
    })).sort((a, b) => b.parsedDate - a.parsedDate); // Ordena de más reciente a más antiguo
  
    // Filtrar por categoría
    const filteredBlogs = blogs.filter(blog => {
      return blog.category.find(cate => cate?.split('|')[0]?.trim() === slug);
    });
  
    const blogsSidebar = getAllItems('blog-sidebar');
    const categories = getBlogCategories();
    const tags = getBlogTags();
  
    // No olvides remover la propiedad 'parsedDate' si no la necesitas en el componente
    filteredBlogs.forEach(blog => delete blog.parsedDate);
  
    return {
      props: {
        blogs: filteredBlogs,
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
