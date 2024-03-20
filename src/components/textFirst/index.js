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
                    Si estás aquí, es porque seguramente necesitas un servicio de desatascos. Los atascos suelen ser más impredecibles de lo que pensamos. Por eso, vamos a intentar brindarte la solución que mereces: localizamos tu problema y lo solucionamos. Llámanos inmediatamente y, antes de que te des cuenta, tu problema quedará totalmente resuelto con la máxima calidad y al mejor precio del mercado. ¡Compruébalo!
                    
                   </p>
                <br />
                <CallButton />
            </div>
        </>
    );
}
