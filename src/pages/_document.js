import { Html, Head, Main, NextScript } from 'next/document';


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
                    onLoad="this.onload=null;this.rel='stylesheet'"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Yantramanav:wght@300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />

             
            </Head>
            <body>
                <Main />
                <NextScript />
               
                <img src="https://tracker.metricool.com/c3po.jpg?hash=87000e24db10b294b3151b5f362f5f72" alt='Metricool Pixel'/>
            </body>
        </Html>
    );
};

export default MyDocument;
