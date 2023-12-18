import Document, { Html, Head, Main, NextScript } from 'next/document';


const MyDocument = () => {
    return (
        <Html lang="es">
            <Head>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    rel="preload"
                    href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Yantramanav:wght@300;400;500;700;900&display=swap"
                    as="style"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Yantramanav:wght@300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />

                {/* Considera eliminar o cargar de forma diferida Font Awesome si no es esencial */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                />

                

                {/* Tu componente LocalBusinessSchema aquí */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;
