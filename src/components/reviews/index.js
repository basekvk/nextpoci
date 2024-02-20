import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation]);

function ReviewsSection() {
    const reviewsData = [
        {
            img: 'https://lh3.googleusercontent.com/a-/ALV-UjXimljU5s2jGqS-mtuohe28RO3ssbao43jdrRFaMEZKWWzn=w120-h120-p-rp-mo-br100',
            name: 'David García',
            date: '15:20 09 Aug 23',
            content:
                'Teníamos obstruidas las bajantes de la comunidad de vecinos. El dueño de la empresa, Efrén, me explicó en todo momento el procedimiento que se debía llevar a cabo junto a los pros y los contras del proceso. De 5 empresas que pedimos presupuesto en la zona de Madrid, han sido los más baratos. Desconfiábamos un poco por el precio que nos dieron, pero nos han solucionado el problema a las mil maravillas y encima nos dejaron todo muy recogido y limpio. Muchas gracias.',
            stars: '⭐⭐⭐⭐⭐',
        },
        {
            img: 'https://lh3.googleusercontent.com/a-/ALV-UjXG3TiyttT7TBnWzHNBgUcdisqVACJBAIB1ZlMVqYu-gWM=w120-h120-p-rp-mo-br100',
            name: 'Nuria Ruiz de Agüero Osma',
            date: '11:14 26 Jul 23',
            content:
                'Les hemos llamado de madrugada y han acudido muy rápido,nos han solucionado el problema y hemos podido abrir la panadería. Gracias',
            stars: '⭐⭐⭐⭐⭐',
        },
        {
            img: 'https://lh3.googleusercontent.com/a-/ALV-UjWE5OU2YcQI4RU-ii__2WurlLmitTzm0e_G0wZD2mORmkM=w120-h120-p-rp-mo-br100',
            name: 'Judith Teniz',
            date: '11:22 19 Jul 23',
            content:
                'Me pasaron un presupuesto para hacerme la limpieza de una fosa séptica y fueron muy eficaces, recomendable sin duda 100%, volveré a repetir con ellos, ¡maravillosos!',
            stars: '⭐⭐⭐⭐⭐',
        },
        {
            img: 'https://lh3.googleusercontent.com/a/ACg8ocJjGhGJ2LKSsIPQv2yisLl9ArD9iQ8tbVXNRDVkmDl0=w120-h120-p-rp-mo-br100',
            name: 'Pedro Salgado',
            date: '14:59 03 Jul 23',
            content:
                'Recomendable 100%, una empresa seria, con un presupuesto más que coherente y una atención exquisita. El resultado inmejorable, resuelto el problema con suma rapidez y eficacia, dejando todo después limpio y sin dejar rastro de haber estado. Muchas gracias por todo!',
            stars: '⭐⭐⭐⭐⭐',
        },
        {
            img: 'https://lh3.googleusercontent.com/a-/ALV-UjUfp0hclLMUTB3l-7PO20zfDxhjRsu06Pz8VFwjD1eLBKk=w120-h120-p-rp-mo-br100',
            name: 'Cruz Cumbicus',
            date: '09:10 07 Jun 23',
            content:
                'Maravilloso trabajo, después de varios presupuestos en otras empresas, aquí me hicieron el mejor trabajo, hicieron el vaciado de la fosa séptica de una manera impecable, dejando todo limpio, el trato desde la primera llamada una maravilla, y los chicos que fueron a casa, muy amables. Vamos!! Súper recomendado.',
            stars: '⭐⭐⭐⭐⭐',
        },
        {
            img: 'https://lh3.googleusercontent.com/a/ACg8ocLFDcpZYca3FktB9qHMdvkT1B9UpSjc9bfAYraqMUT2=w120-h120-p-rp-mo-br100',
            name: 'Victor Merencio',
            date: '15:45 04 Jun 23',
            content:
                'Empresa muy seria, eficaces y muy profesionales. El trato con ellos es inmejorable y me solucionaron el problema rápidamente dejándome todo limpio y en perfectas condiciones. Recomendables 100×100. No duden en llamarlos si los necesitan.',
            stars: '⭐⭐⭐⭐⭐',
        },
    ];

    return (
        <>
            <div className="testimonial-container">
                <div className="testimonial">
                    <h3 style={{ fontSize: '32px' }}>
                        Nuestros Clientes Opinan
                    </h3>
                </div>
                <br/>
                <br/>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true} // Esto hará que el swiper comience de nuevo después de la última diapositiva
                    pagination={{
                        clickable: true,
                    }}
                    
                    autoplay={{
                        delay: 2500, // Tiempo en milisegundos antes de pasar a la siguiente diapositiva
                        disableOnInteraction: false, // Continúa el autoplay después de la interacción del usuario
                    }}
                    className="mySwiper"
                >
                    {reviewsData.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={review.img} alt={review.name} />
                                <h3>{review.name}</h3>
                                <p>{review.date}</p>
                                <blockquote>"{review.content}"</blockquote>
                                <p>{review.stars}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <style jsx>{`
                    .testimonial-container {
                        width: 100%;
                        padding: 20px;
                    }
                    .testimonial {
                        text-align: center;
                    }
                    .testimonial img {
                        border-radius: 50%;
                        margin-bottom: 10px;
                    }
                    .swiper-button-prev,
                    .swiper-button-next {
                        position: absolute;
                        top: 50%; // Centra verticalmente las flechas
                        width: 50px; // Anchura de las flechas
                        height: 50px; // Altura de las flechas
                        margin-top: -85px; // Desplazamiento para centrarlas respecto al swiper
                        z-index: 10; // Asegura que las flechas estén por encima de las tarjetas
                        background: rgba(
                            0,
                            0,
                            0,
                            0.5
                        ); // Fondo para mejor visibilidad, ajusta como prefieras
                        border-radius: 50%; // Hace las flechas circulares
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .swiper-button-prev {
                        left: 10px; // Distancia desde el lado izquierdo del swiper
                        transform: translateX(
                            -100%
                        ); // Ajusta para separar de las tarjetas
                    }

                    .swiper-button-next {
                        right: 10px;
                        left: 50px; // Distancia desde el lado derecho del swiper
                        transform: translateX(
                            100%
                        ); // Ajusta para separar de las tarjetas
                    }
                    // Añade aquí más estilos para que coincida con tu diseño
                `}</style>
            </div>
        </>
    );
}

export default ReviewsSection;
