import React from 'react';
import formatDate from '../utils/formatDate'
const EventCard = ({title, description, startDate, id }) => {
  return (
    <div key={id} className='events-card'>
        <div className='events-card_content'>

      <h6>{title}</h6>
      <p className='events-card_description'>{description}</p>
      <span>{formatDate(startDate)}</span>
        </div>
      <div className='events-card_link-box'>
        <a href='/form'>Register</a>
        <a href='/participants'>View</a>
      </div>
    </div>
  );
};

export default EventCard;
