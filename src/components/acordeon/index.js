import { useState } from 'react';
import styles from './Accordion.module.css';


      
const Accordion = ({accordionData}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };



  return (
    <>
    <h2 style={{textAlign:"center", fontSize: 30}}>PREGUNTAS FRECUENTES</h2>
    <div className={styles.accordion}>
     
      {accordionData?.map((data, index) => (
        
        <div
          key={index}
          className={styles.accordion__item}
          onClick={() => toggleAccordion(index)}
        >
          <div className={styles.accordion__question}>
            {data.question.toUpperCase()}
            <i
              className={`fas fa-chevron-down ${styles.accordion__arrow} ${
                activeIndex === index ? styles['accordion__arrow--down'] : ''
              }`}
            ></i>
          </div>

          <div
            className={`${styles.accordion__answer} ${
              activeIndex === index ? styles.active : ''
            }`} style={{ fontSize: 18 }}
          >
            {data.answer}
          </div>
        </div>
      ))}
    </div>
 
    
    </>
    ); 
};

export default Accordion;
