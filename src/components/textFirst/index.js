import CallButton from '../CallButton';

export default function TextFirst() {
    return (
        <>
            <div className="container">
                <h2 className="text-center" style={{ fontSize: '42px' }}>
                    ¿Problemas con tus tuberías? ¿Necesitas un servicio de
                    desatasco en Madrid cerca de ti?
                </h2>

                <p
                    style={{
                        fontFamily: 'yantramanav, sans-serif',
                        fontSize: '20px',
                        justifyContent: 'center',
                    }}
                >
                    Si estás aquí, es porque seguramente necesitas un servicio
                    de desatasco en la provincia de Madrid. Los atascos suelen
                    ser más impredecibles de lo que pensamos.<br/> Por eso, vamos a
                    intentar brindarte la solución que mereces: localizamos tu
                    problema en el menor tiiempo posible y lo solucionamos, ya
                    que tenemos nuestros camiones cuba preparados cerca de ti.
                    <br/>
                    Llámanos inmediatamente y, antes de que te des cuenta, tu
                    problema quedará totalmente resuelto con la máxima calidad y
                    al mejor precio del mercado. ¡Compruébalo!<br/> Quizás no seamos
                    la mejor empresa de desatascos de Madrid (hay que ser
                    humildes, eso se lo dejamos que nos lo digan nuestros
                    clientes), pero sí los más rápidos y económicos.
                </p>
                <br />
                <CallButton />
            </div>
        </>
    );
}
