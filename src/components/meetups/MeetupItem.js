import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useDispatch } from 'react-redux';
import { addMeetupToFavourites } from '../../store/meetupSlice';

export default function MeetupItem({ meetup }) {
  const dispatch = useDispatch();

  function handleAddToFavourites() {
    dispatch(addMeetupToFavourites(meetup));
  }

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={meetup?.image} alt={meetup?.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup?.title}</h3>
          <address>{meetup?.address}</address>
          <p>{meetup?.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleAddToFavourites}>Add to favorites</button>
        </div>
      </Card>
    </li>
  );
}
