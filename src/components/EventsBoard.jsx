import './EventsBoard.css';
import {eventsList} from '../data/eventsList';
import {useEffect, useState} from 'react';
import EventCard from './EventCard.jsx';
const EventsBoard = () => {
  const [events, setEvents] = useState([...eventsList.slice(0, 12)]);

  const scrollHandler = (e) => {

    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 50 ) {
      console.log('fetch')
      setEvents([...events, ...eventsList.slice(events.length, events.length + 6)])
    }

  };
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);

    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className='events-board'>
      <h4>Events</h4>
      <div className='events-board_card-container'>
        {events.map((event, id) => (
          <EventCard {...event} key={id}  />
        ))}
        {/* <div className='events-card'>
          <h5>Title</h5>
          <p>description</p>
          <div className='events-card_link-box'>
            <a href='#'>Register</a>
            <a href='#'>View</a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EventsBoard;
