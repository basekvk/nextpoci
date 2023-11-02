import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import Blockquote from '../../blockquote';


import classes from './index.module.scss';
import Head from 'next/head';

function BlogContent({ blog}) {
    const imagePath = `/images/blogs/${blog?.slug}/${blog?.largeImage}`;

    return (
        <>
        <Head>
                <title>{blog.title} - DESATASCOS MADRID</title>
                <meta
                    name="description"
                    content={blog?.metaContent} 
                />
            </Head>
        <Col lg={{ span: 8 }} className="pe-lg-45">
            <div className="banner">
                <img className="img-full" src={imagePath} alt={blog?.title} />
            </div>
            <div className={classes.content}>
                <span className={classes.meta}>{blog?.blogMeta}</span>
                <h2 className={classes.title}>{blog?.title}</h2>
                <h3 className={classes.subtitle}>{blog?.detailSubTitle}</h3>
                <p className={classes.desc}>{blog?.detailDescOne}</p>
                <p className={classes.desc}>{blog?.detailDescTwo}</p>
                
                
                <div
                        className={classes.desc}
                        dangerouslySetInnerHTML={{
                            __html: blog?.htmlCode,
                        }}
                    />
            </div>
            <Blockquote
            quote={blog?.quote}
            />
           
            
        </Col>
        </>
        
    );
}

BlogContent.propTypes = {
    blog: PropTypes.instanceOf(Object).isRequired,
    richTexts: PropTypes.instanceOf(Object).isRequired,
};

export default BlogContent;
