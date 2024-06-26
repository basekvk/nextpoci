import Image from 'next/image';
import Botonesenlinea from '../botonesenlinea';



export default function textHome() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold text-[#003A70] mb-4">Expertos en Servicios de Desatascos Madrid</h2>
          <p className="mb-4">
            ¿Necesitas <b>servicios de desatascos en Madrid</b>? Ya sea que te enfrentes a un <a href='/services/desatascos-24-horas'><b>desatasco urgente</b></a>, como un atasco en la
            ducha, lavavajillas, aseo o fregadero, o necesites una <a href='/services/inspeccion-tuberia-con-camara'><b>inspección preventiva</b></a> para mantener tu red
            de saneamiento en óptimas condiciones, Desatascos Pociten es la solución a tus problemas. Somos
            especialistas con años de experiencia, comprometidos con ofrecer servicios de la más alta calidad sin costes
            ocultos ni sorpresas en el precio. Además, <b>¡no cobramos por el desplazamiento!</b>
          </p>
          <p className="mb-4">
            Desatascos Pociten es una empresa ubicada en Madrid con amplia experiencia en todo tipo de{" "}
            <a href='/services/desatrancos'><b>desatrancos</b></a> y desatascos. Ofrecemos servicios de <a href='/services/desatasco-de-tuberias'><b></b></a>desatascos de tuberías (fregaderos,
            duchas, wc, lavavajillas, cocinas, etc.), desatrancos, limpieza y mantenimiento de alcantarillado, limpieza
            y construcción de arquetas y pozos negros, <strong>achiques de agua</strong>, reparación de bajantes,{" "}
            <strong>inspección con cámara de tuberías</strong>, vaciado y mantenimiento de fosas sépticas, reparación de
            tuberías sin obra, etc...
          </p>
          <p className="mb-4">
            Nuestros trabajos de desatascos también incluyen la gestión y transporte de los residuos producidos. Por lo
            que no deberás preocuparte por nada.
          </p>
          <p className="mb-4">
            Ofrecemos nuestros servicios en toda la Comunidad de Madrid y zonas limítrofes de Toledo y Guadalajara.
            Contamos con <a href='/services/camion-cuba'><b>camiones cuba</b></a> preparados para cualquier urgencia las 24 horas del día.
          </p>
          <p>
            Si estás buscando poceros cualificados y al mejor precio, no busques más, los acabas de encontrar.
            Compruébalo.
          </p>
        </div>
        <div>
          <Image
            alt="Servicios de Desatascos"
            className="w-full h-auto"
            height="800"
            src="/images/textHome/desatascos_en_madrid.webp"
            width="600"
          />
        </div>
      </div>
      <div className="text-center mt-8">
        <Botonesenlinea />
      </div>
    </div>
  )
}