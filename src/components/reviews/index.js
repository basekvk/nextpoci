import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';


SwiperCore.use([Pagination, Navigation]);

export default function ReviewsSection() {
    const reviews = [
        {
            img: '/images/reviews/david.webp',
            name: 'David García',
            date: '15:20 09 Aug 23',
            content:
                'Teníamos obstruidas las bajantes de la comunidad de vecinos. El dueño de la empresa, Efrén, me explicó en todo momento el procedimiento que se debía llevar a cabo junto a los pros y los contras del proceso. De 5 empresas que pedimos presupuesto en la zona de Madrid, han sido los más baratos. Desconfiábamos un poco por el precio que nos dieron, pero nos han solucionado el problema a las mil maravillas y encima nos dejaron todo muy recogido y limpio. Muchas gracias.',
            stars: '⭐⭐⭐⭐⭐',
        },
        {
            img: '/images/reviews/nuria.webp',
            name: 'Nuria Ruiz de Agüero Osma',
            date: '11:14 26 Jul 23',
            content:
                'Les hemos llamado de madrugada y han acudido muy rápido,nos han solucionado el problema y hemos podido abrir la panadería. Gracias',
            stars: '⭐⭐⭐⭐⭐',
        },
        {
            img: '/images/reviews/judith.webp',
            name: 'Judith Teniz',
            date: '11:22 19 Jul 23',
            content:
                'Me pasaron un presupuesto para hacerme la limpieza de una fosa séptica y fueron muy eficaces, recomendable sin duda 100%, volveré a repetir con ellos, ¡maravillosos!',
            stars: '⭐⭐⭐⭐⭐',
        },
        {
            img: '/images/reviews/pedro.webp',
            name: 'Pedro Salgado',
            date: '14:59 03 Jul 23',
            content:
                'Recomendable 100%, una empresa seria, con un presupuesto más que coherente y una atención exquisita. El resultado inmejorable, resuelto el problema con suma rapidez y eficacia, dejando todo después limpio y sin dejar rastro de haber estado. Muchas gracias por todo!',
            stars: '⭐⭐⭐⭐⭐',
        },
        {
            img: '/images/reviews/cruz.webp',
            name: 'Cruz Cumbicus',
            date: '09:10 07 Jun 23',
            content:
                'Maravilloso trabajo, después de varios presupuestos en otras empresas, aquí me hicieron el mejor trabajo, hicieron el vaciado de la fosa séptica de una manera impecable, dejando todo limpio, el trato desde la primera llamada una maravilla, y los chicos que fueron a casa, muy amables. Vamos!! Súper recomendado.',
            stars: '⭐⭐⭐⭐⭐',
        },
        {
            img: '/images/reviews/victor.webp',
            name: 'Victor Merencio',
            date: '15:45 04 Jun 23',
            content:
                'Empresa muy seria, eficaces y muy profesionales. El trato con ellos es inmejorable y me solucionaron el problema rápidamente dejándome todo limpio y en perfectas condiciones. Recomendables 100×100. No duden en llamarlos si los necesitan.',
            stars: '⭐⭐⭐⭐⭐',
        },
    ];

    return (
        <section className="max-w-6xl mx-auto p-4 md:p-6">
        <h2 className="text-3xl font-bold text-center mb-8">Nuestros Clientes Opinan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md dark:bg-gray-950">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    alt="Reviewer Avatar"
                    className="rounded-full mr-4"
                    height={40}
                    src={review.img}
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? 'fill-primary' : 'fill-muted stroke-muted-foreground'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                  {review.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      );
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
      );
    }
