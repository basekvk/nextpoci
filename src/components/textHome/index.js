import CallButton from '../CallButton';

export default function TextHome() {
    return (
        <>
            <div className="container">
                <h2 className="text-center" style={{ fontSize: '42px' }}>
                Expertos en Servicios de Desatascos en Madrid
                </h2>
                <p
                    style={{
                        fontFamily: 'yantramanav, sans-serif',
                        fontSize: '20px',
                        justifyContent: 'center',
                    }}
                >
                    ¿Necesitas un servicio de desatasco? Ya sea que te enfrentes a un desatasco urgente, como una ducha, lavavajillas,aseo o fregadero atascado, o necesites una inspección preventiva para mantener tu red de saneamiento en óptimas condiciones, Desatascos Pociten es la solución a tus problemas. Somos especialistas con años de experiencia, comprometidos con ofrecer servicios de la más alta calidad sin costes ocultos ni sorpresas en el precio. Además, nos enorgullece decir que <strong>¡no cobramos por el desplazamiento!</strong>
                    <br />
                    <br />
                    <b>Desatascos Pociten</b> es una empresa ubicada en Madrid
                    con amplia experiencia en todo tipo de{' '}
                    <strong>desatrancos y desatascos</strong>. Ofrecemos
                    servicios de desatascos de tuberías (fregaderos, duchas, wc,
                    lavavajillas, cocinas, etc..), desatrancos, limpieza y
                    mantenimiento de alcantarillado, limpieza y construcción de
                    arquetas y pozos negros,{' '}
                    <a href="https://www.desatascos-madrid.com/services/inundaciones">
                        achiques de agua
                    </a>
                    , reparación de bajantes,{' '}
                    <a href="https://www.desatascos-madrid.com/services/inspeccion-tuberia-con-camara">
                        inspección con cámara de tuberías
                    </a>
                    ,
                    <a href="https://www.desatascos-madrid.com/services/limpieza-fosas-septicas">
                        vaciado y mantenimiento de fosas sépticas
                    </a>
                    ,{' '}
                    <a href="https://www.desatascos-madrid.com/services/reparacion-tuberias-sin-obras">
                        reparación de tuberías sin obra
                    </a>
                    , etc...
                </p>
                <p>
                    Nuestros trabajos de desatascos también incluyen la gestión
                    y transporte de los residuos producidos. Por lo que no
                    deberás preocuparte por nada.
                </p>

                <br />
                <p>
                    Ofrecemos nuestros servicios en toda la Comunidad de Madrid
                    y zonas limítrofes de Toledo y Guadalajara. Contamos con <a href="https://www.desatascos-madrid.com/services/camion-cuba">camiones cuba</a> preparados para cualquier urgencia las 24
                    horas del día . <br /> <br />
                    Si estás buscando poceros cualificados y al mejor precio, no
                    busques más, los acabas de encontrar. Compruébalo.
                </p>
                <br />
                <CallButton />
            </div>
        </>
    );
}
