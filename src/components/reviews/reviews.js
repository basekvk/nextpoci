
import React, { useState } from 'react';
import style from './reviews.module.css';

const Review = ({ name, date, content, stars }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(!expanded);

  const getInitials = (name) => {
    return name.split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
  };

  const initials = getInitials(name);

  return (
  
    <div className='container'>
    <div className={style.reviewCard} onClick={toggleExpanded}>
      <div className={style.reviewHeader}>
        <div className={style.userIcon} style={{ backgroundColor: getUserColor(initials) }}>
          {initials}
        </div>
        <span className={style.fullName}>{name}</span> {/* Add full name here */}
        <div className={style.reviewStars}>{'★'.repeat(stars)}</div>
        <span className={style.reviewDate}>{date}</span>
      </div>
      <p className={expanded ? style.reviewContentExpanded : style.reviewContent}>{content}</p>
    </div>
    </div>
  );
};

const getUserColor = (initials) => {
  // Simple hash function to get color based on initials
  let hash = 0;
  for (let i = 0; i < initials.length; i++) {
    hash = initials.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue = hash % 360;
  return `hsl(${hue}, 75%, 60%)`;
};

export default Review;