import { useState } from 'react';

export default function Faqs() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Cuánto cobran por desatascar un fregadero?',
      answer: 'El costo por desatascar un fregadero puede variar dependiendo de la gravedad del atasco y la ubicación. En promedio, el precio puede oscilar entre 70 y 140 euros. Más arriba puedes consultar una tabla relativa de precios.'
    },
    {
      question: '¿Cómo desatascar las tuberías?',
      answer: 'Para desatascar las tuberías, puedes usar un desatascador manual, productos químicos diseñados para desatascar, o una mezcla de bicarbonato de sodio y vinagre seguida de agua caliente. Si el atasco persiste, es recomendable llamar a un profesional como Pociten para evitar problemas mayores.'
    },
    {
      question: '¿Qué es lo más efectivo para desatascar el fregadero?',
      answer: 'Lo más efectivo para desatascar un fregadero es siempre la mano de un profesional. También hay productos químicos disponibles, pero deben usarse con precaución.'
    },
    {
      question: '¿Cómo desatascar un fregadero de forma casera?',
      answer: 'Para desatascar un fregadero de forma casera, puedes usar una mezcla de bicarbonato de sodio y vinagre. Vierte media taza de bicarbonato por el desagüe, seguida de media taza de vinagre. Deja actuar durante unos minutos y luego enjuaga con agua caliente. En esta web puedes descargarte un PDF con algunos trucos que Pociten ha preparado para ti.'
    },
    {
      question: '¿Cuál es el mejor desatascador de tuberías?',
      answer: 'El mejor desatascador de tuberías puede depender del tipo de atasco. Los desatascadores manuales y las serpientes de fontanería son muy efectivos para la mayoría de los atascos. Para atascos más difíciles, los productos químicos específicos pueden ser útiles, pero deben usarse con precaución. Si el atasco es grave, es recomendable llamar a un profesional como Pociten, ya que contamos con la última tecnología en camiones cuba y equipos de desatascos a presión.'
    },
    {
      question: '¿Cómo desatascar una tubería que está muy atascada?',
      answer: 'Para desatascar una tubería muy atascada, primero intenta usar un desatascador manual. Si no funciona, una serpiente de fontanería puede ser más efectiva. En casos severos, puede ser necesario desmontar las tuberías o llamar a un profesional como Pociten.'
    },
    {
      question: '¿Cómo eliminar un atasco de tuberías?',
      answer: 'Para eliminar un atasco de tuberías, puedes usar métodos caseros como una mezcla de bicarbonato y vinagre, un desatascador manual, o productos químicos diseñados para desatascar tuberías. Si el atasco persiste, es recomendable contactar a un profesional. Echa un vistazo al PDF que hemos preparado para ti con algunos trucos para desatascar tuberías.'
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Preguntas frecuentes</h2>
          <p className="max-w-[700px] mx-auto text-gray-700 md:text-xl">
            Aquí puedes consultar algunas de las preguntas que nos hacen con más frecuencia. Si no encuentras la respuesta a tu pregunta, no dudes en contactarnos.

          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-2 mb-2">
              <button
                className="w-full text-left text-[#003A70] p-3 flex justify-between items-center bg-gray-100 rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <ChevronDownIcon className={`w-5 h-5 text-gray-500 dark:text-gray-400 transform ${openFAQ === index ? 'rotate-180' : ''}`} />
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 text-gray-500 dark:text-gray-400">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
