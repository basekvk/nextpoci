
import Botonesenlinea from '../botonesenlinea';

export default function TextFirst() {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-center text-3xl lg:text-4xl font-bold">
                ¿Necesitas un Servicio de Desatasco en Madrid Cerca de Ti?
            </h2>

            <p className="font-sans text-lg lg:text-xl mt-4 text-center leading-relaxed">
                Si estás aquí, es porque seguramente necesitas un servicio de <b>desatasco</b> en la provincia de Madrid.
                Los atascos suelen ser más impredecibles de lo que pensamos.<br/><br/> Por eso, vamos a intentar brindarte la solución
                que mereces: localizamos tu problema en el menor tiempo posible y lo solucionamos, ya que tenemos nuestros
                camiones cuba para desatascos preparados cerca de ti. Ofrecemos <a href='/services/desatascos-24-horas'><b>servicios de desatascos 24 horas</b></a> para ofrecerte la tranquilidad que necestas.<br/><br/>
                Llámanos inmediatamente y, antes de que te des cuenta, tu problema quedará totalmente resuelto con la máxima calidad y
                al mejor precio del mercado. ¡Compruébalo!<br/><br/>¿La <b>mejor empresa de desatascos de Madrid</b>? hay que ser
                humildes, eso se lo dejamos a que nos lo digan nuestros clientes 😉. 
            </p>
            <br />
            <div className="flex justify-center mt-4">
            <Botonesenlinea />
            </div>
        </div>
    );
}
