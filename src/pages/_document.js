import Document, { Html, Head, Main, NextScript } from 'next/document';
import LocalBusinessSchema from '../components/localbusinessschema';




class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Yantramanav:wght@300;400;500;700;900&display=swap"
                        rel="stylesheet"
                    />

                    <link
                        rel="stylesheet"
                        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                    />
                    <LocalBusinessSchema />
                    
                </Head>
                <body>
                    <Main />
                  
                    <NextScript />
                   
                    
                    
                </body>
            </Html>
        );
    }
}

export default MyDocument;
