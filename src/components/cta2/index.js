
import Link from "next/link"


export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#003A70] my-10">
    <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tighter text-gray-50 md:text-4xl">
        Respuesta Inmediata para Desatascos en Madrid
        </h2>
        <p className="max-w-[600px] text-gray-400 md:text-xl lg:text-base xl:text-xl">
        ¡No dejes que un atasco arruine tu día! Servicio rápido y efectivo a solo una llamada.
        </p>
      </div>
      <Link href="tel:+34647376782">
        <a className="inline-flex h-12 items-center justify-center rounded-md bg-[#08B9B5] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:scale-110 hover:text-[#003A70]  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6366F1] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
          <RocketIcon className="mr-2 h-5 w-5" />
          LLAMA AHORA
        </a>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
        {[
          {
            title: "Mejor Valoración",
            description: "La mejor valoración en Google. Descubre por qué nuestros clientes confían en nosotros.",
            stars: 5
          },
          {
            title: "Mayor Calidad",
            description: "La excelencia en la calidad es nuestra seña de identidad. Confía en nuestros productos y servicios.",
            stars: 5
          },
          {
            title: "Económicos",
            description: "Calidad y economía en todos nuestros productos y servicios. Compruébalo llamandonos ahora.",
            stars: 5
          }
        ].map(card => (
          <div key={card.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} className={`w-5 h-5 ${i < card.stars ? 'fill-primary' : 'fill-none stroke-muted'}`} />
              ))}
            </div>
            <h3 className="text-xl font-bold mt-4 text-gray-900 dark:text-gray-50">{card.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}