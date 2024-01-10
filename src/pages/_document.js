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
                    onLoad="this.onload=null;this.rel='stylesheet'"
                />
                
                    <link
                        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Yantramanav:wght@300;400;500;700;900&display=swap"
                        rel="stylesheet"
                    />
                

                {/* cargar de forma diferida Font Awesome  */}
              

                {/* Tu componente LocalBusinessSchema aquí */}
            </Head>
            <body>
                <Main />
                <NextScript />
                {/* Google Analytics Script */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=G-G7RR3SK94G`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-G7RR3SK94G', {
                  page_path: window.location.pathname,
                });
              `,
                    }}
                />
                <img src="https://tracker.metricool.com/c3po.jpg?hash=87000e24db10b294b3151b5f362f5f72"/>
            </body>
        </Html>
    );
};

export default MyDocument;
