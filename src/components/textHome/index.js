import CallButton from "../CallButton";

export default function TextHome() {
    return (
        <>
        
        <div className="container">
                <h2 className="text-center" style={{ fontSize: '42px' }}>
                    Desatascos en Madrid
                </h2>
                <p
                    style={{
                        fontFamily: 'yantramanav, sans-serif',
                        fontSize: '20px',
                        justifyContent: 'center',
                    }}
                >
                    ¿Problemas con tus tuberías? ¿Necesitas un desatasco? ¿La
                    ducha o el fregadero no traga agua? ¿Se te ha inundado el
                    garaje? ¿o solo quieres mantener tu red de saneamiento en
                    buen estado con una simple inspección? Estás en el sitio
                    adecuado, somos Poceros de toda la vida. Evita precios
                    indeseados o mala calidad en los materiales y servicios.
                    Contrata servicios de pocería con garantía. ¡No cobramos
                    desplazamiento!
                    <br />
                    <br />
                    <b>Desatascos Pociten</b> es una empresa ubicada en Madrid
                    con amplia experiencia en todo tipo de{' '}
                    <strong>desatrancos y desatascos</strong>. Ofrecemos
                    servicios de desatascos de tuberías (fregaderos, duchas, wc,
                    lavavajillas, cocinas, etc..), desatrancos, limpieza y
                    mantenimiento de alcantarillado, limpieza y construcción de
                    arquetas y pozos negros, achiques de agua, reparación de
                    bajantes, inspección con cámara de tuberías, vaciado y
                    mantenimiento de fosas sépticas, reparación de tuberías sin
                    obra, etc...
                </p>
                <p>
                    Nuestros trabajos de desatascos también incluyen la gestión
                    y transporte de los residuos producidos. Por lo que no
                    deberás preocuparte por nada.
                </p>

                <br />
                <p>
                    Ofrecemos nuestros servicios en toda la Comunidad de Madrid
                    y zonas limítrofes de Toledo y Guadalajara. Contamos con
                    camiones cuba preparados para cualquier urgencia las 24
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

