// EventCard.js
import styles from './Event.module.css'; // Importing CSS module styles
import PropTypes from 'prop-types'; // Importing PropTypes for type checking

const EventCard = () => {
  const event = [
    {
      "type": "Training",
      "url": "https://marketing.org.nz/agencymedia-june-2024",
      "title": "Agency and Media Transparency",
      "image": "./assets/display1.webp",
      "description": "Join international expert David Reid",
      "date": "18 Jun 2024",
      "location": "Auckland"
    },
    {
      "type": "EVENT",
      "url": "https://marketing.org.nz/monthly-meetup/akl/jun/2024",
      "title": "Monthly Marketing Meetup",
      "image": "./assets/display2.webp",
      "description": "An evening of networking.",
      "date": "25 Jun 2024",
      "location": "Auckland"
    },
    {
      "type": "TRAINING",
      "url": "https://marketing.org.nz/breakthrough-marketing-plans-workshop/wlg/june/2024",
      "title": "Breakthrough Marketing Plans",
      "image": "./assets/display3.webp",
      "description": "Based on the best seller from Professor Tim Collins.",
      "date": "25 Jun 2024",
      "location": "Wellington"
    }
  ];

  return (
    <div className={styles.eventCard}> {/* Container for event cards */}
      <br />
      <br />
      {event.map((eventItem, index) => (
        <div key={index}>
          <p className={styles.type}>{eventItem.type}</p> {/* Event type */}
          <img className={styles.image} src={eventItem.image} /> {/* Event image */}
          <h3 className={styles.title}>{eventItem.title}</h3> {/* Event title */}
          <p className={styles.description}>{eventItem.description}</p> {/* Event description */}
          <p className={styles.date}>Date: {eventItem.date}</p> {/* Event date */}
          <p className={styles.location}>Location: {eventItem.location}</p> {/* Event location */}
          <a className={styles.url} href={eventItem.url} target="_blank" rel="noopener noreferrer">Learn more</a> {/* Event URL */}
        </div>
      ))}
    </div>
  );
};

EventCard.propTypes = {
  event: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.string,
      location: PropTypes.string,
    })
  ),
};

export default EventCard;
