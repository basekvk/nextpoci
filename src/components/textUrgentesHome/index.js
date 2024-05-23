
import { CallButton } from '../CallButton'

export default function TextUrgentesHome() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:text-center">
          <PlugIcon className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-4xl font-extrabold text-gray-900">¿Es Sábado? ¿Domingo? ¿Festivo?</h2>
          <p className="mt-4 text-lg text-gray-600">
            En Desatascos Pociten no importa ni el cuándo ni el dónde, llamamos y acudiremos a tu llamada en el menor
            tiempo posible con nuestro servicio de desatascos urgentes 24 horas.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            No esperes más, antes de agravar la avería llámanos y te lo solucionamos en tiempo record para que puedas
            seguir con tu día a día ya sea en tu negocio, empresa, comunidad de vecinos o domicilio particular
          </p>
          
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900">Llámanos si tienes alguno de estos problemas:</h2>
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


function PlugIcon(props) {
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
      <path d="M12 22v-5" />
      <path d="M9 8V2" />
      <path d="M15 8V2" />
      <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
    </svg>
  )
}
