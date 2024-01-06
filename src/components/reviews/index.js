import Review from  './reviews';
import styles from './reviews.module.css';

function ReviewsSection() {
  const reviewsData = [
    {
      name: "David García",
      date: "15:20 09 Aug 23",
      content: "Teníamos obstruidas las bajantes de la comunidad de vecinos. El dueño de la empresa, Efrén, me explicó en todo momento el procedimiento que se debía llevar a cabo junto a los pros y los contras del proceso. De 5 empresas que pedimos presupuesto en la zona de Madrid, han sido los más baratos. Desconfiábamos un poco por el precio que nos dieron, pero nos han solucionado el problema a las mil maravillas y encima nos dejaron todo muy recogido y limpio. Muchas gracias.",
      stars: 5
    },
    {
      name: "Sonia C",
      date: "11:14 26 Jul 23",
      content: "Trato excelente, rápido y eficaz. En poco tiempo me resolvieron un gran problema. Trabajo de 10.",
      stars: 5
    },
    {
      name: "Iris Aguila Garcia",
      date: "11:22 19 Jul 23",
      content: "Trabajo realizado correctamente, puntual y todo limpio. Buen precio.",
      stars: 5
    },
    {
      name: "Pedro Salgado García",
      date: "14:59 03 Jul 23",
      content: "Recomendable 100%, una empresa seria, con un presupuesto más que coherente y una atención exquisita. El resultado inmejorable, resuelto el problema con suma rapidez y eficacia, dejando todo después limpio y sin dejar rastro de haber estado. Muchas gracias por todo!",
      stars: 5
    },
    {
      name: "Cruz Cumbicus",
      date: "09:10 07 Jun 23",
      content: "Maravilloso trabajo, después de varios presupuestos en otras empresas, aquí me hicieron el mejor trabajo, hicieron el vaciado de la fosa séptica de una manera impecable, dejando todo limpio, el trato desde la primera llamada una maravilla, y los chicos que fueron a casa, muy amables. Vamos!! Súper recomendado.",
      stars: 5
    },
    {
      name: "Victor Merencio",
      date: "15:45 04 Jun 23",
      content: "Empresa muy seria, eficaces y muy profesionales. El trato con ellos es inmejorable y me solucionaron el problema rápidamente dejándome todo limpio y en perfectas condiciones. Recomendables 100×100. No duden en llamarlos si los necesitan.",
      stars: 5
    }
  ];

  return (
    <>

    <h3 className={styles.reviewsTitle} style={{fontSize: "36px", textAlign: "center"}}>Opiniones de nuestros clientes</h3> 
    <div className={styles.reviewsContainer}>
    {reviewsData.map((review, index) => (
      <Review 
        key={index} 
        name={review.name} 
        date={review.date} 
        content={review.content} 
        stars={review.stars} 
      />
    ))}
  </div>
  </>
  );
}

export default ReviewsSection;
