
import style from './reviews.module.scss';



const Review = ({ name, date, content }) => {
  return (
    <>
    
    <div className={style.review}>
      <div className={style.reviewheader}>
        <span className={style.reviewname}>{name}</span>
        <span className={style.reviewdate}>{date}</span>
      </div>
      <p className={style.reviewcontent}>{content}</p>
      <div className={style.reviewstars}>
        <span className={style.reviewstar}>⭐</span>
        <span className={style.reviewstar}>⭐</span>
        <span className={style.reviewstar}>⭐</span>
        <span className={style.reviewstar}>⭐</span>
        <span className={style.reviewstar}>⭐</span>
      </div>
    </div>
    </>
    
  );
};

export default Review;
