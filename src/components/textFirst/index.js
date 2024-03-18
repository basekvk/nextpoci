import CallButton from '../CallButton';

export default function TextFirst() {
    return (
        <>
            <div className="container">
                <h2 className="text-center" style={{ fontSize: '42px' }}>
                    ¿Problemas con Atascos? ¿Necesitas un servicio de desatascos?
                </h2>
                
                <p
                    style={{
                        fontFamily: 'yantramanav, sans-serif',
                        fontSize: '20px',
                        justifyContent: 'center',
                    }}
                >
                    Si estas aquí es porque seguramente necesites un servicio de desatascos, los atascos suelen ser más impredicibles de lo que nos pensamos, asi que vamos a intentar darte la solución que te mereces, localizamos tu problema y acabos con el, llámanos inmediatamente,y antes de que te lo esperes, tu problema quedará totalmente resuelto con la máxima calidad y al mejor precio del mercado. ¡Compruébalo!
                    
                   </p>
                <br />
                <CallButton />
            </div>
        </>
    );
}
