
import { CallButton } from '../CallButton'
import Botonesenlinea from '../botonesenlinea'

export default function TextUrgentesHome() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:text-center">
          <Clock24HoursIcon className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-4xl font-extrabold text-[#003A70]">Poceros Cerca de Ti</h2>
          <h3 className="text-3xl font-extrabold text-[#003A70]">¿Es Sábado? ¿Domingo? ¿Festivo?</h3>
          <p className="mt-4 text-lg text-gray-600">
            En Desatascos Pociten, <b><a href='/services/poceros-madrid'>poceros</a></b> expertos, estamos siempre <b>cerca de ti</b>, no importa ni el cuándo ni el dónde, llamamos y acudiremos a tu llamada en el menor
            tiempo posible con nuestro servicio de <b><a href='/services/desatascos-24-horas'>desatascos urgentes 24 horas</a></b>.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            No esperes más, antes de agravar la avería llámanos y te lo solucionamos en tiempo record para que puedas
            seguir con tu día a día ya sea en tu negocio, empresa, comunidad de vecinos o domicilio particular
          </p>
          
        </div>
        
        <div>
          <h2 className="text-4xl font-extrabold text-[#003A70]">Llámanos si tienes alguno de estos problemas:</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
              <p className="ml-3 text-lg text-gray-600">Escuchar ruidos extraños en desagües o inodoros</p>
            </li>
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
              <p className="ml-3 text-lg text-gray-600">Atascos en el WC: sale agua por el inodoro o no desagua</p>
            </li>
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
              <p className="ml-3 text-lg text-gray-600">
                Atasco en la bañera: sale agua por la bañera/plato de ducha o no tragan los desagües correctamente.
              </p>
            </li>
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
              <p className="ml-3 text-lg text-gray-600">
                Atasco de arquetas, no recogen el agua o sale agua por ellas.
              </p>
            </li>
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
              <p className="ml-3 text-lg text-gray-600">Fregadero atascado, no traga, sale agua y huele mal.</p>
            </li>
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
              <p className="ml-3 text-lg text-gray-600">
                Aparecen manchas de humedad en las paredes y no detectan el problema.
              </p>
            </li>
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
              <p className="ml-3 text-lg text-gray-600">Atasco en bajantes de la comunidad.</p>
            </li>
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
              <p className="ml-3 text-lg text-gray-600">Detectar malos olores en el hogar salientes de los desagües.</p>
            </li>
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
              <p className="ml-3 text-lg text-gray-600">Lavavajillas pierde agua o no desagua.</p>
            </li>
            <li className="flex items-start">
              <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" />
              <p className="ml-3 text-lg text-gray-600">Canalones que rebosan y no se vacían con la lluvia.</p>
            </li>
          </ul>
        </div>
        
      </div>
      <Botonesenlinea />
    </div>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function Clock24HoursIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
    </svg>
  )
}



